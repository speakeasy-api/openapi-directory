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
            dob="aliquam",
            full_name="consequatur",
            uid="dolor",
            dlno="placeat",
        ),
        consent_artifact="ut",
        format="xml",
        txn_id="odio",
    ),
)
    
res = s.ap_is.drvlc(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->