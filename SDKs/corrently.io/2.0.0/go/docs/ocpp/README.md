# Ocpp

## Overview

Alternative access to Corrently OCPP Data (hosted cloud backend).

### Available Operations

* [OcppSessions](#ocppsessions) - Last Session Info

## OcppSessions

Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
Last session Info of managed EV charging stations connected to the correnty ecosystem.


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
    res, err := s.Ocpp.OcppSessions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EaseeChargers != nil {
        // handle response
    }
}
```
