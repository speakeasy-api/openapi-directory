# Email

### Available Operations

* [EmailSendEmailStatement](#emailsendemailstatement) - Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [EmailSendQuote](#emailsendquote) - Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [EmailSendSalesInvoice](#emailsendsalesinvoice) - Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

## EmailSendEmailStatement

Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Email.EmailSendEmailStatement(ctx, shared.EmailStatementDto{
        BccAddresses: []string{
            "alias",
            "maiores",
        },
        CustomerID: sdk.Int64(970222),
        FromPeriod: types.MustTimeFromString("2022-05-03T16:31:59.395Z"),
        MessageBody: sdk.String("minima"),
        MinimumBalance: sdk.Float64(2931.44),
        ToAddress: sdk.String("dolorum"),
        ToPeriod: types.MustTimeFromString("2022-12-08T22:18:03.712Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailSendEmailStatement200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EmailSendQuote

Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Email.EmailSendQuote(ctx, shared.EmailQuoteDto{
        BccAddresses: []string{
            "omnis",
            "quaerat",
            "molestiae",
            "ex",
        },
        MessageBody: sdk.String("ut"),
        QuoteID: sdk.Int64(633062),
        ToAddress: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailSendQuote200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EmailSendSalesInvoice

Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Email.EmailSendSalesInvoice(ctx, shared.SalesInvoiceEmailInfoDto{
        BccAddresses: []string{
            "laudantium",
            "eum",
            "nemo",
            "recusandae",
        },
        MessageBody: sdk.String("esse"),
        SalesInvoiceID: sdk.Int64(592081),
        ToAddress: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailSendSalesInvoice200ApplicationJSONObject != nil {
        // handle response
    }
}
```
