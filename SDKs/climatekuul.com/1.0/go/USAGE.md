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
            ContentType: "sit",
        },
        Request: &operations.AirtravelCoordinatesRequestBody{
            APIKeyL1: "voluptas",
            APIKeyL2: "culpa",
            DestinationAirportLatitude: 6.200000,
            DestinationAirportLongitude: 96.199997,
            NumberOfPassengers: 6044372234677422456,
            OriginAirportLatitude: 88.099998,
            OriginAirportLongitude: 68.199997,
            TravelClass: "dicta",
            TravelMode: "debitis",
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