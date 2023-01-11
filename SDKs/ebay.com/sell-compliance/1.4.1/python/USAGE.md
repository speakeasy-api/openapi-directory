<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetListingViolationsRequest(
    security=operations.GetListingViolationsSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.GetListingViolationsQueryParams(
        compliance_type="corporis",
        filter="dicta",
        limit="sapiente",
        listing_id="qui",
        offset="voluptatem",
    ),
    headers=operations.GetListingViolationsHeaders(
        x_ebay_c_marketplace_id="odio",
    ),
)
    
res = s.listing_violation.get_listing_violations(req)

if res.paged_compliance_violation_collection is not None:
    # handle response
```
<!-- End SDK Example Usage -->