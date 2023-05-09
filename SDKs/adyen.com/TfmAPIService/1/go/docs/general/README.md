# General

### Available Operations

* [PostAssignTerminals](#postassignterminals) - Assign terminals
* [PostFindTerminal](#postfindterminal) - Get the account or store of a terminal
* [PostGetStoresUnderAccount](#postgetstoresunderaccount) - Get the stores of an account
* [PostGetTerminalDetails](#postgetterminaldetails) - Get the details of a terminal
* [PostGetTerminalsUnderAccount](#postgetterminalsunderaccount) - Get the list of terminals

## PostAssignTerminals

Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostAssignTerminals(ctx, shared.AssignTerminalsRequest{
        CompanyAccount: "vel",
        MerchantAccount: sdk.String("error"),
        MerchantInventory: sdk.Bool(false),
        Store: sdk.String("deserunt"),
        Terminals: []string{
            "iure",
            "magnam",
        },
    }, operations.PostAssignTerminalsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignTerminalsResponse != nil {
        // handle response
    }
}
```

## PostFindTerminal

Returns the company account, merchant account, or store that a payment terminal is assigned to.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostFindTerminal(ctx, shared.FindTerminalRequest{
        Terminal: "debitis",
    }, operations.PostFindTerminalSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindTerminalResponse != nil {
        // handle response
    }
}
```

## PostGetStoresUnderAccount

Returns a list of stores associated with a company account or a merchant account, including the status of each store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostGetStoresUnderAccount(ctx, shared.GetStoresUnderAccountRequest{
        CompanyAccount: "ipsa",
        MerchantAccount: sdk.String("delectus"),
    }, operations.PostGetStoresUnderAccountSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStoresUnderAccountResponse != nil {
        // handle response
    }
}
```

## PostGetTerminalDetails

Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostGetTerminalDetails(ctx, shared.GetTerminalDetailsRequest{
        Terminal: "tempora",
    }, operations.PostGetTerminalDetailsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTerminalDetailsResponse != nil {
        // handle response
    }
}
```

## PostGetTerminalsUnderAccount

Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostGetTerminalsUnderAccount(ctx, shared.GetTerminalsUnderAccountRequest{
        CompanyAccount: "suscipit",
        MerchantAccount: sdk.String("molestiae"),
        Store: sdk.String("minus"),
    }, operations.PostGetTerminalsUnderAccountSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTerminalsUnderAccountResponse != nil {
        // handle response
    }
}
```
