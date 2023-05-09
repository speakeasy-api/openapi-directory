<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFormatEnum;
import org.openapis.openapi.models.operations.SearchPrettyEnum;
import org.openapis.openapi.models.operations.SearchQParserEnum;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchRequest req = new SearchRequest(SearchFormatEnum.SDK, SearchPrettyEnum.TRUE, "provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                cursor = "error";
                expr = "deserunt";
                facet = "suscipit";
                fq = "iure";
                highlight = "magnam";
                partial = false;
                qOptions = "debitis";
                qParser = SearchQParserEnum.SIMPLE;
                return_ = "delectus";
                size = 272656L;
                sort = "suscipit";
                start = 477665L;
                stats = "minus";
            }};            

            SearchResponse res = sdk.search(req);

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->