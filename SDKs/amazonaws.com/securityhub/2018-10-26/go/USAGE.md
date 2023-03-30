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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AcceptAdministratorInvitationRequestBody{
            AdministratorID: "illum",
            InvitationID: "vel",
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