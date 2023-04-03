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

    req := operations.AcceptResourceShareInvitationRequest{
        RequestBody: operations.AcceptResourceShareInvitationRequestBody{
            ClientToken: "corrupti",
            ResourceShareInvitationArn: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
    }

    ctx := context.Background()
    res, err := s.AcceptResourceShareInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptResourceShareInvitationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->