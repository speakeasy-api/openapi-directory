<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DgcerRequest(
    security=operations.DgcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.DgcerRequestBody(
        certificate_parameters=operations.DgcerRequestBodyCertificateParameters(
            cname="aut",
            regno="numquam",
            rroll="est",
            year="molestias",
        ),
        consent_artifact="quis",
        format="pdf",
        txn_id="officiis",
    ),
)
    
res = s.ap_is.dgcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->