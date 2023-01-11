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

            GetSearchRequest req = new GetSearchRequest() {{
                security = new GetSearchSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetSearchQueryParams() {{
                    q = "sit";
                }};
            }};

            GetSearchResponse res = sdk.rating.getSearch(req);

            if (res.getSearch200ApplicationJSONAny.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->