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
            XAmzAlgorithm: "consequuntur",
            XAmzContentSha256: "amet",
            XAmzCredential: "sunt",
            XAmzDate: "non",
            XAmzSecurityToken: "blanditiis",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "impedit",
        },
        Request: operations.AcceptResourceShareInvitationRequestBody{
            ClientToken: "hic",
            ResourceShareInvitationArn: "iusto",
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