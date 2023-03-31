<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetClassificationsRequest(
    ids=[
        "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
        "b7392059-2939-46fe-a759-6eb10faaa235",
    ],
    is_country="explicabo",
    page_number=750686,
    page_size=315428,
    q="omnis",
    sort=[
        "created_at",
        "updated_at",
    ],
    type="AlternateFeedType",
)
    
res = s.classification.get_classifications(req, operations.GetClassificationsSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_classifications_200_application_vnd_api_plus_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->