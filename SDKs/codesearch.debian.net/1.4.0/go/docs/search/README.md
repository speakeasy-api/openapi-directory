# Search

## Overview

Code Search

### Available Operations

* [Search](#search) - Searches through source code
* [Searchperpackage](#searchperpackage) - Like /search, but aggregates per package

## Search

Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).

Search results are ordered by their ranking (best results come first).

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
    res, err := s.Search.Search(ctx, operations.SearchRequest{
        MatchMode: operations.SearchMatchModeEnumRegexp.ToPointer(),
        Query: "quibusdam",
    }, operations.SearchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
}
```

## Searchperpackage

The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719

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
    res, err := s.Search.Searchperpackage(ctx, operations.SearchperpackageRequest{
        MatchMode: operations.SearchperpackageMatchModeEnumRegexp.ToPointer(),
        Query: "nulla",
    }, operations.SearchperpackageSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PackageSearchResults != nil {
        // handle response
    }
}
```
