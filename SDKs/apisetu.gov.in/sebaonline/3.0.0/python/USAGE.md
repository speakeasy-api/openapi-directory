<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SscerRequest(
    security=operations.SscerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.SscerRequestBody(
        certificate_parameters=operations.SscerRequestBodyCertificateParameters(
            cent="autem",
            m_name="quas",
            name="recusandae",
            rroll="odit",
            year="dolor",
        ),
        consent_artifact="et",
        format="pdf",
        txn_id="et",
    ),
)
    
res = s.ap_is.sscer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->