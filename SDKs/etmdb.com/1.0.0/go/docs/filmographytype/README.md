# FilmographyType

### Available Operations

* [FilmographyTypeSearchRead](#filmographytypesearchread) - Return filmography type search result

## FilmographyTypeSearchRead

Return filmography type search result

### Response Class (Status 200)

* __{filmography_description}__: Used as a key word to search filmography types

For more details on how filmography types are listed [see here][ref].
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
    res, err := s.FilmographyType.FilmographyTypeSearchRead(ctx, operations.FilmographyTypeSearchReadRequest{
        FilmographyDescription: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
