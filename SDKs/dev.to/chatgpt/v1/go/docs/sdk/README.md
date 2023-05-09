# SDK

## Overview

A plugin that recommends resources like articles or users to a user using ChatGP.

### Available Operations

* [GetArticles](#getarticles) - Get a list of filtered articles

## GetArticles

Get a list of filtered articles

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
    res, err := s.SDK.GetArticles(ctx, operations.GetArticlesRequest{
        Page: sdk.Int(602763),
        PerPage: sdk.Int(857946),
        Q: sdk.String("corrupti"),
        Top: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticlesResponse != nil {
        // handle response
    }
}
```
