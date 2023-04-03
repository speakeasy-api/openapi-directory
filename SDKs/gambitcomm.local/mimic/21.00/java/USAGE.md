<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AccessAddRequest;
import org.openapis.openapi.models.operations.AccessAddResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessAddRequest req = new AccessAddRequest() {{
                agents = "corrupti";
                mask = "provident";
                user = "distinctio";
            }}            

            AccessAddResponse res = sdk.access.accessAdd(req);

            if (res.accessAdd200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->