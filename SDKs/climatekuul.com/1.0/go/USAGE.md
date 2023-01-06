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
    
    req := operations.AirtravelCoordinatesRequest{
        Headers: operations.AirtravelCoordinatesHeaders{
            ContentType: "aspernatur",
        },
        Request: &operations.AirtravelCoordinatesRequestBody{
            APIKeyL1: "sint",
            APIKeyL2: "veritatis",
            DestinationAirportLatitude: 79.099998,
            DestinationAirportLongitude: 85.199997,
            NumberOfPassengers: 8548503948450162958,
            OriginAirportLatitude: 17.200001,
            OriginAirportLongitude: 61.099998,
            TravelClass: "qui",
            TravelMode: "consequuntur",
        },
    }
    
    res, err := s.AirtravelCoordinates.AirtravelCoordinates(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->