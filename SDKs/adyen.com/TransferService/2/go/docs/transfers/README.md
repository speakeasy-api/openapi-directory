# Transfers

### Available Operations

* [PostTransfers](#posttransfers) - Transfer funds

## PostTransfers

Starts a request to transfer funds to [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts), [transfer instruments](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments), or third-party bank accounts. Adyen sends the outcome of the transfer request through webhooks.

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
    res, err := s.Transfers.PostTransfers(ctx, shared.TransferInfo{
        Amount: shared.Amount{
            Currency: "occaecati",
            Value: 143353,
        },
        BalanceAccountID: sdk.String("deleniti"),
        Bank: &shared.Bank{
            Priority: shared.BankPriorityEnumWire.ToPointer(),
        },
        Counterparty: shared.CounterpartyInfo{
            BalanceAccountID: sdk.String("optio"),
            BankAccount: &shared.BankAccountInfo{
                Address: &shared.Address{
                    City: "Benjaminview",
                    Country: "Kuwait",
                    HouseNumberOrName: "modi",
                    PostalCode: "77425",
                    StateOrProvince: sdk.String("aspernatur"),
                    Street: "36162 Howe Village",
                },
                Iban: sdk.String("saepe"),
                OwnerName: &shared.Name{
                    FirstName: sdk.String("Marisa"),
                    FullName: sdk.String("in"),
                    Infix: sdk.String("corporis"),
                    LastName: sdk.String("Moore"),
                },
            },
            TransferInstrumentID: sdk.String("iure"),
        },
        Description: sdk.String("saepe"),
        ID: sdk.String("b10faaa2-352c-4595-9907-aff1a3a2fa94"),
        PaymentInstrumentID: sdk.String("commodi"),
        Reference: sdk.String("quam"),
        ReferenceForBeneficiary: sdk.String("molestiae"),
    }, operations.PostTransfersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transfer != nil {
        // handle response
    }
}
```
