<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetDealItemsRequest(
    x_ebay_c_marketplace_id="corrupti",
    category_ids="provident",
    commissionable="distinctio",
    delivery_country="quibusdam",
    limit="unde",
    offset="nulla",
)
    
res = s.deal_item.get_deal_items(req, operations.GetDealItemsSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.deal_item_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->