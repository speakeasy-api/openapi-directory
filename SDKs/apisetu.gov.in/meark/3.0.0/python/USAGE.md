<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdcrdRequest(
    security=operations.AdcrdSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AdcrdRequestBody(
        certificate_parameters=operations.AdcrdRequestBodyCertificateParameters(
            dob="explicabo",
            prn_no="exercitationem",
            request_id="ea",
        ),
        consent_artifact="quos",
        format="xml",
        txn_id="officiis",
    ),
)
    
res = s.ap_is.adcrd(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->