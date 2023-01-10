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
    
    req := operations.AcceptAdministratorInvitationRequest{
        Headers: operations.AcceptAdministratorInvitationHeaders{
            XAmzAlgorithm: "sint",
            XAmzContentSha256: "et",
            XAmzCredential: "deleniti",
            XAmzDate: "ratione",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "quas",
            XAmzSignedHeaders: "quae",
        },
        Request: operations.AcceptAdministratorInvitationRequestBody{
            AdministratorID: "incidunt",
            InvitationID: "sapiente",
        },
    }
    
    res, err := s.AcceptAdministratorInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptAdministratorInvitationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->