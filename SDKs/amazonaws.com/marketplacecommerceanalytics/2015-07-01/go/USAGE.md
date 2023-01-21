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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
        },
        Request: shared.GenerateDataSetRequest{
            CustomerDefinedValues: map[string]string{
                "et": "nihil",
            },
            DataSetPublicationDate: "2004-06-02T10:14:12Z",
            DataSetType: "daily_business_usage_by_instance_type",
            DestinationS3BucketName: "et",
            DestinationS3Prefix: "ut",
            RoleNameArn: "dolorem",
            SnsTopicArn: "et",
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