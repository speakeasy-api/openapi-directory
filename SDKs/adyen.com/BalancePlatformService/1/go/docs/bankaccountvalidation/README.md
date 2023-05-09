# BankAccountValidation

### Available Operations

* [PostValidateBankAccountIdentification](#postvalidatebankaccountidentification) - Validate a bank account

## PostValidateBankAccountIdentification

Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BankAccountValidation.PostValidateBankAccountIdentification(ctx, shared.BankAccountIdentificationValidationRequest{
        AccountIdentification: shared.BankAccountIdentificationValidationRequestAccountIdentification{},
    }, operations.PostValidateBankAccountIdentificationSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Void != nil {
        // handle response
    }
}
```
