# Invoice

### Available Operations

* [InvoiceAPIAll](#invoiceapiall) - Return all invoices for the account
* [InvoiceAPIChangeStatusForm](#invoiceapichangestatusform) - Change invoice status
* [InvoiceAPIChangeStatusJSON](#invoiceapichangestatusjson) - Change invoice status
* [InvoiceAPIChangeStatusRaw](#invoiceapichangestatusraw) - Change invoice status
* [InvoiceAPIDeleteForm](#invoiceapideleteform) - Delete an existing invoice
* [InvoiceAPIDeleteJSON](#invoiceapideletejson) - Delete an existing invoice
* [InvoiceAPIDeleteRaw](#invoiceapideleteraw) - Delete an existing invoice
* [InvoiceAPIDetails](#invoiceapidetails) - Return invoice data
* [InvoiceAPINewForm](#invoiceapinewform) - Create an invoice
* [InvoiceAPINewJSON](#invoiceapinewjson) - Create an invoice
* [InvoiceAPINewRaw](#invoiceapinewraw) - Create an invoice
* [InvoiceAPIPdf](#invoiceapipdf) - Return the PDF for the invoice
* [InvoiceAPISendToAccountantForm](#invoiceapisendtoaccountantform) - Send the provided invoice to the accountant
* [InvoiceAPISendToAccountantJSON](#invoiceapisendtoaccountantjson) - Send the provided invoice to the accountant
* [InvoiceAPISendToAccountantRaw](#invoiceapisendtoaccountantraw) - Send the provided invoice to the accountant
* [InvoiceAPISendToClientForm](#invoiceapisendtoclientform) - Send the provided invoice to the client
* [InvoiceAPISendToClientJSON](#invoiceapisendtoclientjson) - Send the provided invoice to the client
* [InvoiceAPISendToClientRaw](#invoiceapisendtoclientraw) - Send the provided invoice to the client
* [InvoiceAPIStatus](#invoiceapistatus) - Retrieve the status of the invoice
* [InvoiceAPIUpdateForm](#invoiceapiupdateform) - Update an existing invoice
* [InvoiceAPIUpdateJSON](#invoiceapiupdatejson) - Update an existing invoice
* [InvoiceAPIUpdateRaw](#invoiceapiupdateraw) - Update an existing invoice
* [InvoiceAPIURI](#invoiceapiuri) - Return the unique url to the client's invoice
* [GetAPIInvoiceAllcategories](#getapiinvoiceallcategories) - Return all invoice categories for the account
* [PostAPIInvoiceDeletecategoryForm](#postapiinvoicedeletecategoryform) - Delete an existing invoice category
* [PostAPIInvoiceDeletecategoryJSON](#postapiinvoicedeletecategoryjson) - Delete an existing invoice category
* [PostAPIInvoiceDeletecategoryRaw](#postapiinvoicedeletecategoryraw) - Delete an existing invoice category
* [PostAPIInvoiceNewcategoryForm](#postapiinvoicenewcategoryform) - Create an invoice category
* [PostAPIInvoiceNewcategoryJSON](#postapiinvoicenewcategoryjson) - Create an invoice category
* [PostAPIInvoiceNewcategoryRaw](#postapiinvoicenewcategoryraw) - Create an invoice category
* [PostAPIInvoiceUpdatecategoryForm](#postapiinvoiceupdatecategoryform) - Update an existing invoice category
* [PostAPIInvoiceUpdatecategoryJSON](#postapiinvoiceupdatecategoryjson) - Update an existing invoice category
* [PostAPIInvoiceUpdatecategoryRaw](#postapiinvoiceupdatecategoryraw) - Update an existing invoice category

## InvoiceAPIAll

Return all invoices for the account

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPIAll(ctx, operations.InvoiceAPIAllRequest{
        QueryOptionsPage: sdk.Int(961937),
        QueryOptionsPageSize: sdk.Int(209157),
        XAuthKey: "dolore",
        XAuthSecret: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResultInvoiceDetailsAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPIChangeStatusForm

Change invoice status

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
    res, err := s.Invoice.InvoiceAPIChangeStatusForm(ctx, operations.InvoiceAPIChangeStatusFormRequest{
        ChangeStatusAPIModel: shared.ChangeStatusAPIModel{
            ID: sdk.Int(240829),
            Status: shared.ChangeStatusAPIModelStatusEnumOverdue.ToPointer(),
        },
        XAuthKey: "architecto",
        XAuthSecret: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPIChangeStatusForm200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## InvoiceAPIChangeStatusJSON

Change invoice status

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
    res, err := s.Invoice.InvoiceAPIChangeStatusJSON(ctx, operations.InvoiceAPIChangeStatusJSONRequest{
        ChangeStatusAPIModel: shared.ChangeStatusAPIModel{
            ID: sdk.Int(16429),
            Status: shared.ChangeStatusAPIModelStatusEnumUnpaid.ToPointer(),
        },
        XAuthKey: "itaque",
        XAuthSecret: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPIChangeStatusJSON200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## InvoiceAPIChangeStatusRaw

Change invoice status

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
    res, err := s.Invoice.InvoiceAPIChangeStatusRaw(ctx, operations.InvoiceAPIChangeStatusRawRequest{
        RequestBody: []byte("est"),
        XAuthKey: "repellendus",
        XAuthSecret: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPIChangeStatusRaw200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## InvoiceAPIDeleteForm

Delete an existing invoice

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
    res, err := s.Invoice.InvoiceAPIDeleteForm(ctx, operations.InvoiceAPIDeleteFormRequest{
        InvoiceDeleteAPIModel: shared.InvoiceDeleteAPIModel{
            ID: sdk.Int(984330),
        },
        XAuthKey: "ut",
        XAuthSecret: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPIDeleteForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPIDeleteJSON

Delete an existing invoice

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
    res, err := s.Invoice.InvoiceAPIDeleteJSON(ctx, operations.InvoiceAPIDeleteJSONRequest{
        InvoiceDeleteAPIModel: shared.InvoiceDeleteAPIModel{
            ID: sdk.Int(586410),
        },
        XAuthKey: "qui",
        XAuthSecret: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPIDeleteJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPIDeleteRaw

Delete an existing invoice

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
    res, err := s.Invoice.InvoiceAPIDeleteRaw(ctx, operations.InvoiceAPIDeleteRawRequest{
        RequestBody: []byte("laudantium"),
        XAuthKey: "odio",
        XAuthSecret: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPIDeleteRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPIDetails

Return invoice data

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPIDetails(ctx, operations.InvoiceAPIDetailsRequest{
        ID: 977496,
        XAuthKey: "quisquam",
        XAuthSecret: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPINewForm

Create an invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPINewForm(ctx, operations.InvoiceAPINewFormRequest{
        InvoiceCreateAPIModel: shared.InvoiceCreateAPIModel{
            Attachments: []shared.InvoiceCreateAttachmentAPIModel{
                shared.InvoiceCreateAttachmentAPIModel{
                    Link: sdk.String("quis"),
                    ObfuscatedFileName: sdk.String("ipsum"),
                    OriginalFileName: sdk.String("delectus"),
                    Size: sdk.Int64(455169),
                    Type: shared.InvoiceCreateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.InvoiceCreateAttachmentAPIModel{
                    Link: sdk.String("vero"),
                    ObfuscatedFileName: sdk.String("tenetur"),
                    OriginalFileName: sdk.String("dignissimos"),
                    Size: sdk.Int64(941378),
                    Type: shared.InvoiceCreateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.InvoiceCreateAttachmentAPIModel{
                    Link: sdk.String("quod"),
                    ObfuscatedFileName: sdk.String("odio"),
                    OriginalFileName: sdk.String("similique"),
                    Size: sdk.Int64(708548),
                    Type: shared.InvoiceCreateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
            },
            ClientID: sdk.Int(498140),
            ClonedFromID: sdk.Int(293020),
            CurrencyID: sdk.Int(844550),
            Duedate: types.MustTimeFromString("2022-06-02T04:41:10.492Z"),
            InvoiceCategoryID: sdk.Int(617877),
            IssuedOn: types.MustTimeFromString("2022-12-17T12:08:06.467Z"),
            Items: []shared.InvoiceCreateItemAPIModel{
                shared.InvoiceCreateItemAPIModel{
                    Cost: sdk.Float64(3472.33),
                    Description: sdk.String("nulla"),
                    DiscountPercentage: sdk.Float64(1481.41),
                    Quantity: sdk.Float64(7804.27),
                    TaxID: sdk.Int(981830),
                    TaxPercentage: sdk.Float64(9850.33),
                    WorkTypeID: sdk.Int(478370),
                },
                shared.InvoiceCreateItemAPIModel{
                    Cost: sdk.Float64(7535.7),
                    Description: sdk.String("ducimus"),
                    DiscountPercentage: sdk.Float64(40.48),
                    Quantity: sdk.Float64(6394.73),
                    TaxID: sdk.Int(269479),
                    TaxPercentage: sdk.Float64(3685.84),
                    WorkTypeID: sdk.Int(410492),
                },
                shared.InvoiceCreateItemAPIModel{
                    Cost: sdk.Float64(1369),
                    Description: sdk.String("vel"),
                    DiscountPercentage: sdk.Float64(8221.18),
                    Quantity: sdk.Float64(2978.42),
                    TaxID: sdk.Int(189848),
                    TaxPercentage: sdk.Float64(4011.32),
                    WorkTypeID: sdk.Int(511319),
                },
                shared.InvoiceCreateItemAPIModel{
                    Cost: sdk.Float64(1206.57),
                    Description: sdk.String("dolor"),
                    DiscountPercentage: sdk.Float64(9807),
                    Quantity: sdk.Float64(978.44),
                    TaxID: sdk.Int(406120),
                    TaxPercentage: sdk.Float64(8621.92),
                    WorkTypeID: sdk.Int(569211),
                },
            },
            Notes: sdk.String("voluptatibus"),
            Number: sdk.String("nostrum"),
            PaymentGateways: []shared.InvoiceGatewayAPIModel{
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Elbert Jenkins"),
                },
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Jeanne Bode"),
                },
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Glenn Walter"),
                },
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Mr. Elsa Reinger"),
                },
            },
            PoNumber: sdk.String("impedit"),
            RecurringProfile: &shared.InvoiceRecurringAPIModel{
                DayOfMonth: sdk.Int(304582),
                DayOfWeek: shared.InvoiceRecurringAPIModelDayOfWeekEnumMonday.ToPointer(),
                DueDateInDays: sdk.Int(882860),
                EndOfRecurrance: types.MustTimeFromString("2022-10-01T12:32:41.161Z"),
                Month: sdk.Int(89603),
                RecurrancePattern: shared.InvoiceRecurringAPIModelRecurrancePatternEnumMonthly.ToPointer(),
                RecurranceValue: sdk.Int(672048),
                StartOfRecurrance: types.MustTimeFromString("2022-04-07T07:44:57.988Z"),
                Status: shared.InvoiceRecurringAPIModelStatusEnumActive.ToPointer(),
                Title: sdk.String("Ms."),
            },
            RecurringProfileID: sdk.Int(752135),
            ShouldSendReminders: sdk.Bool(false),
            Status: shared.InvoiceCreateAPIModelStatusEnumUnpaid.ToPointer(),
            Terms: sdk.String("assumenda"),
        },
        XAuthKey: "nulla",
        XAuthSecret: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPINewJSON

Create an invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPINewJSON(ctx, operations.InvoiceAPINewJSONRequest{
        InvoiceCreateAPIModel: shared.InvoiceCreateAPIModel{
            Attachments: []shared.InvoiceCreateAttachmentAPIModel{
                shared.InvoiceCreateAttachmentAPIModel{
                    Link: sdk.String("quasi"),
                    ObfuscatedFileName: sdk.String("tempora"),
                    OriginalFileName: sdk.String("numquam"),
                    Size: sdk.Int64(131482),
                    Type: shared.InvoiceCreateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.InvoiceCreateAttachmentAPIModel{
                    Link: sdk.String("ipsa"),
                    ObfuscatedFileName: sdk.String("molestiae"),
                    OriginalFileName: sdk.String("magnam"),
                    Size: sdk.Int64(487935),
                    Type: shared.InvoiceCreateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.InvoiceCreateAttachmentAPIModel{
                    Link: sdk.String("esse"),
                    ObfuscatedFileName: sdk.String("esse"),
                    OriginalFileName: sdk.String("rem"),
                    Size: sdk.Int64(683282),
                    Type: shared.InvoiceCreateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
            },
            ClientID: sdk.Int(695626),
            ClonedFromID: sdk.Int(852635),
            CurrencyID: sdk.Int(283519),
            Duedate: types.MustTimeFromString("2022-08-15T07:50:23.042Z"),
            InvoiceCategoryID: sdk.Int(826871),
            IssuedOn: types.MustTimeFromString("2022-06-29T02:09:48.123Z"),
            Items: []shared.InvoiceCreateItemAPIModel{
                shared.InvoiceCreateItemAPIModel{
                    Cost: sdk.Float64(863.77),
                    Description: sdk.String("ipsa"),
                    DiscountPercentage: sdk.Float64(6600.4),
                    Quantity: sdk.Float64(6969.97),
                    TaxID: sdk.Int(206594),
                    TaxPercentage: sdk.Float64(7786.96),
                    WorkTypeID: sdk.Int(847276),
                },
                shared.InvoiceCreateItemAPIModel{
                    Cost: sdk.Float64(7774.08),
                    Description: sdk.String("fuga"),
                    DiscountPercentage: sdk.Float64(2594.22),
                    Quantity: sdk.Float64(1783.67),
                    TaxID: sdk.Int(373813),
                    TaxPercentage: sdk.Float64(698.59),
                    WorkTypeID: sdk.Int(587600),
                },
                shared.InvoiceCreateItemAPIModel{
                    Cost: sdk.Float64(96.88),
                    Description: sdk.String("tempora"),
                    DiscountPercentage: sdk.Float64(8920.5),
                    Quantity: sdk.Float64(3708.53),
                    TaxID: sdk.Int(133465),
                    TaxPercentage: sdk.Float64(1970.54),
                    WorkTypeID: sdk.Int(779192),
                },
                shared.InvoiceCreateItemAPIModel{
                    Cost: sdk.Float64(4598.56),
                    Description: sdk.String("recusandae"),
                    DiscountPercentage: sdk.Float64(446.12),
                    Quantity: sdk.Float64(7151.79),
                    TaxID: sdk.Int(799796),
                    TaxPercentage: sdk.Float64(4908.19),
                    WorkTypeID: sdk.Int(76956),
                },
            },
            Notes: sdk.String("nihil"),
            Number: sdk.String("totam"),
            PaymentGateways: []shared.InvoiceGatewayAPIModel{
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Courtney Mayert"),
                },
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Miss Rosie Krajcik"),
                },
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Dwayne Cronin"),
                },
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Hubert Gottlieb"),
                },
            },
            PoNumber: sdk.String("minima"),
            RecurringProfile: &shared.InvoiceRecurringAPIModel{
                DayOfMonth: sdk.Int(392676),
                DayOfWeek: shared.InvoiceRecurringAPIModelDayOfWeekEnumMonday.ToPointer(),
                DueDateInDays: sdk.Int(956406),
                EndOfRecurrance: types.MustTimeFromString("2022-10-24T16:43:59.350Z"),
                Month: sdk.Int(129412),
                RecurrancePattern: shared.InvoiceRecurringAPIModelRecurrancePatternEnumYearly.ToPointer(),
                RecurranceValue: sdk.Int(578922),
                StartOfRecurrance: types.MustTimeFromString("2022-10-25T15:36:05.649Z"),
                Status: shared.InvoiceRecurringAPIModelStatusEnumActive.ToPointer(),
                Title: sdk.String("Dr."),
            },
            RecurringProfileID: sdk.Int(882042),
            ShouldSendReminders: sdk.Bool(false),
            Status: shared.InvoiceCreateAPIModelStatusEnumDraft.ToPointer(),
            Terms: sdk.String("esse"),
        },
        XAuthKey: "quod",
        XAuthSecret: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPINewRaw

Create an invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPINewRaw(ctx, operations.InvoiceAPINewRawRequest{
        RequestBody: []byte("vero"),
        XAuthKey: "aliquid",
        XAuthSecret: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPIPdf

Return the PDF for the invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPIPdf(ctx, operations.InvoiceAPIPdfRequest{
        ID: 904045,
        SignedVersion: sdk.Bool(false),
        XAuthKey: "vel",
        XAuthSecret: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceURIAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPISendToAccountantForm

Send the provided invoice to the accountant

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
    res, err := s.Invoice.InvoiceAPISendToAccountantForm(ctx, operations.InvoiceAPISendToAccountantFormRequest{
        SendInvoiceToAccountantAPIModel: shared.SendInvoiceToAccountantAPIModel{
            ID: sdk.Int(473221),
        },
        XAuthKey: "rerum",
        XAuthSecret: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPISendToAccountantForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPISendToAccountantJSON

Send the provided invoice to the accountant

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
    res, err := s.Invoice.InvoiceAPISendToAccountantJSON(ctx, operations.InvoiceAPISendToAccountantJSONRequest{
        SendInvoiceToAccountantAPIModel: shared.SendInvoiceToAccountantAPIModel{
            ID: sdk.Int(327720),
        },
        XAuthKey: "distinctio",
        XAuthSecret: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPISendToAccountantJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPISendToAccountantRaw

Send the provided invoice to the accountant

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
    res, err := s.Invoice.InvoiceAPISendToAccountantRaw(ctx, operations.InvoiceAPISendToAccountantRawRequest{
        RequestBody: []byte("sit"),
        XAuthKey: "culpa",
        XAuthSecret: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPISendToAccountantRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPISendToClientForm

Send the provided invoice to the client

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
    res, err := s.Invoice.InvoiceAPISendToClientForm(ctx, operations.InvoiceAPISendToClientFormRequest{
        SendInvoiceToClientAPIModel: shared.SendInvoiceToClientAPIModel{
            AttachPdf: sdk.Bool(false),
            ID: sdk.Int(240020),
            InvoiceID: sdk.Int(766964),
            Message: sdk.String("consequuntur"),
            SendToSelf: sdk.Bool(false),
            Subject: sdk.String("consequatur"),
        },
        XAuthKey: "minus",
        XAuthSecret: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPISendToClientForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPISendToClientJSON

Send the provided invoice to the client

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
    res, err := s.Invoice.InvoiceAPISendToClientJSON(ctx, operations.InvoiceAPISendToClientJSONRequest{
        SendInvoiceToClientAPIModel: shared.SendInvoiceToClientAPIModel{
            AttachPdf: sdk.Bool(false),
            ID: sdk.Int(959167),
            InvoiceID: sdk.Int(232865),
            Message: sdk.String("esse"),
            SendToSelf: sdk.Bool(false),
            Subject: sdk.String("blanditiis"),
        },
        XAuthKey: "provident",
        XAuthSecret: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPISendToClientJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPISendToClientRaw

Send the provided invoice to the client

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
    res, err := s.Invoice.InvoiceAPISendToClientRaw(ctx, operations.InvoiceAPISendToClientRawRequest{
        RequestBody: []byte("nulla"),
        XAuthKey: "quas",
        XAuthSecret: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPISendToClientRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## InvoiceAPIStatus

Retrieve the status of the invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPIStatus(ctx, operations.InvoiceAPIStatusRequest{
        ID: 97468,
        XAuthKey: "a",
        XAuthSecret: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceAPIStatus200ApplicationJSONStringEnum != nil {
        // handle response
    }
}
```

## InvoiceAPIUpdateForm

Update an existing invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPIUpdateForm(ctx, operations.InvoiceAPIUpdateFormRequest{
        InvoiceUpdateAPIModel: shared.InvoiceUpdateAPIModel{
            Attachments: []shared.InvoiceUpdateAttachmentAPIModel{
                shared.InvoiceUpdateAttachmentAPIModel{
                    ID: sdk.Int(863023),
                    Link: sdk.String("possimus"),
                    ObfuscatedFileName: sdk.String("quia"),
                    OriginalFileName: sdk.String("eveniet"),
                    Size: sdk.Int64(992430),
                    Type: shared.InvoiceUpdateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
                shared.InvoiceUpdateAttachmentAPIModel{
                    ID: sdk.Int(85001),
                    Link: sdk.String("consequuntur"),
                    ObfuscatedFileName: sdk.String("quasi"),
                    OriginalFileName: sdk.String("similique"),
                    Size: sdk.Int64(633608),
                    Type: shared.InvoiceUpdateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.InvoiceUpdateAttachmentAPIModel{
                    ID: sdk.Int(949298),
                    Link: sdk.String("quae"),
                    ObfuscatedFileName: sdk.String("earum"),
                    OriginalFileName: sdk.String("vel"),
                    Size: sdk.Int64(447378),
                    Type: shared.InvoiceUpdateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
            },
            ClientID: sdk.Int(727697),
            ClonedFromID: sdk.Int(849039),
            CurrencyID: sdk.Int(742238),
            Duedate: types.MustTimeFromString("2022-09-10T22:48:07.154Z"),
            ID: sdk.Int(958983),
            InvoiceCategoryID: sdk.Int(119771),
            IssuedOn: types.MustTimeFromString("2022-07-22T23:37:21.399Z"),
            Items: []shared.InvoiceUpdateItemAPIModel{
                shared.InvoiceUpdateItemAPIModel{
                    Cost: sdk.Float64(3917.74),
                    Description: sdk.String("aut"),
                    DiscountPercentage: sdk.Float64(5318.49),
                    ID: sdk.Int(185232),
                    Quantity: sdk.Float64(8453.58),
                    TaxID: sdk.Int(401259),
                    TaxPercentage: sdk.Float64(5362.75),
                    WorkTypeID: sdk.Int(929292),
                },
                shared.InvoiceUpdateItemAPIModel{
                    Cost: sdk.Float64(6802.7),
                    Description: sdk.String("architecto"),
                    DiscountPercentage: sdk.Float64(6091.78),
                    ID: sdk.Int(945302),
                    Quantity: sdk.Float64(984.78),
                    TaxID: sdk.Int(869489),
                    TaxPercentage: sdk.Float64(920.27),
                    WorkTypeID: sdk.Int(454162),
                },
            },
            Notes: sdk.String("ipsa"),
            Number: sdk.String("minima"),
            PaymentGateways: []shared.InvoiceGatewayAPIModel{
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Sherry Morar IV"),
                },
            },
            PoNumber: sdk.String("aut"),
            RecurringProfile: &shared.InvoiceRecurringAPIModel{
                DayOfMonth: sdk.Int(513075),
                DayOfWeek: shared.InvoiceRecurringAPIModelDayOfWeekEnumWednesday.ToPointer(),
                DueDateInDays: sdk.Int(649832),
                EndOfRecurrance: types.MustTimeFromString("2022-06-16T05:23:01.658Z"),
                Month: sdk.Int(251941),
                RecurrancePattern: shared.InvoiceRecurringAPIModelRecurrancePatternEnumDaily.ToPointer(),
                RecurranceValue: sdk.Int(221161),
                StartOfRecurrance: types.MustTimeFromString("2022-06-30T04:05:24.454Z"),
                Status: shared.InvoiceRecurringAPIModelStatusEnumFinished.ToPointer(),
                Title: sdk.String("Mr."),
            },
            RecurringProfileID: sdk.Int(376226),
            ShouldSendReminders: sdk.Bool(false),
            Status: shared.InvoiceUpdateAPIModelStatusEnumDraft.ToPointer(),
            Terms: sdk.String("dignissimos"),
        },
        XAuthKey: "dicta",
        XAuthSecret: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPIUpdateJSON

Update an existing invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPIUpdateJSON(ctx, operations.InvoiceAPIUpdateJSONRequest{
        InvoiceUpdateAPIModel: shared.InvoiceUpdateAPIModel{
            Attachments: []shared.InvoiceUpdateAttachmentAPIModel{
                shared.InvoiceUpdateAttachmentAPIModel{
                    ID: sdk.Int(244651),
                    Link: sdk.String("voluptatibus"),
                    ObfuscatedFileName: sdk.String("voluptas"),
                    OriginalFileName: sdk.String("asperiores"),
                    Size: sdk.Int64(45659),
                    Type: shared.InvoiceUpdateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.InvoiceUpdateAttachmentAPIModel{
                    ID: sdk.Int(310067),
                    Link: sdk.String("consequuntur"),
                    ObfuscatedFileName: sdk.String("repellendus"),
                    OriginalFileName: sdk.String("officia"),
                    Size: sdk.Int64(807023),
                    Type: shared.InvoiceUpdateAttachmentAPIModelTypeEnumExternal.ToPointer(),
                },
                shared.InvoiceUpdateAttachmentAPIModel{
                    ID: sdk.Int(640024),
                    Link: sdk.String("asperiores"),
                    ObfuscatedFileName: sdk.String("nemo"),
                    OriginalFileName: sdk.String("quae"),
                    Size: sdk.Int64(312753),
                    Type: shared.InvoiceUpdateAttachmentAPIModelTypeEnumUploaded.ToPointer(),
                },
            },
            ClientID: sdk.Int(801836),
            ClonedFromID: sdk.Int(288398),
            CurrencyID: sdk.Int(70447),
            Duedate: types.MustTimeFromString("2022-04-26T11:54:02.741Z"),
            ID: sdk.Int(662505),
            InvoiceCategoryID: sdk.Int(380729),
            IssuedOn: types.MustTimeFromString("2022-05-14T14:45:53.115Z"),
            Items: []shared.InvoiceUpdateItemAPIModel{
                shared.InvoiceUpdateItemAPIModel{
                    Cost: sdk.Float64(9268.8),
                    Description: sdk.String("totam"),
                    DiscountPercentage: sdk.Float64(8539.4),
                    ID: sdk.Int(424089),
                    Quantity: sdk.Float64(4976.78),
                    TaxID: sdk.Int(554688),
                    TaxPercentage: sdk.Float64(4278.34),
                    WorkTypeID: sdk.Int(287051),
                },
                shared.InvoiceUpdateItemAPIModel{
                    Cost: sdk.Float64(8225.6),
                    Description: sdk.String("facilis"),
                    DiscountPercentage: sdk.Float64(7382.27),
                    ID: sdk.Int(414857),
                    Quantity: sdk.Float64(4471.44),
                    TaxID: sdk.Int(360545),
                    TaxPercentage: sdk.Float64(9689.04),
                    WorkTypeID: sdk.Int(828657),
                },
                shared.InvoiceUpdateItemAPIModel{
                    Cost: sdk.Float64(3631.61),
                    Description: sdk.String("recusandae"),
                    DiscountPercentage: sdk.Float64(3975.33),
                    ID: sdk.Int(46007),
                    Quantity: sdk.Float64(7386.83),
                    TaxID: sdk.Int(232627),
                    TaxPercentage: sdk.Float64(4490.83),
                    WorkTypeID: sdk.Int(348519),
                },
            },
            Notes: sdk.String("earum"),
            Number: sdk.String("facere"),
            PaymentGateways: []shared.InvoiceGatewayAPIModel{
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Ricardo Wisozk"),
                },
                shared.InvoiceGatewayAPIModel{
                    Name: sdk.String("Clifford Cartwright"),
                },
            },
            PoNumber: sdk.String("non"),
            RecurringProfile: &shared.InvoiceRecurringAPIModel{
                DayOfMonth: sdk.Int(228263),
                DayOfWeek: shared.InvoiceRecurringAPIModelDayOfWeekEnumSunday.ToPointer(),
                DueDateInDays: sdk.Int(489509),
                EndOfRecurrance: types.MustTimeFromString("2020-04-29T18:47:01.945Z"),
                Month: sdk.Int(233420),
                RecurrancePattern: shared.InvoiceRecurringAPIModelRecurrancePatternEnumWeekly.ToPointer(),
                RecurranceValue: sdk.Int(689768),
                StartOfRecurrance: types.MustTimeFromString("2022-12-10T16:47:53.137Z"),
                Status: shared.InvoiceRecurringAPIModelStatusEnumFinished.ToPointer(),
                Title: sdk.String("Miss"),
            },
            RecurringProfileID: sdk.Int(113816),
            ShouldSendReminders: sdk.Bool(false),
            Status: shared.InvoiceUpdateAPIModelStatusEnumVoid.ToPointer(),
            Terms: sdk.String("similique"),
        },
        XAuthKey: "tempora",
        XAuthSecret: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPIUpdateRaw

Update an existing invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPIUpdateRaw(ctx, operations.InvoiceAPIUpdateRawRequest{
        RequestBody: []byte("voluptas"),
        XAuthKey: "voluptas",
        XAuthSecret: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceFullDetailsAPIModel != nil {
        // handle response
    }
}
```

## InvoiceAPIURI

Return the unique url to the client's invoice

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.InvoiceAPIURI(ctx, operations.InvoiceAPIURIRequest{
        ID: 324405,
        XAuthKey: "nobis",
        XAuthSecret: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceURIAPIModel != nil {
        // handle response
    }
}
```

## GetAPIInvoiceAllcategories

Return all invoice categories for the account

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Invoice.GetAPIInvoiceAllcategories(ctx, operations.GetAPIInvoiceAllcategoriesRequest{
        Query: sdk.String("adipisci"),
        XAuthKey: "minus",
        XAuthSecret: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResultInvoiceCategoryAPIModel != nil {
        // handle response
    }
}
```

## PostAPIInvoiceDeletecategoryForm

Delete an existing invoice category

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
    res, err := s.Invoice.PostAPIInvoiceDeletecategoryForm(ctx, operations.PostAPIInvoiceDeletecategoryFormRequest{
        InvoiceCategoryDeleteAPIModel: shared.InvoiceCategoryDeleteAPIModel{
            ID: sdk.Int(503934),
        },
        XAuthKey: "in",
        XAuthSecret: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIInvoiceDeletecategoryForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PostAPIInvoiceDeletecategoryJSON

Delete an existing invoice category

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
    res, err := s.Invoice.PostAPIInvoiceDeletecategoryJSON(ctx, operations.PostAPIInvoiceDeletecategoryJSONRequest{
        InvoiceCategoryDeleteAPIModel: shared.InvoiceCategoryDeleteAPIModel{
            ID: sdk.Int(304468),
        },
        XAuthKey: "officiis",
        XAuthSecret: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIInvoiceDeletecategoryJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PostAPIInvoiceDeletecategoryRaw

Delete an existing invoice category

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
    res, err := s.Invoice.PostAPIInvoiceDeletecategoryRaw(ctx, operations.PostAPIInvoiceDeletecategoryRawRequest{
        RequestBody: []byte("ullam"),
        XAuthKey: "adipisci",
        XAuthSecret: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIInvoiceDeletecategoryRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PostAPIInvoiceNewcategoryForm

Create an invoice category

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
    res, err := s.Invoice.PostAPIInvoiceNewcategoryForm(ctx, operations.PostAPIInvoiceNewcategoryFormRequest{
        InvoiceCategoryCreateAPIModel: shared.InvoiceCategoryCreateAPIModel{
            Name: sdk.String("Morris Weissnat"),
        },
        XAuthKey: "corrupti",
        XAuthSecret: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceCategoryAPIModel != nil {
        // handle response
    }
}
```

## PostAPIInvoiceNewcategoryJSON

Create an invoice category

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
    res, err := s.Invoice.PostAPIInvoiceNewcategoryJSON(ctx, operations.PostAPIInvoiceNewcategoryJSONRequest{
        InvoiceCategoryCreateAPIModel: shared.InvoiceCategoryCreateAPIModel{
            Name: sdk.String("Terrell Heidenreich MD"),
        },
        XAuthKey: "sed",
        XAuthSecret: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceCategoryAPIModel != nil {
        // handle response
    }
}
```

## PostAPIInvoiceNewcategoryRaw

Create an invoice category

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
    res, err := s.Invoice.PostAPIInvoiceNewcategoryRaw(ctx, operations.PostAPIInvoiceNewcategoryRawRequest{
        RequestBody: []byte("explicabo"),
        XAuthKey: "asperiores",
        XAuthSecret: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceCategoryAPIModel != nil {
        // handle response
    }
}
```

## PostAPIInvoiceUpdatecategoryForm

Update an existing invoice category

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
    res, err := s.Invoice.PostAPIInvoiceUpdatecategoryForm(ctx, operations.PostAPIInvoiceUpdatecategoryFormRequest{
        InvoiceCategoryUpdateAPIModel: shared.InvoiceCategoryUpdateAPIModel{
            ID: sdk.Int(451822),
            Name: sdk.String("Raymond Moore"),
        },
        XAuthKey: "sed",
        XAuthSecret: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceCategoryAPIModel != nil {
        // handle response
    }
}
```

## PostAPIInvoiceUpdatecategoryJSON

Update an existing invoice category

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
    res, err := s.Invoice.PostAPIInvoiceUpdatecategoryJSON(ctx, operations.PostAPIInvoiceUpdatecategoryJSONRequest{
        InvoiceCategoryUpdateAPIModel: shared.InvoiceCategoryUpdateAPIModel{
            ID: sdk.Int(417486),
            Name: sdk.String("Benjamin Hodkiewicz III"),
        },
        XAuthKey: "sapiente",
        XAuthSecret: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceCategoryAPIModel != nil {
        // handle response
    }
}
```

## PostAPIInvoiceUpdatecategoryRaw

Update an existing invoice category

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
    res, err := s.Invoice.PostAPIInvoiceUpdatecategoryRaw(ctx, operations.PostAPIInvoiceUpdatecategoryRawRequest{
        RequestBody: []byte("illo"),
        XAuthKey: "reiciendis",
        XAuthSecret: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceCategoryAPIModel != nil {
        // handle response
    }
}
```
