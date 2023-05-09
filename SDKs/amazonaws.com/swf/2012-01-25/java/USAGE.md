<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsRequest;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsResponse;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloseStatusEnum;
import org.openapis.openapi.models.shared.CloseStatusFilter;
import org.openapis.openapi.models.shared.CountClosedWorkflowExecutionsInput;
import org.openapis.openapi.models.shared.ExecutionTimeFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.WorkflowExecutionFilter;
import org.openapis.openapi.models.shared.WorkflowTypeFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CountClosedWorkflowExecutionsRequest req = new CountClosedWorkflowExecutionsRequest(                new CountClosedWorkflowExecutionsInput("provident") {{
                                closeStatusFilter = new CloseStatusFilter(CloseStatusEnum.CONTINUED_AS_NEW);;
                                closeTimeFilter = new ExecutionTimeFilter(OffsetDateTime.parse("2021-03-11T23:22:42.658Z")) {{
                                    latestDate = OffsetDateTime.parse("2021-05-14T08:28:11.899Z");
                                }};;
                                executionFilter = new WorkflowExecutionFilter("illum");;
                                startTimeFilter = new ExecutionTimeFilter(OffsetDateTime.parse("2022-05-18T09:34:54.894Z")) {{
                                    latestDate = OffsetDateTime.parse("2022-03-26T09:37:56.283Z");
                                }};;
                                tagFilter = new TagFilter("iure");;
                                typeFilter = new WorkflowTypeFilter("magnam") {{
                                    version = "debitis";
                                }};;
                            }};, CountClosedWorkflowExecutionsXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_COUNT_CLOSED_WORKFLOW_EXECUTIONS) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            CountClosedWorkflowExecutionsResponse res = sdk.countClosedWorkflowExecutions(req);

            if (res.workflowExecutionCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->