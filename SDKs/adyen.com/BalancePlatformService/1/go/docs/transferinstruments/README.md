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
        ID: "eb477373-c8d7-42f6-8d1d-b1f2c4310661",
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
        ID: "e96349e1-cf9e-406e-ba43-7000ae6b6bc9",
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
                AccountNumber: sdk.String("expedita"),
                AccountType: sdk.String("deleniti"),
                BankBicSwift: sdk.String("a"),
                BankCity: sdk.String("voluptate"),
                BankCode: sdk.String("ullam"),
                BankName: sdk.String("unde"),
                BranchCode: sdk.String("necessitatibus"),
                CheckCode: sdk.String("animi"),
                CountryCode: sdk.String("RW"),
                CurrencyCode: "ipsam",
                Iban: sdk.String("corporis"),
            },
            LegalEntityID: "est",
            Type: shared.TransferInstrumentInfoTypeEnumRecurringDetail,
        },
        ID: "741d3113-5296-45bb-8a72-02611435e139",
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
            AccountNumber: sdk.String("nulla"),
            AccountType: sdk.String("distinctio"),
            BankBicSwift: sdk.String("maxime"),
            BankCity: sdk.String("quia"),
            BankCode: sdk.String("quia"),
            BankName: sdk.String("nostrum"),
            BranchCode: sdk.String("omnis"),
            CheckCode: sdk.String("libero"),
            CountryCode: sdk.String("BO"),
            CurrencyCode: "id",
            Iban: sdk.String("libero"),
        },
        LegalEntityID: "fugiat",
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
