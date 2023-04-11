# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotevents-data/2018-10-23/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotevents-data/2018-10-23/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BatchAcknowledgeAlarmRequest,
  BatchAcknowledgeAlarmResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchAcknowledgeAlarmRequest = {
  requestBody: {
    acknowledgeActionRequests: [
      {
        alarmModelName: "provident",
        keyValue: "distinctio",
        note: "quibusdam",
        requestId: "unde",
      },
      {
        alarmModelName: "nulla",
        keyValue: "corrupti",
        note: "illum",
        requestId: "vel",
      },
      {
        alarmModelName: "error",
        keyValue: "deserunt",
        note: "suscipit",
        requestId: "iure",
      },
    ],
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
};

sdk.batchAcknowledgeAlarm(req).then((res: BatchAcknowledgeAlarmResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchAcknowledgeAlarm` - Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
* `batchDeleteDetector` - Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
* `batchDisableAlarm` - Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
* `batchEnableAlarm` - Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
* `batchPutMessage` - Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
* `batchResetAlarm` - Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
* `batchSnoozeAlarm` - Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
* `batchUpdateDetector` - Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
* `describeAlarm` - Retrieves information about an alarm.
* `describeDetector` - Returns information about the specified detector (instance).
* `listAlarms` - Lists one or more alarms. The operation returns only the metadata associated with each alarm.
* `listDetectors` - Lists detectors (the instances of a detector model).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

