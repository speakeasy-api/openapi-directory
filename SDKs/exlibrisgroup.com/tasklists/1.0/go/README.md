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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetAlmawsV1TaskListsRsLendingRequestsRequest{
        Library: "corrupti",
        Partner: "provident",
        Printed: "distinctio",
        Reported: "quibusdam",
        RequestedFormat: "unde",
        Status: "nulla",
        SuppliedFormat: "corrupti",
    }

    ctx := context.Background()
    res, err := s.LendingRequests.GetAlmawsV1TaskListsRsLendingRequests(ctx, req)
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


### LendingRequests

* `GetAlmawsV1TaskListsRsLendingRequests` - Get Lending Requests
* `PostAlmawsV1TaskListsRsLendingRequests` - Act on Lending Requests

### Printouts

* `GetAlmawsV1TaskListsPrintouts` - Retrieve Printouts
* `GetAlmawsV1TaskListsPrintoutsPrintoutID` - Retrieve a Printout
* `PostAlmawsV1TaskListsPrintouts` - Act on Printouts
* `PostAlmawsV1TaskListsPrintoutsPrintoutID` - Printout Service

### RequestedResources

* `GetAlmawsV1TaskListsRequestedResources` - Get Requested Resources
* `PostAlmawsV1TaskListsRequestedResources` - Act on Requested Resources

### Test

* `GetAlmawsV1TaskListsTest` - GET Task-lists Test API
* `PostAlmawsV1TaskListsTest` - POST Task-lists Test API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
