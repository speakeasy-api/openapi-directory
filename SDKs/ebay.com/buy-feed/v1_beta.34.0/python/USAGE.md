<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetItemFeedRequest(
    accept="corrupti",
    range="provident",
    x_ebay_c_marketplace_id="distinctio",
    category_id="quibusdam",
    date_="unde",
    feed_scope="nulla",
)
    
res = s.item.get_item_feed(req, operations.GetItemFeedSecurity(
    client_credentials="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.item_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->