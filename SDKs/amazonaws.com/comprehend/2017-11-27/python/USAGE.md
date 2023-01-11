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
    
req = operations.BatchDetectDominantLanguageRequest(
    headers=operations.BatchDetectDominantLanguageHeaders(
        x_amz_algorithm="id",
        x_amz_content_sha256="reprehenderit",
        x_amz_credential="sit",
        x_amz_date="at",
        x_amz_security_token="ex",
        x_amz_signature="doloribus",
        x_amz_signed_headers="qui",
        x_amz_target="Comprehend_20171127.BatchDetectDominantLanguage",
    ),
    request=shared.BatchDetectDominantLanguageRequest(
        text_list=[
            "ea",
        ],
    ),
)
    
res = s.batch_detect_dominant_language(req)

if res.batch_detect_dominant_language_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->