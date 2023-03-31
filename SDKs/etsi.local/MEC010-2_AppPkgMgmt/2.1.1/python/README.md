# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/etsi.local/MEC010-2_AppPkgMgmt/2.1.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AppDGETRequest(
    all_fields="corrupti",
    app_d_id="provident",
    exclude_default="distinctio",
    exclude_fields="quibusdam",
    fields_="unde",
    filter="nulla",
)
    
res = s.app_pkgm.app_dget(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### app_pkgm

* `app_dget` - Reads the content of the AppD of on-boarded individual application package resources.
* `app_d_id_get` - Fetch the onboarded application package content identified by appPkgId or appDId.
* `app_d_id_put` - Uploads the content of application package.
* `app_pkg_get` - Fetch the onboarded application package content identified by appPkgId or appDId.
* `app_pkg_id_get` - Reads the content of the AppD of on-boarded individual application package resources.
* `app_pkg_put` - Uploads the content of application package.
* `app_package_delete` - Deletes an individual application package resources
* `app_package_get` - Queries the information related to individual application package resources
* `app_package_patch` - Updates the operational state of an individual application package resource
* `app_packages_get` - Queries information relating to on-boarded application packages in the MEO
* `app_packages_post` - Create a resource for on-boarding an application package to a MEO
* `individual_subscription_delete` - Deletes the individual subscription to notifications about application package changes in MEO.
* `individual_subscription_get` - Used to represent an individual subscription to notifications about application package changes.
* `subscriptions_get` - used to retrieve the information of subscriptions to individual application package resource in MEO
* `subscriptions_post` - Subscribe to notifications about on-boarding an application package

### app_pkgm_notifications

* `app_pkg_notification_post` - Registers a notification endpoint to notify application package operations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
