<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.HpcerRequest(
    security=operations.HpcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.HpcerRequestBody(
        certificate_parameters=operations.HpcerRequestBodyCertificateParameters(
            full_name="ullam",
            rollcode="ipsam",
            rollno="mollitia",
            year="sunt",
        ),
        consent_artifact="quo",
        format="pdf",
        txn_id="quo",
    ),
)
    
res = s.ap_is.hpcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->