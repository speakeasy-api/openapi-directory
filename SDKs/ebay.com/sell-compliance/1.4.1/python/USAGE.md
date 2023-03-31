<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetListingViolationsRequest(
    x_ebay_c_marketplace_id="corrupti",
    compliance_type="provident",
    filter="distinctio",
    limit="quibusdam",
    listing_id="unde",
    offset="nulla",
)
    
res = s.listing_violation.get_listing_violations(req, operations.GetListingViolationsSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.paged_compliance_violation_collection is not None:
    # handle response
```
<!-- End SDK Example Usage -->