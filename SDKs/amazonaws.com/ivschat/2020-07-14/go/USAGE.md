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

    req := operations.CreateChatTokenRequest{
        RequestBody: operations.CreateChatTokenRequestBody{
            Attributes: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Capabilities: []shared.ChatTokenCapabilityEnum{
                "DISCONNECT_USER",
                "DISCONNECT_USER",
                "DISCONNECT_USER",
                "DISCONNECT_USER",
            },
            RoomIdentifier: "iure",
            SessionDurationInMinutes: 297534,
            UserID: "debitis",
        },
        XAmzAlgorithm: "ipsa",
        XAmzContentSha256: "delectus",
        XAmzCredential: "tempora",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "minus",
        XAmzSignedHeaders: "placeat",
    }

    ctx := context.Background()
    res, err := s.CreateChatToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateChatTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->