<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetActionNotificationExportResultsRequest{
        ActionNotificationExportID: 548814,
        Cursor: "provident",
        PerPage: 715190,
        UserID: 844266,
    }

    ctx := context.Background()
    res, err := s.ActionNotificationExportResults.GetActionNotificationExportResults(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionNotificationExportResultEntities != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->