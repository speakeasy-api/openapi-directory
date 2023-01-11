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
    
req = operations.AcceptQualificationRequestRequest(
    headers=operations.AcceptQualificationRequestHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="sit",
        x_amz_credential="minus",
        x_amz_date="iste",
        x_amz_security_token="tempora",
        x_amz_signature="officia",
        x_amz_signed_headers="ducimus",
        x_amz_target="MTurkRequesterServiceV20170117.AcceptQualificationRequest",
    ),
    request=shared.AcceptQualificationRequestRequest(
        integer_value=8893427221521046744,
        qualification_request_id="perferendis",
    ),
)
    
res = s.accept_qualification_request(req)

if res.accept_qualification_request_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->