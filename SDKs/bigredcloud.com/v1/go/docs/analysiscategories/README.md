# AnalysisCategories

### Available Operations

* [AnalysisCategoriesGet](#analysiscategoriesget) - Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

## AnalysisCategoriesGet

Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AnalysisCategories.AnalysisCategoriesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultAnalysisCategoryDto != nil {
        // handle response
    }
}
```
