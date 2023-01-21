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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccountDeleteDomainWhitelistRequest{
        PathParams: operations.AccountDeleteDomainWhitelistPathParams{
            WhitelistID: "sit",
        },
    }
    
    res, err := s.Account.AccountDeleteDomainWhitelist(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->