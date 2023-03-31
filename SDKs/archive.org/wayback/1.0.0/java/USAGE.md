<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetWaybackV1AvailableQueryParams;
import org.openapis.openapi.models.operations.GetWaybackV1AvailableRequest;
import org.openapis.openapi.models.operations.GetWaybackV1AvailableResponse;
import org.openapis.openapi.models.shared.StatusCodeEnum;
import org.openapis.openapi.models.shared.ClosestEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWaybackV1AvailableRequest req = new GetWaybackV1AvailableRequest() {{
                queryParams = new GetWaybackV1AvailableQueryParams() {{
                    callback = "corrupti";
                    closest = "before";
                    statusCode = "421";
                    tag = "quibusdam";
                    timeout = 6027.63;
                    timestamp = "nulla";
                    url = "corrupti";
                }};
            }};            

            GetWaybackV1AvailableResponse res = sdk.getWaybackV1Available(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->