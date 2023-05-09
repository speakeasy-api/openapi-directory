<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPersonalizedRankingRequest;
import org.openapis.openapi.models.operations.GetPersonalizedRankingRequestBody;
import org.openapis.openapi.models.operations.GetPersonalizedRankingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPersonalizedRankingRequest req = new GetPersonalizedRankingRequest(                new GetPersonalizedRankingRequestBody("provident",                 new String[]{{
                                                add("quibusdam"),
                                                add("unde"),
                                                add("nulla"),
                                            }}, "corrupti") {{
                                context = new java.util.HashMap<String, String>() {{
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }};
                                filterArn = "delectus";
                                filterValues = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "molestiae");
                                    put("minus", "placeat");
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            GetPersonalizedRankingResponse res = sdk.getPersonalizedRanking(req);

            if (res.getPersonalizedRankingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->