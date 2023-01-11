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

            ConfigConfigGetRequest req = new ConfigConfigGetRequest() {{
                headers = new ConfigConfigGetHeaders() {{
                    authorization = "ut";
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