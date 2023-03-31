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
        event_list=[
            shared.Event(
                event_id="provident",
                event_type="distinctio",
                event_value=8442.66,
                impression=[
                    "nulla",
                    "corrupti",
                    "illum",
                ],
                item_id="vel",
                metric_attribution=shared.MetricAttribution(
                    event_attribution_source="error",
                ),
                properties="deserunt",
                recommendation_id="suscipit",
                sent_at="2022-09-14T09:35:47.986Z",
            ),
            shared.Event(
                event_id="debitis",
                event_type="ipsa",
                event_value=9636.63,
                impression=[
                    "suscipit",
                    "molestiae",
                ],
                item_id="minus",
                metric_attribution=shared.MetricAttribution(
                    event_attribution_source="placeat",
                ),
                properties="voluptatum",
                recommendation_id="iusto",
                sent_at="2022-03-20T06:24:36.919Z",
            ),
            shared.Event(
                event_id="recusandae",
                event_type="temporibus",
                event_value=710.36,
                impression=[
                    "veritatis",
                    "deserunt",
                ],
                item_id="perferendis",
                metric_attribution=shared.MetricAttribution(
                    event_attribution_source="ipsam",
                ),
                properties="repellendus",
                recommendation_id="sapiente",
                sent_at="2022-07-31T07:34:52.790Z",
            ),
        ],
        session_id="at",
        tracking_id="at",
        user_id="maiores",
    ),
    x_amz_algorithm="molestiae",
    x_amz_content_sha256="quod",
    x_amz_credential="quod",
    x_amz_date="esse",
    x_amz_security_token="totam",
    x_amz_signature="porro",
    x_amz_signed_headers="dolorum",
)
    
res = s.put_events(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->