# Venues

## Overview

Information about venues

### Available Operations

* [GetVenues](#getvenues) - Arena and venue information

## GetVenues

Venues

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
    res, err := s.Venues.GetVenues(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Venues != nil {
        // handle response
    }
}
```
