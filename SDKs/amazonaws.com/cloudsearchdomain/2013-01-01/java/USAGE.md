<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.SearchFormatEnum;
import org.openapis.openapi.models.operations.SearchPrettyEnum;
import org.openapis.openapi.models.operations.SearchQParserEnum;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchRequest req = new SearchRequest() {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "provident";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "unde";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "corrupti";
                cursor = "illum";
                expr = "vel";
                facet = "error";
                format = "sdk";
                fq = "deserunt";
                highlight = "suscipit";
                partial = false;
                pretty = "true";
                q = "iure";
                qOptions = "magnam";
                qParser = "dismax";
                return_ = "ipsa";
                size = 963663;
                sort = "tempora";
                start = 383441;
                stats = "molestiae";
            }}            

            SearchResponse res = sdk.search(req);

            if (res.searchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->