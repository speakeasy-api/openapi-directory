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
        Security: operations.GetAccountHoldersIDSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GetAccountHoldersIDPathParams{
            ID: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.AccountHolders.GetAccountHoldersID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolder != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->