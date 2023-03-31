<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateFraudsterRequest(
    associate_fraudster_request=shared.AssociateFraudsterRequest(
        domain_id="corrupti",
        fraudster_id="provident",
        watchlist_id="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    x_amz_target="VoiceID.AssociateFraudster",
)
    
res = s.associate_fraudster(req)

if res.associate_fraudster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->