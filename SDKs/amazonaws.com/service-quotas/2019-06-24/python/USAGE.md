<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateServiceQuotaTemplateRequest(
    request_body={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    x_amz_algorithm="illum",
    x_amz_content_sha256="vel",
    x_amz_credential="error",
    x_amz_date="deserunt",
    x_amz_security_token="suscipit",
    x_amz_signature="iure",
    x_amz_signed_headers="magnam",
    x_amz_target="ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
)
    
res = s.associate_service_quota_template(req)

if res.associate_service_quota_template_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->