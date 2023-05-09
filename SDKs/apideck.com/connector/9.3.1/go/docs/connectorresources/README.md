# ConnectorResources

### Available Operations

* [ConnectorResourcesOne](#connectorresourcesone) - Get Connector Resource

## ConnectorResourcesOne

Get Connector Resource

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
    res, err := s.ConnectorResources.ConnectorResourcesOne(ctx, operations.ConnectorResourcesOneRequest{
        ID: "9d488e1e-91e4-450a-92ab-d44269802d50",
        ResourceID: "fugit",
        UnifiedAPI: shared.UnifiedAPIIDEnumCrm.ToPointer(),
        XApideckAppID: "dolorum",
    }, operations.ConnectorResourcesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorResourceResponse != nil {
        // handle response
    }
}
```
