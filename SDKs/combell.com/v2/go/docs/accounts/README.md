# Accounts

### Available Operations

* [CreateAccount](#createaccount) - Create a new account
* [GetAccount](#getaccount) - Get a specific account
* [GetAccounts](#getaccounts) - Overview of accounts

## CreateAccount

The creation of an account requires some background processing. There is no instant feedback of the creation status.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CreateAccount(ctx, shared.CreateAccount{
        FtpPassword: sdk.String("quibusdam"),
        Identifier: sdk.String("unde"),
        ServicepackID: sdk.Int(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAccount

Get a specific account

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
    res, err := s.Accounts.GetAccount(ctx, operations.GetAccountRequest{
        AccountIDPathParameter: "corrupti",
        AccountIDQueryParameter: 847252,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountDetail != nil {
        // handle response
    }
}
```

## GetAccounts

Overview of accounts

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
    res, err := s.Accounts.GetAccounts(ctx, operations.GetAccountsRequest{
        AssetType: shared.AssetTypeEnumMysql.ToPointer(),
        Identifier: sdk.String("error"),
        Skip: sdk.Int(645894),
        Take: sdk.Int(384382),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```
