# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotevents-data/2018-10-23/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchAcknowledgeAlarmRequest{
        RequestBody: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "provident",
                    KeyValue: "distinctio",
                    Note: "quibusdam",
                    RequestID: "unde",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "nulla",
                    KeyValue: "corrupti",
                    Note: "illum",
                    RequestID: "vel",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "error",
                    KeyValue: "deserunt",
                    Note: "suscipit",
                    RequestID: "iure",
                },
            },
        },
        XAmzAlgorithm: "magnam",
        XAmzContentSha256: "debitis",
        XAmzCredential: "ipsa",
        XAmzDate: "delectus",
        XAmzSecurityToken: "tempora",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "molestiae",
    }

    ctx := context.Background()
    res, err := s.BatchAcknowledgeAlarm(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAcknowledgeAlarmResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchAcknowledgeAlarm` - Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
* `BatchDeleteDetector` - Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
* `BatchDisableAlarm` - Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
* `BatchEnableAlarm` - Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
* `BatchPutMessage` - Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
* `BatchResetAlarm` - Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
* `BatchSnoozeAlarm` - Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
* `BatchUpdateDetector` - Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
* `DescribeAlarm` - Retrieves information about an alarm.
* `DescribeDetector` - Returns information about the specified detector (instance).
* `ListAlarms` - Lists one or more alarms. The operation returns only the metadata associated with each alarm.
* `ListDetectors` - Lists detectors (the instances of a detector model).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
