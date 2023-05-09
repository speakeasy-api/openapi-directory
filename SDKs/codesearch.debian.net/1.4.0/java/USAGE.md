<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMatchModeEnum;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;
import org.openapis.openapi.models.operations.SearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest("corrupti") {{
                matchMode = SearchMatchModeEnum.REGEXP;
            }};            

            SearchResponse res = sdk.search.search(req, new SearchSecurity("distinctio") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->