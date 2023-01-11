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
                    cursor = "cumque";
                    expr = "occaecati";
                    facet = "iusto";
                    format = "sdk";
                    fq = "deserunt";
                    highlight = "maiores";
                    partial = false;
                    pretty = "true";
                    q = "dolorem";
                    qOptions = "ratione";
                    qParser = "dismax";
                    return_ = "excepturi";
                    size = 3784438660469815446;
                    sort = "quo";
                    start = 4099325840936144508;
                    stats = "vel";
                }};
                headers = new SearchHeaders() {{
                    xAmzAlgorithm = "optio";
                    xAmzContentSha256 = "at";
                    xAmzCredential = "a";
                    xAmzDate = "rerum";
                    xAmzSecurityToken = "repudiandae";
                    xAmzSignature = "praesentium";
                    xAmzSignedHeaders = "tempora";
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