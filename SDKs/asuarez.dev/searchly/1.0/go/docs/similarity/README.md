# Similarity

### Available Operations

* [SrcSearchlyAPIV1ControllersSimilarityByContent](#srcsearchlyapiv1controllerssimilaritybycontent) - API endpoint to search similarity using content
* [SrcSearchlyAPIV1ControllersSimilarityBySong](#srcsearchlyapiv1controllerssimilaritybysong) - API endpoint to search similarity using a song identifier

## SrcSearchlyAPIV1ControllersSimilarityByContent

Endpoint for an end-user client to search similarity by content.

If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:

```
https://searchly.asuarez.dev/api/v1/similarity/by_content
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
    res, err := s.Similarity.SrcSearchlyAPIV1ControllersSimilarityByContent(ctx, operations.SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody{
        Content: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSimilarity != nil {
        // handle response
    }
}
```

## SrcSearchlyAPIV1ControllersSimilarityBySong

Endpoint for an end-user client to search similarity by song identifier.

If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:

```
https://searchly.asuarez.dev/api/v1/similarity/by_song
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
    res, err := s.Similarity.SrcSearchlyAPIV1ControllersSimilarityBySong(ctx, operations.SrcSearchlyAPIV1ControllersSimilarityBySongRequest{
        SongID: 715190,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSimilarity != nil {
        // handle response
    }
}
```
