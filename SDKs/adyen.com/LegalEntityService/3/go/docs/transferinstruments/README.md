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
        ID: "e922a57a-15be-43e0-a080-7e2b6e3ab884",
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
        ID: "5f0597a6-0ff2-4a54-a31e-94764a3e865e",
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
                AccountIdentification: &shared.BankAccountInfoAccountIdentification{},
                AccountType: sdk.String("esse"),
                CountryCode: sdk.String("MO"),
            },
            LegalEntityID: "quis",
            Type: shared.TransferInstrumentInfoTypeEnumBankAccount,
        },
        ID: "f9251a5a-9da6-460f-b57b-faad4f9efc1b",
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
            AccountIdentification: &shared.BankAccountInfoAccountIdentification{},
            AccountType: sdk.String("tempora"),
            CountryCode: sdk.String("GL"),
        },
        LegalEntityID: "inventore",
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
