# Expenses

## Overview

Create expense datasets and upload receipts.

### Available Operations

* [CreateExpenseDataset](#createexpensedataset) - Create expense-transactions
* [UploadAttachment](#uploadattachment) - Upload attachment

## CreateExpenseDataset

Create an expense transaction

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Expenses.CreateExpenseDataset(ctx, operations.CreateExpenseDatasetRequest{
        CreateExpenseRequest: &shared.CreateExpenseRequest{
            Items: []shared.ExpenseTransaction{
                shared.ExpenseTransaction{
                    Currency: "GBP",
                    CurrencyRate: sdk.Float64(5928.45),
                    ID: "4d7c6929-7770-412b-91bb-44d3bc71d111",
                    IssueDate: "2022-10-23T00:00:00Z",
                    Lines: []shared.ExpenseTransactionLine{
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                    },
                    MerchantName: sdk.String("Amazon UK"),
                    Notes: sdk.String("APPLE.COM/BILL - 09001077498 - Card Ending: 4590"),
                    Type: shared.ExpenseTransactionTypeEnumPayment,
                },
                shared.ExpenseTransaction{
                    Currency: "GBP",
                    CurrencyRate: sdk.Float64(5448.83),
                    ID: "4d7c6929-7770-412b-91bb-44d3bc71d111",
                    IssueDate: "2022-10-23T00:00:00Z",
                    Lines: []shared.ExpenseTransactionLine{
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                    },
                    MerchantName: sdk.String("Amazon UK"),
                    Notes: sdk.String("APPLE.COM/BILL - 09001077498 - Card Ending: 4590"),
                    Type: shared.ExpenseTransactionTypeEnumPayment,
                },
                shared.ExpenseTransaction{
                    Currency: "GBP",
                    CurrencyRate: sdk.Float64(4375.87),
                    ID: "4d7c6929-7770-412b-91bb-44d3bc71d111",
                    IssueDate: "2022-10-23T00:00:00Z",
                    Lines: []shared.ExpenseTransactionLine{
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                        shared.ExpenseTransactionLine{
                            AccountRef: shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            NetAmount: 110.42,
                            TaxAmount: 14.43,
                            TaxRateRef: &shared.RecordRef{
                                ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                            },
                            TrackingRefs: []shared.RecordRef{
                                shared.RecordRef{
                                    ID: sdk.String("40e3e57c-2322-4898-966c-ca41adfd23fd"),
                                },
                            },
                        },
                    },
                    MerchantName: sdk.String("Amazon UK"),
                    Notes: sdk.String("APPLE.COM/BILL - 09001077498 - Card Ending: 4590"),
                    Type: shared.ExpenseTransactionTypeEnumPayment,
                },
            },
        },
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExpenseResponse != nil {
        // handle response
    }
}
```

## UploadAttachment

Creates an attachment in the accounting software against the given transactionId

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Expenses.UploadAttachment(ctx, operations.UploadAttachmentRequest{
        RequestBody: &operations.UploadAttachmentRequestBody{
            Content: []byte("delectus"),
            RequestBody: "tempora",
        },
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        SyncID: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
        TransactionID: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```
