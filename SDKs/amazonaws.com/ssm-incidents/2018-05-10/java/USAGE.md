<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplicationSetRequest;
import org.openapis.openapi.models.operations.CreateReplicationSetRequestBody;
import org.openapis.openapi.models.operations.CreateReplicationSetResponse;
import org.openapis.openapi.models.shared.RegionMapInputValue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationSetRequest req = new CreateReplicationSetRequest(                new CreateReplicationSetRequestBody(                new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionMapInputValue>() {{
                                                put("distinctio", new RegionMapInputValue() {{
                                                    sseKmsKeyId = "quibusdam";
                                                }});
                                                put("unde", new RegionMapInputValue() {{
                                                    sseKmsKeyId = "nulla";
                                                }});
                                                put("corrupti", new RegionMapInputValue() {{
                                                    sseKmsKeyId = "illum";
                                                }});
                                            }}) {{
                                clientToken = "vel";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }};
                            }};) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            CreateReplicationSetResponse res = sdk.createReplicationSet(req);

            if (res.createReplicationSetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->