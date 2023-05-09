<!-- Start SDK Example Usage -->
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
        CityCodes: "corrupti",
        DestinationCountryCodes: sdk.String("provident"),
        TravelerCountryCode: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendedLocation200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->