# BandwidthSnapshots

## Overview

Operations about bandwidth_snapshots

### Available Operations

* [GetBandwidthSnapshots](#getbandwidthsnapshots) - List Bandwidth Snapshots

## GetBandwidthSnapshots

List Bandwidth Snapshots

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
    res, err := s.BandwidthSnapshots.GetBandwidthSnapshots(ctx, operations.GetBandwidthSnapshotsRequest{
        Cursor: sdk.String("illum"),
        Filter: map[string]interface{}{
            "maxime": "ea",
            "excepturi": "odit",
            "ea": "accusantium",
            "ab": "maiores",
        },
        FilterGt: map[string]interface{}{
            "ipsam": "voluptate",
            "autem": "nam",
            "eaque": "pariatur",
        },
        FilterGteq: map[string]interface{}{
            "voluptatibus": "perferendis",
            "fugiat": "amet",
        },
        FilterLt: map[string]interface{}{
            "cumque": "corporis",
        },
        FilterLteq: map[string]interface{}{
            "libero": "nobis",
            "dolores": "quis",
            "totam": "dignissimos",
            "eaque": "quis",
        },
        PerPage: sdk.Int(199996),
        SortBy: map[string]interface{}{
            "perferendis": "dolores",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BandwidthSnapshotEntities != nil {
        // handle response
    }
}
```
