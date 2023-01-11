<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FindEligibleItemsRequest(
    security=operations.FindEligibleItemsSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.FindEligibleItemsQueryParams(
        limit="repellat",
        offset="expedita",
    ),
    headers=operations.FindEligibleItemsHeaders(
        x_ebay_c_marketplace_id="dolore",
    ),
)
    
res = s.offer.find_eligible_items(req)

if res.paged_eligible_item_collection is not None:
    # handle response
```
<!-- End SDK Example Usage -->