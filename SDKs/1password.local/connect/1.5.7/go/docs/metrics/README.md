# Metrics

### Available Operations

* [GetPrometheusMetrics](#getprometheusmetrics) - Query server for exposed Prometheus metrics

## GetPrometheusMetrics

See Prometheus documentation for a complete data model.

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
    res, err := s.Metrics.GetPrometheusMetrics(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPrometheusMetrics200TextPlainString != nil {
        // handle response
    }
}
```
