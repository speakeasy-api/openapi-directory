# serviceHealth

### Available Operations

* [getHealthReady](#gethealthready) - Check Service Readiness
* [getHealthVendors](#gethealthvendors) - Check Available Vendors

## getHealthReady

Gets the combined health status of the service and all functionalities and dependencies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHealthReadyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHealthReadyResponse res = sdk.serviceHealth.getHealthReady();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHealthVendors

List the supported vendors and their current status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHealthVendorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHealthVendorsResponse res = sdk.serviceHealth.getHealthVendors();

            if (res.getHealthVendors200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
