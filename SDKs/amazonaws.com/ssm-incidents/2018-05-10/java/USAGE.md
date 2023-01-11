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
                    xAmzAlgorithm = "non";
                    xAmzContentSha256 = "totam";
                    xAmzCredential = "similique";
                    xAmzDate = "sunt";
                    xAmzSecurityToken = "aut";
                    xAmzSignature = "quis";
                    xAmzSignedHeaders = "quis";
                }};
                request = new CreateReplicationSetRequestBody() {{
                    clientToken = "amet";
                    regions = new java.util.HashMap<String, openapisdk.models.shared.RegionMapInputValue>() {{
                        put("totam", new RegionMapInputValue() {{
                            sseKmsKeyId = "perspiciatis";
                        }});
                        put("cupiditate", new RegionMapInputValue() {{
                            sseKmsKeyId = "asperiores";
                        }});
                        put("quasi", new RegionMapInputValue() {{
                            sseKmsKeyId = "eius";
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