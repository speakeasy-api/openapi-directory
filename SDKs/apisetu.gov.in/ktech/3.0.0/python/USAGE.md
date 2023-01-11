<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CocerRequest(
    security=operations.CocerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.CocerRequestBody(
        certificate_parameters=operations.CocerRequestBodyCertificateParameters(
            cert_type="expedita",
            company_name="eveniet",
            reg_no="et",
            sector="nemo",
        ),
        consent_artifact="sed",
        format="pdf",
        txn_id="vel",
    ),
)
    
res = s.ap_is.cocer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->