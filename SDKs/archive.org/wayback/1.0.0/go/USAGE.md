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

    req := operations.GetWaybackV1AvailableRequest{
        QueryParams: operations.GetWaybackV1AvailableQueryParams{
            Callback: "corrupti",
            Closest: "before",
            StatusCode: "421",
            Tag: "quibusdam",
            Timeout: 6027.63,
            Timestamp: "nulla",
            URL: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.GetWaybackV1Available(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->