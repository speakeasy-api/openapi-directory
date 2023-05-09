# Accounts

### Available Operations

* [PostCloseAccount](#postcloseaccount) - Close an account
* [PostCreateAccount](#postcreateaccount) - Create an account
* [PostUpdateAccount](#postupdateaccount) - Update an account

## PostCloseAccount

Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.

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
    res, err := s.Accounts.PostCloseAccount(ctx, shared.CloseAccountRequest{
        AccountCode: "perspiciatis",
    }, operations.PostCloseAccountSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseAccountResponse != nil {
        // handle response
    }
}
```

## PostCreateAccount

Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#create-additional-accounts).

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
    res, err := s.Accounts.PostCreateAccount(ctx, shared.CreateAccountRequest{
        AccountHolderCode: "nihil",
        PayoutSchedule: shared.CreateAccountRequestPayoutScheduleEnumWeeklyMonToFriAu.ToPointer(),
        PayoutScheduleReason: sdk.String("voluptas"),
    }, operations.PostCreateAccountSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccountResponse != nil {
        // handle response
    }
}
```

## PostUpdateAccount

Updates the description or payout schedule of an account.

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
    res, err := s.Accounts.PostUpdateAccount(ctx, shared.UpdateAccountRequest{
        AccountCode: "alias",
        PayoutSchedule: shared.UpdatePayoutScheduleRequest{
            Action: shared.UpdatePayoutScheduleRequestActionEnumUpdate.ToPointer(),
            Reason: sdk.String("reiciendis"),
            Schedule: shared.UpdatePayoutScheduleRequestScheduleEnumDailyAu,
        },
    }, operations.PostUpdateAccountSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccountResponse != nil {
        // handle response
    }
}
```
