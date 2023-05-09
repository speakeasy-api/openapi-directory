# Logs

## Overview

A log represents a request made for a given consumer. Logs include requests made to unified APIs, connectors and the Vault API.

### Available Operations

* [LogsAll](#logsall) - Get all consumer request logs

## LogsAll

This endpoint includes all consumer request logs.


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
    res, err := s.Logs.LogsAll(ctx, operations.LogsAllRequest{
        Cursor: sdk.String("dolorum"),
        Filter: &shared.LogsFilter{
            ConnectorID: sdk.String("crm+salesforce"),
            ExcludeUnifiedApis: sdk.String("vault,proxy"),
            StatusCode: sdk.Float64(201),
        },
        Limit: sdk.Int64(478596),
        XApideckAppID: "voluptate",
        XApideckConsumerID: "dolorum",
    }, operations.LogsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLogsResponse != nil {
        // handle response
    }
}
```
