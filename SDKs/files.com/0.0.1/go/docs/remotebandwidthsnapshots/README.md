# RemoteBandwidthSnapshots

## Overview

Operations about remote_bandwidth_snapshots

### Available Operations

* [GetRemoteBandwidthSnapshots](#getremotebandwidthsnapshots) - List Remote Bandwidth Snapshots

## GetRemoteBandwidthSnapshots

List Remote Bandwidth Snapshots

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
    res, err := s.RemoteBandwidthSnapshots.GetRemoteBandwidthSnapshots(ctx, operations.GetRemoteBandwidthSnapshotsRequest{
        Cursor: sdk.String("saepe"),
        Filter: map[string]interface{}{
            "occaecati": "officiis",
        },
        FilterGt: map[string]interface{}{
            "in": "adipisci",
            "eveniet": "occaecati",
            "consequuntur": "fugit",
        },
        FilterGteq: map[string]interface{}{
            "quis": "reprehenderit",
            "error": "illo",
            "corporis": "quidem",
        },
        FilterLt: map[string]interface{}{
            "non": "vero",
            "doloremque": "iure",
            "ipsa": "totam",
            "quae": "molestiae",
        },
        FilterLteq: map[string]interface{}{
            "qui": "cum",
            "iure": "necessitatibus",
            "ratione": "laborum",
            "distinctio": "voluptatum",
        },
        PerPage: sdk.Int(523006),
        SortBy: map[string]interface{}{
            "ad": "repellat",
            "alias": "corporis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoteBandwidthSnapshotEntities != nil {
        // handle response
    }
}
```
