<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdultContentDetectionRequest(
    request=operations.AdultContentDetectionRequestBody(
        api_key="voluptatem",
        text="laborum",
    ),
)
    
res = s.document_classification.adult_content_detection(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->