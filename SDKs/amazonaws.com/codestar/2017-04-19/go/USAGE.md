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

    req := operations.AssociateTeamMemberRequest{
        Headers: operations.AssociateTeamMemberHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "CodeStar_20170419.AssociateTeamMember",
        },
        Request: shared.AssociateTeamMemberRequest{
            ClientRequestToken: "nihil",
            ProjectID: "fuga",
            ProjectRole: "facilis",
            RemoteAccessAllowed: false,
            UserArn: "eum",
        },
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