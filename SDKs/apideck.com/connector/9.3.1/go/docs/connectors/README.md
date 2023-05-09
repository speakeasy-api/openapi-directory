# Connectors

### Available Operations

* [ConnectorsAll](#connectorsall) - List Connectors
* [ConnectorsOne](#connectorsone) - Get Connector

## ConnectorsAll

List Connectors

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
    res, err := s.Connectors.ConnectorsAll(ctx, operations.ConnectorsAllRequest{
        Cursor: sdk.String("excepturi"),
        Filter: &shared.ConnectorsFilter{
            Status: shared.ConnectorStatusEnumBeta.ToPointer(),
            UnifiedAPI: shared.UnifiedAPIIDEnumCrm.ToPointer(),
        },
        Limit: sdk.Int64(703737),
        XApideckAppID: "tempore",
    }, operations.ConnectorsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorsResponse != nil {
        // handle response
    }
}
```

## ConnectorsOne

Get Connector

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
    res, err := s.Connectors.ConnectorsOne(ctx, operations.ConnectorsOneRequest{
        ID: "4f63c969-e9a3-4efa-b7df-b14cd66ae395",
        XApideckAppID: "accusamus",
    }, operations.ConnectorsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorResponse != nil {
        // handle response
    }
}
```
