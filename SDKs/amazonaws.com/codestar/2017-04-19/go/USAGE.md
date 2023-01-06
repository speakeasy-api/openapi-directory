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
            XAmzAlgorithm: "architecto",
            XAmzContentSha256: "et",
            XAmzCredential: "eum",
            XAmzDate: "vero",
            XAmzSecurityToken: "totam",
            XAmzSignature: "odio",
            XAmzSignedHeaders: "veritatis",
            XAmzTarget: "CodeStar_20170419.AssociateTeamMember",
        },
        Request: shared.AssociateTeamMemberRequest{
            ClientRequestToken: "atque",
            ProjectID: "explicabo",
            ProjectRole: "consequatur",
            RemoteAccessAllowed: false,
            UserArn: "numquam",
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