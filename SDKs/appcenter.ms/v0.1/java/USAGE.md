<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetUserMetadataResponse;
import org.openapis.openapi.models.operations.UsersGetUserMetadataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetUserMetadataResponse res = sdk.account.usersGetUserMetadata(new UsersGetUserMetadataSecurity("corrupti") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersGetUserMetadata200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->