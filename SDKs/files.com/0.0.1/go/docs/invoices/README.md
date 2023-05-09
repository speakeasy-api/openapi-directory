# Invoices

## Overview

Operations about invoices

### Available Operations

* [GetInvoices](#getinvoices) - List Invoices
* [GetInvoicesID](#getinvoicesid) - Show Invoice

## GetInvoices

List Invoices

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
    res, err := s.Invoices.GetInvoices(ctx, operations.GetInvoicesRequest{
        Cursor: sdk.String("quos"),
        PerPage: sdk.Int(975752),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLineItemEntities != nil {
        // handle response
    }
}
```

## GetInvoicesID

Show Invoice

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
    res, err := s.Invoices.GetInvoicesID(ctx, operations.GetInvoicesIDRequest{
        ID: 271653,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLineItemEntity != nil {
        // handle response
    }
}
```
