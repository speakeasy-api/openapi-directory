<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClientsIdClientRequest;
import org.openapis.openapi.models.operations.DeleteClientsIdClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClientsIdClientRequest req = new DeleteClientsIdClientRequest(548814L) {{
                expand = "provident";
            }};            

            DeleteClientsIdClientResponse res = sdk.administration.deleteClientsIdClient(req);

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->