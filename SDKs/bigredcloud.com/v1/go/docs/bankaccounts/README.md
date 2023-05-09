# BankAccounts

### Available Operations

* [BankAccountsDelete](#bankaccountsdelete) - Removes an existing Bank Account.
* [BankAccountsGet](#bankaccountsget) - Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.
* [BankAccountsPost](#bankaccountspost) - Creates a new Bank Account.
* [BankAccountsProcessBatch](#bankaccountsprocessbatch) - Processes a batch of Bank Accounts.
* [BankAccountsPut](#bankaccountsput) - Updates an existing Bank Account.
* [GetV1BankAccountsID](#getv1bankaccountsid) - Returns information about a single Bank Account.

## BankAccountsDelete

Removes an existing Bank Account.

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
    res, err := s.BankAccounts.BankAccountsDelete(ctx, operations.BankAccountsDeleteRequest{
        ID: 548814,
        Timestamp: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccountsDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BankAccountsGet

Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BankAccounts.BankAccountsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultBankAccountQueryDto != nil {
        // handle response
    }
}
```

## BankAccountsPost

Creates a new Bank Account.

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
    res, err := s.BankAccounts.BankAccountsPost(ctx, shared.BankAccountDto{
        AcCode: sdk.String("distinctio"),
        AccountName: sdk.String("quibusdam"),
        AccountNumber: sdk.String("unde"),
        Address: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        BankFeedSource: sdk.Int(645894),
        BusinessIdentifierCodes: sdk.String("suscipit"),
        CategoryID: sdk.Int64(437587),
        CreditorScheme: sdk.String("magnam"),
        Details: sdk.String("debitis"),
        ID: sdk.Int64(56713),
        InternationalBankAccountNumber: sdk.String("delectus"),
        IsDefaultBank: sdk.Bool(false),
        LastChq: sdk.String("tempora"),
        NominalAcCode: sdk.String("suscipit"),
        OBalance: sdk.Float64(4776.65),
        SortCode: sdk.String("minus"),
        Timestamp: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccountsPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BankAccountsProcessBatch

Processes a batch of Bank Accounts.

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
    res, err := s.BankAccounts.BankAccountsProcessBatch(ctx, []shared.BatchItemBankAccountDto{
        shared.BatchItemBankAccountDto{
            Item: &shared.BankAccountDto{
                AcCode: sdk.String("iusto"),
                AccountName: sdk.String("excepturi"),
                AccountNumber: sdk.String("nisi"),
                Address: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
                BankFeedSource: sdk.Int(648172),
                BusinessIdentifierCodes: sdk.String("perferendis"),
                CategoryID: sdk.Int64(368241),
                CreditorScheme: sdk.String("repellendus"),
                Details: sdk.String("sapiente"),
                ID: sdk.Int64(778157),
                InternationalBankAccountNumber: sdk.String("odit"),
                IsDefaultBank: sdk.Bool(false),
                LastChq: sdk.String("at"),
                NominalAcCode: sdk.String("at"),
                OBalance: sdk.Float64(9786.19),
                SortCode: sdk.String("molestiae"),
                Timestamp: sdk.String("quod"),
            },
            OpCode: shared.BatchItemBankAccountDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemBankAccountDto{
            Item: &shared.BankAccountDto{
                AcCode: sdk.String("esse"),
                AccountName: sdk.String("totam"),
                AccountNumber: sdk.String("porro"),
                Address: []string{
                    "dicta",
                    "nam",
                    "officia",
                },
                BankFeedSource: sdk.Int(582020),
                BusinessIdentifierCodes: sdk.String("fugit"),
                CategoryID: sdk.Int64(537373),
                CreditorScheme: sdk.String("hic"),
                Details: sdk.String("optio"),
                ID: sdk.Int64(521848),
                InternationalBankAccountNumber: sdk.String("beatae"),
                IsDefaultBank: sdk.Bool(false),
                LastChq: sdk.String("commodi"),
                NominalAcCode: sdk.String("molestiae"),
                OBalance: sdk.Float64(2645.55),
                SortCode: sdk.String("qui"),
                Timestamp: sdk.String("impedit"),
            },
            OpCode: shared.BatchItemBankAccountDtoOpCodeEnumThree.ToPointer(),
        },
        shared.BatchItemBankAccountDto{
            Item: &shared.BankAccountDto{
                AcCode: sdk.String("esse"),
                AccountName: sdk.String("ipsum"),
                AccountNumber: sdk.String("excepturi"),
                Address: []string{
                    "perferendis",
                },
                BankFeedSource: sdk.Int(324141),
                BusinessIdentifierCodes: sdk.String("natus"),
                CategoryID: sdk.Int64(149675),
                CreditorScheme: sdk.String("iste"),
                Details: sdk.String("dolor"),
                ID: sdk.Int64(616934),
                InternationalBankAccountNumber: sdk.String("laboriosam"),
                IsDefaultBank: sdk.Bool(false),
                LastChq: sdk.String("hic"),
                NominalAcCode: sdk.String("saepe"),
                OBalance: sdk.Float64(6818.2),
                SortCode: sdk.String("in"),
                Timestamp: sdk.String("corporis"),
            },
            OpCode: shared.BatchItemBankAccountDtoOpCodeEnumTwo.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccountsProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BankAccountsPut

Updates an existing Bank Account.

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
    res, err := s.BankAccounts.BankAccountsPut(ctx, operations.BankAccountsPutRequest{
        BankAccountDto: shared.BankAccountDto{
            AcCode: sdk.String("iure"),
            AccountName: sdk.String("saepe"),
            AccountNumber: sdk.String("quidem"),
            Address: []string{
                "ipsa",
            },
            BankFeedSource: sdk.Int(969810),
            BusinessIdentifierCodes: sdk.String("est"),
            CategoryID: sdk.Int64(653140),
            CreditorScheme: sdk.String("laborum"),
            Details: sdk.String("dolores"),
            ID: sdk.Int64(210382),
            InternationalBankAccountNumber: sdk.String("corporis"),
            IsDefaultBank: sdk.Bool(false),
            LastChq: sdk.String("explicabo"),
            NominalAcCode: sdk.String("nobis"),
            OBalance: sdk.Float64(3154.28),
            SortCode: sdk.String("omnis"),
            Timestamp: sdk.String("nemo"),
        },
        ID: 325047,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccountsPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1BankAccountsID

Returns information about a single Bank Account.

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
    res, err := s.BankAccounts.GetV1BankAccountsID(ctx, operations.GetV1BankAccountsIDRequest{
        ID: 570197,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccountDto != nil {
        // handle response
    }
}
```
