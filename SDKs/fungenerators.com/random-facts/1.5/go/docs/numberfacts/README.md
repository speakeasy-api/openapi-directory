# NumberFacts

## Overview

Get a random interesting fact about a number.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [GetFactNumbers](#getfactnumbers) - Get a random fact about a number

## GetFactNumbers

Get a random fact about a number

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
    res, err := s.NumberFacts.GetFactNumbers(ctx, operations.GetFactNumbersRequest{
        Number: 715190,
    }, operations.GetFactNumbersSecurity{
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
