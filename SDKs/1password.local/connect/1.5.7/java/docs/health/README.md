# health

### Available Operations

* [getHeartbeat](#getheartbeat) - Ping the server for liveness
* [getServerHealth](#getserverhealth) - Get state of the server and its dependencies.

## getHeartbeat

Ping the server for liveness

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHeartbeatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHeartbeatResponse res = sdk.health.getHeartbeat();

            if (res.getHeartbeat200TextPlainString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServerHealth

Get state of the server and its dependencies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServerHealthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServerHealthResponse res = sdk.health.getServerHealth();

            if (res.getServerHealth200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
