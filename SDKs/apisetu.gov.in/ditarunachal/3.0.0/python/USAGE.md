<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IlpmtRequest(
    security=operations.IlpmtSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.IlpmtRequestBody(
        certificate_parameters=operations.IlpmtRequestBodyCertificateParameters(
            full_name="saepe",
            uid="eius",
            e_ilp_app_id="delectus",
            e_ilp_contact_number="sint",
        ),
        consent_artifact="dolor",
        format="pdf",
        txn_id="molestiae",
    ),
)
    
res = s.ap_is.ilpmt(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->