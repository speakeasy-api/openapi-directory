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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Activity.GetAPIActivity(ctx, operations.GetAPIActivityRequest{
        Limit: sdk.Int64(10),
        Offset: sdk.Int64(50),
    }, operations.GetAPIActivitySecurity{
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


### [Activity](docs/activity/README.md)

* [GetAPIActivity](docs/activity/README.md#getapiactivity) - Retrieve a list of API Requests that have been made.

### [Files](docs/files/README.md)

* [DownloadFileByID](docs/files/README.md#downloadfilebyid) - Get the content of a File
* [GetDetailsOfFileByID](docs/files/README.md#getdetailsoffilebyid) - Get the details of a File
* [GetItemFiles](docs/files/README.md#getitemfiles) - Get all the files inside an Item

### [Health](docs/health/README.md)

* [GetHeartbeat](docs/health/README.md#getheartbeat) - Ping the server for liveness
* [GetServerHealth](docs/health/README.md#getserverhealth) - Get state of the server and its dependencies.

### [Items](docs/items/README.md)

* [CreateVaultItem](docs/items/README.md#createvaultitem) - Create a new Item
* [DeleteVaultItem](docs/items/README.md#deletevaultitem) - Delete an Item
* [GetVaultItemByID](docs/items/README.md#getvaultitembyid) - Get the details of an Item
* [GetVaultItems](docs/items/README.md#getvaultitems) - Get all items for inside a Vault
* [PatchVaultItem](docs/items/README.md#patchvaultitem) - Update a subset of Item attributes
* [UpdateVaultItem](docs/items/README.md#updatevaultitem) - Update an Item

### [Metrics](docs/metrics/README.md)

* [GetPrometheusMetrics](docs/metrics/README.md#getprometheusmetrics) - Query server for exposed Prometheus metrics

### [Vaults](docs/vaults/README.md)

* [GetVaultByID](docs/vaults/README.md#getvaultbyid) - Get Vault details and metadata
* [GetVaults](docs/vaults/README.md#getvaults) - Get all Vaults
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
