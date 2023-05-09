# RandomRiddle

## Overview

Generate Random Riddles

Find out more
<http://fungenerators.com/api/riddle>
### Available Operations

* [GetRiddleRandom](#getriddlerandom) - Get a random riddle for a given category(optional)
* [GetRiddleSearch](#getriddlesearch) - Search for random riddle which has the text in the query, for a given category(optional).

## GetRiddleRandom

Get a random riddle for a given category(optional)

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
    res, err := s.RandomRiddle.GetRiddleRandom(ctx, operations.GetRiddleRandomRequest{
        Category: sdk.String("error"),
    }, operations.GetRiddleRandomSecurity{
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

## GetRiddleSearch

Search for random riddle which has the text in the query, for a given category(optional).

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
    res, err := s.RandomRiddle.GetRiddleSearch(ctx, operations.GetRiddleSearchRequest{
        Category: sdk.String("deserunt"),
        Query: sdk.String("suscipit"),
    }, operations.GetRiddleSearchSecurity{
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
