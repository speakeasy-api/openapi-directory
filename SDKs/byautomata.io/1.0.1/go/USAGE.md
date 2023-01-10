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
    
    req := operations.GetContentproSearchRequest{
        QueryParams: operations.GetContentproSearchQueryParams{
            Terms: "nisi",
        },
    }
    
    res, err := s.ContentproSearch.GetContentproSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContentproSearch200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->