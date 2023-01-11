<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FilterFileDataStoppingsRequest(
    path_params=operations.FilterFileDataStoppingsPathParams(
        type="quae",
    ),
    request=operations.FilterFileDataStoppingsRequestBody(
        file=operations.FilterFileDataStoppingsRequestBodyFile(
            content="minima".encode(),
            file="eaque",
        ),
    ),
)
    
res = s.exude.filter_file_data_stoppings(req)

if res.exude_response_bean is not None:
    # handle response
```
<!-- End SDK Example Usage -->