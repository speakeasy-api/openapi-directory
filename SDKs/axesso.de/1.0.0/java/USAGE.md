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

            KeywordSearchRequest req = new KeywordSearchRequest() {{
                domainCode = "corrupti";
                keyword = "provident";
                numberOfProducts = 715190;
                sortBy = "quibusdam";
            }}            

            KeywordSearchResponse res = sdk.amz.keywordSearch(req);

            if (res.keywordSearchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->