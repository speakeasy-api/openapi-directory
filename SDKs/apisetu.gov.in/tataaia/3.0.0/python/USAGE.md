<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LicerRequest(
    security=operations.LicerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.LicerRequestBody(
        certificate_parameters=operations.LicerRequestBodyCertificateParameters(
            full_name="ullam",
            udf1="velit",
            udf2="eos",
        ),
        consent_artifact="officiis",
        format="pdf",
        txn_id="nam",
    ),
)
    
res = s.ap_is.licer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->