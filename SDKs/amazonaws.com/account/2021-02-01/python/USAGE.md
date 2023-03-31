<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteAlternateContactRequest(
    request_body=operations.DeleteAlternateContactRequestBody(
        account_id="corrupti",
        alternate_contact_type="OPERATIONS",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.delete_alternate_contact(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->