# GenreType

### Available Operations

* [GenreTypeSearchRead](#genretypesearchread) - Return genre type search result

## GenreTypeSearchRead

Return genre type search result

### Response Class (Status 200)

* __{genre_description}__: Used as a key word to search genre types

For more details on how genre types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

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
    res, err := s.GenreType.GenreTypeSearchRead(ctx, operations.GenreTypeSearchReadRequest{
        GenreDescription: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
