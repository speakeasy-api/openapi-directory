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

    req := operations.AssociateOriginationIdentityRequest{
        Headers: operations.AssociateOriginationIdentityHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "PinpointSMSVoiceV2.AssociateOriginationIdentity",
        },
        Request: shared.AssociateOriginationIdentityRequest{
            ClientToken: "illum",
            IsoCountryCode: "vel",
            OriginationIdentity: "error",
            PoolID: "deserunt",
        },
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