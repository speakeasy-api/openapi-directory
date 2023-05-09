# Payments

## Overview

Operations about payments

### Available Operations

* [GetPayments](#getpayments) - List Payments
* [GetPaymentsID](#getpaymentsid) - Show Payment

## GetPayments

List Payments

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
    res, err := s.Payments.GetPayments(ctx, operations.GetPaymentsRequest{
        Cursor: sdk.String("veniam"),
        PerPage: sdk.Int(29100),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLineItemEntities != nil {
        // handle response
    }
}
```

## GetPaymentsID

Show Payment

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
    res, err := s.Payments.GetPaymentsID(ctx, operations.GetPaymentsIDRequest{
        ID: 790840,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLineItemEntity != nil {
        // handle response
    }
}
```
