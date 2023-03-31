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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AppDGETRequest{
        AllFields: "corrupti",
        AppDID: "provident",
        ExcludeDefault: "distinctio",
        ExcludeFields: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
    }

    ctx := context.Background()
    res, err := s.AppPkgm.AppDGET(ctx, req)
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


### AppPkgm

* `AppDGET` - Reads the content of the AppD of on-boarded individual application package resources.
* `AppDIDGET` - Fetch the onboarded application package content identified by appPkgId or appDId.
* `AppDIDPUT` - Uploads the content of application package.
* `AppPkgGET` - Fetch the onboarded application package content identified by appPkgId or appDId.
* `AppPkgIDGET` - Reads the content of the AppD of on-boarded individual application package resources.
* `AppPkgPUT` - Uploads the content of application package.
* `AppPackageDELETE` - Deletes an individual application package resources
* `AppPackageGET` - Queries the information related to individual application package resources
* `AppPackagePATCH` - Updates the operational state of an individual application package resource
* `AppPackagesGET` - Queries information relating to on-boarded application packages in the MEO
* `AppPackagesPOST` - Create a resource for on-boarding an application package to a MEO
* `IndividualSubscriptionDELETE` - Deletes the individual subscription to notifications about application package changes in MEO.
* `IndividualSubscriptionGET` - Used to represent an individual subscription to notifications about application package changes.
* `SubscriptionsGET` - used to retrieve the information of subscriptions to individual application package resource in MEO
* `SubscriptionsPOST` - Subscribe to notifications about on-boarding an application package

### AppPkgmNotifications

* `AppPkgNotificationPOST` - Registers a notification endpoint to notify application package operations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
