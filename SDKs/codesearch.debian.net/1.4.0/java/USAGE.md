<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SearchSecurity;
import org.openapis.openapi.models.operations.SearchMatchModeEnum;
import org.openapis.openapi.models.operations.SearchQueryParams;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest() {{
                security = new SearchSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new SearchQueryParams() {{
                    matchMode = "regexp";
                    query = "provident";
                }};
            }};            

            SearchResponse res = sdk.search.search(req);

            if (res.searchResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->