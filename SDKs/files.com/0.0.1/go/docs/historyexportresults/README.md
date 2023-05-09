# HistoryExportResults

## Overview

Operations about history_export_results

### Available Operations

* [GetHistoryExportResults](#gethistoryexportresults) - List History Export Results

## GetHistoryExportResults

List History Export Results

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
    res, err := s.HistoryExportResults.GetHistoryExportResults(ctx, operations.GetHistoryExportResultsRequest{
        Cursor: sdk.String("blanditiis"),
        HistoryExportID: 449292,
        PerPage: sdk.Int(296242),
        UserID: sdk.Int(304468),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HistoryExportResultEntities != nil {
        // handle response
    }
}
```
