# FilerResources

## Overview

Useful tools for those who file with the FEC. 

 Look up RAD analyst with telephone extension by committee_id.

### Available Operations

* [GetRadAnalyst](#getradanalyst) - 
Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).

* [GetStateElectionOffice](#getstateelectionoffice) - 
State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.


## GetRadAnalyst


Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).


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
    res, err := s.FilerResources.GetRadAnalyst(ctx, operations.GetRadAnalystRequest{
        AnalystID: []int{
            813679,
            685092,
        },
        AnalystShortID: []int{
            648598,
            333965,
            29100,
        },
        APIKey: "quisquam",
        CommitteeID: []string{
            "quasi",
            "atque",
            "reprehenderit",
            "asperiores",
        },
        Email: []string{
            "suscipit",
            "quidem",
            "maxime",
        },
        MaxAssignmentUpdateDate: types.MustDateFromString("2022-07-16"),
        MinAssignmentUpdateDate: types.MustDateFromString("2022-03-05"),
        Name: []string{
            "atque",
            "error",
        },
        Page: sdk.Int(887265),
        PerPage: sdk.Int(886961),
        Sort: sdk.String("accusamus"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        TelephoneExt: []int{
            328303,
            133461,
            404425,
        },
        Title: []string{
            "corrupti",
            "at",
            "error",
            "blanditiis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetStateElectionOffice


State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.


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
    res, err := s.FilerResources.GetStateElectionOffice(ctx, operations.GetStateElectionOfficeRequest{
        APIKey: "suscipit",
        Page: sdk.Int(922348),
        PerPage: sdk.Int(542129),
        Sort: sdk.String("atque"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        State: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
