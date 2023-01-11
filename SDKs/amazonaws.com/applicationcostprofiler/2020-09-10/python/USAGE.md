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
    
req = operations.DeleteReportDefinitionRequest(
    path_params=operations.DeleteReportDefinitionPathParams(
        report_id="voluptatem",
    ),
    headers=operations.DeleteReportDefinitionHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="maiores",
        x_amz_credential="est",
        x_amz_date="expedita",
        x_amz_security_token="qui",
        x_amz_signature="ex",
        x_amz_signed_headers="quo",
    ),
)
    
res = s.delete_report_definition(req)

if res.delete_report_definition_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->