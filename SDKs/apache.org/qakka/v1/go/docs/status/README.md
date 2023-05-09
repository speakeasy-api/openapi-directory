# Status

## Overview

Status end-point.

### Available Operations

* [Status](#status) - Status of webapp.

## Status

Status of webapp.

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
    res, err := s.Status.Status(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Status200ApplicationJSONObject != nil {
        // handle response
    }
}
```
