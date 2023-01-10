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
    
    req := operations.GetBng2latlongEastingNorthingRequest{
        PathParams: operations.GetBng2latlongEastingNorthingPathParams{
            Easting: 7711782718440894490,
            Northing: 2018122545907442435,
        },
    }
    
    res, err := s.GetBng2latlongEastingNorthing(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBng2latlongEastingNorthing200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->