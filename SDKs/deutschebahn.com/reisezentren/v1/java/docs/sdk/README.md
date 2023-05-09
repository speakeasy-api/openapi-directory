# SDK

## Overview

This REST-API enables you to query information about travel centers in Germany.

### Available Operations

* [getReisezentren](#getreisezentren) - Get all station infos
* [getReisezentrenLocLatLon](#getreisezentrenloclatlon) - Get information about a station near a location
* [getReisezentrenLocLatLonDist](#getreisezentrenloclatlondist) - Get stations in a given radius
* [getReisezentrenId](#getreisezentrenid) - Get information about a specific station

## getReisezentren

Get all station infos

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReisezentrenRequest;
import org.openapis.openapi.models.operations.GetReisezentrenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReisezentrenRequest req = new GetReisezentrenRequest() {{
                name = "Johnnie Stamm";
            }};            

            GetReisezentrenResponse res = sdk.sdk.getReisezentren(req);

            if (res.travelCenterList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReisezentrenLocLatLon

Get information about a station near a location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReisezentrenLocLatLonRequest;
import org.openapis.openapi.models.operations.GetReisezentrenLocLatLonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReisezentrenLocLatLonRequest req = new GetReisezentrenLocLatLonRequest(6458.94, 3843.82);            

            GetReisezentrenLocLatLonResponse res = sdk.sdk.getReisezentrenLocLatLon(req);

            if (res.travelCenter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReisezentrenLocLatLonDist

Get stations in a given radius

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReisezentrenLocLatLonDistRequest;
import org.openapis.openapi.models.operations.GetReisezentrenLocLatLonDistResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReisezentrenLocLatLonDistRequest req = new GetReisezentrenLocLatLonDistRequest(4375.87, 2975.34, 8917.73);            

            GetReisezentrenLocLatLonDistResponse res = sdk.sdk.getReisezentrenLocLatLonDist(req);

            if (res.travelCenter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReisezentrenId

Get information about a specific station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReisezentrenIdRequest;
import org.openapis.openapi.models.operations.GetReisezentrenIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReisezentrenIdRequest req = new GetReisezentrenIdRequest("ipsa");            

            GetReisezentrenIdResponse res = sdk.sdk.getReisezentrenId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
