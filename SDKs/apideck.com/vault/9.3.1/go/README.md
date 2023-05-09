# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/vault/9.3.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Connections.ConnectionSettingsAll(ctx, operations.ConnectionSettingsAllRequest{
        Resource: "corrupti",
        ServiceID: "provident",
        UnifiedAPI: "distinctio",
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
    }, operations.ConnectionSettingsAllSecurity{
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


### [Connections](docs/connections/README.md)

* [ConnectionSettingsAll](docs/connections/README.md#connectionsettingsall) - Get resource settings
* [ConnectionSettingsUpdate](docs/connections/README.md#connectionsettingsupdate) - Update settings
* [ConnectionsAdd](docs/connections/README.md#connectionsadd) - Create connection
* [ConnectionsAll](docs/connections/README.md#connectionsall) - Get all connections
* [ConnectionsCallback](docs/connections/README.md#connectionscallback) - Callback
* [ConnectionsDelete](docs/connections/README.md#connectionsdelete) - Deletes a connection
* [ConnectionsImport](docs/connections/README.md#connectionsimport) - Import connection
* [ConnectionsOne](docs/connections/README.md#connectionsone) - Get connection
* [ConnectionsRevoke](docs/connections/README.md#connectionsrevoke) - Revoke connection
* [ConnectionsToken](docs/connections/README.md#connectionstoken) - Get Access Token
* [ConnectionsUpdate](docs/connections/README.md#connectionsupdate) - Update connection

### [Consumers](docs/consumers/README.md)

* [ConsumerRequestCountsAll](docs/consumers/README.md#consumerrequestcountsall) - Consumer request counts
* [ConsumersAdd](docs/consumers/README.md#consumersadd) - Create consumer
* [ConsumersAll](docs/consumers/README.md#consumersall) - Get all consumers
* [ConsumersDelete](docs/consumers/README.md#consumersdelete) - Delete consumer
* [ConsumersOne](docs/consumers/README.md#consumersone) - Get consumer
* [ConsumersUpdate](docs/consumers/README.md#consumersupdate) - Update consumer

### [Logs](docs/logs/README.md)

* [LogsAll](docs/logs/README.md#logsall) - Get all consumer request logs

### [Sessions](docs/sessions/README.md)

* [SessionsCreate](docs/sessions/README.md#sessionscreate) - Create Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
