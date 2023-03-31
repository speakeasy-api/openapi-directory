<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetV1VerificationResultRequest(
    format="xml",
    key="provident",
    otp="distinctio",
    tran_id="quibusdam",
)
    
res = s.get_v1_verification_result(req)

if res.get_v1_verification_result_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->