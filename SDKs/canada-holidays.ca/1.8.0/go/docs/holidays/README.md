# Holidays

## Overview

Get holiday(s) with associated provinces

### Available Operations

* [Holiday](#holiday) - Get a holiday by id
* [Holidays](#holidays) - Get all holidays

## Holiday

Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.

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
    res, err := s.Holidays.Holiday(ctx, operations.HolidayRequest{
        HolidayID: 2,
        Optional: operations.HolidayOptionalEnumTrue.ToPointer(),
        Year: sdk.Int64(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Holiday200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Holidays

Returns Canadian public holidays. Each holiday lists the regions that observe it.

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
    res, err := s.Holidays.Holidays(ctx, operations.HolidaysRequest{
        Federal: operations.HolidaysFederalEnumTrue.ToPointer(),
        Optional: operations.HolidaysOptionalEnumFalse.ToPointer(),
        Year: sdk.Int64(544883),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Holidays200ApplicationJSONObject != nil {
        // handle response
    }
}
```
