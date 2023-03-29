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
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateBankAccountRequest{
        Request: shared.BankAccountInput{
            AccountNumber: "unde",
            AccountNumberIban: "deserunt",
            Currency: "PLN",
            Name: "nulla",
            NeedQr: false,
            Swift: "id",
        },
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