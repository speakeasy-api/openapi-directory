<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetV3AffiliatesSearchImagesRequest(
    query_params=operations.GetV3AffiliatesSearchImagesQueryParams(
        phrase="vitae",
        style="vector",
    ),
    headers=operations.GetV3AffiliatesSearchImagesHeaders(
        accept_language="dolorum",
    ),
)
    
res = s.affiliate_search.get_v3_affiliates_search_images(req)

if res.affiliate_image_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->