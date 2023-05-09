<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateChatToken(ctx, operations.CreateChatTokenRequest{
        RequestBody: operations.CreateChatTokenRequestBody{
            Attributes: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Capabilities: []shared.ChatTokenCapabilityEnum{
                shared.ChatTokenCapabilityEnumDisconnectUser,
                shared.ChatTokenCapabilityEnumDisconnectUser,
                shared.ChatTokenCapabilityEnumDisconnectUser,
                shared.ChatTokenCapabilityEnumDisconnectUser,
            },
            RoomIdentifier: "iure",
            SessionDurationInMinutes: sdk.Int64(297534),
            UserID: "debitis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateChatTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->