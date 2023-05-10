# SDK

## Overview

<p>IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to detectors, list detectors, and view or update a detector's status.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is IoT Events?</a> in the <i>IoT Events Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotevents/>
### Available Operations

* [batchAcknowledgeAlarm](#batchacknowledgealarm) - Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
* [batchDeleteDetector](#batchdeletedetector) - Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
* [batchDisableAlarm](#batchdisablealarm) - Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
* [batchEnableAlarm](#batchenablealarm) - Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
* [batchPutMessage](#batchputmessage) - Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
* [batchResetAlarm](#batchresetalarm) - Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
* [batchSnoozeAlarm](#batchsnoozealarm) - Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
* [batchUpdateDetector](#batchupdatedetector) - Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
* [describeAlarm](#describealarm) - Retrieves information about an alarm.
* [describeDetector](#describedetector) - Returns information about the specified detector (instance).
* [listAlarms](#listalarms) - Lists one or more alarms. The operation returns only the metadata associated with each alarm.
* [listDetectors](#listdetectors) - Lists detectors (the instances of a detector model).

## batchAcknowledgeAlarm

Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.

### Example Usage

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
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->batchAcknowledgeAlarm($request);

    if ($response->batchAcknowledgeAlarmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteDetector

Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteDetectorRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDetectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteDetectorRequest();
    $request->requestBody = new BatchDeleteDetectorRequestBody();
    $request->requestBody->detectors = [
        new DeleteDetectorRequest(),
        new DeleteDetectorRequest(),
        new DeleteDetectorRequest(),
        new DeleteDetectorRequest(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->batchDeleteDetector($request);

    if ($response->batchDeleteDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisableAlarm

Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisableAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisableAlarmRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DisableAlarmActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisableAlarmRequest();
    $request->requestBody = new BatchDisableAlarmRequestBody();
    $request->requestBody->disableActionRequests = [
        new DisableAlarmActionRequest(),
        new DisableAlarmActionRequest(),
        new DisableAlarmActionRequest(),
    ];
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->batchDisableAlarm($request);

    if ($response->batchDisableAlarmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchEnableAlarm

Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchEnableAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchEnableAlarmRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EnableAlarmActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchEnableAlarmRequest();
    $request->requestBody = new BatchEnableAlarmRequestBody();
    $request->requestBody->enableActionRequests = [
        new EnableAlarmActionRequest(),
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->batchEnableAlarm($request);

    if ($response->batchEnableAlarmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchPutMessage

Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMessageRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\TimestampValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutMessageRequest();
    $request->requestBody = new BatchPutMessageRequestBody();
    $request->requestBody->messages = [
        new Message(),
        new Message(),
        new Message(),
        new Message(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->batchPutMessage($request);

    if ($response->batchPutMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchResetAlarm

Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchResetAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchResetAlarmRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResetAlarmActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchResetAlarmRequest();
    $request->requestBody = new BatchResetAlarmRequestBody();
    $request->requestBody->resetActionRequests = [
        new ResetAlarmActionRequest(),
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->batchResetAlarm($request);

    if ($response->batchResetAlarmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchSnoozeAlarm

Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchSnoozeAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchSnoozeAlarmRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SnoozeAlarmActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchSnoozeAlarmRequest();
    $request->requestBody = new BatchSnoozeAlarmRequestBody();
    $request->requestBody->snoozeActionRequests = [
        new SnoozeAlarmActionRequest(),
        new SnoozeAlarmActionRequest(),
        new SnoozeAlarmActionRequest(),
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->batchSnoozeAlarm($request);

    if ($response->batchSnoozeAlarmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpdateDetector

Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateDetectorRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDetectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectorStateDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TimerDefinition;
use \OpenAPI\OpenAPI\Models\Shared\VariableDefinition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateDetectorRequest();
    $request->requestBody = new BatchUpdateDetectorRequestBody();
    $request->requestBody->detectors = [
        new UpdateDetectorRequest(),
        new UpdateDetectorRequest(),
    ];
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->batchUpdateDetector($request);

    if ($response->batchUpdateDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAlarm

Retrieves information about an alarm.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlarmRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAlarmRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->alarmModelName = 'in';
    $request->keyValue = 'corporis';

    $response = $sdk->sdk->describeAlarm($request);

    if ($response->describeAlarmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDetector

Returns information about the specified detector (instance).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDetectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDetectorRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->detectorModelName = 'est';
    $request->keyValue = 'mollitia';

    $response = $sdk->sdk->describeDetector($request);

    if ($response->describeDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAlarms

Lists one or more alarms. The operation returns only the metadata associated with each alarm.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAlarmsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAlarmsRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->alarmModelName = 'omnis';
    $request->maxResults = 363711;
    $request->nextToken = 'minima';

    $response = $sdk->sdk->listAlarms($request);

    if ($response->listAlarmsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDetectors

Lists detectors (the instances of a detector model).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDetectorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDetectorsRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->detectorModelName = 'mollitia';
    $request->maxResults = 208876;
    $request->nextToken = 'culpa';
    $request->stateName = 'consequuntur';

    $response = $sdk->sdk->listDetectors($request);

    if ($response->listDetectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
