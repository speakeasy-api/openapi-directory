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
    
    req := operations.GetCityRequest{
        QueryParams: operations.GetCityQueryParams{
            Format: "json",
            Key: "nesciunt",
            Lat: 89.199997,
            Lng: 72.099998,
        },
    }
    
    res, err := s.GetCity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCity200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->