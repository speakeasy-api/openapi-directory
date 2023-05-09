# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iot-roborunner/2018-05-10/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateDestination(ctx, operations.CreateDestinationRequest{
        RequestBody: operations.CreateDestinationRequestBody{
            AdditionalFixedProperties: sdk.String("corrupti"),
            ClientToken: sdk.String("provident"),
            Name: "Ellis Mitchell",
            Site: "illum",
            State: operations.CreateDestinationRequestBodyStateEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDestinationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateDestination](docs/sdk/README.md#createdestination) - Grants permission to create a destination
* [CreateSite](docs/sdk/README.md#createsite) - Grants permission to create a site
* [CreateWorker](docs/sdk/README.md#createworker) - Grants permission to create a worker
* [CreateWorkerFleet](docs/sdk/README.md#createworkerfleet) - Grants permission to create a worker fleet
* [DeleteDestination](docs/sdk/README.md#deletedestination) - Grants permission to delete a destination
* [DeleteSite](docs/sdk/README.md#deletesite) - Grants permission to delete a site
* [DeleteWorker](docs/sdk/README.md#deleteworker) - Grants permission to delete a worker
* [DeleteWorkerFleet](docs/sdk/README.md#deleteworkerfleet) - Grants permission to delete a worker fleet
* [GetDestination](docs/sdk/README.md#getdestination) - Grants permission to get a destination
* [GetSite](docs/sdk/README.md#getsite) - Grants permission to get a site
* [GetWorker](docs/sdk/README.md#getworker) - Grants permission to get a worker
* [GetWorkerFleet](docs/sdk/README.md#getworkerfleet) - Grants permission to get a worker fleet
* [ListDestinations](docs/sdk/README.md#listdestinations) - Grants permission to list destinations
* [ListSites](docs/sdk/README.md#listsites) - Grants permission to list sites
* [ListWorkerFleets](docs/sdk/README.md#listworkerfleets) - Grants permission to list worker fleets
* [ListWorkers](docs/sdk/README.md#listworkers) - Grants permission to list workers
* [UpdateDestination](docs/sdk/README.md#updatedestination) - Grants permission to update a destination
* [UpdateSite](docs/sdk/README.md#updatesite) - Grants permission to update a site
* [UpdateWorker](docs/sdk/README.md#updateworker) - Grants permission to update a worker
* [UpdateWorkerFleet](docs/sdk/README.md#updateworkerfleet) - Grants permission to update a worker fleet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
