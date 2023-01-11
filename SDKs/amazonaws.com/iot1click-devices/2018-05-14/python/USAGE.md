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
    
req = operations.ClaimDevicesByClaimCodeRequest(
    path_params=operations.ClaimDevicesByClaimCodePathParams(
        claim_code="amet",
    ),
    headers=operations.ClaimDevicesByClaimCodeHeaders(
        x_amz_algorithm="inventore",
        x_amz_content_sha256="reprehenderit",
        x_amz_credential="autem",
        x_amz_date="tenetur",
        x_amz_security_token="facilis",
        x_amz_signature="aut",
        x_amz_signed_headers="est",
    ),
)
    
res = s.claim_devices_by_claim_code(req)

if res.claim_devices_by_claim_code_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->