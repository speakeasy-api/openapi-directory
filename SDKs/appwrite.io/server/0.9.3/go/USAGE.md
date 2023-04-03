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

    req := operations.AccountCreateRecoveryRequestBody{
        Email: "Larue_Rau85@yahoo.com",
        URL: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Account.AccountCreateRecovery(ctx, req, operations.AccountCreateRecoverySecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->