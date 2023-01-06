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
            XAmzAlgorithm: "incidunt",
            XAmzContentSha256: "iusto",
            XAmzCredential: "voluptatibus",
            XAmzDate: "voluptates",
            XAmzSecurityToken: "quia",
            XAmzSignature: "tenetur",
            XAmzSignedHeaders: "et",
            XAmzTarget: "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
        },
        Request: shared.GenerateDataSetRequest{
            CustomerDefinedValues: map[string]string{
                "aliquam": "non",
                "quia": "est",
                "velit": "totam",
            },
            DataSetPublicationDate: "1999-05-14T19:03:49Z",
            DataSetType: "monthly_revenue_billing_and_revenue_data",
            DestinationS3BucketName: "commodi",
            DestinationS3Prefix: "fugiat",
            RoleNameArn: "quis",
            SnsTopicArn: "saepe",
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