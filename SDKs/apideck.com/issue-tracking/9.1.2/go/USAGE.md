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
        Security: operations.CollectionsAllSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.CollectionsAllQueryParams{
            Cursor: "unde",
            Fields: "deserunt",
            Limit: 715190,
            Raw: false,
            Sort: &shared.CollectionsSort{
                By: "name",
                Direction: "desc",
            },
        },
        Headers: operations.CollectionsAllHeaders{
            XApideckAppID: "id",
            XApideckConsumerID: "vero",
            XApideckServiceID: "perspiciatis",
        },
    }

    ctx := context.Background()
    res, err := s.Collections.CollectionsAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->