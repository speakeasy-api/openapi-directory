<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeReportCreationXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeReportCreationRequest;
import org.openapis.openapi.models.operations.DescribeReportCreationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReportCreationRequest req = new DescribeReportCreationRequest() {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
                xAmzTarget = "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation";
            }}            

            DescribeReportCreationResponse res = sdk.describeReportCreation(req);

            if (res.describeReportCreationOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->