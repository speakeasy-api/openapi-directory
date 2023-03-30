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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateParticipantTokenRequestBody{
            Attributes: map[string]string{
                "nihil": "fuga",
                "facilis": "eum",
                "iusto": "ullam",
                "saepe": "inventore",
            },
            Capabilities: []shared.ParticipantTokenCapabilityEnum{
                "PUBLISH",
                "PUBLISH",
                "PUBLISH",
                "SUBSCRIBE",
            },
            Duration: 812169,
            StageArn: "non",
            UserID: "deleniti",
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