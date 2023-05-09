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
	"openapi/pkg/types"
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
        Category: shared.TransferInfoCategoryEnumPlatformPayment,
        Counterparty: shared.CounterpartyInfoV3{
            BalanceAccountID: sdk.String("optio"),
            BankAccount: &shared.BankAccountV3{
                AccountHolder: shared.PartyIdentification2{
                    Address: &shared.Address2{
                        City: sdk.String("Benjaminview"),
                        Country: "Kuwait",
                        Line1: sdk.String("modi"),
                        Line2: sdk.String("qui"),
                        PostalCode: sdk.String("74251-0361"),
                        StateOrProvince: sdk.String("iste"),
                    },
                    DateOfBirth: types.MustDateFromString("2022-05-20"),
                    FirstName: sdk.String("Gertrude"),
                    FullName: "hic",
                    LastName: sdk.String("Turcotte"),
                    Reference: sdk.String("fuga"),
                    Type: shared.PartyIdentification2TypeEnumOrganization.ToPointer(),
                },
                AccountIdentification: shared.BankAccountV3AccountIdentification{},
            },
            TransferInstrumentID: sdk.String("corporis"),
        },
        Description: sdk.String("iste"),
        ID: sdk.String("6eb10faa-a235-42c5-9559-07aff1a3a2fa"),
        PaymentInstrumentID: sdk.String("occaecati"),
        Priority: shared.TransferInfoPriorityEnumDirectDebit.ToPointer(),
        Reference: sdk.String("commodi"),
        ReferenceForBeneficiary: sdk.String("quam"),
        UltimateParty: &shared.UltimatePartyIdentification{
            Address: &shared.Address2{
                City: sdk.String("Deionfurt"),
                Country: "Cape Verde",
                Line1: sdk.String("quis"),
                Line2: sdk.String("vitae"),
                PostalCode: sdk.String("63171-9368"),
                StateOrProvince: sdk.String("aut"),
            },
            DateOfBirth: types.MustDateFromString("2022-05-18"),
            FirstName: sdk.String("Rodrigo"),
            FullName: "laborum",
            LastName: sdk.String("Boyer"),
            Reference: sdk.String("reiciendis"),
            Type: shared.UltimatePartyIdentificationTypeEnumUnknown.ToPointer(),
        },
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
