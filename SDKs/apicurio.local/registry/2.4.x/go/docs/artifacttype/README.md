# ArtifactType

### Available Operations

* [ListArtifactTypes](#listartifacttypes) - List artifact types

## ListArtifactTypes

Gets a list of all the configured artifact types.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ArtifactType.ListArtifactTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactTypeInfos != nil {
        // handle response
    }
}
```
