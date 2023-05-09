# Search

### Available Operations

* [GetSearchAspectIDFullsearch](#getsearchaspectidfullsearch) - A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository

## GetSearchAspectIDFullsearch

A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository

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
    res, err := s.Search.GetSearchAspectIDFullsearch(ctx, operations.GetSearchAspectIDFullsearchRequest{
        AspectID: operations.GetSearchAspectIDFullsearchAspectIDEnumBcgaz2,
        E: 477665,
        LFrag: 791725,
        NFrag: 812169,
        Q: "voluptatum",
        S: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
