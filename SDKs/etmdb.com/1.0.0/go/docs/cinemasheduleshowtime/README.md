# CinemaSheduleShowtime

### Available Operations

* [CinemaSheduleShowtimeSearchRead](#cinemasheduleshowtimesearchread) - Return cinema schedule and showtime search result
* [CinemaSheduleShowtimeSearchallRead](#cinemasheduleshowtimesearchallread) - Return cinema schedule and showtime search result

## CinemaSheduleShowtimeSearchRead

Return cinema schedule and showtime search result

### Response Class (Status 200)
* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
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
    res, err := s.CinemaSheduleShowtime.CinemaSheduleShowtimeSearchRead(ctx, operations.CinemaSheduleShowtimeSearchReadRequest{
        MovieTitle: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CinemaSheduleShowtimeSearchallRead

Return cinema schedule and showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name
* showtime starting date
* showtime ending date or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
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
    res, err := s.CinemaSheduleShowtime.CinemaSheduleShowtimeSearchallRead(ctx, operations.CinemaSheduleShowtimeSearchallReadRequest{
        Param: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
