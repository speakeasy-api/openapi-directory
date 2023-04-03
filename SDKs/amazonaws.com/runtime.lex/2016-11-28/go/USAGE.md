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

    req := operations.DeleteSessionRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        BotAlias: "illum",
        BotName: "vel",
        UserID: "error",
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