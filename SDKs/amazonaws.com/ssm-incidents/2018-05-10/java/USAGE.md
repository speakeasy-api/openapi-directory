<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateReplicationSetHeaders;
import org.openapis.openapi.models.operations.CreateReplicationSetRequestBody;
import org.openapis.openapi.models.operations.CreateReplicationSetRequest;
import org.openapis.openapi.models.operations.CreateReplicationSetResponse;
import org.openapis.openapi.models.shared.RegionMapInputValue;

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

            CreateReplicationSetRequest req = new CreateReplicationSetRequest() {{
                headers = new CreateReplicationSetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateReplicationSetRequestBody() {{
                    clientToken = "illum";
                    regions = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionMapInputValue>() {{
                        put("error", new RegionMapInputValue() {{
                            sseKmsKeyId = "deserunt";
                        }});
                        put("suscipit", new RegionMapInputValue() {{
                            sseKmsKeyId = "iure";
                        }});
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                }};
            }};            

            CreateReplicationSetResponse res = sdk.createReplicationSet(req);

            if (res.createReplicationSetOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->