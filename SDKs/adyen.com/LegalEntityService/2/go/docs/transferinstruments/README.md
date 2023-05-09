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
        ID: "f0e10125-63f9-44e2-9e97-3e922a57a15b",
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
        ID: "e3e06080-7e2b-46e3-ab88-45f0597a60ff",
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
                AccountNumber: sdk.String("dolores"),
                AccountType: sdk.String("id"),
                BankBicSwift: sdk.String("minima"),
                BankCity: sdk.String("dolore"),
                BankCode: sdk.String("dolorum"),
                BankName: sdk.String("nesciunt"),
                BranchCode: sdk.String("quae"),
                CheckCode: sdk.String("recusandae"),
                CountryCode: sdk.String("MS"),
                CurrencyCode: "quaerat",
                Iban: sdk.String("molestiae"),
            },
            LegalEntityID: "ex",
            Type: shared.TransferInstrumentInfoTypeEnumBankAccount,
        },
        ID: "a3e865e7-956f-4925-9a5a-9da660ff57bf",
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
            AccountNumber: sdk.String("officia"),
            AccountType: sdk.String("laborum"),
            BankBicSwift: sdk.String("placeat"),
            BankCity: sdk.String("modi"),
            BankCode: sdk.String("voluptatibus"),
            BankName: sdk.String("molestias"),
            BranchCode: sdk.String("officiis"),
            CheckCode: sdk.String("sapiente"),
            CountryCode: sdk.String("RU"),
            CurrencyCode: "vitae",
            Iban: sdk.String("rerum"),
        },
        LegalEntityID: "tempora",
        Type: shared.TransferInstrumentInfoTypeEnumBankAccount,
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
