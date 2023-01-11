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
    
req = operations.BatchGetChannelRequest(
    headers=operations.BatchGetChannelHeaders(
        x_amz_algorithm="debitis",
        x_amz_content_sha256="est",
        x_amz_credential="animi",
        x_amz_date="distinctio",
        x_amz_security_token="hic",
        x_amz_signature="mollitia",
        x_amz_signed_headers="qui",
    ),
    request=operations.BatchGetChannelRequestBody(
        arns=[
            "labore",
        ],
    ),
)
    
res = s.batch_get_channel(req)

if res.batch_get_channel_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->