# SDK

## Overview

API for Internet Archive's Wayback Machine

### Available Operations

* [GetWaybackV1Available](#getwaybackv1available)

## GetWaybackV1Available

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetWaybackV1Available(ctx, operations.GetWaybackV1AvailableRequest{
        Callback: sdk.String("illum"),
        Closest: shared.ClosestEnumBefore.ToPointer(),
        StatusCode: shared.StatusCodeEnumFourHundredAndFourteen.ToPointer(),
        Tag: sdk.String("deserunt"),
        Timeout: sdk.Float64(3843.82),
        Timestamp: sdk.String("iure"),
        URL: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
