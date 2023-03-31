<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.SearchFormatEnum;
import org.openapis.openapi.models.operations.SearchPrettyEnum;
import org.openapis.openapi.models.operations.SearchQParserEnum;
import org.openapis.openapi.models.operations.SearchQueryParams;
import org.openapis.openapi.models.operations.SearchHeaders;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            SearchRequest req = new SearchRequest() {{
                queryParams = new SearchQueryParams() {{
                    cursor = "corrupti";
                    expr = "provident";
                    facet = "distinctio";
                    format = "sdk";
                    fq = "quibusdam";
                    highlight = "unde";
                    partial = false;
                    pretty = "true";
                    q = "nulla";
                    qOptions = "corrupti";
                    qParser = "dismax";
                    return_ = "vel";
                    size = 623564;
                    sort = "deserunt";
                    start = 384382;
                    stats = "iure";
                }};
                headers = new SearchHeaders() {{
                    xAmzAlgorithm = "magnam";
                    xAmzContentSha256 = "debitis";
                    xAmzCredential = "ipsa";
                    xAmzDate = "delectus";
                    xAmzSecurityToken = "tempora";
                    xAmzSignature = "suscipit";
                    xAmzSignedHeaders = "molestiae";
                }};
            }};            

            SearchResponse res = sdk.search(req);

            if (res.searchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->