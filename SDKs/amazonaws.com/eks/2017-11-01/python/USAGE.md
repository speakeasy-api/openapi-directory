<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateEncryptionConfigRequest(
    request_body=operations.AssociateEncryptionConfigRequestBody(
        client_request_token="corrupti",
        encryption_config=[
            shared.EncryptionConfig(
                provider=shared.Provider(
                    key_arn="distinctio",
                ),
                resources=[
                    "unde",
                    "nulla",
                    "corrupti",
                    "illum",
                ],
            ),
            shared.EncryptionConfig(
                provider=shared.Provider(
                    key_arn="vel",
                ),
                resources=[
                    "deserunt",
                    "suscipit",
                    "iure",
                ],
            ),
            shared.EncryptionConfig(
                provider=shared.Provider(
                    key_arn="magnam",
                ),
                resources=[
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                ],
            ),
        ],
    ),
    x_amz_algorithm="molestiae",
    x_amz_content_sha256="minus",
    x_amz_credential="placeat",
    x_amz_date="voluptatum",
    x_amz_security_token="iusto",
    x_amz_signature="excepturi",
    x_amz_signed_headers="nisi",
    name="recusandae",
)
    
res = s.associate_encryption_config(req)

if res.associate_encryption_config_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->