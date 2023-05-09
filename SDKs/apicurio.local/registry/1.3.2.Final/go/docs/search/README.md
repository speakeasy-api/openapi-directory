# Search

## Overview

The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions. 

### Available Operations

* [SearchArtifacts](#searchartifacts) - Search for artifacts
* [SearchVersions](#searchversions) - Search artifact versions

## SearchArtifacts

Returns a paginated list of all artifacts that match the provided search criteria.


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
    res, err := s.Search.SearchArtifacts(ctx, operations.SearchArtifactsRequest{
        Limit: 568434,
        Offset: 135218,
        Order: operations.SearchArtifactsOrderEnumAsc.ToPointer(),
        Over: operations.SearchArtifactsOverEnumName.ToPointer(),
        Search: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactSearchResults != nil {
        // handle response
    }
}
```

## SearchVersions

Searches for versions of a specific artifact.  This is typically used to get a listing
of all versions of an artifact (for example, in a user interface).

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
    res, err := s.Search.SearchVersions(ctx, operations.SearchVersionsRequest{
        ArtifactID: "sed",
        Limit: 612096,
        Offset: 222321,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VersionSearchResults != nil {
        // handle response
    }
}
```
