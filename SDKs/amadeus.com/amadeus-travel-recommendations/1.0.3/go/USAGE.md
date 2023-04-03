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

    req := operations.GetRecommendedLocationRequest{
        CityCodes: "corrupti",
        DestinationCountryCodes: "provident",
        TravelerCountryCode: "distinctio",
    }

    ctx := context.Background()
    res, err := s.RecommendedLocations.GetRecommendedLocation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendedLocation200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->