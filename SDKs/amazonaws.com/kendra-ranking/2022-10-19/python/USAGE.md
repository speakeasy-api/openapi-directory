<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateRescoreExecutionPlanRequest(
    create_rescore_execution_plan_request=shared.CreateRescoreExecutionPlanRequest(
        capacity_units=shared.CapacityUnitsConfiguration(
            rescore_capacity_units=548814,
        ),
        client_token="provident",
        description="distinctio",
        name="quibusdam",
        tags=[
            shared.Tag(
                key="nulla",
                value="corrupti",
            ),
            shared.Tag(
                key="illum",
                value="vel",
            ),
            shared.Tag(
                key="error",
                value="deserunt",
            ),
        ],
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
    x_amz_target="AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan",
)
    
res = s.create_rescore_execution_plan(req)

if res.create_rescore_execution_plan_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->