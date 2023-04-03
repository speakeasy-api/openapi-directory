<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateReplicationSetRequestBody;
import org.openapis.openapi.models.operations.CreateReplicationSetRequest;
import org.openapis.openapi.models.operations.CreateReplicationSetResponse;
import org.openapis.openapi.models.shared.RegionMapInputValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationSetRequest req = new CreateReplicationSetRequest() {{
                requestBody = new CreateReplicationSetRequestBody() {{
                    clientToken = "corrupti";
                    regions = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionMapInputValue>() {{
                        put("distinctio", new RegionMapInputValue() {{
                            sseKmsKeyId = "quibusdam";
                        }});
                        put("unde", new RegionMapInputValue() {{
                            sseKmsKeyId = "nulla";
                        }});
                        put("corrupti", new RegionMapInputValue() {{
                            sseKmsKeyId = "illum";
                        }});
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                }};
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }}            

            CreateReplicationSetResponse res = sdk.createReplicationSet(req);

            if (res.createReplicationSetOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->