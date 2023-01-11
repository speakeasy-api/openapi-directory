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

            GetV1Request req = new GetV1Request() {{
                queryParams = new GetV1QueryParams() {{
                    apiKey = "sit";
                    fields = "voluptas";
                    ipAddress = "culpa";
                }};
            }};

            GetV1Response res = sdk.getV1(req);

            if (res.inlineResponse200.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->