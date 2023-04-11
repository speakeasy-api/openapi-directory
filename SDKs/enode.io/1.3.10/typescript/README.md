# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/enode.io/1.3.10/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/enode.io/1.3.10/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ControlChargerChargingRequest,
  ControlChargerChargingResponse,
  ControlChargerChargingRequestBodyActionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ControlChargerChargingRequest = {
  requestBody: {
    action: ControlChargerChargingRequestBodyActionEnum.Start,
  },
  chargerId: "corrupti",
};

sdk.chargers.controlChargerCharging(req).then((res: ControlChargerChargingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### chargers

* `controlChargerCharging` - Control Charging
* `getCharger` - Get Charger
* `getChargers` - List Chargers

### chargingLocations

* `deleteCharginglocationsCharginglocationid` - Delete Charging Location
* `getCharginglocations` - List Charging Locations
* `getCharginglocationsCharginglocationid` - Get Charging Location
* `postCharginglocations` - Create Charging Location
* `putCharginglocationsCharginglocationid` - Update Charging Location

### me

* `disconnectVendor` - Disconnect Vendor
* `getMe` - Get My User

### serviceHealth

* `getHealthReady` - Check Service Readiness
* `getHealthVendors` - Check Available Vendors

### statistics

* `getStatisticsCharging` - Get User Charging Statistics

### userManagement

* `deleteUsersUserid` - Unlink User
* `deleteUsersUseridAuthorization` - Deauthorize User
* `postUsersUseridLink` - Link User

### vehicles

* `getVehicleChargestate` - Get Vehicle Charge State
* `getVehicles` - List Vehicles
* `getVehiclesVehicleid` - Get Vehicle
* `getVehiclesVehicleidInformation` - Get Vehicle Information
* `getVehiclesVehicleidLocation` - Get Vehicle Location
* `getVehiclesVehicleidOdometer` - Get Vehicle Odometer
* `getVehiclesVehicleidSmartchargingpolicy` - Get Vehicle Smart Charging Policy
* `postVehiclesVehicleidCharging` - Start / Stop Charging
* `postVehiclesVehicleidWatch` - Start Watching Vehicle
* `putVehiclesVehicleidSmartchargingpolicy` - Update Vehicle Smart Charging Policy

### webhooks

* `postWebhooksFirehoseTest` - Test Firehose Webhook
* `putWebhooksFirehose` - Update Firehose Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

