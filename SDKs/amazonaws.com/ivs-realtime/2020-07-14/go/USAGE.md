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
    res, err := s.CreateParticipantToken(ctx, operations.CreateParticipantTokenRequest{
        RequestBody: operations.CreateParticipantTokenRequestBody{
            Attributes: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Capabilities: []shared.ParticipantTokenCapabilityEnum{
                shared.ParticipantTokenCapabilityEnumPublish,
                shared.ParticipantTokenCapabilityEnumSubscribe,
                shared.ParticipantTokenCapabilityEnumSubscribe,
                shared.ParticipantTokenCapabilityEnumPublish,
            },
            Duration: sdk.Int64(437587),
            StageArn: "magnam",
            UserID: sdk.String("debitis"),
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

    if res.CreateParticipantTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->