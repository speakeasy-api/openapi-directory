<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GenerateDataSetRequest{
        Headers: operations.GenerateDataSetHeaders{
            XAmzAlgorithm: "quisquam",
            XAmzContentSha256: "sequi",
            XAmzCredential: "quia",
            XAmzDate: "est",
            XAmzSecurityToken: "voluptatem",
            XAmzSignature: "voluptate",
            XAmzSignedHeaders: "facilis",
            XAmzTarget: "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
        },
        Request: shared.GenerateDataSetRequest{
            CustomerDefinedValues: map[string]string{
                "ipsum": "repudiandae",
                "iusto": "quis",
            },
            DataSetPublicationDate: "2013-05-24T19:31:18Z",
            DataSetType: "monthly_revenue_billing_and_revenue_data",
            DestinationS3BucketName: "sunt",
            DestinationS3Prefix: "laborum",
            RoleNameArn: "quibusdam",
            SnsTopicArn: "eum",
        },
    }
    
    res, err := s.GenerateDataSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateDataSetResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->