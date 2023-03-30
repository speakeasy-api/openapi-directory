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

    req := operations.GetCategoryRatedAreasRequest{
        QueryParams: operations.GetCategoryRatedAreasQueryParams{
            Latitude: 5488.14,
            Longitude: 5928.45,
        },
    }

    ctx := context.Background()
    res, err := s.CategoryRatedAreas.GetCategoryRatedAreas(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoryRatedAreas200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->