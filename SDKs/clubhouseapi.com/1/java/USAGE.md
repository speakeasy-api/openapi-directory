<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCheckForUpdateRequest;
import org.openapis.openapi.models.operations.GetCheckForUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCheckForUpdateRequest req = new GetCheckForUpdateRequest() {{
                isTestflight = 548814L;
            }};            

            GetCheckForUpdateResponse res = sdk.getCheckForUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->