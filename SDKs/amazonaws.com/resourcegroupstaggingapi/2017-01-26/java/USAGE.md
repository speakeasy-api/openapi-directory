<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReportCreationRequest;
import org.openapis.openapi.models.operations.DescribeReportCreationResponse;
import org.openapis.openapi.models.operations.DescribeReportCreationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReportCreationRequest req = new DescribeReportCreationRequest(                new java.util.HashMap<String, Object>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }}, DescribeReportCreationXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_DESCRIBE_REPORT_CREATION) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }};            

            DescribeReportCreationResponse res = sdk.describeReportCreation(req);

            if (res.describeReportCreationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->