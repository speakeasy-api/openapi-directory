# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/exlibrisgroup.com/tasklists/1.0/go
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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.LendingRequests.GetAlmawsV1TaskListsRsLendingRequests(ctx, operations.GetAlmawsV1TaskListsRsLendingRequestsRequest{
        Library: sdk.String("corrupti"),
        Partner: sdk.String("provident"),
        Printed: sdk.String("distinctio"),
        Reported: sdk.String("quibusdam"),
        RequestedFormat: sdk.String("unde"),
        Status: sdk.String("nulla"),
        SuppliedFormat: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [LendingRequests](docs/lendingrequests/README.md)

* [GetAlmawsV1TaskListsRsLendingRequests](docs/lendingrequests/README.md#getalmawsv1tasklistsrslendingrequests) - Get Lending Requests
* [PostAlmawsV1TaskListsRsLendingRequests](docs/lendingrequests/README.md#postalmawsv1tasklistsrslendingrequests) - Act on Lending Requests

### [Printouts](docs/printouts/README.md)

* [GetAlmawsV1TaskListsPrintouts](docs/printouts/README.md#getalmawsv1tasklistsprintouts) - Retrieve Printouts
* [GetAlmawsV1TaskListsPrintoutsPrintoutID](docs/printouts/README.md#getalmawsv1tasklistsprintoutsprintoutid) - Retrieve a Printout
* [PostAlmawsV1TaskListsPrintouts](docs/printouts/README.md#postalmawsv1tasklistsprintouts) - Act on Printouts
* [PostAlmawsV1TaskListsPrintoutsPrintoutID](docs/printouts/README.md#postalmawsv1tasklistsprintoutsprintoutid) - Printout Service

### [RequestedResources](docs/requestedresources/README.md)

* [GetAlmawsV1TaskListsRequestedResources](docs/requestedresources/README.md#getalmawsv1tasklistsrequestedresources) - Get Requested Resources
* [PostAlmawsV1TaskListsRequestedResources](docs/requestedresources/README.md#postalmawsv1tasklistsrequestedresources) - Act on Requested Resources

### [Test](docs/test/README.md)

* [GetAlmawsV1TaskListsTest](docs/test/README.md#getalmawsv1taskliststest) - GET Task-lists Test API
* [PostAlmawsV1TaskListsTest](docs/test/README.md#postalmawsv1taskliststest) - POST Task-lists Test API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
