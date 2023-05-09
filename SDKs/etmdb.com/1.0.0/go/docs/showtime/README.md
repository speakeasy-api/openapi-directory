# Showtime

### Available Operations

* [ShowtimeSearchallRead](#showtimesearchallread) - Return showtime search result

## ShowtimeSearchallRead

Return showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* show time or
* day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]

For more details about showtime, check each cinema from the cinema list [see here][ref].
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
    res, err := s.Showtime.ShowtimeSearchallRead(ctx, operations.ShowtimeSearchallReadRequest{
        Param: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
