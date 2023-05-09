# Conferences

## Overview

Conference information

### Available Operations

* [GetConferences](#getconferences) - Conferences

## GetConferences

Get conference list

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conferences.GetConferences(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Conferences != nil {
        // handle response
    }
}
```
