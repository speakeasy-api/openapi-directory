# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAcknowledgeAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchAcknowledgeAlarmRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeAlarmActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAcknowledgeAlarmRequest();
    $request->requestBody = new BatchAcknowledgeAlarmRequestBody();
    $request->requestBody->acknowledgeActionRequests = [
        new AcknowledgeAlarmActionRequest(),
        new AcknowledgeAlarmActionRequest(),
        new AcknowledgeAlarmActionRequest(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->batchAcknowledgeAlarm($request);

    if ($response->batchAcknowledgeAlarmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchAcknowledgeAlarm](docs/sdk/README.md#batchacknowledgealarm) - Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
* [batchDeleteDetector](docs/sdk/README.md#batchdeletedetector) - Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
* [batchDisableAlarm](docs/sdk/README.md#batchdisablealarm) - Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
* [batchEnableAlarm](docs/sdk/README.md#batchenablealarm) - Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
* [batchPutMessage](docs/sdk/README.md#batchputmessage) - Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
* [batchResetAlarm](docs/sdk/README.md#batchresetalarm) - Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
* [batchSnoozeAlarm](docs/sdk/README.md#batchsnoozealarm) - Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
* [batchUpdateDetector](docs/sdk/README.md#batchupdatedetector) - Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
* [describeAlarm](docs/sdk/README.md#describealarm) - Retrieves information about an alarm.
* [describeDetector](docs/sdk/README.md#describedetector) - Returns information about the specified detector (instance).
* [listAlarms](docs/sdk/README.md#listalarms) - Lists one or more alarms. The operation returns only the metadata associated with each alarm.
* [listDetectors](docs/sdk/README.md#listdetectors) - Lists detectors (the instances of a detector model).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
