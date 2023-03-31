# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/iotevents-data/2018-10-23/python
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


req = operations.BatchAcknowledgeAlarmRequest(
    request_body=operations.BatchAcknowledgeAlarmRequestBody(
        acknowledge_action_requests=[
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="provident",
                key_value="distinctio",
                note="quibusdam",
                request_id="unde",
            ),
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="nulla",
                key_value="corrupti",
                note="illum",
                request_id="vel",
            ),
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="error",
                key_value="deserunt",
                note="suscipit",
                request_id="iure",
            ),
        ],
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
)
    
res = s.batch_acknowledge_alarm(req)

if res.batch_acknowledge_alarm_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batch_acknowledge_alarm` - Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
* `batch_delete_detector` - Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
* `batch_disable_alarm` - Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
* `batch_enable_alarm` - Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
* `batch_put_message` - Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
* `batch_reset_alarm` - Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
* `batch_snooze_alarm` - Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
* `batch_update_detector` - Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
* `describe_alarm` - Retrieves information about an alarm.
* `describe_detector` - Returns information about the specified detector (instance).
* `list_alarms` - Lists one or more alarms. The operation returns only the metadata associated with each alarm.
* `list_detectors` - Lists detectors (the instances of a detector model).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
