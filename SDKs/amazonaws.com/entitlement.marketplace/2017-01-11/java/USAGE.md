<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetEntitlementsXAmzTargetEnum;
import org.openapis.openapi.models.operations.GetEntitlementsHeaders;
import org.openapis.openapi.models.operations.GetEntitlementsRequest;
import org.openapis.openapi.models.operations.GetEntitlementsResponse;
import org.openapis.openapi.models.shared.GetEntitlementsRequest;

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

            GetEntitlementsRequest req = new GetEntitlementsRequest() {{
                headers = new GetEntitlementsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSMPEntitlementService.GetEntitlements";
                }};
                request = new GetEntitlementsRequest() {{
                    filter = new java.util.HashMap<String, String[]>() {{
                        put("vel", new String[]{{
                            add("deserunt"),
                            add("suscipit"),
                            add("iure"),
                        }});
                        put("magnam", new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }});
                        put("molestiae", new String[]{{
                            add("placeat"),
                            add("voluptatum"),
                            add("iusto"),
                            add("excepturi"),
                        }});
                        put("nisi", new String[]{{
                            add("temporibus"),
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
                        }});
                    }};
                    maxResults = 648172;
                    nextToken = "perferendis";
                    productCode = "ipsam";
                }};
            }};            

            GetEntitlementsResponse res = sdk.getEntitlements(req);

            if (res.getEntitlementsResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->