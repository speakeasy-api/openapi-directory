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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := shared.BankAccountInput{
        AccountNumber: "corrupti",
        AccountNumberIban: "provident",
        Currency: "PLN",
        Name: "quibusdam",
        NeedQr: false,
        Swift: "unde",
    }

    ctx := context.Background()
    res, err := s.BankAccount.CreateBankAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccount != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->