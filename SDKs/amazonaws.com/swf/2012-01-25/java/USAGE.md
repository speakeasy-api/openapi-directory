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

            CountClosedWorkflowExecutionsRequest req = new CountClosedWorkflowExecutionsRequest() {{
                headers = new CountClosedWorkflowExecutionsHeaders() {{
                    xAmzAlgorithm = "illo";
                    xAmzContentSha256 = "aut";
                    xAmzCredential = "omnis";
                    xAmzDate = "eos";
                    xAmzSecurityToken = "dolore";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "dolor";
                    xAmzTarget = "SimpleWorkflowService.CountClosedWorkflowExecutions";
                }};
                request = new CountClosedWorkflowExecutionsInput() {{
                    closeStatusFilter = new CloseStatusFilter() {{
                        status = "COMPLETED";
                    }};
                    closeTimeFilter = new ExecutionTimeFilter() {{
                        latestDate = "1983-08-05T17:33:17Z";
                        oldestDate = "1997-05-27T09:53:03Z";
                    }};
                    domain = "iste";
                    executionFilter = new WorkflowExecutionFilter() {{
                        workflowId = "voluptatibus";
                    }};
                    startTimeFilter = new ExecutionTimeFilter() {{
                        latestDate = "1980-03-26T04:47:11Z";
                        oldestDate = "1983-07-03T09:45:43Z";
                    }};
                    tagFilter = new TagFilter() {{
                        tag = "debitis";
                    }};
                    typeFilter = new WorkflowTypeFilter() {{
                        name = "quam";
                        version = "excepturi";
                    }};
                }};
            }};

            CountClosedWorkflowExecutionsResponse res = sdk.countClosedWorkflowExecutions(req);

            if (res.workflowExecutionCount.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->