# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apache.org/qakka/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### queues

* `ack_message` - Acknowledge that Queue Message has been processed.
* `create_queue` - Create new queue.
* `delete_queue` - Delete Queue.
* `get_list_of_queues` - Get list of all Queues.
* `get_message_data` - Get data associated with a Queue Message.
* `get_next_messages` - Get next Queue Messages from a Queue
* `get_queue_config` - Get Queue config.
* `send_message_binary` - Send Queue Message with a binary data (blob) payload.
* `update_queue_config` - Update Queue configuration.

### status

* `status` - Status of webapp.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
