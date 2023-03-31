<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetPersonalizedRankingHeaders;
import org.openapis.openapi.models.operations.GetPersonalizedRankingRequestBody;
import org.openapis.openapi.models.operations.GetPersonalizedRankingRequest;
import org.openapis.openapi.models.operations.GetPersonalizedRankingResponse;

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

            GetPersonalizedRankingRequest req = new GetPersonalizedRankingRequest() {{
                headers = new GetPersonalizedRankingHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new GetPersonalizedRankingRequestBody() {{
                    campaignArn = "illum";
                    context = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    filterArn = "magnam";
                    filterValues = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    inputList = new String[]{{
                        add("excepturi"),
                        add("nisi"),
                    }};
                    userId = "recusandae";
                }};
            }};            

            GetPersonalizedRankingResponse res = sdk.getPersonalizedRanking(req);

            if (res.getPersonalizedRankingResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->