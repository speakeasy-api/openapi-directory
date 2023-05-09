# Content

### Available Operations

* [GetContentAspectID](#getcontentaspectid) - Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
* [GetContentAspectIDCivixDocumentID](#getcontentaspectidcivixdocumentid) - Lists the metadata available for the specified index or directory from the BCLaws legislative respository

## GetContentAspectID

Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library

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
    res, err := s.Content.GetContentAspectID(ctx, operations.GetContentAspectIDRequest{
        AspectID: operations.GetContentAspectIDAspectIDEnumPsl,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContentAspectIDCivixDocumentID

Lists the metadata available for the specified index or directory from the BCLaws legislative respository

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
    res, err := s.Content.GetContentAspectIDCivixDocumentID(ctx, operations.GetContentAspectIDCivixDocumentIDRequest{
        AspectID: operations.GetContentAspectIDCivixDocumentIDAspectIDEnumEcb,
        CivixDocumentID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
