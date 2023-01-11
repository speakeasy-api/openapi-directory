<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SkmstRequest(
    security=operations.SkmstSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.SkmstRequestBody(
        certificate_parameters=operations.SkmstRequestBodyCertificateParameters(
            txt10th_roll_no="nostrum",
            txt_candidate_app_seq="porro",
            txt_exam_date="et",
        ),
        consent_artifact="maxime",
        format="pdf",
        txn_id="est",
    ),
)
    
res = s.ap_is.skmst(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->