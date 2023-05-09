# Efiling

## Overview

Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

### Available Operations

* [GetEfileFilings](#getefilefilings) - Basic information about electronic files coming into the FEC, posted as they are received.
* [GetEfileReportsHouseSenate](#getefilereportshousesenate) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [GetEfileReportsPacParty](#getefilereportspacparty) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [GetEfileReportsPresidential](#getefilereportspresidential) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


## GetEfileFilings

Basic information about electronic files coming into the FEC, posted as they are received.

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
    res, err := s.Efiling.GetEfileFilings(ctx, operations.GetEfileFilingsRequest{
        APIKey: "in",
        CommitteeID: []string{
            "quidem",
            "explicabo",
        },
        FileNumber: []int{
            604118,
            100032,
        },
        MaxReceiptDate: types.MustDateFromString("2022-01-15"),
        MinReceiptDate: types.MustDateFromString("2022-10-13"),
        Page: sdk.Int(967795),
        PerPage: sdk.Int(19300),
        QFiler: []string{
            "maiores",
            "incidunt",
            "sed",
        },
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

## GetEfileReportsHouseSenate


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


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
    res, err := s.Efiling.GetEfileReportsHouseSenate(ctx, operations.GetEfileReportsHouseSenateRequest{
        APIKey: "eius",
        CommitteeID: []string{
            "ipsum",
            "ea",
            "occaecati",
            "quos",
        },
        FileNumber: []int{
            271653,
            273009,
            455444,
            970076,
        },
        MaxReceiptDate: types.MustDateFromString("2022-12-22"),
        MinReceiptDate: types.MustDateFromString("2022-02-10"),
        Page: sdk.Int(505866),
        PerPage: sdk.Int(708609),
        QFiler: []string{
            "incidunt",
            "ipsam",
        },
        Sort: sdk.String("debitis"),
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

## GetEfileReportsPacParty


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


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
    res, err := s.Efiling.GetEfileReportsPacParty(ctx, operations.GetEfileReportsPacPartyRequest{
        APIKey: "rem",
        CommitteeID: []string{
            "nobis",
        },
        FileNumber: []int{
            333507,
            329543,
            924159,
        },
        MaxReceiptDate: types.MustDateFromString("2020-05-31"),
        MinReceiptDate: types.MustDateFromString("2022-12-14"),
        Page: sdk.Int(901483),
        PerPage: sdk.Int(253642),
        QFiler: []string{
            "in",
            "officiis",
        },
        Sort: sdk.String("beatae"),
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

## GetEfileReportsPresidential


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


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
    res, err := s.Efiling.GetEfileReportsPresidential(ctx, operations.GetEfileReportsPresidentialRequest{
        APIKey: "laudantium",
        CommitteeID: []string{
            "praesentium",
            "cum",
        },
        FileNumber: []int{
            680515,
            530089,
        },
        MaxReceiptDate: types.MustDateFromString("2021-02-10"),
        MinReceiptDate: types.MustDateFromString("2021-03-20"),
        Page: sdk.Int(204923),
        PerPage: sdk.Int(677115),
        QFiler: []string{
            "officia",
            "dolorum",
        },
        Sort: sdk.String("corrupti"),
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
