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
    res, err := s.CategoryRatedAreas.GetCategoryRatedAreas(ctx, operations.GetCategoryRatedAreasRequest{
        Latitude: 5488.14,
        Longitude: 5928.45,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoryRatedAreas200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->