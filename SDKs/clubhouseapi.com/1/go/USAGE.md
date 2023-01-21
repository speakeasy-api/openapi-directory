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
    
    req := operations.GetCheckForUpdateRequest{
        QueryParams: operations.GetCheckForUpdateQueryParams{
            IsTestflight: 8717895732742165505,
        },
    }
    
    res, err := s.GetCheckForUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->