<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeReportCreationXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeReportCreationHeaders;
import org.openapis.openapi.models.operations.DescribeReportCreationRequest;
import org.openapis.openapi.models.operations.DescribeReportCreationResponse;

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

            DescribeReportCreationRequest req = new DescribeReportCreationRequest() {{
                headers = new DescribeReportCreationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("vel", "error");
                    put("deserunt", "suscipit");
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            DescribeReportCreationResponse res = sdk.describeReportCreation(req);

            if (res.describeReportCreationOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->