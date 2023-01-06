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
            XAmzAlgorithm: "sapiente",
            XAmzContentSha256: "doloribus",
            XAmzCredential: "accusantium",
            XAmzDate: "explicabo",
            XAmzSecurityToken: "rem",
            XAmzSignature: "corporis",
            XAmzSignedHeaders: "pariatur",
            XAmzTarget: "MacieService.AssociateMemberAccount",
        },
        Request: shared.AssociateMemberAccountRequest{
            MemberAccountID: "quisquam",
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