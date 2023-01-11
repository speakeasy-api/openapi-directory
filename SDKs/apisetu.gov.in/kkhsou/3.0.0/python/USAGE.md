<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PvcerRequest(
    security=operations.PvcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.PvcerRequestBody(
        certificate_parameters=operations.PvcerRequestBodyCertificateParameters(
            enrol_no="quis",
            full_name="ratione",
            year="ut",
        ),
        consent_artifact="et",
        format="pdf",
        txn_id="placeat",
    ),
)
    
res = s.ap_is.pvcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->