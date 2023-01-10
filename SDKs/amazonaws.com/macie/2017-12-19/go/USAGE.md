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
    
    req := operations.AssociateMemberAccountRequest{
        Headers: operations.AssociateMemberAccountHeaders{
            XAmzAlgorithm: "qui",
            XAmzContentSha256: "harum",
            XAmzCredential: "fuga",
            XAmzDate: "facilis",
            XAmzSecurityToken: "blanditiis",
            XAmzSignature: "dicta",
            XAmzSignedHeaders: "ea",
            XAmzTarget: "MacieService.AssociateMemberAccount",
        },
        Request: shared.AssociateMemberAccountRequest{
            MemberAccountID: "non",
        },
    }
    
    res, err := s.AssociateMemberAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->