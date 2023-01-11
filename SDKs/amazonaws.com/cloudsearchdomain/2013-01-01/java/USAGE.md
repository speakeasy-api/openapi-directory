<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            SearchRequest req = new SearchRequest() {{
                queryParams = new SearchQueryParams() {{
                    cursor = "sit";
                    expr = "voluptas";
                    facet = "culpa";
                    format = "sdk";
                    fq = "consequuntur";
                    highlight = "dolor";
                    partial = true;
                    pretty = "true";
                    q = "fugit";
                    qOptions = "et";
                    qParser = "simple";
                    return_ = "rerum";
                    size = 7837839688282259259;
                    sort = "debitis";
                    start = 5617773211005988520;
                    stats = "et";
                }};
                headers = new SearchHeaders() {{
                    xAmzAlgorithm = "ut";
                    xAmzContentSha256 = "dolorem";
                    xAmzCredential = "et";
                    xAmzDate = "voluptate";
                    xAmzSecurityToken = "iste";
                    xAmzSignature = "vitae";
                    xAmzSignedHeaders = "totam";
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