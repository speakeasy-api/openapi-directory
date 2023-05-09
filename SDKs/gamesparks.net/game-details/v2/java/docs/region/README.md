# region

## Overview

Region Restv 2 Controller

### Available Operations

* [getGameRegionOptionsUsingGET](#getgameregionoptionsusingget) - getGameRegionOptions
* [getRegionOptionsUsingGET](#getregionoptionsusingget) - getRegionOptions
* [setGameRegionUsingPOST](#setgameregionusingpost) - setGameRegion

## getGameRegionOptionsUsingGET

getGameRegionOptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGameRegionOptionsUsingGETRequest;
import org.openapis.openapi.models.operations.GETGameRegionOptionsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGameRegionOptionsUsingGETRequest req = new GETGameRegionOptionsUsingGETRequest("ullam");            

            GETGameRegionOptionsUsingGETResponse res = sdk.region.getGameRegionOptionsUsingGET(req);

            if (res.gameRegionOptionsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegionOptionsUsingGET

getRegionOptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRegionOptionsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETRegionOptionsUsingGETResponse res = sdk.region.getRegionOptionsUsingGET();

            if (res.gameRegionOptionsDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setGameRegionUsingPOST

setGameRegion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetGameRegionUsingPOSTRequest;
import org.openapis.openapi.models.operations.SetGameRegionUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetGameRegionUsingPOSTRequest req = new SetGameRegionUsingPOSTRequest("provident", "quos");            

            SetGameRegionUsingPOSTResponse res = sdk.region.setGameRegionUsingPOST(req);

            if (res.regionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
