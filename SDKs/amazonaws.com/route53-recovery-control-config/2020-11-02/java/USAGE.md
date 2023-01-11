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

            CreateClusterRequest req = new CreateClusterRequest() {{
                headers = new CreateClusterHeaders() {{
                    xAmzAlgorithm = "omnis";
                    xAmzContentSha256 = "velit";
                    xAmzCredential = "commodi";
                    xAmzDate = "ut";
                    xAmzSecurityToken = "aut";
                    xAmzSignature = "explicabo";
                    xAmzSignedHeaders = "sit";
                }};
                request = new CreateClusterRequestBody() {{
                    clientToken = "sed";
                    clusterName = "est";
                }};
            }};

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->