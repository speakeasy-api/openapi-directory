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
    
    req := operations.AcceptInvitationRequest{
        Headers: operations.AcceptInvitationHeaders{
            XAmzAlgorithm: "animi",
            XAmzContentSha256: "minima",
            XAmzCredential: "beatae",
            XAmzDate: "iste",
            XAmzSecurityToken: "et",
            XAmzSignature: "fuga",
            XAmzSignedHeaders: "corporis",
        },
        Request: operations.AcceptInvitationRequestBody{
            AdministratorAccountID: "quo",
            InvitationID: "laborum",
            MasterAccount: "ex",
        },
    }
    
    res, err := s.AcceptInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptInvitationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->