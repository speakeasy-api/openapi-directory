# SDK

### Available Operations

* [connect](#connect) - connect
* [connections](#connections) - connections
* [disconnect](#disconnect) - disconnect
* [status](#status) - status

## connect

Initiate a connection to a specified peer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectRequestBody;
import org.openapis.openapi.models.operations.ConnectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectRequestBody req = new ConnectRequestBody("provident");            

            ConnectResponse res = sdk.sdk.connect(req);

            if (res.connect200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connections

Returns an array of all peer connection statuses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("quibusdam", "unde");
                put("nulla", "corrupti");
                put("illum", "vel");
            }}            

            ConnectionsResponse res = sdk.sdk.connections(req);

            if (res.connections200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnect

Initiate disconnection from a specified peer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectRequestBody;
import org.openapis.openapi.models.operations.DisconnectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisconnectRequestBody req = new DisconnectRequestBody("error");            

            DisconnectResponse res = sdk.sdk.disconnect(req);

            if (res.disconnect200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## status

Retrieves the connection status for a specified peer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusRequestBody;
import org.openapis.openapi.models.operations.StatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StatusRequestBody req = new StatusRequestBody("deserunt");            

            StatusResponse res = sdk.sdk.status(req);

            if (res.status200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
