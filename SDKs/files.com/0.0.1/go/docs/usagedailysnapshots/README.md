# UsageDailySnapshots

## Overview

Operations about usage_daily_snapshots

### Available Operations

* [GetUsageDailySnapshots](#getusagedailysnapshots) - List Usage Daily Snapshots

## GetUsageDailySnapshots

List Usage Daily Snapshots

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
    res, err := s.UsageDailySnapshots.GetUsageDailySnapshots(ctx, operations.GetUsageDailySnapshotsRequest{
        Cursor: sdk.String("necessitatibus"),
        Filter: map[string]interface{}{
            "nisi": "at",
        },
        FilterGt: map[string]interface{}{
            "est": "harum",
            "sequi": "doloribus",
            "repudiandae": "optio",
            "occaecati": "nemo",
        },
        FilterGteq: map[string]interface{}{
            "blanditiis": "officia",
            "voluptas": "numquam",
        },
        FilterLt: map[string]interface{}{
            "quos": "eius",
            "aspernatur": "ducimus",
        },
        FilterLteq: map[string]interface{}{
            "fuga": "laudantium",
        },
        PerPage: sdk.Int(277340),
        SortBy: map[string]interface{}{
            "rem": "fugiat",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsageDailySnapshotEntities != nil {
        // handle response
    }
}
```
