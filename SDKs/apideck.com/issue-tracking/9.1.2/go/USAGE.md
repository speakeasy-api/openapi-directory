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

    req := operations.CollectionsAllRequest{
        Cursor: "corrupti",
        Fields: "provident",
        Limit: 715190,
        Raw: false,
        Sort: &shared.CollectionsSort{
            By: "name",
            Direction: "desc",
        },
        XApideckAppID: "unde",
        XApideckConsumerID: "nulla",
        XApideckServiceID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Collections.CollectionsAll(ctx, req, operations.CollectionsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->