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
            ActionNotificationExportID: 3320498019983121158,
            Cursor: "error",
            PerPage: 3379169258196496349,
            UserID: 1526989145207753327,
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