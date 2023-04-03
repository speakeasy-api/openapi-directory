<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdminGetUserRequest;
import org.openapis.openapi.models.operations.AdminGetUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminGetUserRequest req = new AdminGetUserRequest() {{
                id = 548814;
            }}            

            AdminGetUserResponse res = sdk.admin.adminGetUser(req);

            if (res.adminGetUser200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->