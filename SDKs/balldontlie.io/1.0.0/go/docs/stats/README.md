# Stats

### Available Operations

* [AllStatsExampleParameters](#allstatsexampleparameters) - all stats (example parameters)

## AllStatsExampleParameters

all stats (example parameters)

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
    res, err := s.Stats.AllStatsExampleParameters(ctx, operations.AllStatsExampleParametersRequest{
        PlayerIds: sdk.String("237"),
        Season: sdk.String("2018"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
