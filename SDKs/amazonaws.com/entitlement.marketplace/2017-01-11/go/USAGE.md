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

    req := operations.GetEntitlementsRequest{
        GetEntitlementsRequest: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "provident": []string{
                    "quibusdam",
                    "unde",
                    "nulla",
                },
                "corrupti": []string{
                    "vel",
                    "error",
                    "deserunt",
                    "suscipit",
                },
                "iure": []string{
                    "debitis",
                    "ipsa",
                },
            },
            MaxResults: 963663,
            NextToken: "tempora",
            ProductCode: "suscipit",
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "minus",
        XAmzCredential: "placeat",
        XAmzDate: "voluptatum",
        XAmzSecurityToken: "iusto",
        XAmzSignature: "excepturi",
        XAmzSignedHeaders: "nisi",
        XAmzTarget: "AWSMPEntitlementService.GetEntitlements",
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