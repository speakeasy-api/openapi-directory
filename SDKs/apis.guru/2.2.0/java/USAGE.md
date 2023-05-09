<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAPIRequest;
import org.openapis.openapi.models.operations.GetAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAPIRequest req = new GetAPIRequest("2.1.0", "apis.guru");            

            GetAPIResponse res = sdk.apIs.getAPI(req);

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->