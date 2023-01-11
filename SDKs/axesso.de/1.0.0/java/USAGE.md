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

            KeywordSearchRequest req = new KeywordSearchRequest() {{
                queryParams = new KeywordSearchQueryParams() {{
                    domainCode = "aut";
                    keyword = "velit";
                    numberOfProducts = 8628636448964422193;
                    sortBy = "non";
                }};
            }};

            KeywordSearchResponse res = sdk.amz.keywordSearch(req);

            if (res.keywordSearchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->