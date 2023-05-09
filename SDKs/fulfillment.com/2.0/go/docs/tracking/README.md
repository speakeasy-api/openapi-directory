# Tracking

## Overview

Carrier Independent Tracking

### Available Operations

* [GetTrack](#gettrack) - Tracking

## GetTrack

Get uniformed tracking events for any package, this response is carrier independent. Please note, an API Key is required for throttling purposes, please contact your success manager for details.

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
    res, err := s.Tracking.GetTrack(ctx, operations.GetTrackRequest{
        TrackingNumber: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrackingResponse != nil {
        // handle response
    }
}
```
