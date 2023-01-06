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
    
    req := operations.AppAPIWmmEndpointsWmmMagneticFieldRequest{
        QueryParams: operations.AppAPIWmmEndpointsWmmMagneticFieldQueryParams{
            Altitude: 70.199997,
            Latitude: 79.199997,
            Longitude: 8.200000,
            Year: 50.099998,
        },
    }
    
    res, err := s.AppAPIWmmEndpointsWmmMagneticField(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppAPIWMMEndpointsWMMMagneticField200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->