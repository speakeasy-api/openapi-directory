<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccount.CreateBankAccount(ctx, shared.BankAccountInput{
        AccountNumber: "corrupti",
        AccountNumberIban: sdk.String("provident"),
        Currency: shared.CurrencyEnumPln,
        Name: "Stuart Stiedemann",
        NeedQr: sdk.Bool(false),
        Swift: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccount != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->