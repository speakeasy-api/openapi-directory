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