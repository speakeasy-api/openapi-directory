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

            FetchBoundariesRequest req = new FetchBoundariesRequest() {{
                security = new FetchBoundariesSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BoundariesQuery() {{
                    ids = new String[]() {{
                        add("illo"),
                        add("minus"),
                    }};
                }};
            }};

            FetchBoundariesResponse res = sdk.boundaries.fetchBoundaries(req);

            if (res.boundaries.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->