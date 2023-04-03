<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobResponse;
import org.openapis.openapi.models.shared.DescribeEntitiesDetectionV2JobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntitiesDetectionV2JobRequest req = new DescribeEntitiesDetectionV2JobRequest() {{
                describeEntitiesDetectionV2JobRequest = new DescribeEntitiesDetectionV2JobRequest() {{
                    jobId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job";
            }}            

            DescribeEntitiesDetectionV2JobResponse res = sdk.describeEntitiesDetectionV2Job(req);

            if (res.describeEntitiesDetectionV2JobResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->