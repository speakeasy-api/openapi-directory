<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CountClosedWorkflowExecutionsRequest req = new CountClosedWorkflowExecutionsRequest() {{
                countClosedWorkflowExecutionsInput = new CountClosedWorkflowExecutionsInput() {{
                    closeStatusFilter = new CloseStatusFilter() {{
                        status = "TERMINATED";
                    }};
                    closeTimeFilter = new ExecutionTimeFilter() {{
                        latestDate = "2021-07-27T21:52:56.087Z";
                        oldestDate = "2021-03-11T23:22:42.658Z";
                    }};
                    domain = "nulla";
                    executionFilter = new WorkflowExecutionFilter() {{
                        workflowId = "corrupti";
                    }};
                    startTimeFilter = new ExecutionTimeFilter() {{
                        latestDate = "2021-09-24T02:21:06.409Z";
                        oldestDate = "2021-09-16T11:56:06.019Z";
                    }};
                    tagFilter = new TagFilter() {{
                        tag = "suscipit";
                    }};
                    typeFilter = new WorkflowTypeFilter() {{
                        name = "iure";
                        version = "magnam";
                    }};
                }};
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
                xAmzTarget = "SimpleWorkflowService.CountClosedWorkflowExecutions";
            }}            

            CountClosedWorkflowExecutionsResponse res = sdk.countClosedWorkflowExecutions(req);

            if (res.workflowExecutionCount.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->