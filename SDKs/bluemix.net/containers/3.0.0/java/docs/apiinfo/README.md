# apiInfo

### Available Operations

* [getContainersMessages](#getcontainersmessages) - List messages for the user
* [getContainersVersion](#getcontainersversion) - List latest API version

## getContainersMessages

This endpoint retrieves all IBM Containers system messages for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersMessagesRequest;
import org.openapis.openapi.models.operations.GetContainersMessagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersMessagesRequest req = new GetContainersMessagesRequest("distinctio", "quibusdam");            

            GetContainersMessagesResponse res = sdk.apiInfo.getContainersMessages(req);

            if (res.getContainersMessages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainersVersion

This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersVersionResponse res = sdk.apiInfo.getContainersVersion();

            if (res.containersVersionGetInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
