<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.SubjectErasureByPspReferenceRequest(
    force_erasure=False,
    merchant_account="corrupti",
    psp_reference="provident",
)
    
res = s.general.post_request_subject_erasure(req, operations.PostRequestSubjectErasureSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.subject_erasure_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->