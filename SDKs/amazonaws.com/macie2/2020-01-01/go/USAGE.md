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
            XAmzAlgorithm: "veritatis",
            XAmzContentSha256: "qui",
            XAmzCredential: "facere",
            XAmzDate: "aut",
            XAmzSecurityToken: "nesciunt",
            XAmzSignature: "adipisci",
            XAmzSignedHeaders: "consequatur",
        },
        Request: operations.AcceptInvitationRequestBody{
            AdministratorAccountID: "praesentium",
            InvitationID: "temporibus",
            MasterAccount: "alias",
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