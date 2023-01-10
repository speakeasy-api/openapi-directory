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
    
    req := operations.AcceptResourceShareInvitationRequest{
        Headers: operations.AcceptResourceShareInvitationHeaders{
            XAmzAlgorithm: "quis",
            XAmzContentSha256: "tempora",
            XAmzCredential: "esse",
            XAmzDate: "rerum",
            XAmzSecurityToken: "tempora",
            XAmzSignature: "culpa",
            XAmzSignedHeaders: "deserunt",
        },
        Request: operations.AcceptResourceShareInvitationRequestBody{
            ClientToken: "nihil",
            ResourceShareInvitationArn: "aut",
        },
    }
    
    res, err := s.AcceptResourceShareInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptResourceShareInvitationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->