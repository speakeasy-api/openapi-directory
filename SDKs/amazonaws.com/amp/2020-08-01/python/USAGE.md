<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAlertManagerDefinitionRequest(
    request_body=operations.CreateAlertManagerDefinitionRequestBody(
        client_token="corrupti",
        data="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    workspace_id="error",
)
    
res = s.create_alert_manager_definition(req)

if res.create_alert_manager_definition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->