# Amz

## Overview

APIs for request on Amazon

Find out more
<http://api.axesso.de/>
### Available Operations

* [KeywordSearch](#keywordsearch) - fetch results auf a keyword search on Amazon
* [RequestBuyRecommendation](#requestbuyrecommendation) - request buy recommendations to a given product
* [RequestProduct](#requestproduct) - lookup product information
* [SortOptions](#sortoptions) - request available sort options to use in keyword search

## KeywordSearch

fetch results auf a keyword search on Amazon

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
    res, err := s.Amz.KeywordSearch(ctx, operations.KeywordSearchRequest{
        DomainCode: "unde",
        Keyword: "nulla",
        NumberOfProducts: sdk.Int64(544883),
        SortBy: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordSearchResponse != nil {
        // handle response
    }
}
```

## RequestBuyRecommendation

request buy recommendations to a given product

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
    res, err := s.Amz.RequestBuyRecommendation(ctx, operations.RequestBuyRecommendationRequest{
        URL: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuyRecommendationResponse != nil {
        // handle response
    }
}
```

## RequestProduct

lookup product information

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
    res, err := s.Amz.RequestProduct(ctx, operations.RequestProductRequest{
        Size: sdk.String("error"),
        URL: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductDetailsResponse != nil {
        // handle response
    }
}
```

## SortOptions

request available sort options to use in keyword search

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
    res, err := s.Amz.SortOptions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SortOptionResponse != nil {
        // handle response
    }
}
```
