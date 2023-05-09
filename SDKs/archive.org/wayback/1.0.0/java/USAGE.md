<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWaybackV1AvailableRequest;
import org.openapis.openapi.models.operations.GetWaybackV1AvailableResponse;
import org.openapis.openapi.models.shared.ClosestEnum;
import org.openapis.openapi.models.shared.StatusCodeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWaybackV1AvailableRequest req = new GetWaybackV1AvailableRequest("corrupti") {{
                callback = "provident";
                closest = ClosestEnum.AFTER;
                statusCode = StatusCodeEnum.FIVE_HUNDRED_AND_ONE;
                tag = "unde";
                timeout = 8579.46;
                timestamp = "corrupti";
            }};            

            GetWaybackV1AvailableResponse res = sdk.getWaybackV1Available(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->