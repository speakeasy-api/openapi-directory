# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/vault/9.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ConnectionSettingsAllRequest{
        Resource: "corrupti",
        ServiceID: "provident",
        UnifiedAPI: "distinctio",
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
    }

    ctx := context.Background()
    res, err := s.Connections.ConnectionSettingsAll(ctx, req, operations.ConnectionSettingsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Connections

* `ConnectionSettingsAll` - Get resource settings
* `ConnectionSettingsUpdate` - Update settings
* `ConnectionsAdd` - Create connection
* `ConnectionsAll` - Get all connections
* `ConnectionsCallback` - Callback
* `ConnectionsDelete` - Deletes a connection
* `ConnectionsImport` - Import connection
* `ConnectionsOne` - Get connection
* `ConnectionsRevoke` - Revoke connection
* `ConnectionsToken` - Get Access Token
* `ConnectionsUpdate` - Update connection

### Consumers

* `ConsumerRequestCountsAll` - Consumer request counts
* `ConsumersAdd` - Create consumer
* `ConsumersAll` - Get all consumers
* `ConsumersDelete` - Delete consumer
* `ConsumersOne` - Get consumer
* `ConsumersUpdate` - Update consumer

### Logs

* `LogsAll` - Get all consumer request logs

### Sessions

* `SessionsCreate` - Create Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
