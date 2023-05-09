# WiMWechselprozesseImMesswesenStromStatusAPI

## Overview

Access to status information of an existing metering change and allocation process.

### Available Operations

* [Wimstatus](#wimstatus) - WiM Proess Informtion

## Wimstatus

Access to status information of an existing metering change and allocation process.


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
    res, err := s.WiMWechselprozesseImMesswesenStromStatusAPI.Wimstatus(ctx, operations.WimstatusRequest{
        Vid: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wimstatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```
