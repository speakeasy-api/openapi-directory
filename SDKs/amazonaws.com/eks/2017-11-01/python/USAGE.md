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
    
req = operations.AssociateEncryptionConfigRequest(
    path_params=operations.AssociateEncryptionConfigPathParams(
        name="sint",
    ),
    headers=operations.AssociateEncryptionConfigHeaders(
        x_amz_algorithm="ratione",
        x_amz_content_sha256="sed",
        x_amz_credential="placeat",
        x_amz_date="ut",
        x_amz_security_token="ipsam",
        x_amz_signature="aut",
        x_amz_signed_headers="cum",
    ),
    request=operations.AssociateEncryptionConfigRequestBody(
        client_request_token="aut",
        encryption_config=[
            shared.EncryptionConfig(
                provider=shared.Provider(
                    key_arn="dolore",
                ),
                resources=[
                    "quis",
                    "in",
                    "velit",
                ],
            ),
            shared.EncryptionConfig(
                provider=shared.Provider(
                    key_arn="eligendi",
                ),
                resources=[
                    "quaerat",
                    "dolorem",
                    "deserunt",
                ],
            ),
        ],
    ),
)
    
res = s.associate_encryption_config(req)

if res.associate_encryption_config_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->