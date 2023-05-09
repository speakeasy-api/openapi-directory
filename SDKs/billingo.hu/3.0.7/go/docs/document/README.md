# Document

## Overview

Document object represents your invoice.

### Available Operations

* [CancelDocument](#canceldocument) - Cancel a document
* [CreateDocument](#createdocument) - Create a document
* [CreateDocumentFromProforma](#createdocumentfromproforma) - Create a document from proforma.
* [DeletePayment](#deletepayment) - Delete all payment history on document
* [DownloadDocument](#downloaddocument) - Download a document in PDF format.
* [GetDocument](#getdocument) - Retrieve a document
* [GetOnlineSzamlaStatus](#getonlineszamlastatus) - Retrieve a document Online Számla status
* [GetPayment](#getpayment) - Retrieve a payment histroy
* [GetPublicURL](#getpublicurl) - Retrieve a document download public url.
* [ListDocument](#listdocument) - List all documents
* [SendDocument](#senddocument) - Send invoice to given email adresses.
* [UpdatePayment](#updatepayment) - Update payment history

## CancelDocument

Cancel a document. Returns a cancellation document object if the cancellation is succeded.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.CancelDocument(ctx, operations.CancelDocumentRequest{
        ID: 778157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## CreateDocument

Create a new document. Returns a document object if the create is succeded.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.CreateDocument(ctx, shared.DocumentInsert{
        BankAccountID: sdk.Int64(140350),
        BlockID: 870013,
        Comment: sdk.String("at"),
        ConversionRate: sdk.Float32(9786.19),
        Currency: shared.CurrencyEnumJpy,
        DueDate: types.MustDateFromString("2020-08-07"),
        Electronic: sdk.Bool(false),
        FulfillmentDate: types.MustDateFromString("2022-06-25"),
        Items: []shared.DocumentInsertItems{
            shared.DocumentInsertItems{},
            shared.DocumentInsertItems{},
            shared.DocumentInsertItems{},
            shared.DocumentInsertItems{},
        },
        Language: shared.DocumentLanguageEnumIt,
        Paid: sdk.Bool(false),
        PartnerID: 118274,
        PaymentMethod: shared.PaymentMethodEnumPostautalvany,
        Settings: &shared.DocumentSettings{
            MediatedService: sdk.Bool(false),
            OnlinePayment: shared.OnlinePaymentEnumSimplePay.ToPointer(),
            PlaceID: sdk.Int64(582020),
            Round: shared.RoundEnumFive.ToPointer(),
            WithoutFinancialFulfillment: sdk.Bool(false),
        },
        Type: shared.DocumentInsertTypeEnumInvoice,
        VendorID: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## CreateDocumentFromProforma

Create a new document from proforma. Returns a document object if the create is succeded.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.CreateDocumentFromProforma(ctx, operations.CreateDocumentFromProformaRequest{
        ID: 758616,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## DeletePayment

Delete all exist payment history on document.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.DeletePayment(ctx, operations.DeletePaymentRequest{
        ID: 521848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentHistories != nil {
        // handle response
    }
}
```

## DownloadDocument

Download a document. Returns a document in PDF format.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.DownloadDocument(ctx, operations.DownloadDocumentRequest{
        ID: 105907,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadDocument200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## GetDocument

Retrieves the details of an existing document.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetDocument(ctx, operations.GetDocumentRequest{
        ID: 414662,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## GetOnlineSzamlaStatus

Retrieves the details of an existing document status.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetOnlineSzamlaStatus(ctx, operations.GetOnlineSzamlaStatusRequest{
        ID: 473600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OnlineSzamlaStatus != nil {
        // handle response
    }
}
```

## GetPayment

Retrieves the details of payment history an existing document.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetPayment(ctx, operations.GetPaymentRequest{
        ID: 264555,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentHistories != nil {
        // handle response
    }
}
```

## GetPublicURL

Retrieves public url to download an existing document.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetPublicURL(ctx, operations.GetPublicURLRequest{
        ID: 186332,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentPublicURL != nil {
        // handle response
    }
}
```

## ListDocument

Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.ListDocument(ctx, operations.ListDocumentRequest{
        BlockID: sdk.Int64(774234),
        EndDate: types.MustDateFromString("2022-02-02"),
        EndNumber: sdk.Int64(216550),
        EndYear: sdk.Int64(568434),
        Page: sdk.Int64(135218),
        PartnerID: sdk.Int64(18789),
        PaymentMethod: shared.PaymentMethodEnumEpKartya.ToPointer(),
        PaymentStatus: shared.PaymentStatusEnumPaid.ToPointer(),
        PerPage: sdk.Int64(149675),
        StartDate: types.MustDateFromString("2022-07-22"),
        StartNumber: sdk.Int64(616934),
        StartYear: sdk.Int64(386489),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentList != nil {
        // handle response
    }
}
```

## SendDocument

Returns a list of emails, where the invoice is sent.

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
    res, err := s.Document.SendDocument(ctx, operations.SendDocumentRequest{
        SendDocument: &shared.SendDocument{
            Emails: []string{
                "saepe",
                "fuga",
                "in",
                "corporis",
            },
        },
        ID: 613064,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendDocument != nil {
        // handle response
    }
}
```

## UpdatePayment

Update payment history an existing document. Returns a payment history object if the update is succeded.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.UpdatePayment(ctx, operations.UpdatePaymentRequest{
        RequestBody: []shared.PaymentHistory{
            shared.PaymentHistory{
                ConversionRate: sdk.Float32(9023.49),
                Date: types.MustDateFromString("2022-10-20"),
                PaymentMethod: shared.PaymentMethodEnumBankcard,
                Price: 9698.1,
                VoucherNumber: sdk.String("est"),
            },
            shared.PaymentHistory{
                ConversionRate: sdk.Float32(6531.4),
                Date: types.MustDateFromString("2022-08-29"),
                PaymentMethod: shared.PaymentMethodEnumCashOnDelivery,
                Price: 3581.52,
                VoucherNumber: sdk.String("explicabo"),
            },
        },
        ID: 750686,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentHistories != nil {
        // handle response
    }
}
```
