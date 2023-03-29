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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "PinpointSMSVoiceV2.AssociateOriginationIdentity",
        },
        Request: shared.AssociateOriginationIdentityRequest{
            ClientToken: "nihil",
            IsoCountryCode: "fuga",
            OriginationIdentity: "facilis",
            PoolID: "eum",
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