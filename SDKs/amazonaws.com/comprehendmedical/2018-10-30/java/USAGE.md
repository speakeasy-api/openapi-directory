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

            DescribeEntitiesDetectionV2JobRequest req = new DescribeEntitiesDetectionV2JobRequest() {{
                headers = new DescribeEntitiesDetectionV2JobHeaders() {{
                    xAmzAlgorithm = "enim";
                    xAmzContentSha256 = "sunt";
                    xAmzCredential = "quos";
                    xAmzDate = "at";
                    xAmzSecurityToken = "iusto";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "praesentium";
                    xAmzTarget = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job";
                }};
                request = new DescribeEntitiesDetectionV2JobRequest() {{
                    jobId = "aut";
                }};
            }};

            DescribeEntitiesDetectionV2JobResponse res = sdk.describeEntitiesDetectionV2Job(req);

            if (res.describeEntitiesDetectionV2JobResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->