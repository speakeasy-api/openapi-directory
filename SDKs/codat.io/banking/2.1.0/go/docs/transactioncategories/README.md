# TransactionCategories

## Overview

Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

### Available Operations

* [~~GetTransactionCategory~~](#gettransactioncategory) - Get transaction category :warning: **Deprecated**
* [ListTransactionCategories](#listtransactioncategories) - List all transaction categories

## ~~GetTransactionCategory~~

Gets a specified bank transaction category for a given company

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.TransactionCategories.GetTransactionCategory(ctx, operations.GetTransactionCategoryRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        TransactionCategoryID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionCategory != nil {
        // handle response
    }
}
```

## ListTransactionCategories

Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.

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
    res, err := s.TransactionCategories.ListTransactionCategories(ctx, operations.ListTransactionCategoriesRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        OrderBy: sdk.String("-modifiedDate"),
        Page: 1,
        PageSize: sdk.Int(100),
        Query: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionCategories != nil {
        // handle response
    }
}
```
