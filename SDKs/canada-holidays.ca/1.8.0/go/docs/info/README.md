# Info

## Overview

Get welcome message and links

### Available Operations

* [Root](#root) - root
* [Spec](#spec) - Get JSON schema

## Root

Returns a welcome message.

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
    res, err := s.Info.Root(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Root200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Spec

Gets the schema for the JSON API as a yaml file.

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
    res, err := s.Info.Spec(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
