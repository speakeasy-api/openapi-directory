# Kpi

### Available Operations

* [DailyActiveUsersByDate](#dailyactiveusersbydate) - Daily Active Users by Date
* [DailyNewUsersByDate](#dailynewusersbydate) - Daily New Users by Date
* [KpIsForDailyAppUninstallsByDate](#kpisfordailyappuninstallsbydate) - KPIs for Daily App Uninstalls by Date
* [MonthlyActiveUsersForLast30Days](#monthlyactiveusersforlast30days) - Monthly Active Users for Last 30 Days

## DailyActiveUsersByDate

This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "dau" : (int)
        },
        ...
    ]
}
```

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
    res, err := s.Kpi.DailyActiveUsersByDate(ctx, operations.DailyActiveUsersByDateRequest{
        AppID: sdk.String("{{app_identifier}}"),
        EndingAt: sdk.String("2018-06-28T23:59:59-5:00"),
        Length: sdk.String("10"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DailyNewUsersByDate

This endpoint allows you to retrieve a daily series of the total number of new users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "new_users" : (int)
        },
        ...
    ]
}
```

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
    res, err := s.Kpi.DailyNewUsersByDate(ctx, operations.DailyNewUsersByDateRequest{
        AppID: sdk.String("{{app_identifier}}"),
        EndingAt: sdk.String("2018-06-28T23:59:59-5:00"),
        Length: sdk.String("14"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## KpIsForDailyAppUninstallsByDate

This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "uninstalls" : (int)
        },
        ...
    ]
}
```

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
    res, err := s.Kpi.KpIsForDailyAppUninstallsByDate(ctx, operations.KpIsForDailyAppUninstallsByDateRequest{
        AppID: sdk.String("{{app_identifier}}"),
        EndingAt: sdk.String("2018-06-28T23:59:59-5:00"),
        Length: sdk.String("14"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MonthlyActiveUsersForLast30Days

This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "mau" : (int)
        },
        ...
    ]
}
```

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
    res, err := s.Kpi.MonthlyActiveUsersForLast30Days(ctx, operations.MonthlyActiveUsersForLast30DaysRequest{
        AppID: sdk.String("{{app_identifier}}"),
        EndingAt: sdk.String("2018-06-28T23:59:59-05:00"),
        Length: sdk.String("7"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
