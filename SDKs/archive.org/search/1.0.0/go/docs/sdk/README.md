# SDK

## Overview

API for Internet Archive's Search-related services


### Available Operations

* [GetSearchV1Fields](#getsearchv1fields) - Fields that can be requested
* [GetSearchV1Organic](#getsearchv1organic) - Return relevance-based results from search queries

* [GetSearchV1Scrape](#getsearchv1scrape) - Scrape search results from Internet Archive, allowing a scrolling cursor


## GetSearchV1Fields

Fields that can be requested

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
    res, err := s.SDK.GetSearchV1Fields(ctx, operations.GetSearchV1FieldsRequest{
        Callback: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSearchV1Organic

Return relevance-based results from search queries


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
    res, err := s.SDK.GetSearchV1Organic(ctx, operations.GetSearchV1OrganicRequest{
        Callback: sdk.String("distinctio"),
        Field: sdk.String("quibusdam"),
        Q: sdk.String("unde"),
        Size: sdk.Int64(857946),
        TotalOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSearchV1Scrape

Scrape search results from Internet Archive, allowing a scrolling cursor


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
    res, err := s.SDK.GetSearchV1Scrape(ctx, operations.GetSearchV1ScrapeRequest{
        Callback: sdk.String("corrupti"),
        Cursor: sdk.String("illum"),
        Field: sdk.String("vel"),
        Q: sdk.String("error"),
        Size: sdk.Int64(645894),
        Sort: sdk.String("suscipit"),
        TotalOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
