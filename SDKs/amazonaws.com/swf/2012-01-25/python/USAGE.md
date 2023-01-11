<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CountClosedWorkflowExecutionsRequest(
    headers=operations.CountClosedWorkflowExecutionsHeaders(
        x_amz_algorithm="illo",
        x_amz_content_sha256="aut",
        x_amz_credential="omnis",
        x_amz_date="eos",
        x_amz_security_token="dolore",
        x_amz_signature="aut",
        x_amz_signed_headers="dolor",
        x_amz_target="SimpleWorkflowService.CountClosedWorkflowExecutions",
    ),
    request=shared.CountClosedWorkflowExecutionsInput(
        close_status_filter=shared.CloseStatusFilter(
            status="COMPLETED",
        ),
        close_time_filter=shared.ExecutionTimeFilter(
            latest_date="1983-08-05T17:33:17Z",
            oldest_date="1997-05-27T09:53:03Z",
        ),
        domain="iste",
        execution_filter=shared.WorkflowExecutionFilter(
            workflow_id="voluptatibus",
        ),
        start_time_filter=shared.ExecutionTimeFilter(
            latest_date="1980-03-26T04:47:11Z",
            oldest_date="1983-07-03T09:45:43Z",
        ),
        tag_filter=shared.TagFilter(
            tag="debitis",
        ),
        type_filter=shared.WorkflowTypeFilter(
            name="quam",
            version="excepturi",
        ),
    ),
)
    
res = s.count_closed_workflow_executions(req)

if res.workflow_execution_count is not None:
    # handle response
```
<!-- End SDK Example Usage -->