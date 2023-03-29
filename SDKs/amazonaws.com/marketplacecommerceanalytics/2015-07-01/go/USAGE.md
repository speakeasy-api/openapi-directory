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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "MarketplaceCommerceAnalytics20150701.GenerateDataSet",
        },
        Request: shared.GenerateDataSetRequest{
            CustomerDefinedValues: map[string]string{
                "fuga": "facilis",
                "eum": "iusto",
            },
            DataSetPublicationDate: "2022-12-10T22:07:53.414Z",
            DataSetType: "customer_profile_by_geography",
            DestinationS3BucketName: "inventore",
            DestinationS3Prefix: "sapiente",
            RoleNameArn: "enim",
            SnsTopicArn: "eum",
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