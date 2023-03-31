<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BulkCreateAdsByInventoryReferenceRequest(
    bulk_create_ads_by_inventory_reference_request=shared.BulkCreateAdsByInventoryReferenceRequest(
        requests=[
            shared.CreateAdsByInventoryReferenceRequest(
                ad_group_id="provident",
                bid_percentage="distinctio",
                inventory_reference_id="quibusdam",
                inventory_reference_type="unde",
            ),
            shared.CreateAdsByInventoryReferenceRequest(
                ad_group_id="nulla",
                bid_percentage="corrupti",
                inventory_reference_id="illum",
                inventory_reference_type="vel",
            ),
            shared.CreateAdsByInventoryReferenceRequest(
                ad_group_id="error",
                bid_percentage="deserunt",
                inventory_reference_id="suscipit",
                inventory_reference_type="iure",
            ),
        ],
    ),
    campaign_id="magnam",
)
    
res = s.ad.bulk_create_ads_by_inventory_reference(req, operations.BulkCreateAdsByInventoryReferenceSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.bulk_create_ads_by_inventory_reference_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->