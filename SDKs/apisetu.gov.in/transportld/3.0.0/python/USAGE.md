<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DrvlcRequest(
    security=operations.DrvlcSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.DrvlcRequestBody(
        certificate_parameters=operations.DrvlcRequestBodyCertificateParameters(
            dob="autem",
            full_name="et",
            uid="labore",
            dlno="suscipit",
        ),
        consent_artifact="quis",
        format="pdf",
        txn_id="eaque",
    ),
)
    
res = s.ap_is.drvlc(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->