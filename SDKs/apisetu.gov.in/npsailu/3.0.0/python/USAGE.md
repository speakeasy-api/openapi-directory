<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.NdcerRequest(
    security=operations.NdcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.NdcerRequestBody(
        certificate_parameters=operations.NdcerRequestBodyCertificateParameters(
            appid="earum",
        ),
        consent_artifact="dolores",
        format="pdf",
        txn_id="exercitationem",
    ),
)
    
res = s.ap_is.ndcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->