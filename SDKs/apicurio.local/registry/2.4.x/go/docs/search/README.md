# Search

## Overview

The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions. 

### Available Operations

* [SearchArtifacts](#searchartifacts) - Search for artifacts
* [SearchArtifactsByContent](#searchartifactsbycontent) - Search for artifacts by content

## SearchArtifacts

Returns a paginated list of all artifacts that match the provided filter criteria.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchArtifacts(ctx, operations.SearchArtifactsRequest{
        ContentID: sdk.Int64(576157),
        Description: sdk.String("aliquid"),
        GlobalID: sdk.Int64(592042),
        Group: sdk.String("necessitatibus"),
        Labels: []string{
            "officia",
            "dolor",
            "debitis",
        },
        Limit: sdk.Int64(952749),
        Name: sdk.String("Arnold Kirlin"),
        Offset: sdk.Int64(699479),
        Order: shared.SortOrderEnumAsc.ToPointer(),
        Orderby: shared.SortByEnumName.ToPointer(),
        Properties: []string{
            "facere",
            "ea",
            "aliquid",
            "laborum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactSearchResults != nil {
        // handle response
    }
}
```

## SearchArtifactsByContent

Returns a paginated list of all artifacts with at least one version that matches the
posted content.


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
    res, err := s.Search.SearchArtifactsByContent(ctx, operations.SearchArtifactsByContentRequest{
        RequestBody: []byte("accusamus"),
        ArtifactType: sdk.String("AVRO"),
        Canonical: sdk.Bool(false),
        Limit: sdk.Int64(249796),
        Offset: sdk.Int64(581273),
        Order: operations.SearchArtifactsByContentOrderEnumAsc.ToPointer(),
        Orderby: operations.SearchArtifactsByContentOrderbyEnumCreatedOn.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactSearchResults != nil {
        // handle response
    }
}
```
