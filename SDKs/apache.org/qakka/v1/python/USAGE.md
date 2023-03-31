<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AckMessageRequest(
    queue_message_id="corrupti",
    queue_name="provident",
)
    
res = s.queues.ack_message(req)

if res.api_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->