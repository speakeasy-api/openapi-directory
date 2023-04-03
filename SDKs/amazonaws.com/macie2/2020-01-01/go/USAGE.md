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

    req := operations.AcceptInvitationRequest{
        RequestBody: operations.AcceptInvitationRequestBody{
            AdministratorAccountID: "corrupti",
            InvitationID: "provident",
            MasterAccount: "distinctio",
        },
        XAmzAlgorithm: "quibusdam",
        XAmzContentSha256: "unde",
        XAmzCredential: "nulla",
        XAmzDate: "corrupti",
        XAmzSecurityToken: "illum",
        XAmzSignature: "vel",
        XAmzSignedHeaders: "error",
    }

    ctx := context.Background()
    res, err := s.AcceptInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptInvitationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->