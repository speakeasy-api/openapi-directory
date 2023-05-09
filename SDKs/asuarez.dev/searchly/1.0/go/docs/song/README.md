# Song

### Available Operations

* [SrcSearchlyAPIV1ControllersSongSearch](#srcsearchlyapiv1controllerssongsearch) - API endpoint to search songs from the database given a query

## SrcSearchlyAPIV1ControllersSongSearch

Endpoint for an end-user client to search songs from the database given a String query.

If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:

```
https://searchly.asuarez.dev/api/v1/song/search
```


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
    res, err := s.Song.SrcSearchlyAPIV1ControllersSongSearch(ctx, operations.SrcSearchlyAPIV1ControllersSongSearchRequest{
        Query: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSong != nil {
        // handle response
    }
}
```
