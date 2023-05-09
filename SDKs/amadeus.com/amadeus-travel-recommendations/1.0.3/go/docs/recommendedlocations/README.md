# RecommendedLocations

### Available Operations

* [GetRecommendedLocation](#getrecommendedlocation) - GET recommended destinations

## GetRecommendedLocation

GET recommended destinations

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RecommendedLocations.GetRecommendedLocation(ctx, operations.GetRecommendedLocationRequest{
        CityCodes: "quibusdam",
        DestinationCountryCodes: sdk.String("unde"),
        TravelerCountryCode: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendedLocation200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
