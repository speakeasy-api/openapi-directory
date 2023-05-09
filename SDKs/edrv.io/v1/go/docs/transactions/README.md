# Transactions

### Available Operations

* [GetTransaction](#gettransaction) - Get a specific transaction
* [GetTransactionCost](#gettransactioncost) - Get a specific transaction's cost
* [GetTransactions](#gettransactions) - Get a list of transactions

## GetTransaction

Get a specific transaction

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransaction(ctx, operations.GetTransactionRequest{
        ID: "0ff2a54a-31e9-4476-8a3e-865e7956f925",
        IncludeChargestation: sdk.Bool(false),
        IncludeConnector: sdk.Bool(false),
        IncludeDriver: sdk.Bool(false),
        IncludeEvse: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeRate: sdk.Bool(false),
        IncludeReservation: sdk.Bool(false),
        IncludeToken: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTransactionCost

Get a specific transaction's cost

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactionCost(ctx, operations.GetTransactionCostRequest{
        ID: "1a5a9da6-60ff-457b-baad-4f9efc1b4512",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTransactions

Get a list of transactions

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactions(ctx, operations.GetTransactionsRequest{
        CreatedAtDollarGte: types.MustTimeFromString("2022-10-24T09:55:31.770Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-10-04T16:56:27.065Z"),
        IncludeChargestation: sdk.Bool(false),
        IncludeConnector: sdk.Bool(false),
        IncludeDriver: sdk.Bool(false),
        IncludeEvse: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
        IncludeRate: sdk.Bool(false),
        IncludeReservation: sdk.Bool(false),
        IncludeToken: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(137251),
        PaginatePage: sdk.String("eum"),
        SortBy: sdk.String("eius"),
        SortOrder: shared.SortOrder1EnumAsc.ToPointer(),
        Status: operations.GetTransactionsStatusEnumEnded.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2022-06-18T13:06:11.480Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2021-09-13T13:26:04.826Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTransactions200ApplicationJSONObject != nil {
        // handle response
    }
}
```
