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
            XAmzAlgorithm: "molestias",
            XAmzContentSha256: "asperiores",
            XAmzCredential: "suscipit",
            XAmzDate: "nam",
            XAmzSecurityToken: "ducimus",
            XAmzSignature: "ullam",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AcceptInvitationRequestBody{
            GraphArn: "eveniet",
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