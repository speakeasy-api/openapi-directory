<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAccountHoldersIDRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.AccountHolders.GetAccountHoldersID(ctx, req, operations.GetAccountHoldersIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolder != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->