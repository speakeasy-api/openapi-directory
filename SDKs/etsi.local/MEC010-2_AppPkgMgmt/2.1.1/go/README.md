# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/etsi.local/MEC010-2_AppPkgMgmt/2.1.1/go
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
    res, err := s.AppPkgm.AppDGET(ctx, operations.AppDGETRequest{
        AllFields: sdk.String("corrupti"),
        AppDID: "provident",
        ExcludeDefault: sdk.String("distinctio"),
        ExcludeFields: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AppPkgm](docs/apppkgm/README.md)

* [AppDGET](docs/apppkgm/README.md#appdget) - Reads the content of the AppD of on-boarded individual application package resources.
* [AppDIDGET](docs/apppkgm/README.md#appdidget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [AppDIDPUT](docs/apppkgm/README.md#appdidput) - Uploads the content of application package.
* [AppPkgGET](docs/apppkgm/README.md#apppkgget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [AppPkgIDGET](docs/apppkgm/README.md#apppkgidget) - Reads the content of the AppD of on-boarded individual application package resources.
* [AppPkgPUT](docs/apppkgm/README.md#apppkgput) - Uploads the content of application package.
* [AppPackageDELETE](docs/apppkgm/README.md#apppackagedelete) - Deletes an individual application package resources
* [AppPackageGET](docs/apppkgm/README.md#apppackageget) - Queries the information related to individual application package resources
* [AppPackagePATCH](docs/apppkgm/README.md#apppackagepatch) - Updates the operational state of an individual application package resource
* [AppPackagesGET](docs/apppkgm/README.md#apppackagesget) - Queries information relating to on-boarded application packages in the MEO
* [AppPackagesPOST](docs/apppkgm/README.md#apppackagespost) - Create a resource for on-boarding an application package to a MEO
* [IndividualSubscriptionDELETE](docs/apppkgm/README.md#individualsubscriptiondelete) - Deletes the individual subscription to notifications about application package changes in MEO.
* [IndividualSubscriptionGET](docs/apppkgm/README.md#individualsubscriptionget) - Used to represent an individual subscription to notifications about application package changes.
* [SubscriptionsGET](docs/apppkgm/README.md#subscriptionsget) - used to retrieve the information of subscriptions to individual application package resource in MEO
* [SubscriptionsPOST](docs/apppkgm/README.md#subscriptionspost) - Subscribe to notifications about on-boarding an application package

### [AppPkgmNotifications](docs/apppkgmnotifications/README.md)

* [AppPkgNotificationPOST](docs/apppkgmnotifications/README.md#apppkgnotificationpost) - Registers a notification endpoint to notify application package operations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
