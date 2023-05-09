# CinemaDetail

### Available Operations

* [CinemaDetailSearchRead](#cinemadetailsearchread) - Return cinema details search result

## CinemaDetailSearchRead

Return cinema details search result

### Response Class (Status 200)

* __{cinema_name}__: Used as a key word to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date

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
    res, err := s.CinemaDetail.CinemaDetailSearchRead(ctx, operations.CinemaDetailSearchReadRequest{
        CinemaName: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
