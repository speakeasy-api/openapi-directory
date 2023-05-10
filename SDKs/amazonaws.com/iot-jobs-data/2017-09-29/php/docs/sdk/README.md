# SDK

## Overview

<p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.</p> <p> To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.</p> <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [describeJobExecution](#describejobexecution) - Gets details of a job execution.
* [getPendingJobExecutions](#getpendingjobexecutions) - Gets the list of all jobs for a thing that are not in a terminal status.
* [startNextPendingJobExecution](#startnextpendingjobexecution) - Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.
* [updateJobExecution](#updatejobexecution) - Updates the status of a job execution.

## describeJobExecution

Gets details of a job execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobExecutionRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->executionNumber = 272656;
    $request->includeJobDocument = false;
    $request->jobId = 'suscipit';
    $request->thingName = 'molestiae';

    $response = $sdk->sdk->describeJobExecution($request);

    if ($response->describeJobExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPendingJobExecutions

Gets the list of all jobs for a thing that are not in a terminal status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPendingJobExecutionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPendingJobExecutionsRequest();
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->thingName = 'temporibus';

    $response = $sdk->sdk->getPendingJobExecutions($request);

    if ($response->getPendingJobExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startNextPendingJobExecution

Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartNextPendingJobExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartNextPendingJobExecutionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartNextPendingJobExecutionRequest();
    $request->requestBody = new StartNextPendingJobExecutionRequestBody();
    $request->requestBody->statusDetails = [
        'quis' => 'veritatis',
    ];
    $request->requestBody->stepTimeoutInMinutes = 648172;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';
    $request->thingName = 'at';

    $response = $sdk->sdk->startNextPendingJobExecution($request);

    if ($response->startNextPendingJobExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJobExecution

Updates the status of a job execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobExecutionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobExecutionRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJobExecutionRequest();
    $request->requestBody = new UpdateJobExecutionRequestBody();
    $request->requestBody->executionNumber = 978619;
    $request->requestBody->expectedVersion = 473608;
    $request->requestBody->includeJobDocument = false;
    $request->requestBody->includeJobExecutionState = false;
    $request->requestBody->status = UpdateJobExecutionRequestBodyStatusEnum::REMOVED;
    $request->requestBody->statusDetails = [
        'esse' => 'totam',
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->requestBody->stepTimeoutInMinutes = 143353;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->jobId = 'modi';
    $request->thingName = 'qui';

    $response = $sdk->sdk->updateJobExecution($request);

    if ($response->updateJobExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
