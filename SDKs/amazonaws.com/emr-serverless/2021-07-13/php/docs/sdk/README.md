# SDK

## Overview

<p>Amazon EMR Serverless is a new deployment option for Amazon EMR. EMR Serverless provides a serverless runtime environment that simplifies running analytics applications using the latest open source frameworks such as Apache Spark and Apache Hive. With EMR Serverless, you don’t have to configure, optimize, secure, or operate clusters to run applications with these frameworks.</p> <p>The API reference to Amazon EMR Serverless is <code>emr-serverless</code>. The <code>emr-serverless</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR Serverless. For example, <code>aws emr-serverless start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR Serverless. For example, <code>"Action": ["emr-serverless:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR Serverless</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR Serverless service endpoints. For example, <code>emr-serverless.us-east-2.amazonaws.com</code>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/emr-serverless/>
### Available Operations

* [cancelJobRun](#canceljobrun) - Cancels a job run.
* [createApplication](#createapplication) - Creates an application.
* [deleteApplication](#deleteapplication) - Deletes an application. An application has to be in a stopped or created state in order to be deleted.
* [getApplication](#getapplication) - Displays detailed information about a specified application.
* [getDashboardForJobRun](#getdashboardforjobrun) - Returns a URL to access the job run dashboard. The generated URL is valid for one hour, after which you must invoke the API again to generate a new URL.
* [getJobRun](#getjobrun) - Displays detailed information about a job run.
* [listApplications](#listapplications) - Lists applications based on a set of parameters.
* [listJobRuns](#listjobruns) - Lists job runs based on a set of parameters.
* [listTagsForResource](#listtagsforresource) - Lists the tags assigned to the resources.
* [startApplication](#startapplication) - Starts a specified application and initializes initial capacity if configured.
* [startJobRun](#startjobrun) - Starts a job run.
* [stopApplication](#stopapplication) - Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
* [tagResource](#tagresource) - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 
* [untagResource](#untagresource) - Removes tags from resources.
* [updateApplication](#updateapplication) - Updates a specified application. An application has to be in a stopped or created state in order to be updated.

## cancelJobRun

Cancels a job run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRunRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->applicationId = 'delectus';
    $request->jobRunId = 'tempora';

    $response = $sdk->sdk->cancelJobRun($request);

    if ($response->cancelJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

Creates an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyAutoStartConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyAutoStopConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyImageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InitialCapacityConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkerResourceConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyMaximumCapacity;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyNetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeSpecificationInput;
use \OpenAPI\OpenAPI\Models\Shared\ImageConfigurationInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->requestBody = new CreateApplicationRequestBody();
    $request->requestBody->architecture = CreateApplicationRequestBodyArchitectureEnum::ARM64;
    $request->requestBody->autoStartConfiguration = new CreateApplicationRequestBodyAutoStartConfiguration();
    $request->requestBody->autoStartConfiguration->enabled = false;
    $request->requestBody->autoStopConfiguration = new CreateApplicationRequestBodyAutoStopConfiguration();
    $request->requestBody->autoStopConfiguration->enabled = false;
    $request->requestBody->autoStopConfiguration->idleTimeoutMinutes = 477665;
    $request->requestBody->clientToken = 'minus';
    $request->requestBody->imageConfiguration = new CreateApplicationRequestBodyImageConfiguration();
    $request->requestBody->imageConfiguration->imageUri = 'placeat';
    $request->requestBody->initialCapacity = [
        'iusto' => new InitialCapacityConfig(),
        'excepturi' => new InitialCapacityConfig(),
        'nisi' => new InitialCapacityConfig(),
    ];
    $request->requestBody->maximumCapacity = new CreateApplicationRequestBodyMaximumCapacity();
    $request->requestBody->maximumCapacity->cpu = 'recusandae';
    $request->requestBody->maximumCapacity->disk = 'temporibus';
    $request->requestBody->maximumCapacity->memory = 'ab';
    $request->requestBody->name = 'Mrs. Marie O'Connell';
    $request->requestBody->networkConfiguration = new CreateApplicationRequestBodyNetworkConfiguration();
    $request->requestBody->networkConfiguration->securityGroupIds = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->requestBody->networkConfiguration->subnetIds = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->requestBody->releaseLabel = 'totam';
    $request->requestBody->tags = [
        'dolorum' => 'dicta',
        'nam' => 'officia',
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
    ];
    $request->requestBody->type = 'optio';
    $request->requestBody->workerTypeSpecifications = [
        'beatae' => new WorkerTypeSpecificationInput(),
        'commodi' => new WorkerTypeSpecificationInput(),
        'molestiae' => new WorkerTypeSpecificationInput(),
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Deletes an application. An application has to be in a stopped or created state in order to be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->applicationId = 'natus';

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->deleteApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplication

Displays detailed information about a specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationRequest();
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';
    $request->applicationId = 'iure';

    $response = $sdk->sdk->getApplication($request);

    if ($response->getApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDashboardForJobRun

Returns a URL to access the job run dashboard. The generated URL is valid for one hour, after which you must invoke the API again to generate a new URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDashboardForJobRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDashboardForJobRunRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->applicationId = 'laborum';
    $request->jobRunId = 'dolores';

    $response = $sdk->sdk->getDashboardForJobRun($request);

    if ($response->getDashboardForJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobRun

Displays detailed information about a job run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobRunRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->applicationId = 'minima';
    $request->jobRunId = 'excepturi';

    $response = $sdk->sdk->getJobRun($request);

    if ($response->getJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

Lists applications based on a set of parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationsRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->maxResults = 208876;
    $request->nextToken = 'culpa';
    $request->states = [
        ApplicationStateEnum::TERMINATED,
    ];

    $response = $sdk->sdk->listApplications($request);

    if ($response->listApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobRuns

Lists job runs based on a set of parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobRunStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobRunsRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->applicationId = 'error';
    $request->createdAtAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T15:03:11.112Z');
    $request->createdAtBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T17:10:10.440Z');
    $request->maxResults = 656330;
    $request->nextToken = 'enim';
    $request->states = [
        JobRunStateEnum::CANCELLING,
    ];

    $response = $sdk->sdk->listJobRuns($request);

    if ($response->listJobRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags assigned to the resources.

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
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->resourceArn = 'error';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startApplication

Starts a specified application and initializes initial capacity if configured.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartApplicationRequest();
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->applicationId = 'praesentium';

    $response = $sdk->sdk->startApplication($request);

    if ($response->startApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startJobRun

Starts a job run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequestBodyConfigurationOverrides;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ManagedPersistenceMonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3MonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequestBodyJobDriver;
use \OpenAPI\OpenAPI\Models\Shared\Hive;
use \OpenAPI\OpenAPI\Models\Shared\SparkSubmit;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartJobRunRequest();
    $request->requestBody = new StartJobRunRequestBody();
    $request->requestBody->clientToken = 'voluptatibus';
    $request->requestBody->configurationOverrides = new StartJobRunRequestBodyConfigurationOverrides();
    $request->requestBody->configurationOverrides->applicationConfiguration = [
        new Configuration(),
    ];
    $request->requestBody->configurationOverrides->monitoringConfiguration = new MonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->managedPersistenceMonitoringConfiguration = new ManagedPersistenceMonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->managedPersistenceMonitoringConfiguration->enabled = false;
    $request->requestBody->configurationOverrides->monitoringConfiguration->managedPersistenceMonitoringConfiguration->encryptionKeyArn = 'omnis';
    $request->requestBody->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration = new S3MonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration->encryptionKeyArn = 'voluptate';
    $request->requestBody->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration->logUri = 'cum';
    $request->requestBody->executionRoleArn = 'perferendis';
    $request->requestBody->executionTimeoutMinutes = 39187;
    $request->requestBody->jobDriver = new StartJobRunRequestBodyJobDriver();
    $request->requestBody->jobDriver->hive = new Hive();
    $request->requestBody->jobDriver->hive->initQueryFile = 'reprehenderit';
    $request->requestBody->jobDriver->hive->parameters = 'ut';
    $request->requestBody->jobDriver->hive->query = 'maiores';
    $request->requestBody->jobDriver->sparkSubmit = new SparkSubmit();
    $request->requestBody->jobDriver->sparkSubmit->entryPoint = 'dicta';
    $request->requestBody->jobDriver->sparkSubmit->entryPointArguments = [
        'dolore',
        'iusto',
    ];
    $request->requestBody->jobDriver->sparkSubmit->sparkSubmitParameters = 'dicta';
    $request->requestBody->name = 'Bill Thompson';
    $request->requestBody->tags = [
        'ipsum' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->applicationId = 'quasi';

    $response = $sdk->sdk->startJobRun($request);

    if ($response->startJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopApplication

Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopApplicationRequest();
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->applicationId = 'est';

    $response = $sdk->sdk->stopApplication($request);

    if ($response->stopApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 

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
        'explicabo' => 'deserunt',
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->resourceArn = 'fugit';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from resources.

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
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';
    $request->resourceArn = 'eum';
    $request->tagKeys = [
        'eligendi',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

Updates a specified application. An application has to be in a stopped or created state in order to be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyAutoStartConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyAutoStopConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyImageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InitialCapacityConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkerResourceConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyMaximumCapacity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyNetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeSpecificationInput;
use \OpenAPI\OpenAPI\Models\Shared\ImageConfigurationInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->requestBody = new UpdateApplicationRequestBody();
    $request->requestBody->architecture = UpdateApplicationRequestBodyArchitectureEnum::X8664;
    $request->requestBody->autoStartConfiguration = new UpdateApplicationRequestBodyAutoStartConfiguration();
    $request->requestBody->autoStartConfiguration->enabled = false;
    $request->requestBody->autoStopConfiguration = new UpdateApplicationRequestBodyAutoStopConfiguration();
    $request->requestBody->autoStopConfiguration->enabled = false;
    $request->requestBody->autoStopConfiguration->idleTimeoutMinutes = 396098;
    $request->requestBody->clientToken = 'provident';
    $request->requestBody->imageConfiguration = new UpdateApplicationRequestBodyImageConfiguration();
    $request->requestBody->imageConfiguration->imageUri = 'necessitatibus';
    $request->requestBody->initialCapacity = [
        'officia' => new InitialCapacityConfig(),
        'dolor' => new InitialCapacityConfig(),
        'debitis' => new InitialCapacityConfig(),
    ];
    $request->requestBody->maximumCapacity = new UpdateApplicationRequestBodyMaximumCapacity();
    $request->requestBody->maximumCapacity->cpu = 'a';
    $request->requestBody->maximumCapacity->disk = 'dolorum';
    $request->requestBody->maximumCapacity->memory = 'in';
    $request->requestBody->networkConfiguration = new UpdateApplicationRequestBodyNetworkConfiguration();
    $request->requestBody->networkConfiguration->securityGroupIds = [
        'illum',
        'maiores',
    ];
    $request->requestBody->networkConfiguration->subnetIds = [
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->requestBody->workerTypeSpecifications = [
        'ea' => new WorkerTypeSpecificationInput(),
        'aliquid' => new WorkerTypeSpecificationInput(),
        'laborum' => new WorkerTypeSpecificationInput(),
        'accusamus' => new WorkerTypeSpecificationInput(),
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';
    $request->applicationId = 'nam';

    $response = $sdk->sdk->updateApplication($request);

    if ($response->updateApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
