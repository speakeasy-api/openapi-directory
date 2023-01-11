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

            GetPersonalizedRankingRequest req = new GetPersonalizedRankingRequest() {{
                headers = new GetPersonalizedRankingHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new GetPersonalizedRankingRequestBody() {{
                    campaignArn = "voluptas";
                    context = new java.util.HashMap<String, String>() {{
                        put("et", "nihil");
                    }};
                    filterArn = "rerum";
                    filterValues = new java.util.HashMap<String, String>() {{
                        put("debitis", "voluptatum");
                        put("et", "ut");
                        put("dolorem", "et");
                    }};
                    inputList = new String[]() {{
                        add("iste"),
                    }};
                    userId = "vitae";
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