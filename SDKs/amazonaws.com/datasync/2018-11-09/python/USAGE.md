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
    
req = operations.CancelTaskExecutionRequest(
    headers=operations.CancelTaskExecutionHeaders(
        x_amz_algorithm="veniam",
        x_amz_content_sha256="quidem",
        x_amz_credential="et",
        x_amz_date="nemo",
        x_amz_security_token="cumque",
        x_amz_signature="ipsam",
        x_amz_signed_headers="consequatur",
        x_amz_target="FmrsService.CancelTaskExecution",
    ),
    request=shared.CancelTaskExecutionRequest(
        task_execution_arn="ullam",
    ),
)
    
res = s.cancel_task_execution(req)

if res.cancel_task_execution_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->