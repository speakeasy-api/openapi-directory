<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetWaybackV1AvailableRequest req = new GetWaybackV1AvailableRequest() {{
                queryParams = new GetWaybackV1AvailableQueryParams() {{
                    callback = "eum";
                    closest = "after";
                    statusCode = 2100388220143852559;
                    tag = "necessitatibus";
                    timeout = 57.200001;
                    timestamp = "error";
                    url = "aliquam";
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