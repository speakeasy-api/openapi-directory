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

    req := operations.PostAccountHolderBalanceRequest{
        Security: operations.PostAccountHolderBalanceSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.AccountHolderBalanceRequest{
            AccountHolderCode: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.General.PostAccountHolderBalance(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolderBalanceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->