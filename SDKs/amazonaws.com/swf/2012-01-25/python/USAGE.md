<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CountClosedWorkflowExecutionsRequest(
    count_closed_workflow_executions_input=shared.CountClosedWorkflowExecutionsInput(
        close_status_filter=shared.CloseStatusFilter(
            status="TERMINATED",
        ),
        close_time_filter=shared.ExecutionTimeFilter(
            latest_date="2021-07-27T21:52:56.087Z",
            oldest_date="2021-03-11T23:22:42.658Z",
        ),
        domain="nulla",
        execution_filter=shared.WorkflowExecutionFilter(
            workflow_id="corrupti",
        ),
        start_time_filter=shared.ExecutionTimeFilter(
            latest_date="2021-09-24T02:21:06.409Z",
            oldest_date="2021-09-16T11:56:06.019Z",
        ),
        tag_filter=shared.TagFilter(
            tag="suscipit",
        ),
        type_filter=shared.WorkflowTypeFilter(
            name="iure",
            version="magnam",
        ),
    ),
    x_amz_algorithm="debitis",
    x_amz_content_sha256="ipsa",
    x_amz_credential="delectus",
    x_amz_date="tempora",
    x_amz_security_token="suscipit",
    x_amz_signature="molestiae",
    x_amz_signed_headers="minus",
    x_amz_target="SimpleWorkflowService.CountClosedWorkflowExecutions",
)
    
res = s.count_closed_workflow_executions(req)

if res.workflow_execution_count is not None:
    # handle response
```
<!-- End SDK Example Usage -->