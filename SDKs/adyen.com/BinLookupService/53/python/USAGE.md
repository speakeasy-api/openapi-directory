<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.ThreeDSAvailabilityRequest(
    additional_data={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    brands=[
        "vel",
        "error",
        "deserunt",
        "suscipit",
    ],
    card_number="iure",
    merchant_account="magnam",
    recurring_detail_reference="debitis",
    shopper_reference="ipsa",
)
    
res = s.general.post_get3ds_availability(req, operations.PostGet3dsAvailabilitySecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.three_ds_availability_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->