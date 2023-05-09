# chargingLocations

## Overview

Charging Locations are created by a user to denote locations where they pay for the power used to charge their vehicle. Smart Charging is active at these locations only.

### Available Operations

* [deleteCharginglocationsCharginglocationid](#deletecharginglocationscharginglocationid) - Delete Charging Location
* [getCharginglocations](#getcharginglocations) - List Charging Locations
* [getCharginglocationsCharginglocationid](#getcharginglocationscharginglocationid) - Get Charging Location
* [postCharginglocations](#postcharginglocations) - Create Charging Location
* [putCharginglocationsCharginglocationid](#putcharginglocationscharginglocationid) - Update Charging Location

## deleteCharginglocationsCharginglocationid

Delete a Charging Location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCharginglocationsCharginglocationidRequest;
import org.openapis.openapi.models.operations.DeleteCharginglocationsCharginglocationidResponse;
import org.openapis.openapi.models.operations.DeleteCharginglocationsCharginglocationidSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCharginglocationsCharginglocationidRequest req = new DeleteCharginglocationsCharginglocationidRequest("suscipit");            

            DeleteCharginglocationsCharginglocationidResponse res = sdk.chargingLocations.deleteCharginglocationsCharginglocationid(req, new DeleteCharginglocationsCharginglocationidSecurity() {{
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

## getCharginglocations

Returns a list of Charging Locations registered to the User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCharginglocationsResponse;
import org.openapis.openapi.models.operations.GetCharginglocationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCharginglocationsResponse res = sdk.chargingLocations.getCharginglocations(new GetCharginglocationsSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onechargingLocationsPostRequestBodyContentApplication1jsonSchemas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCharginglocationsCharginglocationid

Get Charging Location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCharginglocationsCharginglocationidRequest;
import org.openapis.openapi.models.operations.GetCharginglocationsCharginglocationidResponse;
import org.openapis.openapi.models.operations.GetCharginglocationsCharginglocationidSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCharginglocationsCharginglocationidRequest req = new GetCharginglocationsCharginglocationidRequest("iure");            

            GetCharginglocationsCharginglocationidResponse res = sdk.chargingLocations.getCharginglocationsCharginglocationid(req, new GetCharginglocationsCharginglocationidSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCharginglocations

Create Charging Location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCharginglocationsRequestBodyInput;
import org.openapis.openapi.models.operations.PostCharginglocationsResponse;
import org.openapis.openapi.models.operations.PostCharginglocationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCharginglocationsRequestBodyInput req = new PostCharginglocationsRequestBodyInput() {{
                latitude = 59.911491;
                longitude = 10.757933;
                name = "Home";
            }};            

            PostCharginglocationsResponse res = sdk.chargingLocations.postCharginglocations(req, new PostCharginglocationsSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCharginglocationsCharginglocationid

Updates a charging location with new configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCharginglocationsCharginglocationidRequest;
import org.openapis.openapi.models.operations.PutCharginglocationsCharginglocationidResponse;
import org.openapis.openapi.models.operations.PutCharginglocationsCharginglocationidSecurity;
import org.openapis.openapi.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCharginglocationsCharginglocationidRequest req = new PutCharginglocationsCharginglocationidRequest("magnam") {{
                onechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput = new OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput() {{
                    latitude = 59.911491;
                    longitude = 10.757933;
                    name = "Home";
                }};;
            }};            

            PutCharginglocationsCharginglocationidResponse res = sdk.chargingLocations.putCharginglocationsCharginglocationid(req, new PutCharginglocationsCharginglocationidSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
