# CinemaSchedule

### Available Operations

* [CinemaScheduleSearchRead](#cinemaschedulesearchread) - Return cinema schedule search result
* [CinemaScheduleSearchallRead](#cinemaschedulesearchallread) - Return cinema schedule search result

## CinemaScheduleSearchRead

Return cinema schedule search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

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
    res, err := s.CinemaSchedule.CinemaScheduleSearchRead(ctx, operations.CinemaScheduleSearchReadRequest{
        MovieTitle: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CinemaScheduleSearchallRead

Return cinema schedule search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name or
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
    res, err := s.CinemaSchedule.CinemaScheduleSearchallRead(ctx, operations.CinemaScheduleSearchallReadRequest{
        Param: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
