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
                    xAmzAlgorithm = "sapiente";
                    xAmzContentSha256 = "molestiae";
                    xAmzCredential = "aut";
                    xAmzDate = "illo";
                    xAmzSecurityToken = "sapiente";
                    xAmzSignature = "quisquam";
                    xAmzSignedHeaders = "ad";
                }};
                request = new GetPersonalizedRankingRequestBody() {{
                    campaignArn = "incidunt";
                    context = new java.util.HashMap<String, String>() {{
                        put("suscipit", "officiis");
                        put("cum", "totam");
                    }};
                    filterArn = "mollitia";
                    filterValues = new java.util.HashMap<String, String>() {{
                        put("quos", "beatae");
                    }};
                    inputList = new String[]() {{
                        add("dolor"),
                        add("veritatis"),
                        add("dicta"),
                    }};
                    userId = "consequatur";
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