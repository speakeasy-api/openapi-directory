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
    
req = operations.AssociateServiceQuotaTemplateRequest(
    headers=operations.AssociateServiceQuotaTemplateHeaders(
        x_amz_algorithm="dolore",
        x_amz_content_sha256="eveniet",
        x_amz_credential="aut",
        x_amz_date="velit",
        x_amz_security_token="omnis",
        x_amz_signature="amet",
        x_amz_signed_headers="numquam",
        x_amz_target="ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
    ),
    request={
        "ex": "id",
        "ea": "non",
        "non": "quam",
    },
)
    
res = s.associate_service_quota_template(req)

if res.associate_service_quota_template_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->