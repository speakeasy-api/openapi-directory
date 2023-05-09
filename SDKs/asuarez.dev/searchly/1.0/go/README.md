# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/asuarez.dev/searchly/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        Content: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseSimilarity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Similarity](docs/similarity/README.md)

* [SrcSearchlyAPIV1ControllersSimilarityByContent](docs/similarity/README.md#srcsearchlyapiv1controllerssimilaritybycontent) - API endpoint to search similarity using content
* [SrcSearchlyAPIV1ControllersSimilarityBySong](docs/similarity/README.md#srcsearchlyapiv1controllerssimilaritybysong) - API endpoint to search similarity using a song identifier

### [Song](docs/song/README.md)

* [SrcSearchlyAPIV1ControllersSongSearch](docs/song/README.md#srcsearchlyapiv1controllerssongsearch) - API endpoint to search songs from the database given a query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
