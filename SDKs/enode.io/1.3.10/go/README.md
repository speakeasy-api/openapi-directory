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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Chargers.ControlChargerCharging(ctx, operations.ControlChargerChargingRequest{
        RequestBody: &operations.ControlChargerChargingRequestBody{
            Action: operations.ControlChargerChargingRequestBodyActionEnumStart,
        },
        ChargerID: "corrupti",
    }, operations.ControlChargerChargingSecurity{
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


### [Chargers](docs/chargers/README.md)

* [ControlChargerCharging](docs/chargers/README.md#controlchargercharging) - Control Charging
* [GetCharger](docs/chargers/README.md#getcharger) - Get Charger
* [GetChargers](docs/chargers/README.md#getchargers) - List Chargers

### [ChargingLocations](docs/charginglocations/README.md)

* [DeleteCharginglocationsCharginglocationid](docs/charginglocations/README.md#deletecharginglocationscharginglocationid) - Delete Charging Location
* [GetCharginglocations](docs/charginglocations/README.md#getcharginglocations) - List Charging Locations
* [GetCharginglocationsCharginglocationid](docs/charginglocations/README.md#getcharginglocationscharginglocationid) - Get Charging Location
* [PostCharginglocations](docs/charginglocations/README.md#postcharginglocations) - Create Charging Location
* [PutCharginglocationsCharginglocationid](docs/charginglocations/README.md#putcharginglocationscharginglocationid) - Update Charging Location

### [Me](docs/me/README.md)

* [DisconnectVendor](docs/me/README.md#disconnectvendor) - Disconnect Vendor
* [GetMe](docs/me/README.md#getme) - Get My User

### [ServiceHealth](docs/servicehealth/README.md)

* [GetHealthReady](docs/servicehealth/README.md#gethealthready) - Check Service Readiness
* [GetHealthVendors](docs/servicehealth/README.md#gethealthvendors) - Check Available Vendors

### [Statistics](docs/statistics/README.md)

* [GetStatisticsCharging](docs/statistics/README.md#getstatisticscharging) - Get User Charging Statistics

### [UserManagement](docs/usermanagement/README.md)

* [DeleteUsersUserid](docs/usermanagement/README.md#deleteusersuserid) - Unlink User
* [DeleteUsersUseridAuthorization](docs/usermanagement/README.md#deleteusersuseridauthorization) - Deauthorize User
* [PostUsersUseridLink](docs/usermanagement/README.md#postusersuseridlink) - Link User

### [Vehicles](docs/vehicles/README.md)

* [GetVehicleChargestate](docs/vehicles/README.md#getvehiclechargestate) - Get Vehicle Charge State
* [GetVehicles](docs/vehicles/README.md#getvehicles) - List Vehicles
* [GetVehiclesVehicleid](docs/vehicles/README.md#getvehiclesvehicleid) - Get Vehicle
* [GetVehiclesVehicleidInformation](docs/vehicles/README.md#getvehiclesvehicleidinformation) - Get Vehicle Information
* [GetVehiclesVehicleidLocation](docs/vehicles/README.md#getvehiclesvehicleidlocation) - Get Vehicle Location
* [GetVehiclesVehicleidOdometer](docs/vehicles/README.md#getvehiclesvehicleidodometer) - Get Vehicle Odometer
* [GetVehiclesVehicleidSmartchargingpolicy](docs/vehicles/README.md#getvehiclesvehicleidsmartchargingpolicy) - Get Vehicle Smart Charging Policy
* [PostVehiclesVehicleidCharging](docs/vehicles/README.md#postvehiclesvehicleidcharging) - Start / Stop Charging
* [PostVehiclesVehicleidWatch](docs/vehicles/README.md#postvehiclesvehicleidwatch) - Start Watching Vehicle
* [PutVehiclesVehicleidSmartchargingpolicy](docs/vehicles/README.md#putvehiclesvehicleidsmartchargingpolicy) - Update Vehicle Smart Charging Policy

### [Webhooks](docs/webhooks/README.md)

* [PostWebhooksFirehoseTest](docs/webhooks/README.md#postwebhooksfirehosetest) - Test Firehose Webhook
* [PutWebhooksFirehose](docs/webhooks/README.md#putwebhooksfirehose) - Update Firehose Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
