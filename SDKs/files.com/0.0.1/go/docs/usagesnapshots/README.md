# UsageSnapshots

## Overview

Operations about usage_snapshots

### Available Operations

* [GetUsageSnapshots](#getusagesnapshots) - List Usage Snapshots

## GetUsageSnapshots

List Usage Snapshots

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
    res, err := s.UsageSnapshots.GetUsageSnapshots(ctx, operations.GetUsageSnapshotsRequest{
        Cursor: sdk.String("dicta"),
        PerPage: sdk.Int(395544),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsageSnapshotEntities != nil {
        // handle response
    }
}
```
