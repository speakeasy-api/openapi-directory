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

    req := operations.CreateParticipantTokenRequest{
        Headers: operations.CreateParticipantTokenHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateParticipantTokenRequestBody{
            Attributes: map[string]string{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Capabilities: []shared.ParticipantTokenCapabilityEnum{
                "PUBLISH",
                "PUBLISH",
                "PUBLISH",
                "SUBSCRIBE",
            },
            Duration: 812169,
            StageArn: "voluptatum",
            UserID: "iusto",
        },
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