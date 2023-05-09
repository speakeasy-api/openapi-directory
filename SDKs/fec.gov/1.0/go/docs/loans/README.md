# Loans

## Overview

Schedule C shows all loans, endorsements and loan guarantees a committee receives or makes.

### Available Operations

* [GetSchedulesScheduleC](#getschedulesschedulec) - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.

* [GetSchedulesScheduleCSubID](#getschedulesschedulecsubid) - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


## GetSchedulesScheduleC


Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


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
    res, err := s.Loans.GetSchedulesScheduleC(ctx, operations.GetSchedulesScheduleCRequest{
        APIKey: "occaecati",
        CandidateName: []string{
            "aliquam",
            "nostrum",
        },
        CommitteeID: []string{
            "eligendi",
            "sint",
            "enim",
            "hic",
        },
        ImageNumber: []string{
            "quas",
            "totam",
            "molestias",
        },
        LastIndex: sdk.Int(484966),
        LineNumber: sdk.String("eaque"),
        LoanSourceName: []string{
            "architecto",
            "quos",
            "iste",
            "assumenda",
        },
        MaxAmount: sdk.String("tempore"),
        MaxImageNumber: sdk.String("libero"),
        MaxIncurredDate: types.MustDateFromString("2022-12-17"),
        MaxPaymentToDate: sdk.Int(963976),
        MinAmount: sdk.String("impedit"),
        MinImageNumber: sdk.String("cum"),
        MinIncurredDate: types.MustDateFromString("2022-10-06"),
        MinPaymentToDate: sdk.Int(903150),
        Page: sdk.Int(644420),
        PerPage: sdk.Int(42924),
        Sort: sdk.String("quis"),
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

## GetSchedulesScheduleCSubID


Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


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
    res, err := s.Loans.GetSchedulesScheduleCSubID(ctx, operations.GetSchedulesScheduleCSubIDRequest{
        APIKey: "veniam",
        Page: sdk.Int(727481),
        PerPage: sdk.Int(99733),
        Sort: sdk.String("cupiditate"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        SubID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
