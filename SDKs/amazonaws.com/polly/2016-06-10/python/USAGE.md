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
    
req = operations.DeleteLexiconRequest(
    path_params=operations.DeleteLexiconPathParams(
        lexicon_name="nemo",
    ),
    headers=operations.DeleteLexiconHeaders(
        x_amz_algorithm="quia",
        x_amz_content_sha256="provident",
        x_amz_credential="sint",
        x_amz_date="distinctio",
        x_amz_security_token="maiores",
        x_amz_signature="exercitationem",
        x_amz_signed_headers="sunt",
    ),
)
    
res = s.delete_lexicon(req)

if res.delete_lexicon_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->