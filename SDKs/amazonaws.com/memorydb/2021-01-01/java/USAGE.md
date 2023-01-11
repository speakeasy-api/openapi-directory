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

            BatchUpdateClusterRequest req = new BatchUpdateClusterRequest() {{
                headers = new BatchUpdateClusterHeaders() {{
                    xAmzAlgorithm = "dicta";
                    xAmzContentSha256 = "inventore";
                    xAmzCredential = "perspiciatis";
                    xAmzDate = "ut";
                    xAmzSecurityToken = "esse";
                    xAmzSignature = "facere";
                    xAmzSignedHeaders = "commodi";
                    xAmzTarget = "AmazonMemoryDB.BatchUpdateCluster";
                }};
                request = new BatchUpdateClusterRequest() {{
                    clusterNames = new String[]() {{
                        add("asperiores"),
                        add("amet"),
                        add("cupiditate"),
                    }};
                    serviceUpdate = new ServiceUpdateRequest() {{
                        serviceUpdateNameToApply = "nisi";
                    }};
                }};
            }};

            BatchUpdateClusterResponse res = sdk.batchUpdateCluster(req);

            if (res.batchUpdateClusterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->