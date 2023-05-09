# Filmography

### Available Operations

* [FilmographySearchRead](#filmographysearchread) - Return filmography search result
* [FilmographySearchallRead](#filmographysearchallread) - Return filmography search result

## FilmographySearchRead

Return filmography search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how filmographies are listed [see here][ref].
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
    res, err := s.Filmography.FilmographySearchRead(ctx, operations.FilmographySearchReadRequest{
        MovieTitle: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FilmographySearchallRead

Return filmography search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* filmography description (such as director, actor, producer, etc)

For more details on how filmographies are listed [see here][ref].
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
    res, err := s.Filmography.FilmographySearchallRead(ctx, operations.FilmographySearchallReadRequest{
        Param: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
