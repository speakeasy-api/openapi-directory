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
    
    req := operations.PostCloseAccountHolderRequest{
        Security: operations.PostCloseAccountHolderSecurity{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: "et",
    }
    
    res, err := s.AccountHolders.PostCloseAccountHolder(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseAccountHolderResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->