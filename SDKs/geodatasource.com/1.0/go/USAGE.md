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
            Key: "voluptas",
            Lat: 53.099998,
            Lng: 15.100000,
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