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
            Callback: "eum",
            Closest: "after",
            StatusCode: 2100388220143852559,
            Tag: "necessitatibus",
            Timeout: 57.200001,
            Timestamp: "error",
            URL: "aliquam",
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