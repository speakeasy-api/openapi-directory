<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AirtravelCoordinatesRequest{
        ContentType: "application/x-www-form-urlencoded",
        RequestBody: &operations.AirtravelCoordinatesRequestBody{
            APIKeyL1: "d95fead6-e8a6-4547-9fb9-7835101a3960",
            APIKeyL2: "c60f8db5-7204-4427-960d-27400c38b166",
            DestinationAirportLatitude: 24.9056,
            DestinationAirportLongitude: 67.1569,
            NumberOfPassengers: 2,
            OriginAirportLatitude: 31.5208,
            OriginAirportLongitude: 74.4028,
            TravelClass: "Economy",
            TravelMode: "round trip",
        },
    }

    ctx := context.Background()
    res, err := s.AirtravelCoordinates.AirtravelCoordinates(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->