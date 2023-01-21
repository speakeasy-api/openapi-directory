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
            Altitude: 74.099998,
            Latitude: 53.099998,
            Longitude: 15.100000,
            Year: 67.199997,
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