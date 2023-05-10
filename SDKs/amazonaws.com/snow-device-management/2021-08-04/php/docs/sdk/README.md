# SDK

## Overview

Amazon Web Services Snow Device Management documentation.

Amazon Web Services documentation
<https://docs.aws.amazon.com/snow-device-management/>
### Available Operations

* [cancelTask](#canceltask) - <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>
* [createTask](#createtask) - Instructs one or more devices to start a task, such as unlocking or rebooting.
* [describeDevice](#describedevice) - Checks device-specific information, such as the device type, software version, IP addresses, and lock status.
* [describeDeviceEc2Instances](#describedeviceec2instances) - Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 
* [describeExecution](#describeexecution) - Checks the status of a remote task running on one or more target devices.
* [describeTask](#describetask) - Checks the metadata for a given task on a device. 
* [listDeviceResources](#listdeviceresources) - Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
* [listDevices](#listdevices) - Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.
* [listExecutions](#listexecutions) - Returns the status of tasks for one or more target devices.
* [listTagsForResource](#listtagsforresource) - Returns a list of tags for a managed device or task.
* [listTasks](#listtasks) - Returns a list of tasks that can be filtered by state.
* [tagResource](#tagresource) - Adds or replaces tags on a device or task.
* [untagResource](#untagresource) - Removes a tag from a device or task.

## cancelTask

<p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelTaskRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->taskId = 'ipsa';

    $response = $sdk->sdk->cancelTask($request);

    if ($response->cancelTaskOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTask

Instructs one or more devices to start a task, such as unlocking or rebooting.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequestBodyCommand;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskRequest();
    $request->requestBody = new CreateTaskRequestBody();
    $request->requestBody->clientToken = 'delectus';
    $request->requestBody->command = new CreateTaskRequestBodyCommand();
    $request->requestBody->command->reboot = [
        'suscipit' => 'molestiae',
        'minus' => 'placeat',
    ];
    $request->requestBody->command->unlock = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->requestBody->description = 'quis';
    $request->requestBody->tags = [
        'deserunt' => 'perferendis',
    ];
    $request->requestBody->targets = [
        'repellendus',
        'sapiente',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->createTask($request);

    if ($response->createTaskOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDevice

Checks device-specific information, such as the device type, software version, IP addresses, and lock status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeviceRequest();
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->managedDeviceId = 'officia';

    $response = $sdk->sdk->describeDevice($request);

    if ($response->describeDeviceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDeviceEc2Instances

Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceEc2InstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceEc2InstancesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeviceEc2InstancesRequest();
    $request->requestBody = new DescribeDeviceEc2InstancesRequestBody();
    $request->requestBody->instanceIds = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->managedDeviceId = 'impedit';

    $response = $sdk->sdk->describeDeviceEc2Instances($request);

    if ($response->describeDeviceEc2Output !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExecution

Checks the status of a remote task running on one or more target devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExecutionRequest();
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';
    $request->managedDeviceId = 'natus';
    $request->taskId = 'sed';

    $response = $sdk->sdk->describeExecution($request);

    if ($response->describeExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTask

Checks the metadata for a given task on a device. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTaskRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->taskId = 'in';

    $response = $sdk->sdk->describeTask($request);

    if ($response->describeTaskOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceResources

Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceResourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceResourcesRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->managedDeviceId = 'reiciendis';
    $request->maxResults = 666767;
    $request->nextToken = 'mollitia';
    $request->type = 'laborum';

    $response = $sdk->sdk->listDeviceResources($request);

    if ($response->listDeviceResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevices

Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevicesRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->jobId = 'nemo';
    $request->maxResults = 325047;
    $request->nextToken = 'excepturi';

    $response = $sdk->sdk->listDevices($request);

    if ($response->listDevicesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExecutions

Returns the status of tasks for one or more target devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionsStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExecutionsRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->maxResults = 208876;
    $request->nextToken = 'culpa';
    $request->state = ListExecutionsStateEnum::IN_PROGRESS;
    $request->taskId = 'repellat';

    $response = $sdk->sdk->listExecutions($request);

    if ($response->listExecutionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of tags for a managed device or task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->resourceArn = 'error';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTasks

Returns a list of tasks that can be filtered by state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTasksStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTasksRequest();
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->maxResults = 778346;
    $request->nextToken = 'sequi';
    $request->state = ListTasksStateEnum::COMPLETED;

    $response = $sdk->sdk->listTasks($request);

    if ($response->listTasksOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or replaces tags on a device or task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->resourceArn = 'nihil';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from a device or task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->resourceArn = 'doloremque';
    $request->tagKeys = [
        'ut',
        'maiores',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
