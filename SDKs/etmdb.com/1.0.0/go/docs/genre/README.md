# Genre

### Available Operations

* [GenreSearchRead](#genresearchread) - Return movie genre search result
* [GenreSearchallRead](#genresearchallread) - Return movie genre search result

## GenreSearchRead

Return movie genre search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie genres
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
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
    res, err := s.Genre.GenreSearchRead(ctx, operations.GenreSearchReadRequest{
        MovieTitle: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GenreSearchallRead

Return movie genre search result

### Response Class (Status 200)

* __{movie_genre_type}__: Used as a key word to search movie genres

For more details on how movies are listed [see here][ref].
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
    res, err := s.Genre.GenreSearchallRead(ctx, operations.GenreSearchallReadRequest{
        MovieGenreType: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
