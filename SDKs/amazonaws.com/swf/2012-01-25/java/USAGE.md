<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsHeaders;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsRequest;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsResponse;
import org.openapis.openapi.models.shared.CountClosedWorkflowExecutionsInput;
import org.openapis.openapi.models.shared.WorkflowTypeFilter;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.ExecutionTimeFilter;
import org.openapis.openapi.models.shared.WorkflowExecutionFilter;
import org.openapis.openapi.models.shared.CloseStatusFilter;
import org.openapis.openapi.models.shared.CloseStatusEnum;

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

            CountClosedWorkflowExecutionsRequest req = new CountClosedWorkflowExecutionsRequest() {{
                headers = new CountClosedWorkflowExecutionsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "SimpleWorkflowService.CountClosedWorkflowExecutions";
                }};
                request = new CountClosedWorkflowExecutionsInput() {{
                    closeStatusFilter = new CloseStatusFilter() {{
                        status = "TIMED_OUT";
                    }};
                    closeTimeFilter = new ExecutionTimeFilter() {{
                        latestDate = "2022-05-18T09:34:54.894Z";
                        oldestDate = "2022-03-26T09:37:56.283Z";
                    }};
                    domain = "iure";
                    executionFilter = new WorkflowExecutionFilter() {{
                        workflowId = "magnam";
                    }};
                    startTimeFilter = new ExecutionTimeFilter() {{
                        latestDate = "2022-10-30T21:34:57.850Z";
                        oldestDate = "2022-03-08T10:35:32.561Z";
                    }};
                    tagFilter = new TagFilter() {{
                        tag = "suscipit";
                    }};
                    typeFilter = new WorkflowTypeFilter() {{
                        name = "molestiae";
                        version = "minus";
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