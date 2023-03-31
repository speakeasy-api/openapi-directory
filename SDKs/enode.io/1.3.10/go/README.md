# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/enode.io/1.3.10/go
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

    req := operations.ControlChargerChargingRequest{
        RequestBody: &operations.ControlChargerChargingRequestBody{
            Action: "START",
        },
        ChargerID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Chargers.ControlChargerCharging(ctx, req, operations.ControlChargerChargingSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Chargers

* `ControlChargerCharging` - Control Charging
* `GetCharger` - Get Charger
* `GetChargers` - List Chargers

### ChargingLocations

* `DeleteCharginglocationsCharginglocationid` - Delete Charging Location
* `GetCharginglocations` - List Charging Locations
* `GetCharginglocationsCharginglocationid` - Get Charging Location
* `PostCharginglocations` - Create Charging Location
* `PutCharginglocationsCharginglocationid` - Update Charging Location

### Me

* `DisconnectVendor` - Disconnect Vendor
* `GetMe` - Get My User

### ServiceHealth

* `GetHealthReady` - Check Service Readiness
* `GetHealthVendors` - Check Available Vendors

### Statistics

* `GetStatisticsCharging` - Get User Charging Statistics

### UserManagement

* `DeleteUsersUserid` - Unlink User
* `DeleteUsersUseridAuthorization` - Deauthorize User
* `PostUsersUseridLink` - Link User

### Vehicles

* `GetVehicleChargestate` - Get Vehicle Charge State
* `GetVehicles` - List Vehicles
* `GetVehiclesVehicleid` - Get Vehicle
* `GetVehiclesVehicleidInformation` - Get Vehicle Information
* `GetVehiclesVehicleidLocation` - Get Vehicle Location
* `GetVehiclesVehicleidOdometer` - Get Vehicle Odometer
* `GetVehiclesVehicleidSmartchargingpolicy` - Get Vehicle Smart Charging Policy
* `PostVehiclesVehicleidCharging` - Start / Stop Charging
* `PostVehiclesVehicleidWatch` - Start Watching Vehicle
* `PutVehiclesVehicleidSmartchargingpolicy` - Update Vehicle Smart Charging Policy

### Webhooks

* `PostWebhooksFirehoseTest` - Test Firehose Webhook
* `PutWebhooksFirehose` - Update Firehose Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
