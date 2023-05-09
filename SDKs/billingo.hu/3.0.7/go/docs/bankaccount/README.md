# BankAccount

## Overview

BankAccount object represents your bank account information.

### Available Operations

* [CreateBankAccount](#createbankaccount) - Create a bank account
* [DeleteBankAccount](#deletebankaccount) - Delete a bank account
* [GetBankAccount](#getbankaccount) - Retrieve a bank account
* [ListBankAccount](#listbankaccount) - List all bank account
* [UpdateBankAccount](#updatebankaccount) - Update a bank account

## CreateBankAccount

Create a new bank account. Returns a bank account object if the create is succeded.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccount.CreateBankAccount(ctx, shared.BankAccountInput{
        AccountNumber: "error",
        AccountNumberIban: sdk.String("deserunt"),
        Currency: shared.CurrencyEnumIls,
        Name: "Dr. Valerie Toy",
        NeedQr: sdk.Bool(false),
        Swift: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccount != nil {
        // handle response
    }
}
```

## DeleteBankAccount

Delete an existing bank account.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccount.DeleteBankAccount(ctx, operations.DeleteBankAccountRequest{
        ID: 477665,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBankAccount

Retrieves the details of an existing bank account.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccount.GetBankAccount(ctx, operations.GetBankAccountRequest{
        ID: 791725,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccount != nil {
        // handle response
    }
}
```

## ListBankAccount

Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccount.ListBankAccount(ctx, operations.ListBankAccountRequest{
        Page: sdk.Int64(812169),
        PerPage: sdk.Int64(528895),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccountList != nil {
        // handle response
    }
}
```

## UpdateBankAccount

Update an existing bank accounts. Returns a bank account object if the update is succeded.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccount.UpdateBankAccount(ctx, operations.UpdateBankAccountRequest{
        BankAccountInput: shared.BankAccountInput{
            AccountNumber: "iusto",
            AccountNumberIban: sdk.String("excepturi"),
            Currency: shared.CurrencyEnumIls,
            Name: "Jake Bernier MD",
            NeedQr: sdk.Bool(false),
            Swift: sdk.String("perferendis"),
        },
        ID: 368241,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccount != nil {
        // handle response
    }
}
```
