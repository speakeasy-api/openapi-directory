<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitlementsRequest;
import org.openapis.openapi.models.operations.GetEntitlementsResponse;
import org.openapis.openapi.models.operations.GetEntitlementsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEntitlementsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEntitlementsRequest req = new GetEntitlementsRequest(                new GetEntitlementsRequest("provident") {{
                                filter = new java.util.HashMap<String, String[]>() {{
                                    put("quibusdam", new String[]{{
                                        add("nulla"),
                                        add("corrupti"),
                                        add("illum"),
                                    }});
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
                                }};
                                maxResults = 477665L;
                                nextToken = "minus";
                            }};, GetEntitlementsXAmzTargetEnum.AWSMP_ENTITLEMENT_SERVICE_GET_ENTITLEMENTS) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            GetEntitlementsResponse res = sdk.getEntitlements(req);

            if (res.getEntitlementsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->