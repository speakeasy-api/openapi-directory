# Activity

## Overview

Access API Request Activity

### Available Operations

* [GetAPIActivity](#getapiactivity) - Retrieve a list of API Requests that have been made.

## GetAPIActivity

Retrieve a list of API Requests that have been made.

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
    res, err := s.Activity.GetAPIActivity(ctx, operations.GetAPIActivityRequest{
        Limit: sdk.Int64(10),
        Offset: sdk.Int64(50),
    }, operations.GetAPIActivitySecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIRequests != nil {
        // handle response
    }
}
```
