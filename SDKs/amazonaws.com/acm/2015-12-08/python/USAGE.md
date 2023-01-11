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
    
req = operations.AddTagsToCertificateRequest(
    headers=operations.AddTagsToCertificateHeaders(
        x_amz_algorithm="mollitia",
        x_amz_content_sha256="inventore",
        x_amz_credential="delectus",
        x_amz_date="ipsa",
        x_amz_security_token="animi",
        x_amz_signature="animi",
        x_amz_signed_headers="ut",
        x_amz_target="CertificateManager.AddTagsToCertificate",
    ),
    request=shared.AddTagsToCertificateRequest(
        certificate_arn="fuga",
        tags=[
            shared.Tag(
                key="sed",
                value="et",
            ),
            shared.Tag(
                key="consequuntur",
                value="non",
            ),
            shared.Tag(
                key="cupiditate",
                value="provident",
            ),
        ],
    ),
)
    
res = s.add_tags_to_certificate(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->