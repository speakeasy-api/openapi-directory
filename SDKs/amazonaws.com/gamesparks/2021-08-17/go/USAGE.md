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

    req := operations.CreateGameRequest{
        Headers: operations.CreateGameHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateGameRequestBody{
            ClientToken: "illum",
            Description: "vel",
            GameName: "error",
            Tags: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateGame(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGameResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->