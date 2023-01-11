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
    
req = operations.AcceptCertificateTransferRequest(
    path_params=operations.AcceptCertificateTransferPathParams(
        certificate_id="quis",
    ),
    query_params=operations.AcceptCertificateTransferQueryParams(
        set_as_active=False,
    ),
    headers=operations.AcceptCertificateTransferHeaders(
        x_amz_algorithm="fugit",
        x_amz_content_sha256="aut",
        x_amz_credential="id",
        x_amz_date="sequi",
        x_amz_security_token="dicta",
        x_amz_signature="quis",
        x_amz_signed_headers="molestiae",
    ),
)
    
res = s.accept_certificate_transfer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->