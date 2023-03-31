<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptQualificationRequestRequest(
    accept_qualification_request_request=shared.AcceptQualificationRequestRequest(
        integer_value=548814,
        qualification_request_id="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="MTurkRequesterServiceV20170117.AcceptQualificationRequest",
)
    
res = s.accept_qualification_request(req)

if res.accept_qualification_request_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->