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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "SimpleWorkflowService.CountClosedWorkflowExecutions";
                }};
                request = new CountClosedWorkflowExecutionsInput() {{
                    closeStatusFilter = new CloseStatusFilter() {{
                        status = "COMPLETED";
                    }};
                    closeTimeFilter = new ExecutionTimeFilter() {{
                        latestDate = "2011-08-12T10:11:12Z";
                        oldestDate = "2003-05-13T04:57:12Z";
                    }};
                    domain = "rerum";
                    executionFilter = new WorkflowExecutionFilter() {{
                        workflowId = "dicta";
                    }};
                    startTimeFilter = new ExecutionTimeFilter() {{
                        latestDate = "2004-06-02T10:14:12Z";
                        oldestDate = "1981-07-21T06:30:48Z";
                    }};
                    tagFilter = new TagFilter() {{
                        tag = "et";
                    }};
                    typeFilter = new WorkflowTypeFilter() {{
                        name = "ut";
                        version = "dolorem";
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