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

    req := operations.DeleteSessionRequest{
        PathParams: operations.DeleteSessionPathParams{
            BotAliasID: "unde",
            BotID: "deserunt",
            LocaleID: "porro",
            SessionID: "nulla",
        },
        Headers: operations.DeleteSessionHeaders{
            XAmzAlgorithm: "id",
            XAmzContentSha256: "vero",
            XAmzCredential: "perspiciatis",
            XAmzDate: "nulla",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "fuga",
            XAmzSignedHeaders: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteSession(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSessionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->