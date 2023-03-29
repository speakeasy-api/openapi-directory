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

    req := operations.CreateCliTokenRequest{
        PathParams: operations.CreateCliTokenPathParams{
            Name: "unde",
        },
        Headers: operations.CreateCliTokenHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.CreateCliToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCliTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->