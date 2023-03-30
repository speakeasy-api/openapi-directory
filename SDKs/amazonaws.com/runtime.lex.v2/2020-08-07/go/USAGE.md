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
            BotAliasID: "corrupti",
            BotID: "provident",
            LocaleID: "distinctio",
            SessionID: "quibusdam",
        },
        Headers: operations.DeleteSessionHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "nulla",
            XAmzCredential: "corrupti",
            XAmzDate: "illum",
            XAmzSecurityToken: "vel",
            XAmzSignature: "error",
            XAmzSignedHeaders: "deserunt",
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