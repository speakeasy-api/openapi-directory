<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetPersonalizedRankingRequestBody;
import org.openapis.openapi.models.operations.GetPersonalizedRankingRequest;
import org.openapis.openapi.models.operations.GetPersonalizedRankingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPersonalizedRankingRequest req = new GetPersonalizedRankingRequest() {{
                requestBody = new GetPersonalizedRankingRequestBody() {{
                    campaignArn = "corrupti";
                    context = new java.util.HashMap<String, String>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }};
                    filterArn = "vel";
                    filterValues = new java.util.HashMap<String, String>() {{
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    inputList = new String[]{{
                        add("tempora"),
                        add("suscipit"),
                        add("molestiae"),
                        add("minus"),
                    }};
                    userId = "placeat";
                }};
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }}            

            GetPersonalizedRankingResponse res = sdk.getPersonalizedRanking(req);

            if (res.getPersonalizedRankingResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->