<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.UsersGetUserMetadataSecurity;
import org.openapis.openapi.models.operations.UsersGetUserMetadataRequest;
import org.openapis.openapi.models.operations.UsersGetUserMetadataResponse;
import org.openapis.openapi.models.shared.SchemeAPIToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetUserMetadataRequest req = new UsersGetUserMetadataRequest() {{
                security = new UsersGetUserMetadataSecurity() {{
                    apiToken = new SchemeAPIToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
            }};            

            UsersGetUserMetadataResponse res = sdk.account.usersGetUserMetadata(req);

            if (res.usersGetUserMetadata200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->