# vehicles

### Available Operations

* [getVehicle](#getvehicle) - Get a vehicle's data
* [getVehicleBattery](#getvehiclebattery) - Get a vehicle's battery
* [getVehicleCharge](#getvehiclecharge) - Get a vehicle's charge
* [getVehicleLocation](#getvehiclelocation) - Get a vehicle's location
* [getVehicleOdometer](#getvehicleodometer) - Get a vehicle's odometer
* [getVehicles](#getvehicles) - List all vehicles
* [postCharge](#postcharge) - Change charge

## getVehicle

Get a vehicle's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehicleRequest;
import org.openapis.openapi.models.operations.GetVehicleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVehicleRequest req = new GetVehicleRequest("voluptate") {{
                includeDriver = false;
                includeOrganization = false;
                includeToken = false;
            }};            

            GetVehicleResponse res = sdk.vehicles.getVehicle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehicleBattery

Get a vehicle's battery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehicleBatteryRequest;
import org.openapis.openapi.models.operations.GetVehicleBatteryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVehicleBatteryRequest req = new GetVehicleBatteryRequest("vero");            

            GetVehicleBatteryResponse res = sdk.vehicles.getVehicleBattery(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehicleCharge

Get a vehicle's charge

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehicleChargeRequest;
import org.openapis.openapi.models.operations.GetVehicleChargeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVehicleChargeRequest req = new GetVehicleChargeRequest("dignissimos");            

            GetVehicleChargeResponse res = sdk.vehicles.getVehicleCharge(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehicleLocation

Get a vehicle's location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehicleLocationRequest;
import org.openapis.openapi.models.operations.GetVehicleLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVehicleLocationRequest req = new GetVehicleLocationRequest("distinctio");            

            GetVehicleLocationResponse res = sdk.vehicles.getVehicleLocation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehicleOdometer

Get a vehicle's odometer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehicleOdometerRequest;
import org.openapis.openapi.models.operations.GetVehicleOdometerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVehicleOdometerRequest req = new GetVehicleOdometerRequest("odio");            

            GetVehicleOdometerResponse res = sdk.vehicles.getVehicleOdometer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVehicles

List all vehicles

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVehiclesRequest;
import org.openapis.openapi.models.operations.GetVehiclesResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVehiclesRequest req = new GetVehiclesRequest() {{
                active = false;
                createdAtDollarGte = OffsetDateTime.parse("2021-04-02T18:28:29.036Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-09-16T01:08:31.616Z");
                includeDriver = false;
                includeOrganization = false;
                includeToken = false;
                paginateEnabled = false;
                paginateLimit = 844550L;
                paginatePage = "illum";
                sortBy = "sequi";
                sortOrder = SortOrder1Enum.ASC;
                updatedAtDollarGte = OffsetDateTime.parse("2022-12-17T12:08:06.467Z");
                updatedAtDollarLte = OffsetDateTime.parse("2021-12-16T18:42:11.269Z");
            }};            

            GetVehiclesResponse res = sdk.vehicles.getVehicles(req);

            if (res.getVehicles200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCharge

Change charge

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostChargeRequest;
import org.openapis.openapi.models.operations.PostChargeRequestBody;
import org.openapis.openapi.models.operations.PostChargeRequestBodyActionEnum;
import org.openapis.openapi.models.operations.PostChargeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostChargeRequest req = new PostChargeRequest(                new PostChargeRequestBody(PostChargeRequestBodyActionEnum.START);, "porro");            

            PostChargeResponse res = sdk.vehicles.postCharge(req);

            if (res.postCharge200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
