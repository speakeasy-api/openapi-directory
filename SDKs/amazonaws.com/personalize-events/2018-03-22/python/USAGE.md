<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.PutEventsRequest(
    headers=operations.PutEventsHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="est",
        x_amz_credential="id",
        x_amz_date="voluptatem",
        x_amz_security_token="fuga",
        x_amz_signature="aperiam",
        x_amz_signed_headers="facilis",
    ),
    request=operations.PutEventsRequestBody(
        event_list=[
            shared.Event(
                event_id="atque",
                event_type="recusandae",
                event_value=44.099998,
                impression=[
                    "atque",
                    "iure",
                    "qui",
                ],
                item_id="voluptas",
                properties="sunt",
                recommendation_id="ratione",
                sent_at="2013-10-07T01:00:59Z",
            ),
            shared.Event(
                event_id="excepturi",
                event_type="vel",
                event_value=63.099998,
                impression=[
                    "sapiente",
                ],
                item_id="officia",
                properties="id",
                recommendation_id="voluptatibus",
                sent_at="1995-07-01T12:28:08Z",
            ),
        ],
        session_id="dolor",
        tracking_id="itaque",
        user_id="veritatis",
    ),
)
    
res = s.put_events(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->