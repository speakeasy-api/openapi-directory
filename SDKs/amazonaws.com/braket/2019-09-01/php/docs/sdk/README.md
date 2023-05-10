# SDK

## Overview

<p>The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket.</p> <p>Additional Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">Amazon Braket Developer Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/braket/>
### Available Operations

* [cancelJob](#canceljob) - Cancels an Amazon Braket job.
* [cancelQuantumTask](#cancelquantumtask) - Cancels the specified task.
* [createJob](#createjob) - Creates an Amazon Braket job.
* [createQuantumTask](#createquantumtask) - Creates a quantum task.
* [getDevice](#getdevice) - <p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>
* [getJob](#getjob) - Retrieves the specified Amazon Braket job.
* [getQuantumTask](#getquantumtask) - Retrieves the specified quantum task.
* [listTagsForResource](#listtagsforresource) - Shows the tags associated with this resource.
* [searchDevices](#searchdevices) - Searches for devices using the specified filters.
* [searchJobs](#searchjobs) - Searches for Amazon Braket jobs that match the specified filter values.
* [searchQuantumTasks](#searchquantumtasks) - Searches for tasks that match the specified filter values.
* [tagResource](#tagresource) - Add a tag to the specified resource.
* [untagResource](#untagresource) - Remove tags from a resource.

## cancelJob

Cancels an Amazon Braket job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->jobArn = 'ipsa';

    $response = $sdk->sdk->cancelJob($request);

    if ($response->cancelJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelQuantumTask

Cancels the specified task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelQuantumTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelQuantumTaskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelQuantumTaskRequest();
    $request->requestBody = new CancelQuantumTaskRequestBody();
    $request->requestBody->clientToken = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->quantumTaskArn = 'excepturi';

    $response = $sdk->sdk->cancelQuantumTask($request);

    if ($response->cancelQuantumTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJob

Creates an Amazon Braket job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyAlgorithmSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\ScriptModeConfig;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyCheckpointConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyDeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InputFileConfig;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DataSource;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyOutputDataConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyStoppingCondition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJobRequest();
    $request->requestBody = new CreateJobRequestBody();
    $request->requestBody->algorithmSpecification = new CreateJobRequestBodyAlgorithmSpecification();
    $request->requestBody->algorithmSpecification->containerImage = new ContainerImage();
    $request->requestBody->algorithmSpecification->containerImage->uri = 'http://velvety-spiderling.com';
    $request->requestBody->algorithmSpecification->scriptModeConfig = new ScriptModeConfig();
    $request->requestBody->algorithmSpecification->scriptModeConfig->compressionType = CompressionTypeEnum::NONE;
    $request->requestBody->algorithmSpecification->scriptModeConfig->entryPoint = 'veritatis';
    $request->requestBody->algorithmSpecification->scriptModeConfig->s3Uri = 'deserunt';
    $request->requestBody->checkpointConfig = new CreateJobRequestBodyCheckpointConfig();
    $request->requestBody->checkpointConfig->localPath = 'perferendis';
    $request->requestBody->checkpointConfig->s3Uri = 'ipsam';
    $request->requestBody->clientToken = 'repellendus';
    $request->requestBody->deviceConfig = new CreateJobRequestBodyDeviceConfig();
    $request->requestBody->deviceConfig->device = 'sapiente';
    $request->requestBody->hyperParameters = [
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
    ];
    $request->requestBody->inputDataConfig = [
        new InputFileConfig(),
        new InputFileConfig(),
        new InputFileConfig(),
    ];
    $request->requestBody->instanceConfig = new CreateJobRequestBodyInstanceConfig();
    $request->requestBody->instanceConfig->instanceCount = 780529;
    $request->requestBody->instanceConfig->instanceType = InstanceTypeEnum::ML_P316XLARGE;
    $request->requestBody->instanceConfig->volumeSizeInGb = 118274;
    $request->requestBody->jobName = 'nam';
    $request->requestBody->outputDataConfig = new CreateJobRequestBodyOutputDataConfig();
    $request->requestBody->outputDataConfig->kmsKeyId = 'officia';
    $request->requestBody->outputDataConfig->s3Path = 'occaecati';
    $request->requestBody->roleArn = 'fugit';
    $request->requestBody->stoppingCondition = new CreateJobRequestBodyStoppingCondition();
    $request->requestBody->stoppingCondition->maxRuntimeInSeconds = 537373;
    $request->requestBody->tags = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->createJob($request);

    if ($response->createJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createQuantumTask

Creates a quantum task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateQuantumTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateQuantumTaskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateQuantumTaskRequest();
    $request->requestBody = new CreateQuantumTaskRequestBody();
    $request->requestBody->action = 'natus';
    $request->requestBody->clientToken = 'sed';
    $request->requestBody->deviceArn = 'iste';
    $request->requestBody->deviceParameters = 'dolor';
    $request->requestBody->jobToken = 'natus';
    $request->requestBody->outputS3Bucket = 'laboriosam';
    $request->requestBody->outputS3KeyPrefix = 'hic';
    $request->requestBody->shots = 902599;
    $request->requestBody->tags = [
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->createQuantumTask($request);

    if ($response->createQuantumTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevice

<p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->deviceArn = 'minima';

    $response = $sdk->sdk->getDevice($request);

    if ($response->getDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJob

Retrieves the specified Amazon Braket job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->jobArn = 'mollitia';

    $response = $sdk->sdk->getJob($request);

    if ($response->getJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuantumTask

Retrieves the specified quantum task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuantumTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuantumTaskRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';
    $request->quantumTaskArn = 'commodi';

    $response = $sdk->sdk->getQuantumTask($request);

    if ($response->getQuantumTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Shows the tags associated with this resource.

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
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->resourceArn = 'laborum';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchDevices

Searches for devices using the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchDevicesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SearchDevicesFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchDevicesRequest();
    $request->requestBody = new SearchDevicesRequestBody();
    $request->requestBody->filters = [
        new SearchDevicesFilter(),
        new SearchDevicesFilter(),
        new SearchDevicesFilter(),
    ];
    $request->requestBody->maxResults = 317202;
    $request->requestBody->nextToken = 'odit';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->maxResults = 'quasi';
    $request->nextToken = 'error';

    $response = $sdk->sdk->searchDevices($request);

    if ($response->searchDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchJobs

Searches for Amazon Braket jobs that match the specified filter values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsFilter;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsFilterOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchJobsRequest();
    $request->requestBody = new SearchJobsRequestBody();
    $request->requestBody->filters = [
        new SearchJobsFilter(),
        new SearchJobsFilter(),
        new SearchJobsFilter(),
        new SearchJobsFilter(),
    ];
    $request->requestBody->maxResults = 673660;
    $request->requestBody->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->maxResults = 'omnis';
    $request->nextToken = 'voluptate';

    $response = $sdk->sdk->searchJobs($request);

    if ($response->searchJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchQuantumTasks

Searches for tasks that match the specified filter values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchQuantumTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchQuantumTasksRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SearchQuantumTasksFilter;
use \OpenAPI\OpenAPI\Models\Shared\SearchQuantumTasksFilterOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchQuantumTasksRequest();
    $request->requestBody = new SearchQuantumTasksRequestBody();
    $request->requestBody->filters = [
        new SearchQuantumTasksFilter(),
        new SearchQuantumTasksFilter(),
        new SearchQuantumTasksFilter(),
    ];
    $request->requestBody->maxResults = 19987;
    $request->requestBody->nextToken = 'doloremque';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->maxResults = 'dicta';
    $request->nextToken = 'harum';

    $response = $sdk->sdk->searchQuantumTasks($request);

    if ($response->searchQuantumTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Add a tag to the specified resource.

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
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->resourceArn = 'rem';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Remove tags from a resource.

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
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->resourceArn = 'enim';
    $request->tagKeys = [
        'est',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
