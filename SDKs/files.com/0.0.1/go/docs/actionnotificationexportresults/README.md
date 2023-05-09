# ActionNotificationExportResults

## Overview

Operations about action_notification_export_results

### Available Operations

* [GetActionNotificationExportResults](#getactionnotificationexportresults) - List Action Notification Export Results

## GetActionNotificationExportResults

List Action Notification Export Results

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
    res, err := s.ActionNotificationExportResults.GetActionNotificationExportResults(ctx, operations.GetActionNotificationExportResultsRequest{
        ActionNotificationExportID: 602763,
        Cursor: sdk.String("nulla"),
        PerPage: sdk.Int(544883),
        UserID: sdk.Int(847252),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionNotificationExportResultEntities != nil {
        // handle response
    }
}
```
