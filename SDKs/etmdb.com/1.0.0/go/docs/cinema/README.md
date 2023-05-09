# Cinema

### Available Operations

* [CinemaSearchRead](#cinemasearchread) - Return cinema search result

## CinemaSearchRead

Return cinema search result

### Response Class (Status 200)

* __{id}__: Used as a key to search cinemas,

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
    res, err := s.Cinema.CinemaSearchRead(ctx, operations.CinemaSearchReadRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
