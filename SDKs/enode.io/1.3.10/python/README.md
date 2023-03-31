# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/enode.io/1.3.10/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ControlChargerChargingRequest(
    request_body=operations.ControlChargerChargingRequestBody(
        action="START",
    ),
    charger_id="corrupti",
)
    
res = s.chargers.control_charger_charging(req, operations.ControlChargerChargingSecurity(
    user_access_token="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### chargers

* `control_charger_charging` - Control Charging
* `get_charger` - Get Charger
* `get_chargers` - List Chargers

### charging_locations

* `delete_charginglocations_charginglocationid` - Delete Charging Location
* `get_charginglocations` - List Charging Locations
* `get_charginglocations_charginglocationid` - Get Charging Location
* `post_charginglocations` - Create Charging Location
* `put_charginglocations_charginglocationid` - Update Charging Location

### me

* `disconnect_vendor` - Disconnect Vendor
* `get_me` - Get My User

### service_health

* `get_health_ready` - Check Service Readiness
* `get_health_vendors` - Check Available Vendors

### statistics

* `get_statistics_charging` - Get User Charging Statistics

### user_management

* `delete_users_userid` - Unlink User
* `delete_users_userid_authorization` - Deauthorize User
* `post_users_userid_link` - Link User

### vehicles

* `get_vehicle_chargestate` - Get Vehicle Charge State
* `get_vehicles` - List Vehicles
* `get_vehicles_vehicleid` - Get Vehicle
* `get_vehicles_vehicleid_information` - Get Vehicle Information
* `get_vehicles_vehicleid_location` - Get Vehicle Location
* `get_vehicles_vehicleid_odometer` - Get Vehicle Odometer
* `get_vehicles_vehicleid_smartchargingpolicy` - Get Vehicle Smart Charging Policy
* `post_vehicles_vehicleid_charging` - Start / Stop Charging
* `post_vehicles_vehicleid_watch` - Start Watching Vehicle
* `put_vehicles_vehicleid_smartchargingpolicy` - Update Vehicle Smart Charging Policy

### webhooks

* `post_webhooks_firehose_test` - Test Firehose Webhook
* `put_webhooks_firehose` - Update Firehose Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
