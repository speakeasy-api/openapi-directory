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

    req := operations.AssociateOriginationIdentityRequest{
        AssociateOriginationIdentityRequest: shared.AssociateOriginationIdentityRequest{
            ClientToken: "corrupti",
            IsoCountryCode: "provident",
            OriginationIdentity: "distinctio",
            PoolID: "quibusdam",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "PinpointSMSVoiceV2.AssociateOriginationIdentity",
    }

    ctx := context.Background()
    res, err := s.AssociateOriginationIdentity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateOriginationIdentityResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->