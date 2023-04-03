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

    req := operations.CreateParticipantTokenRequest{
        RequestBody: operations.CreateParticipantTokenRequestBody{
            Attributes: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Capabilities: []shared.ParticipantTokenCapabilityEnum{
                "PUBLISH",
                "SUBSCRIBE",
                "SUBSCRIBE",
                "PUBLISH",
            },
            Duration: 437587,
            StageArn: "magnam",
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
    res, err := s.CreateParticipantToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParticipantTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->