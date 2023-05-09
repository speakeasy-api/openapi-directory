# SDK

## Overview

An API that provides names for colors based on their hex value

### Available Operations

* [get](#get) - Get all colors of the default color name list
* [getLists](#getlists) - Get all colors of the default color name list
* [getNames](#getnames) - Get all colors of the default color name list
* [getSwatch](#getswatch) - Generate a color swatch for any color

## get

Get all colors of the default color name list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;
import org.openapis.openapi.models.shared.PossibleListsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest() {{
                list = PossibleListsEnum.SANZO_WADA_I;
                noduplicates = false;
                values = "quibusdam";
            }};            

            GetResponse res = sdk.sdk.get(req);

            if (res.get200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLists

Get all colors of the default color name list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListsResponse res = sdk.sdk.getLists();

            if (res.getLists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNames

Get all colors of the default color name list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesRequest;
import org.openapis.openapi.models.operations.GetNamesResponse;
import org.openapis.openapi.models.shared.PossibleListsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamesRequest req = new GetNamesRequest("unde") {{
                list = PossibleListsEnum.WINDOWS;
            }};            

            GetNamesResponse res = sdk.sdk.getNames(req);

            if (res.getNames200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSwatch

Generate a color swatch for any color

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSwatchRequest;
import org.openapis.openapi.models.operations.GetSwatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSwatchRequest req = new GetSwatchRequest("corrupti") {{
                name = "Ben Mueller";
            }};            

            GetSwatchResponse res = sdk.sdk.getSwatch(req);

            if (res.getSwatch200ImageSvgPlusXmlString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
