# LedgerAccounts

### Available Operations

* [LedgerAccountsAdd](#ledgeraccountsadd) - Create Ledger Account
* [LedgerAccountsAll](#ledgeraccountsall) - List Ledger Accounts
* [LedgerAccountsDelete](#ledgeraccountsdelete) - Delete Ledger Account
* [LedgerAccountsOne](#ledgeraccountsone) - Get Ledger Account
* [LedgerAccountsUpdate](#ledgeraccountsupdate) - Update Ledger Account

## LedgerAccountsAdd

Create Ledger Account

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
    res, err := s.LedgerAccounts.LedgerAccountsAdd(ctx, operations.LedgerAccountsAddRequest{
        RequestBody: map[string]interface{}{
            "provident": "a",
            "nulla": "quas",
            "esse": "quasi",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "a",
        XApideckConsumerID: "error",
        XApideckServiceID: sdk.String("sint"),
    }, operations.LedgerAccountsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLedgerAccountResponse != nil {
        // handle response
    }
}
```

## LedgerAccountsAll

List Ledger Accounts

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
    res, err := s.LedgerAccounts.LedgerAccountsAll(ctx, operations.LedgerAccountsAllRequest{
        Cursor: sdk.String("pariatur"),
        Fields: sdk.String("possimus"),
        Limit: sdk.Int64(157632),
        PassThrough: map[string]interface{}{
            "asperiores": "facere",
            "veritatis": "consequuntur",
            "quasi": "similique",
            "culpa": "aliquid",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "tenetur",
        XApideckConsumerID: "quae",
        XApideckServiceID: sdk.String("earum"),
    }, operations.LedgerAccountsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLedgerAccountsResponse != nil {
        // handle response
    }
}
```

## LedgerAccountsDelete

Delete Ledger Account

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
    res, err := s.LedgerAccounts.LedgerAccountsDelete(ctx, operations.LedgerAccountsDeleteRequest{
        ID: "674bdb04-f157-4560-82d6-8ea19f1d1705",
        Raw: sdk.Bool(false),
        XApideckAppID: "veritatis",
        XApideckConsumerID: "consectetur",
        XApideckServiceID: sdk.String("adipisci"),
    }, operations.LedgerAccountsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLedgerAccountResponse != nil {
        // handle response
    }
}
```

## LedgerAccountsOne

Get Ledger Account

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
    res, err := s.LedgerAccounts.LedgerAccountsOne(ctx, operations.LedgerAccountsOneRequest{
        Fields: sdk.String("iste"),
        ID: "d08086a1-8403-494c-a607-1f93f5f0642d",
        Raw: sdk.Bool(false),
        XApideckAppID: "officia",
        XApideckConsumerID: "maxime",
        XApideckServiceID: sdk.String("dignissimos"),
    }, operations.LedgerAccountsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLedgerAccountResponse != nil {
        // handle response
    }
}
```

## LedgerAccountsUpdate

Update Ledger Account

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
    res, err := s.LedgerAccounts.LedgerAccountsUpdate(ctx, operations.LedgerAccountsUpdateRequest{
        RequestBody: map[string]interface{}{
            "asperiores": "nemo",
            "quae": "quaerat",
            "porro": "quod",
        },
        ID: "413aa63a-ae8d-4678-a4db-b675fd5e60b3",
        Raw: sdk.Bool(false),
        XApideckAppID: "in",
        XApideckConsumerID: "exercitationem",
        XApideckServiceID: sdk.String("earum"),
    }, operations.LedgerAccountsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLedgerAccountResponse != nil {
        // handle response
    }
}
```
