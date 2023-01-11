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
    
req = operations.DescribeJobExecutionRequest(
    path_params=operations.DescribeJobExecutionPathParams(
        job_id="aut",
        thing_name="adipisci",
    ),
    query_params=operations.DescribeJobExecutionQueryParams(
        execution_number=3214739643573370622,
        include_job_document=False,
    ),
    headers=operations.DescribeJobExecutionHeaders(
        x_amz_algorithm="in",
        x_amz_content_sha256="fuga",
        x_amz_credential="nemo",
        x_amz_date="dolore",
        x_amz_security_token="suscipit",
        x_amz_signature="architecto",
        x_amz_signed_headers="ratione",
    ),
)
    
res = s.describe_job_execution(req)

if res.describe_job_execution_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->