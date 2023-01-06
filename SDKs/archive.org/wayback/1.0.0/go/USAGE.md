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
    
    req := operations.GetWaybackV1AvailableRequest{
        QueryParams: operations.GetWaybackV1AvailableQueryParams{
            Callback: "et",
            Closest: "after",
            StatusCode: 4368752525937723844,
            Tag: "aut",
            Timeout: 64.199997,
            Timestamp: "soluta",
            URL: "ut",
        },
    }
    
    res, err := s.GetWaybackV1Available(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->