# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/personalize-events/2018-03-22/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `put_events` - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
* `put_items` - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
* `put_users` - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
