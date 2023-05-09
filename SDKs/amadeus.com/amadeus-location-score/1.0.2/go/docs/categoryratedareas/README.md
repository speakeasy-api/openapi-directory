# CategoryRatedAreas

### Available Operations

* [GetCategoryRatedAreas](#getcategoryratedareas) - GET category rated areas

## GetCategoryRatedAreas

GET category rated areas

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
    res, err := s.CategoryRatedAreas.GetCategoryRatedAreas(ctx, operations.GetCategoryRatedAreasRequest{
        Latitude: 7151.9,
        Longitude: 8442.66,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoryRatedAreas200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
