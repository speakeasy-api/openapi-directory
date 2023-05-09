# PrivateRiddles

## Overview

Store and Retrive your Riddles

Find out more
<http://fungenerators.com/api/riddle>
### Available Operations

* [DeleteRiddle](#deleteriddle) - Create a random Riddle entry.
* [GetRiddle](#getriddle) - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
* [PostRiddle](#postriddle) - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
* [PutRiddle](#putriddle) - Create a random Riddle entry.

## DeleteRiddle

Create a random Riddle entry.

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
    res, err := s.PrivateRiddles.DeleteRiddle(ctx, operations.DeleteRiddleRequest{
        ID: "provident",
    }, operations.DeleteRiddleSecurity{
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

## GetRiddle

Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.

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
    res, err := s.PrivateRiddles.GetRiddle(ctx, operations.GetRiddleRequest{
        ID: sdk.String("distinctio"),
    }, operations.GetRiddleSecurity{
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

## PostRiddle

Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.

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
    res, err := s.PrivateRiddles.PostRiddle(ctx, operations.PostRiddleRequest{
        Answer: "quibusdam",
        Category: "unde",
        Question: "nulla",
    }, operations.PostRiddleSecurity{
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

## PutRiddle

Create a random Riddle entry.

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
    res, err := s.PrivateRiddles.PutRiddle(ctx, operations.PutRiddleRequest{
        Answer: "corrupti",
        Category: "illum",
        Question: "vel",
    }, operations.PutRiddleSecurity{
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
