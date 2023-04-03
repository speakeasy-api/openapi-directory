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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateDestinationRequest{
        RequestBody: operations.CreateDestinationRequestBody{
            AdditionalFixedProperties: "corrupti",
            ClientToken: "provident",
            Name: "distinctio",
            Site: "quibusdam",
            State: "DISABLED",
        },
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CreateDestination(ctx, req)
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

### SDK SDK

* `CreateDestination` - Grants permission to create a destination
* `CreateSite` - Grants permission to create a site
* `CreateWorker` - Grants permission to create a worker
* `CreateWorkerFleet` - Grants permission to create a worker fleet
* `DeleteDestination` - Grants permission to delete a destination
* `DeleteSite` - Grants permission to delete a site
* `DeleteWorker` - Grants permission to delete a worker
* `DeleteWorkerFleet` - Grants permission to delete a worker fleet
* `GetDestination` - Grants permission to get a destination
* `GetSite` - Grants permission to get a site
* `GetWorker` - Grants permission to get a worker
* `GetWorkerFleet` - Grants permission to get a worker fleet
* `ListDestinations` - Grants permission to list destinations
* `ListSites` - Grants permission to list sites
* `ListWorkerFleets` - Grants permission to list worker fleets
* `ListWorkers` - Grants permission to list workers
* `UpdateDestination` - Grants permission to update a destination
* `UpdateSite` - Grants permission to update a site
* `UpdateWorker` - Grants permission to update a worker
* `UpdateWorkerFleet` - Grants permission to update a worker fleet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
