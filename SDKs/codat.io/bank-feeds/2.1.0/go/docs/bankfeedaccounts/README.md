# BankFeedAccounts

## Overview

Bank feed bank accounts

### Available Operations

* [CreateBankFeed](#createbankfeed) - Create bank feed bank accounts
* [GetBankFeeds](#getbankfeeds) - List bank feed bank accounts
* [UpdateBankFeed](#updatebankfeed) - Update bank feed bank account

## CreateBankFeed

Put BankFeed BankAccounts for a single data source connected to a single company.

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankFeedAccounts.CreateBankFeed(ctx, operations.CreateBankFeedRequest{
        RequestBody: []shared.BankFeedAccount{
            shared.BankFeedAccount{
                AccountName: sdk.String("quos"),
                AccountNumber: sdk.String("perferendis"),
                AccountType: sdk.String("magni"),
                Balance: sdk.Float64(8289.4),
                Currency: sdk.String("ipsam"),
                FeedStartDate: sdk.String("2022-10-23T00:00:00Z"),
                ID: "02a94bb4-f63c-4969-a9a3-efa77dfb14cd",
                ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                SortCode: sdk.String("ea"),
                Status: sdk.String("aliquid"),
            },
            shared.BankFeedAccount{
                AccountName: sdk.String("laborum"),
                AccountNumber: sdk.String("accusamus"),
                AccountType: sdk.String("non"),
                Balance: sdk.Float64(5812.73),
                Currency: sdk.String("enim"),
                FeedStartDate: sdk.String("2022-10-23T00:00:00Z"),
                ID: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
                ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                SortCode: sdk.String("et"),
                Status: sdk.String("excepturi"),
            },
            shared.BankFeedAccount{
                AccountName: sdk.String("ullam"),
                AccountNumber: sdk.String("provident"),
                AccountType: sdk.String("quos"),
                Balance: sdk.Float64(5743.25),
                Currency: sdk.String("accusantium"),
                FeedStartDate: sdk.String("2022-10-23T00:00:00Z"),
                ID: "afa563e2-516f-4e4c-8b71-1e5b7fd2ed02",
                ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
                SortCode: sdk.String("praesentium"),
                Status: sdk.String("natus"),
            },
        },
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankFeedAccounts != nil {
        // handle response
    }
}
```

## GetBankFeeds

Get BankFeed BankAccounts for a single data source connected to a single company.

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
    res, err := s.BankFeedAccounts.GetBankFeeds(ctx, operations.GetBankFeedsRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankFeedAccounts != nil {
        // handle response
    }
}
```

## UpdateBankFeed

Update a single BankFeed BankAccount for a single data source connected to a single company.

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
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankFeedAccounts.UpdateBankFeed(ctx, operations.UpdateBankFeedRequest{
        BankFeedAccount: &shared.BankFeedAccount{
            AccountName: sdk.String("magni"),
            AccountNumber: sdk.String("sunt"),
            AccountType: sdk.String("quo"),
            Balance: sdk.Float64(8480.09),
            Currency: sdk.String("pariatur"),
            FeedStartDate: sdk.String("2022-10-23T00:00:00Z"),
            ID: "c692601f-b576-4b0d-9f0d-30c5fbb25870",
            ModifiedDate: sdk.String("2022-10-23T00:00:00Z"),
            SortCode: sdk.String("quis"),
            Status: sdk.String("nesciunt"),
        },
        AccountID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankFeedAccount != nil {
        // handle response
    }
}
```
