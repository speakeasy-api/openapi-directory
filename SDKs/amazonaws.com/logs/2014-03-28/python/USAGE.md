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
    
req = operations.AssociateKmsKeyRequest(
    headers=operations.AssociateKmsKeyHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="vel",
        x_amz_credential="dolores",
        x_amz_date="iste",
        x_amz_security_token="ut",
        x_amz_signature="quia",
        x_amz_signed_headers="dolorum",
        x_amz_target="Logs_20140328.AssociateKmsKey",
    ),
    request=shared.AssociateKmsKeyRequest(
        kms_key_id="ducimus",
        log_group_name="ipsum",
    ),
)
    
res = s.associate_kms_key(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->