# Watchlist

### Available Operations

* [WatchlistSearchRead](#watchlistsearchread) - Return watchlist search result
* [WatchlistSearchallRead](#watchlistsearchallread) - Return watchlist search result

## WatchlistSearchRead

Return watchlist search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies on watchlist
* You can use both Amharic or English charset/font to search

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id

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
    res, err := s.Watchlist.WatchlistSearchRead(ctx, operations.WatchlistSearchReadRequest{
        MovieTitle: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WatchlistSearchallRead

Return watchlist search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id

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
    res, err := s.Watchlist.WatchlistSearchallRead(ctx, operations.WatchlistSearchallReadRequest{
        Param: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
