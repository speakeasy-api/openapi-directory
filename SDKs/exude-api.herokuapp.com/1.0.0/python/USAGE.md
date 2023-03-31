<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FilterFileDataStoppingsRequest(
    request_body=operations.FilterFileDataStoppingsRequestBody(
        file=operations.FilterFileDataStoppingsRequestBodyFile(
            content="corrupti".encode(),
            file="provident",
        ),
    ),
    type="distinctio",
)
    
res = s.exude.filter_file_data_stoppings(req)

if res.exude_response_bean is not None:
    # handle response
```
<!-- End SDK Example Usage -->