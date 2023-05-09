# Transfers

### Available Operations

* [PostTransfers](#posttransfers) - Transfer funds

## PostTransfers

Starts a transfer request to move funds within your balance platform, or send funds to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/v1/post/transferInstruments). Adyen sends the outcome of the transfer request through webhooks.

To use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.

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
    res, err := s.Transfers.PostTransfers(ctx, shared.TransferInfoOld{
        Amount: shared.Amount{
            Currency: "occaecati",
            Value: 143353,
        },
        Description: sdk.String("deleniti"),
        Destination: shared.PartyIdentification{
            BalanceAccountID: sdk.String("hic"),
            PaymentInstrumentID: sdk.String("optio"),
        },
        Reference: sdk.String("totam"),
        Source: shared.InternalPartyIdentification{
            BalanceAccountID: sdk.String("beatae"),
            PaymentInstrumentID: sdk.String("commodi"),
        },
    }, operations.PostTransfersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferOld != nil {
        // handle response
    }
}
```
