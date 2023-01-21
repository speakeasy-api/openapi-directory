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
            Callback: "sit",
            Closest: "either",
            StatusCode: 6050128673802995827,
            Tag: "expedita",
            Timeout: 15.100000,
            Timestamp: "expedita",
            URL: "voluptas",
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