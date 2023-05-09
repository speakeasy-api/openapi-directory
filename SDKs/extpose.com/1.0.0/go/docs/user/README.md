# User

## Overview

user-specific methods

### Available Operations

* [GetUserExtensions](#getuserextensions) - Get User Extensions

## GetUserExtensions

This endpoint allows you to get list of your extensions including extensions from the watchlist.

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
    res, err := s.User.GetUserExtensions(ctx, operations.GetUserExtensionsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Extensions != nil {
        // handle response
    }
}
```
