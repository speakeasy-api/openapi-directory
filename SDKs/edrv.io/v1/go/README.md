# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/edrv.io/v1/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ChargeStations.DeleteChargeStation(ctx, operations.DeleteChargeStationRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
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


### [ChargeStations](docs/chargestations/README.md)

* [DeleteChargeStation](docs/chargestations/README.md#deletechargestation) - Use to delete a charge station
* [GetChargeStation](docs/chargestations/README.md#getchargestation) - Get a single charge station's data
* [GetChargeStationConnectors](docs/chargestations/README.md#getchargestationconnectors) - List connectors for a chargestation
* [GetChargeStations](docs/chargestations/README.md#getchargestations) - List all Chargestations
* [PatchChargeStation](docs/chargestations/README.md#patchchargestation) - Update a charge station's data
* [PostChargeStations](docs/chargestations/README.md#postchargestations) - Create a new charge station

### [Commands](docs/commands/README.md)

* [Cancelreservation](docs/commands/README.md#cancelreservation) - Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [GetCommands](docs/commands/README.md#getcommands) - Get Commands data
* [GetVariables](docs/commands/README.md#getvariables) - Get a charge station's config variables
* [PatchChargeStationVariable](docs/commands/README.md#patchchargestationvariable) - Update config variables for a chargestation
* [Remotestart](docs/commands/README.md#remotestart) - Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [Remotestop](docs/commands/README.md#remotestop) - Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [Reserve](docs/commands/README.md#reserve) - Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [Reset](docs/commands/README.md#reset) - Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [Unlockconnector](docs/commands/README.md#unlockconnector) - Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### [Configurations](docs/configurations/README.md)

* [GetConfiguration](docs/configurations/README.md#getconfiguration) - Get one Configuration data
* [GetConfigurations](docs/configurations/README.md#getconfigurations) - Get Configurations data
* [PostConfigurations](docs/configurations/README.md#postconfigurations) - Create connector with parameters

### [Connectors](docs/connectors/README.md)

* [DeleteConnector](docs/connectors/README.md#deleteconnector) - Delete a connector
* [GetConnector](docs/connectors/README.md#getconnector) - Get a connector
* [GetConnectors](docs/connectors/README.md#getconnectors) - List connectors
* [PatchConnector](docs/connectors/README.md#patchconnector) - Update a connector's data
* [PostConnectors](docs/connectors/README.md#postconnectors) - Create a new connector

### [Drivers](docs/drivers/README.md)

* [DeleteDriver](docs/drivers/README.md#deletedriver) - Delete a driver
* [GetDriver](docs/drivers/README.md#getdriver) - Get a driver's data
* [GetDrivers](docs/drivers/README.md#getdrivers) - List all drivers
* [PatchDriver](docs/drivers/README.md#patchdriver) - Update a driver's data
* [PostDrivers](docs/drivers/README.md#postdrivers) - Create a new driver

### [Locations](docs/locations/README.md)

* [DeleteLocation](docs/locations/README.md#deletelocation) - Delete a location
* [GetLocation](docs/locations/README.md#getlocation) - Get a location's data
* [GetLocations](docs/locations/README.md#getlocations) - Get Locations data
* [PatchLocation](docs/locations/README.md#patchlocation) - Update a location's data
* [PostLocations](docs/locations/README.md#postlocations) - Create a new location

### [Organizations](docs/organizations/README.md)

* [GetOrganization](docs/organizations/README.md#getorganization) - Get one organization's data by id
* [GetOrganizations](docs/organizations/README.md#getorganizations) - Get an array of all Organizations
* [PatchOrganization](docs/organizations/README.md#patchorganization) - Update an organization's data

### [Realtime](docs/realtime/README.md)

* [GetRealtime](docs/realtime/README.md#getrealtime) - Use to request a Websockets handshake

### [Reservations](docs/reservations/README.md)

* [GetReservation](docs/reservations/README.md#getreservation) - Get one reservation data
* [GetReservations](docs/reservations/README.md#getreservations) - Get Reservations data
* [Updatereservation](docs/reservations/README.md#updatereservation) - Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### [SmartCharging](docs/smartcharging/README.md)

* [Deletechargingschedule](docs/smartcharging/README.md#deletechargingschedule) - Delete a smart charging schedule
* [Setchargingschedule](docs/smartcharging/README.md#setchargingschedule) - Set one of charging power or current of a specific chargestation connector

### [Tokens](docs/tokens/README.md)

* [DeleteToken](docs/tokens/README.md#deletetoken) - Use to delete a token
* [GetToken](docs/tokens/README.md#gettoken) - Get a single token's data
* [GetTokens](docs/tokens/README.md#gettokens) - List tokens
* [PatchToken](docs/tokens/README.md#patchtoken) - Update a token
* [PostTokens](docs/tokens/README.md#posttokens) - Create a new token

### [Transactions](docs/transactions/README.md)

* [GetTransaction](docs/transactions/README.md#gettransaction) - Get a specific transaction
* [GetTransactionCost](docs/transactions/README.md#gettransactioncost) - Get a specific transaction's cost
* [GetTransactions](docs/transactions/README.md#gettransactions) - Get a list of transactions

### [Vehicles](docs/vehicles/README.md)

* [GetVehicle](docs/vehicles/README.md#getvehicle) - Get a vehicle's data
* [GetVehicleBattery](docs/vehicles/README.md#getvehiclebattery) - Get a vehicle's battery
* [GetVehicleCharge](docs/vehicles/README.md#getvehiclecharge) - Get a vehicle's charge
* [GetVehicleLocation](docs/vehicles/README.md#getvehiclelocation) - Get a vehicle's location
* [GetVehicleOdometer](docs/vehicles/README.md#getvehicleodometer) - Get a vehicle's odometer
* [GetVehicles](docs/vehicles/README.md#getvehicles) - List all vehicles
* [PostCharge](docs/vehicles/README.md#postcharge) - Change charge
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
