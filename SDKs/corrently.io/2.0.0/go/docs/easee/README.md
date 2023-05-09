# Easee

## Overview

Alternative access to EASEE.cloud Data.

### Available Operations

* [EaseeSessions](#easeesessions) - Returns lastSession info for all easee wallboxes (chargers) given user has access to.

## EaseeSessions

Refer to easee.cloud API for details.


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
    res, err := s.Easee.EaseeSessions(ctx, operations.EaseeSessionsRequest{
        Password: sdk.String("explicabo"),
        Username: sdk.String("Nestor.Halvorson"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EaseeChargers != nil {
        // handle response
    }
}
```
