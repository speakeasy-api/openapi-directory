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
    
    req := operations.GetAccountRequest{
        QueryParams: operations.GetAccountQueryParams{
            Include: "maxime",
        },
        Headers: operations.GetAccountHeaders{
            EvAccessToken: "facilis",
            EvAPIKey: "iure",
        },
    }
    
    res, err := s.Account.GetAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->