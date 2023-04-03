<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetEntitlementsXAmzTargetEnum;
import org.openapis.openapi.models.operations.GetEntitlementsRequest;
import org.openapis.openapi.models.operations.GetEntitlementsResponse;
import org.openapis.openapi.models.shared.GetEntitlementsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEntitlementsRequest req = new GetEntitlementsRequest() {{
                getEntitlementsRequest = new GetEntitlementsRequest() {{
                    filter = new java.util.HashMap<String, String[]>() {{
                        put("provident", new String[]{{
                            add("quibusdam"),
                            add("unde"),
                            add("nulla"),
                        }});
                        put("corrupti", new String[]{{
                            add("vel"),
                            add("error"),
                            add("deserunt"),
                            add("suscipit"),
                        }});
                        put("iure", new String[]{{
                            add("debitis"),
                            add("ipsa"),
                        }});
                    }};
                    maxResults = 963663;
                    nextToken = "tempora";
                    productCode = "suscipit";
                }};
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
                xAmzTarget = "AWSMPEntitlementService.GetEntitlements";
            }}            

            GetEntitlementsResponse res = sdk.getEntitlements(req);

            if (res.getEntitlementsResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->