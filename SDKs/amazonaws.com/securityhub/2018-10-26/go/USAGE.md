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

    req := operations.AcceptAdministratorInvitationRequest{
        Headers: operations.AcceptAdministratorInvitationHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AcceptAdministratorInvitationRequestBody{
            AdministratorID: "nulla",
            InvitationID: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptAdministratorInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptAdministratorInvitationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->