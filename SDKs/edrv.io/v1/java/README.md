# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteChargeStationRequest req = new DeleteChargeStationRequest() {{
                pathParams = new DeleteChargeStationPathParams() {{
                    id = "sit";
                }};
            }};

            DeleteChargeStationResponse res = sdk.chargeStations.deleteChargeStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Charge Stations

* `deleteChargeStation` - Use to delete a charge station
* `getChargeStation` - Get a single charge station's data
* `getChargeStationConnectors` - List connectors for a chargestation
* `getChargeStations` - List all Chargestations
* `patchChargeStation` - Update a charge station's data
* `postChargeStations` - Create a new charge station

### Commands

* `cancelreservation` - Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* `getCommands` - Get Commands data
* `getVariables` - Get a charge station's config variables
* `patchChargeStationVariable` - Update config variables for a chargestation
* `remotestart` - Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* `remotestop` - Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* `reserve` - Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* `reset` - Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* `unlockconnector` - Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Configurations

* `getConfiguration` - Get one Configuration data
* `getConfigurations` - Get Configurations data
* `postConfigurations` - Create connector with parameters

### Connectors

* `deleteConnector` - Delete a connector
* `getConnector` - Get a connector
* `getConnectors` - List connectors
* `patchConnector` - Update a connector's data
* `postConnectors` - Create a new connector

### Drivers

* `deleteDriver` - Delete a driver
* `getDriver` - Get a driver's data
* `getDrivers` - List all drivers
* `patchDriver` - Update a driver's data
* `postDrivers` - Create a new driver

### Locations

* `deleteLocation` - Delete a location
* `getLocation` - Get a location's data
* `getLocations` - Get Locations data
* `patchLocation` - Update a location's data
* `postLocations` - Create a new location

### Organizations

* `getOrganization` - Get one organization's data by id
* `getOrganizations` - Get an array of all Organizations
* `patchOrganization` - Update an organization's data

### Realtime

* `getRealtime` - Use to request a Websockets handshake

### Reservations

* `getReservation` - Get one reservation data
* `getReservations` - Get Reservations data
* `updatereservation` - Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Smart Charging

* `deletechargingschedule` - Delete a smart charging schedule
* `setchargingschedule` - Set one of charging power or current of a specific chargestation connector

### Tokens

* `deleteToken` - Use to delete a token
* `getToken` - Get a single token's data
* `getTokens` - List tokens
* `patchToken` - Update a token
* `postTokens` - Create a new token

### Transactions

* `getTransaction` - Get a specific transaction
* `getTransactionCost` - Get a specific transaction's cost
* `getTransactions` - Get a list of transactions

### Vehicles

* `getVehicle` - Get a vehicle's data
* `getVehicleBattery` - Get a vehicle's battery
* `getVehicleCharge` - Get a vehicle's charge
* `getVehicleLocation` - Get a vehicle's location
* `getVehicleOdometer` - Get a vehicle's odometer
* `getVehicles` - List all vehicles
* `postCharge` - Change charge

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
