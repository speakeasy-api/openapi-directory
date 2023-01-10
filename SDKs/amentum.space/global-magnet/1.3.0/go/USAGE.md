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
            Altitude: 59.099998,
            Latitude: 93.099998,
            Longitude: 75.099998,
            Year: 54.200001,
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