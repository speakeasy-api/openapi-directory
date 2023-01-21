<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetActionNotificationExportResultsRequest{
        QueryParams: operations.GetActionNotificationExportResultsQueryParams{
            ActionNotificationExportID: 8717895732742165505,
            Cursor: "voluptas",
            PerPage: 6050128673802995827,
            UserID: 501233450539197794,
        },
    }
    
    res, err := s.ActionNotificationExportResults.GetActionNotificationExportResults(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionNotificationExportResultEntities != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->