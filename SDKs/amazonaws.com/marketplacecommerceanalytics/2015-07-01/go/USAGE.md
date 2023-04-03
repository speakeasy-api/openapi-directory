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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GenerateDataSetRequest{
        GenerateDataSetRequest: shared.GenerateDataSetRequest{
            CustomerDefinedValues: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            DataSetPublicationDate: "2021-09-24T02:21:06.409Z",
            DataSetType: "disbursed_amount_by_customer_geo",
            DestinationS3BucketName: "deserunt",
            DestinationS3Prefix: "suscipit",
            RoleNameArn: "iure",
            SnsTopicArn: "magnam",
        },
        XAmzAlgorithm: "debitis",
        XAmzContentSha256: "ipsa",
        XAmzCredential: "delectus",
        XAmzDate: "tempora",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "molestiae",
        XAmzSignedHeaders: "minus",
        XAmzTarget: "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
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