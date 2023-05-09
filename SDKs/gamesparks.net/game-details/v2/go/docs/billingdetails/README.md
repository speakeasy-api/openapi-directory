# BillingDetails

## Overview

Billing Details Rest V 2 Controller

### Available Operations

* [GetBillingDetails](#getbillingdetails) - Retrieves the Billing Details
* [PutBillingDetails](#putbillingdetails) - Updates the Billing Details

## GetBillingDetails

Retrieves the Billing Details.

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
    res, err := s.BillingDetails.GetBillingDetails(ctx, operations.GetBillingDetailsRequest{
        APIKey: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingDetailsModel != nil {
        // handle response
    }
}
```

## PutBillingDetails

Updates the Billing Details.

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
    res, err := s.BillingDetails.PutBillingDetails(ctx, operations.PutBillingDetailsRequest{
        BillingDetailsModel: shared.BillingDetailsModel{
            Building: "excepturi",
            City: "Fort Rocky",
            CompanyName: "ab",
            Country: "Greenland",
            Email1: "veritatis",
            Email2: sdk.String("deserunt"),
            Email3: sdk.String("perferendis"),
            FirstName1: "ipsam",
            FirstName2: sdk.String("repellendus"),
            FirstName3: sdk.String("sapiente"),
            LastName1: "quo",
            LastName2: sdk.String("odit"),
            LastName3: sdk.String("at"),
            Postcode: "94784-5761",
            State: sdk.String("nam"),
            Street: "5159 Lebsack Common",
            TaxNumber: sdk.String("commodi"),
        },
        APIKey: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingDetailsModel != nil {
        // handle response
    }
}
```
