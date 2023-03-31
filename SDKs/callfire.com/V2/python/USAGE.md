<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddCallBroadcastBatchRequest(
    batch_request=shared.BatchRequest(
        contact_list_id=548814,
        name="provident",
        recipients=[
            shared.Recipient(
                attributes={
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                contact_id=437587,
                from_number="magnam",
                phone_number="debitis",
            ),
            shared.Recipient(
                attributes={
                    "delectus": "tempora",
                },
                contact_id=383441,
                from_number="molestiae",
                phone_number="minus",
            ),
            shared.Recipient(
                attributes={
                    "voluptatum": "iusto",
                    "excepturi": "nisi",
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
                contact_id=87129,
                from_number="deserunt",
                phone_number="perferendis",
            ),
        ],
        scrub_duplicates=False,
    ),
    id=368241,
    strict_validation=False,
)
    
res = s.calls.add_call_broadcast_batch(req, operations.AddCallBroadcastBatchSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.resource_id is not None:
    # handle response
```
<!-- End SDK Example Usage -->