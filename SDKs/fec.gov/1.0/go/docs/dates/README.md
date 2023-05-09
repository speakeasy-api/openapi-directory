# Dates

## Overview

Reporting deadlines, election dates FEC meetings, events etc.

### Available Operations

* [GetCalendarDates](#getcalendardates) - 
Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.

* [GetCalendarDatesExport](#getcalendardatesexport) - 
Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.


* [GetElectionDates](#getelectiondates) - 
FEC election dates since 1995.

* [GetReportingDates](#getreportingdates) - 
FEC election dates since 1995.


## GetCalendarDates


Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.


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
    res, err := s.Dates.GetCalendarDates(ctx, operations.GetCalendarDatesRequest{
        APIKey: "minima",
        CalendarCategoryID: []int{
            952871,
        },
        Description: []string{
            "aut",
            "aut",
            "deleniti",
        },
        EventID: sdk.Int(770581),
        MaxEndDate: types.MustDateFromString("2022-11-08"),
        MaxStartDate: types.MustDateFromString("2022-10-05"),
        MinEndDate: types.MustDateFromString("2022-11-29"),
        MinStartDate: types.MustDateFromString("2021-08-28"),
        Page: sdk.Int(810424),
        PerPage: sdk.Int(245367),
        Sort: sdk.String("eum"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        Summary: []string{
            "nobis",
            "quas",
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

## GetCalendarDatesExport


Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.



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
    res, err := s.Dates.GetCalendarDatesExport(ctx, operations.GetCalendarDatesExportRequest{
        APIKey: "assumenda",
        CalendarCategoryID: []int{
            379034,
            727044,
            96549,
            270328,
        },
        Description: []string{
            "explicabo",
            "provident",
        },
        EventID: sdk.Int(55374),
        MaxEndDate: types.MustDateFromString("2022-09-12"),
        MaxStartDate: types.MustDateFromString("2022-09-27"),
        MinEndDate: types.MustDateFromString("2022-07-18"),
        MinStartDate: types.MustDateFromString("2021-08-20"),
        Page: sdk.Int(442015),
        PerPage: sdk.Int(695626),
        Renderer: operations.GetCalendarDatesExportRendererEnumCsv.ToPointer(),
        Sort: sdk.String("ut"),
        SortHideNull: sdk.Bool(false),
        SortNullOnly: sdk.Bool(false),
        SortNullsLast: sdk.Bool(false),
        Summary: []string{
            "suscipit",
            "assumenda",
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

## GetElectionDates


FEC election dates since 1995.


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
    res, err := s.Dates.GetElectionDates(ctx, operations.GetElectionDatesRequest{
        APIKey: "eos",
        ElectionDistrict: []string{
            "quisquam",
            "veritatis",
            "ipsa",
        },
        ElectionParty: []string{
            "quidem",
            "neque",
            "quo",
        },
        ElectionState: []string{
            "quo",
            "fuga",
            "eius",
            "eos",
        },
        ElectionTypeID: []string{
            "ab",
            "cupiditate",
        },
        ElectionYear: []string{
            "tempora",
        },
        MaxCreateDate: types.MustDateFromString("2021-11-20"),
        MaxElectionDate: types.MustDateFromString("2022-10-21"),
        MaxPrimaryGeneralDate: types.MustDateFromString("2021-08-15"),
        MaxUpdateDate: types.MustDateFromString("2022-11-13"),
        MinCreateDate: types.MustDateFromString("2021-05-27"),
        MinElectionDate: types.MustDateFromString("2022-12-03"),
        MinPrimaryGeneralDate: types.MustDateFromString("2022-06-25"),
        MinUpdateDate: types.MustDateFromString("2022-01-30"),
        OfficeSought: []GetElectionDatesOfficeSoughtEnum{
            operations.GetElectionDatesOfficeSoughtEnumS,
            operations.GetElectionDatesOfficeSoughtEnumS,
        },
        Page: sdk.Int(959434),
        PerPage: sdk.Int(174112),
        Sort: sdk.String("deserunt"),
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

## GetReportingDates


FEC election dates since 1995.


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
    res, err := s.Dates.GetReportingDates(ctx, operations.GetReportingDatesRequest{
        APIKey: "molestiae",
        MaxCreateDate: types.MustDateFromString("2022-03-20"),
        MaxDueDate: types.MustDateFromString("2022-06-11"),
        MaxUpdateDate: types.MustDateFromString("2022-09-06"),
        MinCreateDate: types.MustDateFromString("2022-09-18"),
        MinDueDate: types.MustDateFromString("2021-09-13"),
        MinUpdateDate: types.MustDateFromString("2022-06-18"),
        Page: sdk.Int(128860),
        PerPage: sdk.Int(325685),
        ReportType: []string{
            "fugit",
            "sapiente",
        },
        ReportYear: []int{
            187131,
        },
        Sort: sdk.String("explicabo"),
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
