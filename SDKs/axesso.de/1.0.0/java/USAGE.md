<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeywordSearchRequest;
import org.openapis.openapi.models.operations.KeywordSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeywordSearchRequest req = new KeywordSearchRequest("corrupti", "provident") {{
                numberOfProducts = 715190L;
                sortBy = "quibusdam";
            }};            

            KeywordSearchResponse res = sdk.amz.keywordSearch(req);

            if (res.keywordSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->