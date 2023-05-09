# TransferInstruments

### Available Operations

* [DeleteTransferInstrumentsID](#deletetransferinstrumentsid) - Delete a transfer instrument
* [GetTransferInstrumentsID](#gettransferinstrumentsid) - Get a transfer instrument
* [PatchTransferInstrumentsID](#patchtransferinstrumentsid) - Update a transfer instrument
* [PostTransferInstruments](#posttransferinstruments) - Create a transfer instrument

## DeleteTransferInstrumentsID

Deletes a transfer instrument.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TransferInstruments.DeleteTransferInstrumentsID(ctx, operations.DeleteTransferInstrumentsIDRequest{
        ID: "3c28744e-d53b-488f-ba8d-8f5c0b2f2fb7",
    }, operations.DeleteTransferInstrumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTransferInstrumentsID

Returns the details of a transfer instrument.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TransferInstruments.GetTransferInstrumentsID(ctx, operations.GetTransferInstrumentsIDRequest{
        ID: "b194a276-b269-416f-a1f0-8f4294e3698f",
    }, operations.GetTransferInstrumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferInstrument != nil {
        // handle response
    }
}
```

## PatchTransferInstrumentsID

Updates a transfer instrument.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TransferInstruments.PatchTransferInstrumentsID(ctx, operations.PatchTransferInstrumentsIDRequest{
        TransferInstrumentInfo: &shared.TransferInstrumentInfo{
            BankAccount: shared.BankAccountInfo{
                AccountNumber: sdk.String("tempora"),
                AccountType: sdk.String("tempora"),
                BankBicSwift: sdk.String("voluptate"),
                BankCity: sdk.String("reiciendis"),
                BankCode: sdk.String("ex"),
                BankName: sdk.String("sit"),
                BranchCode: sdk.String("non"),
                CheckCode: sdk.String("officiis"),
                CountryCode: sdk.String("LA"),
                CurrencyCode: "facilis",
                Iban: sdk.String("quaerat"),
            },
            LegalEntityID: "incidunt",
            Type: shared.TransferInstrumentInfoTypeEnumBankAccount,
        },
        ID: "e80ca55e-fd20-4e45-be18-58b6a89fbe3a",
    }, operations.PatchTransferInstrumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferInstrument != nil {
        // handle response
    }
}
```

## PostTransferInstruments

Creates a transfer instrument. 

A transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses.

When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).

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
    res, err := s.TransferInstruments.PostTransferInstruments(ctx, shared.TransferInstrumentInfo{
        BankAccount: shared.BankAccountInfo{
            AccountNumber: sdk.String("nostrum"),
            AccountType: sdk.String("officia"),
            BankBicSwift: sdk.String("dolorum"),
            BankCity: sdk.String("corrupti"),
            BankCode: sdk.String("accusamus"),
            BankName: sdk.String("tempora"),
            BranchCode: sdk.String("atque"),
            CheckCode: sdk.String("fugit"),
            CountryCode: sdk.String("FJ"),
            CurrencyCode: "fugiat",
            Iban: sdk.String("voluptatem"),
        },
        LegalEntityID: "culpa",
        Type: shared.TransferInstrumentInfoTypeEnumRecurringDetail,
    }, operations.PostTransferInstrumentsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferInstrument != nil {
        // handle response
    }
}
```
