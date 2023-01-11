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

            CreateReplicationSetRequest req = new CreateReplicationSetRequest() {{
                headers = new CreateReplicationSetHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateReplicationSetRequestBody() {{
                    clientToken = "voluptas";
                    regions = new java.util.HashMap<String, openapisdk.models.shared.RegionMapInputValue>() {{
                        put("et", new RegionMapInputValue() {{
                            sseKmsKeyId = "nihil";
                        }});
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