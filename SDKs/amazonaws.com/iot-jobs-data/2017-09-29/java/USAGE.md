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

            DescribeJobExecutionRequest req = new DescribeJobExecutionRequest() {{
                pathParams = new DescribeJobExecutionPathParams() {{
                    jobId = "sit";
                    thingName = "voluptas";
                }};
                queryParams = new DescribeJobExecutionQueryParams() {{
                    executionNumber = 6050128673802995827;
                    includeJobDocument = false;
                }};
                headers = new DescribeJobExecutionHeaders() {{
                    xAmzAlgorithm = "consequuntur";
                    xAmzContentSha256 = "dolor";
                    xAmzCredential = "expedita";
                    xAmzDate = "voluptas";
                    xAmzSecurityToken = "fugit";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "nihil";
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