# Health

## Overview

Healthchecks

### Available Operations

* [GetHealthCheck](#gethealthcheck) - Health Check

## GetHealthCheck

Health Check

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
    res, err := s.Health.GetHealthCheck(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.HealthCheckRead != nil {
        // handle response
    }
}
```
