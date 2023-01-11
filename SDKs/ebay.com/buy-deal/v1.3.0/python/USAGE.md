<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetDealItemsRequest(
    security=operations.GetDealItemsSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.GetDealItemsQueryParams(
        category_ids="porro",
        commissionable="et",
        delivery_country="asperiores",
        limit="quibusdam",
        offset="sed",
    ),
    headers=operations.GetDealItemsHeaders(
        x_ebay_c_marketplace_id="sequi",
    ),
)
    
res = s.deal_item.get_deal_items(req)

if res.deal_item_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->