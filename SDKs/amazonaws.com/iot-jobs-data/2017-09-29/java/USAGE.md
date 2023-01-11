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
                    jobId = "aut";
                    thingName = "adipisci";
                }};
                queryParams = new DescribeJobExecutionQueryParams() {{
                    executionNumber = 3214739643573370622;
                    includeJobDocument = false;
                }};
                headers = new DescribeJobExecutionHeaders() {{
                    xAmzAlgorithm = "in";
                    xAmzContentSha256 = "fuga";
                    xAmzCredential = "nemo";
                    xAmzDate = "dolore";
                    xAmzSecurityToken = "suscipit";
                    xAmzSignature = "architecto";
                    xAmzSignedHeaders = "ratione";
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