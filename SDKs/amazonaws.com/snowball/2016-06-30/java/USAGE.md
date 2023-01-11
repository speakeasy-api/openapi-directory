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

            CancelClusterRequest req = new CancelClusterRequest() {{
                headers = new CancelClusterHeaders() {{
                    xAmzAlgorithm = "perferendis";
                    xAmzContentSha256 = "consequatur";
                    xAmzCredential = "ut";
                    xAmzDate = "soluta";
                    xAmzSecurityToken = "voluptatem";
                    xAmzSignature = "adipisci";
                    xAmzSignedHeaders = "nobis";
                    xAmzTarget = "AWSIESnowballJobManagementService.CancelCluster";
                }};
                request = new CancelClusterRequest() {{
                    clusterId = "necessitatibus";
                }};
            }};

            CancelClusterResponse res = sdk.cancelCluster(req);

            if (res.cancelClusterResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->