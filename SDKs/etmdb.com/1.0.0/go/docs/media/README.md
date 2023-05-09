# Media

### Available Operations

* [MediaSearchRead](#mediasearchread) - Return movie media search result
* [MediaSearchallRead](#mediasearchallread) - Return cast media search result

## MediaSearchRead

Return movie media search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search media for movies
* You can use both Amharic or English charset/font to search

For more details on how media is listed [see here][ref].
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
    res, err := s.Media.MediaSearchRead(ctx, operations.MediaSearchReadRequest{
        MovieTitle: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MediaSearchallRead

Return cast media search result

### Response Class (Status 200)
__{user}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast media is listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date

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
    res, err := s.Media.MediaSearchallRead(ctx, operations.MediaSearchallReadRequest{
        User: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
