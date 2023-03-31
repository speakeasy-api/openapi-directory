<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetSearchSecurity;
import org.openapis.openapi.models.operations.GetSearchQueryParams;
import org.openapis.openapi.models.operations.GetSearchRequest;
import org.openapis.openapi.models.operations.GetSearchResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchRequest req = new GetSearchRequest() {{
                security = new GetSearchSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetSearchQueryParams() {{
                    q = "corrupti";
                }};
            }};            

            GetSearchResponse res = sdk.rating.getSearch(req);

            if (res.getSearch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->