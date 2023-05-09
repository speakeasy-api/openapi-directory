# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChargeStationRequest;
import org.openapis.openapi.models.operations.DeleteChargeStationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteChargeStationRequest req = new DeleteChargeStationRequest("provident");            

            DeleteChargeStationResponse res = sdk.chargeStations.deleteChargeStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [chargeStations](docs/chargestations/README.md)

* [deleteChargeStation](docs/chargestations/README.md#deletechargestation) - Use to delete a charge station
* [getChargeStation](docs/chargestations/README.md#getchargestation) - Get a single charge station's data
* [getChargeStationConnectors](docs/chargestations/README.md#getchargestationconnectors) - List connectors for a chargestation
* [getChargeStations](docs/chargestations/README.md#getchargestations) - List all Chargestations
* [patchChargeStation](docs/chargestations/README.md#patchchargestation) - Update a charge station's data
* [postChargeStations](docs/chargestations/README.md#postchargestations) - Create a new charge station

### [commands](docs/commands/README.md)

* [cancelreservation](docs/commands/README.md#cancelreservation) - Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [getCommands](docs/commands/README.md#getcommands) - Get Commands data
* [getVariables](docs/commands/README.md#getvariables) - Get a charge station's config variables
* [patchChargeStationVariable](docs/commands/README.md#patchchargestationvariable) - Update config variables for a chargestation
* [remotestart](docs/commands/README.md#remotestart) - Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [remotestop](docs/commands/README.md#remotestop) - Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [reserve](docs/commands/README.md#reserve) - Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [reset](docs/commands/README.md#reset) - Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [unlockconnector](docs/commands/README.md#unlockconnector) - Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### [configurations](docs/configurations/README.md)

* [getConfiguration](docs/configurations/README.md#getconfiguration) - Get one Configuration data
* [getConfigurations](docs/configurations/README.md#getconfigurations) - Get Configurations data
* [postConfigurations](docs/configurations/README.md#postconfigurations) - Create connector with parameters

### [connectors](docs/connectors/README.md)

* [deleteConnector](docs/connectors/README.md#deleteconnector) - Delete a connector
* [getConnector](docs/connectors/README.md#getconnector) - Get a connector
* [getConnectors](docs/connectors/README.md#getconnectors) - List connectors
* [patchConnector](docs/connectors/README.md#patchconnector) - Update a connector's data
* [postConnectors](docs/connectors/README.md#postconnectors) - Create a new connector

### [drivers](docs/drivers/README.md)

* [deleteDriver](docs/drivers/README.md#deletedriver) - Delete a driver
* [getDriver](docs/drivers/README.md#getdriver) - Get a driver's data
* [getDrivers](docs/drivers/README.md#getdrivers) - List all drivers
* [patchDriver](docs/drivers/README.md#patchdriver) - Update a driver's data
* [postDrivers](docs/drivers/README.md#postdrivers) - Create a new driver

### [locations](docs/locations/README.md)

* [deleteLocation](docs/locations/README.md#deletelocation) - Delete a location
* [getLocation](docs/locations/README.md#getlocation) - Get a location's data
* [getLocations](docs/locations/README.md#getlocations) - Get Locations data
* [patchLocation](docs/locations/README.md#patchlocation) - Update a location's data
* [postLocations](docs/locations/README.md#postlocations) - Create a new location

### [organizations](docs/organizations/README.md)

* [getOrganization](docs/organizations/README.md#getorganization) - Get one organization's data by id
* [getOrganizations](docs/organizations/README.md#getorganizations) - Get an array of all Organizations
* [patchOrganization](docs/organizations/README.md#patchorganization) - Update an organization's data

### [realtime](docs/realtime/README.md)

* [getRealtime](docs/realtime/README.md#getrealtime) - Use to request a Websockets handshake

### [reservations](docs/reservations/README.md)

* [getReservation](docs/reservations/README.md#getreservation) - Get one reservation data
* [getReservations](docs/reservations/README.md#getreservations) - Get Reservations data
* [updatereservation](docs/reservations/README.md#updatereservation) - Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### [smartCharging](docs/smartcharging/README.md)

* [deletechargingschedule](docs/smartcharging/README.md#deletechargingschedule) - Delete a smart charging schedule
* [setchargingschedule](docs/smartcharging/README.md#setchargingschedule) - Set one of charging power or current of a specific chargestation connector

### [tokens](docs/tokens/README.md)

* [deleteToken](docs/tokens/README.md#deletetoken) - Use to delete a token
* [getToken](docs/tokens/README.md#gettoken) - Get a single token's data
* [getTokens](docs/tokens/README.md#gettokens) - List tokens
* [patchToken](docs/tokens/README.md#patchtoken) - Update a token
* [postTokens](docs/tokens/README.md#posttokens) - Create a new token

### [transactions](docs/transactions/README.md)

* [getTransaction](docs/transactions/README.md#gettransaction) - Get a specific transaction
* [getTransactionCost](docs/transactions/README.md#gettransactioncost) - Get a specific transaction's cost
* [getTransactions](docs/transactions/README.md#gettransactions) - Get a list of transactions

### [vehicles](docs/vehicles/README.md)

* [getVehicle](docs/vehicles/README.md#getvehicle) - Get a vehicle's data
* [getVehicleBattery](docs/vehicles/README.md#getvehiclebattery) - Get a vehicle's battery
* [getVehicleCharge](docs/vehicles/README.md#getvehiclecharge) - Get a vehicle's charge
* [getVehicleLocation](docs/vehicles/README.md#getvehiclelocation) - Get a vehicle's location
* [getVehicleOdometer](docs/vehicles/README.md#getvehicleodometer) - Get a vehicle's odometer
* [getVehicles](docs/vehicles/README.md#getvehicles) - List all vehicles
* [postCharge](docs/vehicles/README.md#postcharge) - Change charge
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
