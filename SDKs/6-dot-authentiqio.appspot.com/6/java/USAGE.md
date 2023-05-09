<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeyRevokeRequest;
import org.openapis.openapi.models.operations.KeyRevokeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeyRevokeRequest req = new KeyRevokeRequest("corrupti", "provident");            

            KeyRevokeResponse res = sdk.delete.keyRevoke(req);

            if (res.keyRevoke200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->