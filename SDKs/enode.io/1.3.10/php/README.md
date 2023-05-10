# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ControlChargerChargingRequest();
    $request->requestBody = new ControlChargerChargingRequestBody();
    $request->requestBody->action = ControlChargerChargingRequestBodyActionEnum::START;
    $request->chargerId = 'corrupti';

    $requestSecurity = new ControlChargerChargingSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargers->controlChargerCharging($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [chargers](docs/chargers/README.md)

* [controlChargerCharging](docs/chargers/README.md#controlchargercharging) - Control Charging
* [getCharger](docs/chargers/README.md#getcharger) - Get Charger
* [getChargers](docs/chargers/README.md#getchargers) - List Chargers

### [chargingLocations](docs/charginglocations/README.md)

* [deleteCharginglocationsCharginglocationid](docs/charginglocations/README.md#deletecharginglocationscharginglocationid) - Delete Charging Location
* [getCharginglocations](docs/charginglocations/README.md#getcharginglocations) - List Charging Locations
* [getCharginglocationsCharginglocationid](docs/charginglocations/README.md#getcharginglocationscharginglocationid) - Get Charging Location
* [postCharginglocations](docs/charginglocations/README.md#postcharginglocations) - Create Charging Location
* [putCharginglocationsCharginglocationid](docs/charginglocations/README.md#putcharginglocationscharginglocationid) - Update Charging Location

### [me](docs/me/README.md)

* [disconnectVendor](docs/me/README.md#disconnectvendor) - Disconnect Vendor
* [getMe](docs/me/README.md#getme) - Get My User

### [serviceHealth](docs/servicehealth/README.md)

* [getHealthReady](docs/servicehealth/README.md#gethealthready) - Check Service Readiness
* [getHealthVendors](docs/servicehealth/README.md#gethealthvendors) - Check Available Vendors

### [statistics](docs/statistics/README.md)

* [getStatisticsCharging](docs/statistics/README.md#getstatisticscharging) - Get User Charging Statistics

### [userManagement](docs/usermanagement/README.md)

* [deleteUsersUserid](docs/usermanagement/README.md#deleteusersuserid) - Unlink User
* [deleteUsersUseridAuthorization](docs/usermanagement/README.md#deleteusersuseridauthorization) - Deauthorize User
* [postUsersUseridLink](docs/usermanagement/README.md#postusersuseridlink) - Link User

### [vehicles](docs/vehicles/README.md)

* [getVehicleChargestate](docs/vehicles/README.md#getvehiclechargestate) - Get Vehicle Charge State
* [getVehicles](docs/vehicles/README.md#getvehicles) - List Vehicles
* [getVehiclesVehicleid](docs/vehicles/README.md#getvehiclesvehicleid) - Get Vehicle
* [getVehiclesVehicleidInformation](docs/vehicles/README.md#getvehiclesvehicleidinformation) - Get Vehicle Information
* [getVehiclesVehicleidLocation](docs/vehicles/README.md#getvehiclesvehicleidlocation) - Get Vehicle Location
* [getVehiclesVehicleidOdometer](docs/vehicles/README.md#getvehiclesvehicleidodometer) - Get Vehicle Odometer
* [getVehiclesVehicleidSmartchargingpolicy](docs/vehicles/README.md#getvehiclesvehicleidsmartchargingpolicy) - Get Vehicle Smart Charging Policy
* [postVehiclesVehicleidCharging](docs/vehicles/README.md#postvehiclesvehicleidcharging) - Start / Stop Charging
* [postVehiclesVehicleidWatch](docs/vehicles/README.md#postvehiclesvehicleidwatch) - Start Watching Vehicle
* [putVehiclesVehicleidSmartchargingpolicy](docs/vehicles/README.md#putvehiclesvehicleidsmartchargingpolicy) - Update Vehicle Smart Charging Policy

### [webhooks](docs/webhooks/README.md)

* [postWebhooksFirehoseTest](docs/webhooks/README.md#postwebhooksfirehosetest) - Test Firehose Webhook
* [putWebhooksFirehose](docs/webhooks/README.md#putwebhooksfirehose) - Update Firehose Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
