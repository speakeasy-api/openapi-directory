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
    
    req := operations.PostAccountHolderBalanceRequest{
        Security: operations.PostAccountHolderBalanceSecurity{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: "dolores",
    }
    
    res, err := s.General.PostAccountHolderBalance(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolderBalanceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->