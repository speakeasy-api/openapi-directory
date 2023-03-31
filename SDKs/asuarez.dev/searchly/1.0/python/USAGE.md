<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody(
    content="corrupti",
)
    
res = s.similarity.src_searchly_api_v1_controllers_similarity_by_content(req)

if res.api_response_similarity is not None:
    # handle response
```
<!-- End SDK Example Usage -->