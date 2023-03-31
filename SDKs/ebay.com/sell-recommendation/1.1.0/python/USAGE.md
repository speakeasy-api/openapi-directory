<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FindListingRecommendationsRequest(
    find_listing_recommendation_request=shared.FindListingRecommendationRequest(
        listing_ids=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
    ),
    x_ebay_c_marketplace_id="unde",
    filter="nulla",
    limit="corrupti",
    offset="illum",
)
    
res = s.listing_recommendation.find_listing_recommendations(req, operations.FindListingRecommendationsSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.paged_listing_recommendation_collection is not None:
    # handle response
```
<!-- End SDK Example Usage -->