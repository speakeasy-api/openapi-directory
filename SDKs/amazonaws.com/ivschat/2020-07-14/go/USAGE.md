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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateChatTokenRequestBody{
            Attributes: map[string]string{
                "nihil": "fuga",
                "facilis": "eum",
                "iusto": "ullam",
                "saepe": "inventore",
            },
            Capabilities: []shared.ChatTokenCapabilityEnum{
                "SEND_MESSAGE",
                "DISCONNECT_USER",
                "DISCONNECT_USER",
                "DELETE_MESSAGE",
            },
            RoomIdentifier: "vel",
            SessionDurationInMinutes: 528895,
            UserID: "deleniti",
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