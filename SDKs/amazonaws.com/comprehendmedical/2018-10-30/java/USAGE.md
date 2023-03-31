<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobHeaders;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobResponse;
import org.openapis.openapi.models.shared.DescribeEntitiesDetectionV2JobRequest;

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

            DescribeEntitiesDetectionV2JobRequest req = new DescribeEntitiesDetectionV2JobRequest() {{
                headers = new DescribeEntitiesDetectionV2JobHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job";
                }};
                request = new DescribeEntitiesDetectionV2JobRequest() {{
                    jobId = "illum";
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