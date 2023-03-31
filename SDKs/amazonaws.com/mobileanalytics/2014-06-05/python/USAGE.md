<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.PutEventsRequest(
    request_body=operations.PutEventsRequestBody(
        events=[
            shared.Event(
                attributes={
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                event_type="vel",
                metrics={
                    "deserunt": 3843.82,
                    "iure": 2975.34,
                    "debitis": 567.13,
                },
                session=shared.Session(
                    duration=963663,
                    id="tempora",
                    start_timestamp="suscipit",
                    stop_timestamp="molestiae",
                ),
                timestamp="minus",
                version="placeat",
            ),
            shared.Event(
                attributes={
                    "iusto": "excepturi",
                    "nisi": "recusandae",
                    "temporibus": "ab",
                },
                event_type="quis",
                metrics={
                    "deserunt": 202.18,
                },
                session=shared.Session(
                    duration=368241,
                    id="repellendus",
                    start_timestamp="sapiente",
                    stop_timestamp="quo",
                ),
                timestamp="odit",
                version="at",
            ),
            shared.Event(
                attributes={
                    "maiores": "molestiae",
                    "quod": "quod",
                    "esse": "totam",
                    "porro": "dolorum",
                },
                event_type="dicta",
                metrics={
                    "officia": 5820.2,
                    "fugit": 5373.73,
                    "hic": 7586.16,
                },
                session=shared.Session(
                    duration=521848,
                    id="beatae",
                    start_timestamp="commodi",
                    stop_timestamp="molestiae",
                ),
                timestamp="modi",
                version="qui",
            ),
        ],
    ),
    x_amz_algorithm="impedit",
    x_amz_content_sha256="cum",
    x_amz_credential="esse",
    x_amz_date="ipsum",
    x_amz_security_token="excepturi",
    x_amz_signature="aspernatur",
    x_amz_signed_headers="perferendis",
    x_amz_client_context="ad",
    x_amz_client_context_encoding="natus",
)
    
res = s.put_events(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->