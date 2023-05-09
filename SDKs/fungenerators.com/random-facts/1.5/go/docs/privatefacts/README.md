# PrivateFacts

## Overview

Store and manage your own Facts online

Find out more
<http://fungenerators.com/api/facts#private>
### Available Operations

* [DeleteFact](#deletefact) - Delete a Fact entry identified by the id.
* [GetFact](#getfact) - Get a Fact belonging to the id.
* [PutFact](#putfact) - Add a Fact entry to the database (private collection).

## DeleteFact

Delete a Fact entry identified by the id.

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
    res, err := s.PrivateFacts.DeleteFact(ctx, operations.DeleteFactRequest{
        ID: "error",
    }, operations.DeleteFactSecurity{
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
    res, err := s.PrivateFacts.GetFact(ctx, operations.GetFactRequest{
        ID: sdk.String("deserunt"),
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

## PutFact

Add a Fact entry to the database (private collection).

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
    res, err := s.PrivateFacts.PutFact(ctx, operations.PutFactRequest{
        Category: "suscipit",
        Fact: "iure",
        Subcategory: "magnam",
        Tags: "debitis",
    }, operations.PutFactSecurity{
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
