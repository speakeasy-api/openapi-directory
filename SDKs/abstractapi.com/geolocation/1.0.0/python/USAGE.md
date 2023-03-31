<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetV1Request(
    api_key="corrupti",
    fields_="country,city,timezone",
    ip_address="195.154.25.40",
)
    
res = s.get_v1_(req)

if res.inline_response_200 is not None:
    # handle response
```
<!-- End SDK Example Usage -->