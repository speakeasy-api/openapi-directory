<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ConfigConfigGetHeaders;
import org.openapis.openapi.models.operations.ConfigConfigGetRequest;
import org.openapis.openapi.models.operations.ConfigConfigGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigConfigGetRequest req = new ConfigConfigGetRequest() {{
                headers = new ConfigConfigGetHeaders() {{
                    authorization = "corrupti";
                }};
            }};            

            ConfigConfigGetResponse res = sdk.configConfigGet(req);

            if (res.config.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->