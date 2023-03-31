<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.ClaimDevicesByClaimCodeRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    claim_code="illum",
)
    
res = s.claim_devices_by_claim_code(req)

if res.claim_devices_by_claim_code_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->