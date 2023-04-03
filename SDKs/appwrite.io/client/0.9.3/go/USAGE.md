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

    req := operations.AccountCreateRequestBody{
        Email: "Larue_Rau85@yahoo.com",
        Name: "corrupti",
        Password: "illum",
    }

    ctx := context.Background()
    res, err := s.Account.AccountCreate(ctx, req, operations.AccountCreateSecurity{
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->