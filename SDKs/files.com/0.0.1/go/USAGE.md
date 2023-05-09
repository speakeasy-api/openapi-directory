<!-- Start SDK Example Usage -->
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
        ActionNotificationExportID: 548814,
        Cursor: sdk.String("provident"),
        PerPage: sdk.Int(715190),
        UserID: sdk.Int(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionNotificationExportResultEntities != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->