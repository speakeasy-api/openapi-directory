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
    
req = operations.GetClassificationsRequest(
    query_params=operations.GetClassificationsQueryParams(
        ids_=[
            "consequatur",
        ],
        is_country="laboriosam",
        page_number_=773736624494728175,
        page_size_=1546546415388482117,
        q="placeat",
        sort=[
            "value",
            "updated_at",
        ],
        type="AlternateFeedType",
    ),
)
    
res = s.classification.get_classifications(req)

if res.get_classifications_200_application_vnd_api_plus_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->