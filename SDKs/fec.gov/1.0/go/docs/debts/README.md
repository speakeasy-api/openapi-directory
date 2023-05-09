# Debts

## Overview

Schedule D, it shows debts and obligations owed to or by the committee that are required to be disclosed.

### Available Operations

* [GetSchedulesScheduleD](#getschedulesscheduled) - 
Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.



* [GetSchedulesScheduleDSubID](#getschedulesscheduledsubid) - 
Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.




## GetSchedulesScheduleD


Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.




### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Debts.GetSchedulesScheduleD(ctx, operations.GetSchedulesScheduleDRequest{
        APIKey: "saepe",
        CandidateID: []string{
            "atque",
            "et",
            "esse",
        },
        CommitteeID: []string{
            "accusamus",
            "veritatis",
            "esse",
            "quod",
        },
        CreditorDebtorName: []string{
            "vero",
            "aliquid",
            "quasi",
        },
        ImageNumber: []string{
            "vel",
            "harum",
            "molestiae",
            "rerum",
        },
        MaxAmountIncurred: sdk.Float32(5801.97),
        MaxAmountOutstandingBeginning: sdk.Float32(3277.2),
        MaxAmountOutstandingClose: sdk.Float32(7162.44),
        MaxDate: types.MustDateFromString("2022-12-02"),
        MaxImageNumber: sdk.String("culpa"),
        MaxPaymentPeriod: sdk.Float32(7313.98),
        MinAmountIncurred: sdk.Float32(2400.2),
        MinAmountOutstandingBeginning: sdk.Float32(7669.64),
        MinAmountOutstandingClose: sdk.Float32(1605.38),
        MinDate: types.MustDateFromString("2022-03-16"),
        MinImageNumber: sdk.String("quaerat"),
        MinPaymentPeriod: sdk.Float32(9591.67),
        NatureOfDebt: sdk.String("consectetur"),
        Page: sdk.Int(458139),
        PerPage: sdk.Int(503427),
        Sort: sdk.String("provident"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSchedulesScheduleDSubID


Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.




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
            APIKeyHeaderAuth: "YOUR_API_KEY_HERE",
            APIKeyQueryAuth: "YOUR_API_KEY_HERE",
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Debts.GetSchedulesScheduleDSubID(ctx, operations.GetSchedulesScheduleDSubIDRequest{
        APIKey: "a",
        Page: sdk.Int(857723),
        PerPage: sdk.Int(557811),
        Sort: sdk.String("esse"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SubID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
