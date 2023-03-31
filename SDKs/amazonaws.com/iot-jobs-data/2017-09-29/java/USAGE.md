<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeJobExecutionPathParams;
import org.openapis.openapi.models.operations.DescribeJobExecutionQueryParams;
import org.openapis.openapi.models.operations.DescribeJobExecutionHeaders;
import org.openapis.openapi.models.operations.DescribeJobExecutionRequest;
import org.openapis.openapi.models.operations.DescribeJobExecutionResponse;

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

            DescribeJobExecutionRequest req = new DescribeJobExecutionRequest() {{
                pathParams = new DescribeJobExecutionPathParams() {{
                    jobId = "corrupti";
                    thingName = "provident";
                }};
                queryParams = new DescribeJobExecutionQueryParams() {{
                    executionNumber = 715190;
                    includeJobDocument = false;
                }};
                headers = new DescribeJobExecutionHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                }};
            }};            

            DescribeJobExecutionResponse res = sdk.describeJobExecution(req);

            if (res.describeJobExecutionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->