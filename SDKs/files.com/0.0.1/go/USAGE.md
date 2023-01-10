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
            ActionNotificationExportID: 2966375377600891262,
            Cursor: "aut",
            PerPage: 5026721396665135782,
            UserID: 8604752373465719830,
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