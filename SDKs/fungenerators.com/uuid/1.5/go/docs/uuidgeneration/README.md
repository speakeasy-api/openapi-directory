# UUIDGeneration

## Overview

Generate different versions of UUID easily.

Find out more
<https://fungenerators.com/api/uuid/>
### Available Operations

* [GetUUID](#getuuid) - Generate a random UUID (v4).
* [GetUUIDVersionVersion](#getuuidversionversion) - Generate a random UUID (v4).

## GetUUID

Generate a random UUID (v4).

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
    res, err := s.UUIDGeneration.GetUUID(ctx, operations.GetUUIDRequest{
        Count: sdk.Int64(592845),
    }, operations.GetUUIDSecurity{
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

## GetUUIDVersionVersion

Generate a random UUID (v4).

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
    res, err := s.UUIDGeneration.GetUUIDVersionVersion(ctx, operations.GetUUIDVersionVersionRequest{
        Count: sdk.Int64(715190),
        Text: sdk.String("quibusdam"),
        Type: sdk.String("unde"),
        Version: 857946,
    }, operations.GetUUIDVersionVersionSecurity{
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
