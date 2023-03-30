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

    req := operations.GetEntitlementsRequest{
        Headers: operations.GetEntitlementsHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSMPEntitlementService.GetEntitlements",
        },
        Request: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "vel": []string{
                    "deserunt",
                    "suscipit",
                    "iure",
                },
                "magnam": []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
                "molestiae": []string{
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                },
                "nisi": []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
            },
            MaxResults: 648172,
            NextToken: "perferendis",
            ProductCode: "ipsam",
        },
    }

    ctx := context.Background()
    res, err := s.GetEntitlements(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEntitlementsResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->