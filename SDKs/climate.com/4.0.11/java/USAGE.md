<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FetchBoundariesSecurity;
import org.openapis.openapi.models.operations.FetchBoundariesRequest;
import org.openapis.openapi.models.operations.FetchBoundariesResponse;
import org.openapis.openapi.models.shared.BoundariesQuery;
import org.openapis.openapi.models.shared.SchemeAPIKey;
import org.openapis.openapi.models.shared.SchemeOauth2AuthorizationCode;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBoundariesRequest req = new FetchBoundariesRequest() {{
                security = new FetchBoundariesSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BoundariesQuery() {{
                    ids = new String[]{{
                        add("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
                        add("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
                        add("b7392059-2939-46fe-a759-6eb10faaa235"),
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