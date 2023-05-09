# Currency

### Available Operations

* [GetConversionRate](#getconversionrate) - Get currencies exchange rate.

## GetConversionRate

Return with the exchange value of given currencies.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Currency.GetConversionRate(ctx, operations.GetConversionRateRequest{
        From: shared.CurrencyEnumSek,
        To: shared.CurrencyEnumUsd,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationRate != nil {
        // handle response
    }
}
```
