# JournalEntries

### Available Operations

* [JournalEntriesAdd](#journalentriesadd) - Create Journal Entry
* [JournalEntriesAll](#journalentriesall) - List Journal Entries
* [JournalEntriesDelete](#journalentriesdelete) - Delete Journal Entry
* [JournalEntriesOne](#journalentriesone) - Get Journal Entry
* [JournalEntriesUpdate](#journalentriesupdate) - Update Journal Entry

## JournalEntriesAdd

Create Journal Entry

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
    res, err := s.JournalEntries.JournalEntriesAdd(ctx, operations.JournalEntriesAddRequest{
        JournalEntryInput: shared.JournalEntryInput{
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            JournalSymbol: sdk.String("IND"),
            LineItems: []shared.JournalEntryLineItemInput{
                shared.JournalEntryLineItemInput{
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    LedgerAccount: shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: 27500,
                    TrackingCategory: &shared.LinkedTrackingCategory{
                        ID: sdk.String("123456"),
                        Name: sdk.String("New York"),
                    },
                    Type: shared.JournalEntryLineItemTypeEnumDebit,
                },
                shared.JournalEntryLineItemInput{
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    LedgerAccount: shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: 27500,
                    TrackingCategory: &shared.LinkedTrackingCategory{
                        ID: sdk.String("123456"),
                        Name: sdk.String("New York"),
                    },
                    Type: shared.JournalEntryLineItemTypeEnumDebit,
                },
                shared.JournalEntryLineItemInput{
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    LedgerAccount: shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: 27500,
                    TrackingCategory: &shared.LinkedTrackingCategory{
                        ID: sdk.String("123456"),
                        Name: sdk.String("New York"),
                    },
                    Type: shared.JournalEntryLineItemTypeEnumDebit,
                },
                shared.JournalEntryLineItemInput{
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    LedgerAccount: shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: 27500,
                    TrackingCategory: &shared.LinkedTrackingCategory{
                        ID: sdk.String("123456"),
                        Name: sdk.String("New York"),
                    },
                    Type: shared.JournalEntryLineItemTypeEnumDebit,
                },
            },
            Memo: sdk.String("Thank you for your business and have a great day!"),
            PostedAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            RowVersion: sdk.String("1-12345"),
            Title: sdk.String("Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "voluptas",
        XApideckConsumerID: "libero",
        XApideckServiceID: sdk.String("quasi"),
    }, operations.JournalEntriesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateJournalEntryResponse != nil {
        // handle response
    }
}
```

## JournalEntriesAll

List Journal Entries

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
    res, err := s.JournalEntries.JournalEntriesAll(ctx, operations.JournalEntriesAllRequest{
        Cursor: sdk.String("tempora"),
        Fields: sdk.String("numquam"),
        Limit: sdk.Int64(131482),
        PassThrough: map[string]interface{}{
            "ipsa": "molestiae",
            "magnam": "odio",
            "eius": "esse",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "esse",
        XApideckConsumerID: "rem",
        XApideckServiceID: sdk.String("fuga"),
    }, operations.JournalEntriesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJournalEntriesResponse != nil {
        // handle response
    }
}
```

## JournalEntriesDelete

Delete Journal Entry

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
    res, err := s.JournalEntries.JournalEntriesDelete(ctx, operations.JournalEntriesDeleteRequest{
        ID: "7bd466d2-8c10-4ab3-8dca-4251904e523c",
        Raw: sdk.Bool(false),
        XApideckAppID: "esse",
        XApideckConsumerID: "recusandae",
        XApideckServiceID: sdk.String("aperiam"),
    }, operations.JournalEntriesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJournalEntryResponse != nil {
        // handle response
    }
}
```

## JournalEntriesOne

Get Journal Entry

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
    res, err := s.JournalEntries.JournalEntriesOne(ctx, operations.JournalEntriesOneRequest{
        Fields: sdk.String("distinctio"),
        ID: "c7178e47-96f2-4a70-8688-282aa482562f",
        Raw: sdk.Bool(false),
        XApideckAppID: "consequuntur",
        XApideckConsumerID: "ratione",
        XApideckServiceID: sdk.String("explicabo"),
    }, operations.JournalEntriesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJournalEntryResponse != nil {
        // handle response
    }
}
```

## JournalEntriesUpdate

Update Journal Entry

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
    res, err := s.JournalEntries.JournalEntriesUpdate(ctx, operations.JournalEntriesUpdateRequest{
        JournalEntryInput: shared.JournalEntryInput{
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CurrencyRate: sdk.Float64(0.69),
            JournalSymbol: sdk.String("IND"),
            LineItems: []shared.JournalEntryLineItemInput{
                shared.JournalEntryLineItemInput{
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    LedgerAccount: shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: 27500,
                    TrackingCategory: &shared.LinkedTrackingCategory{
                        ID: sdk.String("123456"),
                        Name: sdk.String("New York"),
                    },
                    Type: shared.JournalEntryLineItemTypeEnumDebit,
                },
                shared.JournalEntryLineItemInput{
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    LedgerAccount: shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: 27500,
                    TrackingCategory: &shared.LinkedTrackingCategory{
                        ID: sdk.String("123456"),
                        Name: sdk.String("New York"),
                    },
                    Type: shared.JournalEntryLineItemTypeEnumDebit,
                },
                shared.JournalEntryLineItemInput{
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    LedgerAccount: shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: 27500,
                    TrackingCategory: &shared.LinkedTrackingCategory{
                        ID: sdk.String("123456"),
                        Name: sdk.String("New York"),
                    },
                    Type: shared.JournalEntryLineItemTypeEnumDebit,
                },
                shared.JournalEntryLineItemInput{
                    Description: sdk.String("Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection."),
                    LedgerAccount: shared.LinkedLedgerAccountInput{
                        Code: sdk.String("453"),
                        ID: sdk.String("123456"),
                        NominalCode: sdk.String("N091"),
                    },
                    TaxAmount: sdk.Float64(27500),
                    TaxRate: &shared.LinkedTaxRateInput{
                        ID: sdk.String("123456"),
                    },
                    TotalAmount: 27500,
                    TrackingCategory: &shared.LinkedTrackingCategory{
                        ID: sdk.String("123456"),
                        Name: sdk.String("New York"),
                    },
                    Type: shared.JournalEntryLineItemTypeEnumDebit,
                },
            },
            Memo: sdk.String("Thank you for your business and have a great day!"),
            PostedAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            RowVersion: sdk.String("1-12345"),
            Title: sdk.String("Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry"),
        },
        ID: "9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4",
        Raw: sdk.Bool(false),
        XApideckAppID: "sapiente",
        XApideckConsumerID: "consectetur",
        XApideckServiceID: sdk.String("esse"),
    }, operations.JournalEntriesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateJournalEntryResponse != nil {
        // handle response
    }
}
```
