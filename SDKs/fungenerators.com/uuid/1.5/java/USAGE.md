<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUuidRequest;
import org.openapis.openapi.models.operations.GetUuidResponse;
import org.openapis.openapi.models.operations.GetUuidSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUuidRequest req = new GetUuidRequest() {{
                count = 548814L;
            }};            

            GetUuidResponse res = sdk.uuidGeneration.getUuid(req, new GetUuidSecurity("provident") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

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