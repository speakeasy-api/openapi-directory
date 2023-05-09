# MovieCast

### Available Operations

* [MovieCastSearchRead](#moviecastsearchread) - Return movie cast search result
* [MovieCastSearchallRead](#moviecastsearchallread) - Return movie cast search result

## MovieCastSearchRead

Return movie cast search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details on how movie casts are listed [see here][ref].
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
    res, err := s.MovieCast.MovieCastSearchRead(ctx, operations.MovieCastSearchReadRequest{
        MovieTitle: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MovieCastSearchallRead

Return movie cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* character name

For more details on how movie casts are listed [see here][ref].
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
    res, err := s.MovieCast.MovieCastSearchallRead(ctx, operations.MovieCastSearchallReadRequest{
        Param: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
