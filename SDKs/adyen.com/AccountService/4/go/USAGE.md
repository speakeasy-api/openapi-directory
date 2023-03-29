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

    req := operations.PostCloseAccountHolderRequest{
        Security: operations.PostCloseAccountHolderSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.CloseAccountHolderRequest{
            AccountHolderCode: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.AccountHolders.PostCloseAccountHolder(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseAccountHolderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->