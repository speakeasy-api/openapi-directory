<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ApmclRequest(
    security=operations.ApmclSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.ApmclRequestBody(
        certificate_parameters=operations.ApmclRequestBodyCertificateParameters(
            document_number="ut",
        ),
        consent_artifact="officiis",
        format="pdf",
        txn_id="eum",
    ),
)
    
res = s.ap_is.apmcl(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->