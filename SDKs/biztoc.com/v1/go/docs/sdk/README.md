# SDK

## Overview

Get the latest business news articles.

### Available Operations

* [GetNews](#getnews) - Retrieves the latest news whose content contains the query string.

## GetNews

Retrieves the latest news whose content contains the query string.

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
    res, err := s.SDK.GetNews(ctx, operations.GetNewsRequest{
        Query: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
