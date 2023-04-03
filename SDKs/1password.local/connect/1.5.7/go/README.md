# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/1password.local/connect/1.5.7/go
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

    req := operations.GetAPIActivityRequest{
        Limit: 10,
        Offset: 50,
    }

    ctx := context.Background()
    res, err := s.Activity.GetAPIActivity(ctx, req, operations.GetAPIActivitySecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIRequests != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Activity

* `GetAPIActivity` - Retrieve a list of API Requests that have been made.

### Files

* `DownloadFileByID` - Get the content of a File
* `GetDetailsOfFileByID` - Get the details of a File
* `GetItemFiles` - Get all the files inside an Item

### Health

* `GetHeartbeat` - Ping the server for liveness
* `GetServerHealth` - Get state of the server and its dependencies.

### Items

* `CreateVaultItem` - Create a new Item
* `DeleteVaultItem` - Delete an Item
* `GetVaultItemByID` - Get the details of an Item
* `GetVaultItems` - Get all items for inside a Vault
* `PatchVaultItem` - Update a subset of Item attributes
* `UpdateVaultItem` - Update an Item

### Metrics

* `GetPrometheusMetrics` - Query server for exposed Prometheus metrics

### Vaults

* `GetVaultByID` - Get Vault details and metadata
* `GetVaults` - Get all Vaults
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
