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

    req := operations.CreateChatTokenRequest{
        Headers: operations.CreateChatTokenHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateChatTokenRequestBody{
            Attributes: map[string]string{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Capabilities: []shared.ChatTokenCapabilityEnum{
                "SEND_MESSAGE",
                "DISCONNECT_USER",
                "DISCONNECT_USER",
                "DELETE_MESSAGE",
            },
            RoomIdentifier: "placeat",
            SessionDurationInMinutes: 528895,
            UserID: "iusto",
        },
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