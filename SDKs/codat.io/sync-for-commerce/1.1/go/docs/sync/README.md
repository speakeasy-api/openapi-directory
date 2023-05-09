# Sync

## Overview

Initiate a sync of sync for commerce company data into their respective accounting software.

### Available Operations

* [RequestSync](#requestsync) - Run a Commerce sync from the last successful sync
* [RequestSyncForDateRange](#requestsyncfordaterange) - Run a Commerce sync from a given date range

## RequestSync

Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.
If there was no previously successful sync, the start date in the config is used.

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
    res, err := s.Sync.RequestSync(ctx, operations.RequestSyncRequest{
        SyncToLatestArgs: &shared.SyncToLatestArgs{
            SyncTo: sdk.String("occaecati"),
        },
        CompanyID: "5efb9ba8-8f3a-4669-9707-4ba4469b6e21",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncSummary != nil {
        // handle response
    }
}
```

## RequestSyncForDateRange

Run a Commerce sync from the specified start date to the specified finish date in the request payload.

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
    res, err := s.Sync.RequestSyncForDateRange(ctx, operations.RequestSyncForDateRangeRequest{
        DateRange: &shared.DateRange{
            Finish: sdk.String("magnam"),
            Start: sdk.String("et"),
        },
        CompanyID: "959890af-a563-4e25-96fe-4c8b711e5b7f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncSummary != nil {
        // handle response
    }
}
```
