<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FindEligibleItemsRequest(
    x_ebay_c_marketplace_id="corrupti",
    limit="provident",
    offset="distinctio",
)
    
res = s.offer.find_eligible_items(req, operations.FindEligibleItemsSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.paged_eligible_item_collection is not None:
    # handle response
```
<!-- End SDK Example Usage -->