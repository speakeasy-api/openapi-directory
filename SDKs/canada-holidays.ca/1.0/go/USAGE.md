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
    
    req := operations.GetAPIV1HolidaysRequest{
        QueryParams: operations.GetAPIV1HolidaysQueryParams{
            Federal: "true",
            Year: "voluptas",
        },
    }
    
    res, err := s.Holidays.GetAPIV1Holidays(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV1Holidays200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->