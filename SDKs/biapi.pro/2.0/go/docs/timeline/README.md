# Timeline

### Available Operations

* [GetIncidents](#getincidents) - Get incidents logs.

## GetIncidents

By default, provide all incidents. Results are paginated. Some filters can be set via query parameters.<br><br>

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
    res, err := s.Timeline.GetIncidents(ctx, operations.GetIncidentsRequest{
        EndDate: sdk.String("blanditiis"),
        ID: sdk.Int64(405942),
        Page: sdk.Int64(153627),
        Size: sdk.Int64(24313),
        StartDate: sdk.String("vel"),
        State: sdk.String("nostrum"),
        WeboobID: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
