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
            XAmzAlgorithm: "temporibus",
            XAmzContentSha256: "consequatur",
            XAmzCredential: "non",
            XAmzDate: "nulla",
            XAmzSecurityToken: "inventore",
            XAmzSignature: "reprehenderit",
            XAmzSignedHeaders: "quos",
        },
        Request: operations.AcceptInvitationRequestBody{
            GraphArn: "saepe",
        },
    }
    
    res, err := s.AcceptInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->