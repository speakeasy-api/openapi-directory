# RandomFacts

## Overview

Get random facts based on category and other criteria.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [GetFact](#getfact) - Get a Fact belonging to the id.
* [GetFactCategories](#getfactcategories) - Get a random Fact.
* [GetFactRandom](#getfactrandom) - Get a random Fact for a given category(optional) and subcategory(optional).
* [GetFactSearch](#getfactsearch) - Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).

## GetFact

Get a Fact belonging to the id.

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
    res, err := s.RandomFacts.GetFact(ctx, operations.GetFactRequest{
        ID: sdk.String("ipsa"),
    }, operations.GetFactSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFactCategories

Get a random Fact.

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
    res, err := s.RandomFacts.GetFactCategories(ctx, operations.GetFactCategoriesRequest{
        Start: sdk.Int64(963663),
    }, operations.GetFactCategoriesSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFactRandom

Get a random Fact for a given category(optional) and subcategory(optional).

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
    res, err := s.RandomFacts.GetFactRandom(ctx, operations.GetFactRandomRequest{
        Category: sdk.String("tempora"),
        Subcategory: sdk.String("suscipit"),
    }, operations.GetFactRandomSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFactSearch

Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).

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
    res, err := s.RandomFacts.GetFactSearch(ctx, operations.GetFactSearchRequest{
        Category: sdk.String("molestiae"),
        Query: sdk.String("minus"),
        Subcategory: sdk.String("placeat"),
    }, operations.GetFactSearchSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
