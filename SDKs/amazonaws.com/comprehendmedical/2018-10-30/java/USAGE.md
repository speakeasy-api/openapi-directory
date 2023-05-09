<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobResponse;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntitiesDetectionV2JobRequest req = new DescribeEntitiesDetectionV2JobRequest(                new DescribeEntitiesDetectionV2JobRequest("provident");, DescribeEntitiesDetectionV2JobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DESCRIBE_ENTITIES_DETECTION_V2_JOB) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            DescribeEntitiesDetectionV2JobResponse res = sdk.describeEntitiesDetectionV2Job(req);

            if (res.describeEntitiesDetectionV2JobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->