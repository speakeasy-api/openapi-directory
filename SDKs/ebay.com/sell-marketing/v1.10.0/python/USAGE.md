<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BulkCreateAdsByInventoryReferenceRequest(
    security=operations.BulkCreateAdsByInventoryReferenceSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BulkCreateAdsByInventoryReferencePathParams(
        campaign_id="maiores",
    ),
    request=shared.BulkCreateAdsByInventoryReferenceRequest(
        requests=[
            shared.CreateAdsByInventoryReferenceRequest(
                bid_percentage="dolor",
                inventory_reference_id="tempora",
                inventory_reference_type="et",
            ),
            shared.CreateAdsByInventoryReferenceRequest(
                bid_percentage="harum",
                inventory_reference_id="est",
                inventory_reference_type="quibusdam",
            ),
            shared.CreateAdsByInventoryReferenceRequest(
                bid_percentage="minima",
                inventory_reference_id="aspernatur",
                inventory_reference_type="a",
            ),
        ],
    ),
)
    
res = s.ad.bulk_create_ads_by_inventory_reference(req)

if res.bulk_create_ads_by_inventory_reference_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->