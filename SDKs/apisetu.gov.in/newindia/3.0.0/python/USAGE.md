<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CripcRequest(
    security=operations.CripcSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.CripcRequestBody(
        certificate_parameters=operations.CripcRequestBodyCertificateParameters(
            full_name="quod",
            udf1="sint",
            udf2="fuga",
            udf3="pariatur",
        ),
        consent_artifact="odit",
        format="pdf",
        txn_id="voluptates",
    ),
)
    
res = s.ap_is.cripc(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->