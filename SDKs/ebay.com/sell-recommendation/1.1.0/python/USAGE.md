<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FindListingRecommendationsRequest(
    security=operations.FindListingRecommendationsSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.FindListingRecommendationsQueryParams(
        filter="omnis",
        limit="aliquam",
        offset="provident",
    ),
    headers=operations.FindListingRecommendationsHeaders(
        x_ebay_c_marketplace_id="corporis",
    ),
    request=shared.FindListingRecommendationRequest(
        listing_ids=[
            "at",
        ],
    ),
)
    
res = s.listing_recommendation.find_listing_recommendations(req)

if res.paged_listing_recommendation_collection is not None:
    # handle response
```
<!-- End SDK Example Usage -->