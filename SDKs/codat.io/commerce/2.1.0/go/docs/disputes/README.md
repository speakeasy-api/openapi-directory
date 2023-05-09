# Disputes

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [ListDisputes](#listdisputes) - List disputes

## ListDisputes

List commerce disputes

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
    res, err := s.Disputes.ListDisputes(ctx, operations.ListDisputesRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        OrderBy: sdk.String("-modifiedDate"),
        Page: 1,
        PageSize: sdk.Int(100),
        Query: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Disputes != nil {
        // handle response
    }
}
```
