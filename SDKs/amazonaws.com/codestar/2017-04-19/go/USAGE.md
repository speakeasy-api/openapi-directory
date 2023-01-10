<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateTeamMemberRequest{
        Headers: operations.AssociateTeamMemberHeaders{
            XAmzAlgorithm: "quod",
            XAmzContentSha256: "ut",
            XAmzCredential: "ut",
            XAmzDate: "sed",
            XAmzSecurityToken: "quibusdam",
            XAmzSignature: "harum",
            XAmzSignedHeaders: "repudiandae",
            XAmzTarget: "CodeStar_20170419.AssociateTeamMember",
        },
        Request: shared.AssociateTeamMemberRequest{
            ClientRequestToken: "molestiae",
            ProjectID: "rerum",
            ProjectRole: "occaecati",
            RemoteAccessAllowed: true,
            UserArn: "rerum",
        },
    }
    
    res, err := s.AssociateTeamMember(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTeamMemberResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->