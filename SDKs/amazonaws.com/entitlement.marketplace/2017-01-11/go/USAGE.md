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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSMPEntitlementService.GetEntitlements",
        },
        Request: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "fuga": []string{
                    "eum",
                    "iusto",
                    "ullam",
                },
                "saepe": []string{
                    "sapiente",
                },
            },
            MaxResults: 272656,
            NextToken: "eum",
            ProductCode: "voluptatum",
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