<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CollectionsAllRequest(
    cursor="corrupti",
    fields_="provident",
    limit=715190,
    raw=False,
    sort=shared.CollectionsSort(
        by="name",
        direction="desc",
    ),
    x_apideck_app_id="unde",
    x_apideck_consumer_id="nulla",
    x_apideck_service_id="corrupti",
)
    
res = s.collections.collections_all(req, operations.CollectionsAllSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_collections_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->