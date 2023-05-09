# vehicles

### Available Operations

* [getVehicleChargestate](#getvehiclechargestate) - Get Vehicle Charge State
* [getVehicles](#getvehicles) - List Vehicles
* [getVehiclesVehicleid](#getvehiclesvehicleid) - Get Vehicle
* [getVehiclesVehicleidInformation](#getvehiclesvehicleidinformation) - Get Vehicle Information
* [getVehiclesVehicleidLocation](#getvehiclesvehicleidlocation) - Get Vehicle Location
* [getVehiclesVehicleidOdometer](#getvehiclesvehicleidodometer) - Get Vehicle Odometer
* [getVehiclesVehicleidSmartchargingpolicy](#getvehiclesvehicleidsmartchargingpolicy) - Get Vehicle Smart Charging Policy
* [postVehiclesVehicleidCharging](#postvehiclesvehicleidcharging) - Start / Stop Charging
* [postVehiclesVehicleidWatch](#postvehiclesvehicleidwatch) - Start Watching Vehicle
* [putVehiclesVehicleidSmartchargingpolicy](#putvehiclesvehicleidsmartchargingpolicy) - Update Vehicle Smart Charging Policy

## getVehicleChargestate

Get Vehicle Charge State

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehicleChargestateRequest;
import org.openapis.openapi.models.operations.GetVehicleChargestateResponse;
import org.openapis.openapi.models.operations.GetVehicleChargestateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVehicleChargestateRequest req = new GetVehicleChargestateRequest("veritatis");            

            GetVehicleChargestateResponse res = sdk.vehicles.getVehicleChargestate(req, new GetVehicleChargestateSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getVehicleChargestate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehicles

List Vehicles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehiclesRequest;
import org.openapis.openapi.models.operations.GetVehiclesResponse;
import org.openapis.openapi.models.operations.GetVehiclesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVehiclesRequest req = new GetVehiclesRequest() {{
                field = new Object[]{{
                    add("perferendis"),
                    add("ipsam"),
                    add("repellendus"),
                }};
            }};            

            GetVehiclesResponse res = sdk.vehicles.getVehicles(req, new GetVehiclesSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehiclesVehicleid

Get Vehicle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidFieldEnum;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidRequest;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidResponse;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVehiclesVehicleidRequest req = new GetVehiclesVehicleidRequest("sapiente") {{
                field = new org.openapis.openapi.models.operations.GetVehiclesVehicleidFieldEnum[]{{
                    add(GetVehiclesVehicleidFieldEnum.SMART_CHARGING_POLICY),
                    add(GetVehiclesVehicleidFieldEnum.ODOMETER),
                    add(GetVehiclesVehicleidFieldEnum.ODOMETER),
                    add(GetVehiclesVehicleidFieldEnum.ODOMETER),
                }};
            }};            

            GetVehiclesVehicleidResponse res = sdk.vehicles.getVehiclesVehicleid(req, new GetVehiclesVehicleidSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getVehiclesVehicleid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehiclesVehicleidInformation

Get Vehicle Information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidInformationRequest;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidInformationResponse;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidInformationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVehiclesVehicleidInformationRequest req = new GetVehiclesVehicleidInformationRequest("molestiae");            

            GetVehiclesVehicleidInformationResponse res = sdk.vehicles.getVehiclesVehicleidInformation(req, new GetVehiclesVehicleidInformationSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getVehiclesVehicleidInformation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehiclesVehicleidLocation

Get Vehicle Location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidLocationRequest;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidLocationResponse;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVehiclesVehicleidLocationRequest req = new GetVehiclesVehicleidLocationRequest("quod");            

            GetVehiclesVehicleidLocationResponse res = sdk.vehicles.getVehiclesVehicleidLocation(req, new GetVehiclesVehicleidLocationSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getVehiclesVehicleidLocation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehiclesVehicleidOdometer

Get Vehicle Odometer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidOdometerRequest;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidOdometerResponse;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidOdometerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVehiclesVehicleidOdometerRequest req = new GetVehiclesVehicleidOdometerRequest("quod");            

            GetVehiclesVehicleidOdometerResponse res = sdk.vehicles.getVehiclesVehicleidOdometer(req, new GetVehiclesVehicleidOdometerSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getVehiclesVehicleidOdometer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehiclesVehicleidSmartchargingpolicy

Get Vehicle Smart Charging Policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidSmartchargingpolicyRequest;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidSmartchargingpolicyResponse;
import org.openapis.openapi.models.operations.GetVehiclesVehicleidSmartchargingpolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVehiclesVehicleidSmartchargingpolicyRequest req = new GetVehiclesVehicleidSmartchargingpolicyRequest("esse");            

            GetVehiclesVehicleidSmartchargingpolicyResponse res = sdk.vehicles.getVehiclesVehicleidSmartchargingpolicy(req, new GetVehiclesVehicleidSmartchargingpolicySecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVehiclesVehicleidCharging

Instruct the vehicle to start or stop charging. 

#### Precedence over smart charging
If the vehicle is at a charging location where smart charging is activated:
- a request to `start` charging will override smart charging and charging will stay on until fully charged. 
- a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.

The smart charging settings are not altered by these actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVehiclesVehicleidChargingRequest;
import org.openapis.openapi.models.operations.PostVehiclesVehicleidChargingResponse;
import org.openapis.openapi.models.operations.PostVehiclesVehicleidChargingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVehiclesVehicleidChargingRequest req = new PostVehiclesVehicleidChargingRequest("totam");            

            PostVehiclesVehicleidChargingResponse res = sdk.vehicles.postVehiclesVehicleidCharging(req, new PostVehiclesVehicleidChargingSecurity() {{
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

## postVehiclesVehicleidWatch

Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.

Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)

The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVehiclesVehicleidWatchRequest;
import org.openapis.openapi.models.operations.PostVehiclesVehicleidWatchRequestBody;
import org.openapis.openapi.models.operations.PostVehiclesVehicleidWatchRequestBodyPropertiesEnum;
import org.openapis.openapi.models.operations.PostVehiclesVehicleidWatchResponse;
import org.openapis.openapi.models.operations.PostVehiclesVehicleidWatchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVehiclesVehicleidWatchRequest req = new PostVehiclesVehicleidWatchRequest("porro") {{
                requestBody = new PostVehiclesVehicleidWatchRequestBody() {{
                    properties = PostVehiclesVehicleidWatchRequestBodyPropertiesEnum.IS_CHARGING_REASONS;
                }};;
            }};            

            PostVehiclesVehicleidWatchResponse res = sdk.vehicles.postVehiclesVehicleidWatch(req, new PostVehiclesVehicleidWatchSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putVehiclesVehicleidSmartchargingpolicy

Updates the Smart Charging settings for a vehicle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutVehiclesVehicleidSmartchargingpolicyRequest;
import org.openapis.openapi.models.operations.PutVehiclesVehicleidSmartchargingpolicyRequestBody;
import org.openapis.openapi.models.operations.PutVehiclesVehicleidSmartchargingpolicyResponse;
import org.openapis.openapi.models.operations.PutVehiclesVehicleidSmartchargingpolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutVehiclesVehicleidSmartchargingpolicyRequest req = new PutVehiclesVehicleidSmartchargingpolicyRequest("dicta") {{
                requestBody = new PutVehiclesVehicleidSmartchargingpolicyRequestBody() {{
                    deadline = "08:00";
                    isEnabled = true;
                }};;
            }};            

            PutVehiclesVehicleidSmartchargingpolicyResponse res = sdk.vehicles.putVehiclesVehicleidSmartchargingpolicy(req, new PutVehiclesVehicleidSmartchargingpolicySecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
