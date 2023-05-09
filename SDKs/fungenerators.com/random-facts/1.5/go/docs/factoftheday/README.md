# FactOfTheDay

## Overview

Get fact of the day on various categories. This is refreshed daily.

Find out more
<http://fungenerators.com/api/facts#fact-of-the-day>
### Available Operations

* [GetFactFod](#getfactfod) - Get fact of the day for the given category.
* [GetFactFodCategories](#getfactfodcategories) - Get the list of supported fact of the day categories.

## GetFactFod

Get fact of the day for the given category.

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
    res, err := s.FactOfTheDay.GetFactFod(ctx, operations.GetFactFodRequest{
        Category: sdk.String("provident"),
    }, operations.GetFactFodSecurity{
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

## GetFactFodCategories

Get the list of supported fact of the day categories.

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
    res, err := s.FactOfTheDay.GetFactFodCategories(ctx, operations.GetFactFodCategoriesSecurity{
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
