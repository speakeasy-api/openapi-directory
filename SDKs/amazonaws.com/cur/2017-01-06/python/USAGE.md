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
    headers=operations.DeleteReportDefinitionHeaders(
        x_amz_algorithm="quo",
        x_amz_content_sha256="et",
        x_amz_credential="eligendi",
        x_amz_date="soluta",
        x_amz_security_token="enim",
        x_amz_signature="commodi",
        x_amz_signed_headers="quia",
        x_amz_target="AWSOrigamiServiceGatewayService.DeleteReportDefinition",
    ),
    request=shared.DeleteReportDefinitionRequest(
        report_name="placeat",
    ),
)
    
res = s.delete_report_definition(req)

if res.delete_report_definition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->