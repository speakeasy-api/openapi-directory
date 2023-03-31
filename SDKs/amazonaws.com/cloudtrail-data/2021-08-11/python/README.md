# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/cloudtrail-data/2021-08-11/python
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


req = operations.PutAuditEventsRequest(
    request_body=operations.PutAuditEventsRequestBody(
        audit_events=[
            shared.AuditEvent(
                event_data="provident",
                event_data_checksum="distinctio",
                id="quibusdam",
            ),
            shared.AuditEvent(
                event_data="unde",
                event_data_checksum="nulla",
                id="corrupti",
            ),
            shared.AuditEvent(
                event_data="illum",
                event_data_checksum="vel",
                id="error",
            ),
        ],
    ),
    x_amz_algorithm="deserunt",
    x_amz_content_sha256="suscipit",
    x_amz_credential="iure",
    x_amz_date="magnam",
    x_amz_security_token="debitis",
    x_amz_signature="ipsa",
    x_amz_signed_headers="delectus",
    channel_arn="tempora",
    external_id="suscipit",
)
    
res = s.put_audit_events(req)

if res.put_audit_events_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `put_audit_events` - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
