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
    res, err := s.AssociateOriginationIdentity(ctx, operations.AssociateOriginationIdentityRequest{
        AssociateOriginationIdentityRequest: shared.AssociateOriginationIdentityRequest{
            ClientToken: sdk.String("corrupti"),
            IsoCountryCode: "provident",
            OriginationIdentity: "distinctio",
            PoolID: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.AssociateOriginationIdentityXAmzTargetEnumPinpointSmsVoiceV2AssociateOriginationIdentity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateOriginationIdentityResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->