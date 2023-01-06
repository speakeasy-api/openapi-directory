<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetAccountHoldersIDRequest{
        Security: operations.GetAccountHoldersIDSecurity{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.GetAccountHoldersIDPathParams{
            ID: "dolorem",
        },
    }
    
    res, err := s.AccountHolders.GetAccountHoldersID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolder != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->