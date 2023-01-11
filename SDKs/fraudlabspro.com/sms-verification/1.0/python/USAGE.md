<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetV1VerificationResultRequest(
    query_params=operations.GetV1VerificationResultQueryParams(
        format="json",
        key="voluptatem",
        otp="nam",
        tran_id="eum",
    ),
)
    
res = s.get_v1_verification_result(req)

if res.get_v1_verification_result_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->