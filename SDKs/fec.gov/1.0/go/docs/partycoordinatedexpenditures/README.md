# PartyCoordinatedExpenditures

## Overview

Schedule F, it shows all special expenditures a national or state party committee makes in connection with the general election campaigns of federal candidates.

### Available Operations

* [GetSchedulesScheduleF](#getschedulesschedulef) - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.

* [GetSchedulesScheduleFSubID](#getschedulesschedulefsubid) - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


## GetSchedulesScheduleF


Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


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
    res, err := s.PartyCoordinatedExpenditures.GetSchedulesScheduleF(ctx, operations.GetSchedulesScheduleFRequest{
        APIKey: "eligendi",
        CandidateID: []string{
            "non",
            "magnam",
            "itaque",
            "sed",
        },
        CommitteeID: []string{
            "veniam",
            "consequuntur",
            "facere",
            "laudantium",
        },
        Cycle: []int{
            863477,
        },
        ImageNumber: []string{
            "exercitationem",
        },
        LineNumber: sdk.String("ab"),
        MaxAmount: sdk.String("velit"),
        MaxDate: types.MustDateFromString("2021-07-16"),
        MaxImageNumber: sdk.String("nisi"),
        MinAmount: sdk.String("voluptatibus"),
        MinDate: types.MustDateFromString("2022-07-01"),
        MinImageNumber: sdk.String("distinctio"),
        Page: sdk.Int(392430),
        PayeeName: []string{
            "nisi",
            "libero",
        },
        PerPage: sdk.Int(794507),
        Sort: sdk.String("facere"),
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

## GetSchedulesScheduleFSubID


Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


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
    res, err := s.PartyCoordinatedExpenditures.GetSchedulesScheduleFSubID(ctx, operations.GetSchedulesScheduleFSubIDRequest{
        APIKey: "facilis",
        Page: sdk.Int(217663),
        PerPage: sdk.Int(318917),
        SubID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
