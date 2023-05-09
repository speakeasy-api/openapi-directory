# chargers

### Available Operations

* [controlChargerCharging](#controlchargercharging) - Control Charging
* [getCharger](#getcharger) - Get Charger
* [getChargers](#getchargers) - List Chargers

## controlChargerCharging

Instruct the charger to start or stop charging

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ControlChargerChargingRequest;
import org.openapis.openapi.models.operations.ControlChargerChargingRequestBody;
import org.openapis.openapi.models.operations.ControlChargerChargingRequestBodyActionEnum;
import org.openapis.openapi.models.operations.ControlChargerChargingResponse;
import org.openapis.openapi.models.operations.ControlChargerChargingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ControlChargerChargingRequest req = new ControlChargerChargingRequest("provident") {{
                requestBody = new ControlChargerChargingRequestBody(ControlChargerChargingRequestBodyActionEnum.START);;
            }};            

            ControlChargerChargingResponse res = sdk.chargers.controlChargerCharging(req, new ControlChargerChargingSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCharger

Get Charger

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChargerRequest;
import org.openapis.openapi.models.operations.GetChargerResponse;
import org.openapis.openapi.models.operations.GetChargerSecurity;
import org.openapis.openapi.models.shared.OnechargersGetParameters0Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChargerRequest req = new GetChargerRequest("distinctio") {{
                field = new org.openapis.openapi.models.shared.OnechargersGetParameters0Enum[]{{
                    add(OnechargersGetParameters0Enum.LOCATION),
                    add(OnechargersGetParameters0Enum.LOCATION),
                    add(OnechargersGetParameters0Enum.LOCATION),
                    add(OnechargersGetParameters0Enum.LOCATION),
                }};
            }};            

            GetChargerResponse res = sdk.chargers.getCharger(req, new GetChargerSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getCharger200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChargers

List Chargers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChargersFieldEnum;
import org.openapis.openapi.models.operations.GetChargersRequest;
import org.openapis.openapi.models.operations.GetChargersResponse;
import org.openapis.openapi.models.operations.GetChargersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChargersRequest req = new GetChargersRequest() {{
                field = new org.openapis.openapi.models.operations.GetChargersFieldEnum[]{{
                    add(GetChargersFieldEnum.LOCATION),
                    add(GetChargersFieldEnum.LOCATION),
                }};
            }};            

            GetChargersResponse res = sdk.chargers.getChargers(req, new GetChargersSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
