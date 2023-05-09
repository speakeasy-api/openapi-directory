# enumApi

### Available Operations

* [enumApiGetOrderStates](#enumapigetorderstates) - Returns a list with all defined orderstates
* [enumApiGetPaymentTypes](#enumapigetpaymenttypes) - Returns a list with all defined paymenttypes
* [enumApiGetShipmentTypes](#enumapigetshipmenttypes) - Returns a list with all defined shipmenttypes
* [enumApiGetShippingCarriers](#enumapigetshippingcarriers) - Returns a list with all defined shippingcarriers

## enumApiGetOrderStates

Returns a list with all defined orderstates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnumApiGetOrderStatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnumApiGetOrderStatesResponse res = sdk.enumApi.enumApiGetOrderStates();

            if (res.enumApiGetOrderStates200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enumApiGetPaymentTypes

Returns a list with all defined paymenttypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnumApiGetPaymentTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnumApiGetPaymentTypesResponse res = sdk.enumApi.enumApiGetPaymentTypes();

            if (res.enumApiGetPaymentTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enumApiGetShipmentTypes

Returns a list with all defined shipmenttypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnumApiGetShipmentTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnumApiGetShipmentTypesResponse res = sdk.enumApi.enumApiGetShipmentTypes();

            if (res.enumApiGetShipmentTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enumApiGetShippingCarriers

Returns a list with all defined shippingcarriers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnumApiGetShippingCarriersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnumApiGetShippingCarriersResponse res = sdk.enumApi.enumApiGetShippingCarriers();

            if (res.enumApiGetShippingCarriers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
