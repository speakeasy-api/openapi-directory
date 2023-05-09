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
    res, err := s.AssociateTeamMember(ctx, operations.AssociateTeamMemberRequest{
        AssociateTeamMemberRequest: shared.AssociateTeamMemberRequest{
            ClientRequestToken: sdk.String("corrupti"),
            ProjectID: "provident",
            ProjectRole: "distinctio",
            RemoteAccessAllowed: sdk.Bool(false),
            UserArn: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.AssociateTeamMemberXAmzTargetEnumCodeStar20170419AssociateTeamMember,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTeamMemberResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->