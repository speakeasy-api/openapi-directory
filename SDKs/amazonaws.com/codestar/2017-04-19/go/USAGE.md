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

    req := operations.AssociateTeamMemberRequest{
        AssociateTeamMemberRequest: shared.AssociateTeamMemberRequest{
            ClientRequestToken: "corrupti",
            ProjectID: "provident",
            ProjectRole: "distinctio",
            RemoteAccessAllowed: false,
            UserArn: "quibusdam",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "CodeStar_20170419.AssociateTeamMember",
    }

    ctx := context.Background()
    res, err := s.AssociateTeamMember(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTeamMemberResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->