# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/mobileanalytics/2014-06-05/python
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `put_events` - The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
