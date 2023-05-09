# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/cloudrf.com/2.0.0/go
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
    res, err := s.Analyse.Interference(ctx, operations.InterferenceRequest{
        Name: "Terrence Rau",
        Network: "nulla",
    }, operations.InterferenceSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Analyse](docs/analyse/README.md)

* [Interference](docs/analyse/README.md#interference) - Find the best server for overlapping coverage
* [Mesh](docs/analyse/README.md#mesh) - Merge sites into a super layer.
* [Network](docs/analyse/README.md#network) - Find the best server for somewhere

### [Create](docs/create/README.md)

* [Area](docs/create/README.md#area) - Create a point-to-multipoint heatmap
* [Path](docs/create/README.md#path) - Point-to-point path profile analysis (Tx to Rx)
* [Points](docs/create/README.md#points) - Point-to-multipoint path profile analysis (Many Tx, one Rx)

### [Manage](docs/manage/README.md)

* [AddClutter](docs/manage/README.md#addclutter) - Upload clutter data as GeoJSON
* [Delete](docs/manage/README.md#delete) - Delete a calculation from the database.
* [DeleteNetwork](docs/manage/README.md#deletenetwork) - Delete an entire network
* [Export](docs/manage/README.md#export) - Export a calculation in a GIS file format
* [List](docs/manage/README.md#list) - List calculations from your archive
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
