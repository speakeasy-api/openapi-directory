<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ImporterExporterCodeVerificationAPIRequest(
    iec="corrupti",
)
    
res = s.ap_is.importer_exporter_code_verification_api(req, operations.ImporterExporterCodeVerificationAPISecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.importer_exporter_code_verification_api_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->