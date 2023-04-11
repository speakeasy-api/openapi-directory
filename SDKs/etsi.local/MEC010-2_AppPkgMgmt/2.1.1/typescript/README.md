# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/etsi.local/MEC010-2_AppPkgMgmt/2.1.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/etsi.local/MEC010-2_AppPkgMgmt/2.1.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AppDGETRequest,
  AppDGETResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AppDGETRequest = {
  allFields: "corrupti",
  appDId: "provident",
  excludeDefault: "distinctio",
  excludeFields: "quibusdam",
  fields: "unde",
  filter: "nulla",
};

sdk.appPkgm.appDGET(req).then((res: AppDGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### appPkgm

* `appDGET` - Reads the content of the AppD of on-boarded individual application package resources.
* `appDIdGET` - Fetch the onboarded application package content identified by appPkgId or appDId.
* `appDIdPUT` - Uploads the content of application package.
* `appPkgGET` - Fetch the onboarded application package content identified by appPkgId or appDId.
* `appPkgIdGET` - Reads the content of the AppD of on-boarded individual application package resources.
* `appPkgPUT` - Uploads the content of application package.
* `appPackageDELETE` - Deletes an individual application package resources
* `appPackageGET` - Queries the information related to individual application package resources
* `appPackagePATCH` - Updates the operational state of an individual application package resource
* `appPackagesGET` - Queries information relating to on-boarded application packages in the MEO
* `appPackagesPOST` - Create a resource for on-boarding an application package to a MEO
* `individualSubscriptionDELETE` - Deletes the individual subscription to notifications about application package changes in MEO.
* `individualSubscriptionGET` - Used to represent an individual subscription to notifications about application package changes.
* `subscriptionsGET` - used to retrieve the information of subscriptions to individual application package resource in MEO
* `subscriptionsPOST` - Subscribe to notifications about on-boarding an application package

### appPkgmNotifications

* `appPkgNotificationPOST` - Registers a notification endpoint to notify application package operations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

