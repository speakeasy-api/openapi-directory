<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GenerateDataSetRequest{
        Headers: operations.GenerateDataSetHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
        },
        Request: shared.GenerateDataSetRequest{
            CustomerDefinedValues: map[string]string{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            DataSetPublicationDate: "2022-04-12T09:08:38.697Z",
            DataSetType: "daily_business_new_product_subscribers",
            DestinationS3BucketName: "suscipit",
            DestinationS3Prefix: "molestiae",
            RoleNameArn: "minus",
            SnsTopicArn: "placeat",
        },
    }

    ctx := context.Background()
    res, err := s.GenerateDataSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateDataSetResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->