# SDK

## Overview

<p><fullname>Amazon Managed Workflows for Apache Airflow</fullname> <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html">What Is Amazon MWAA?</a>.</p> <p> <b>Endpoints</b> </p> <ul> <li> <p> <code>api.airflow.{region}.amazonaws.com</code> - This endpoint is used for environment management.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateEnvironment.html">CreateEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_DeleteEnvironment.html">DeleteEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_GetEnvironment.html">GetEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListEnvironments.html">ListEnvironments</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListTagsForResource.html">ListTagsForResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_TagResource.html">TagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UntagResource.html">UntagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html">UpdateEnvironment</a> </p> </li> </ul> </li> <li> <p> <code>env.airflow.{region}.amazonaws.com</code> - This endpoint is used to operate the Airflow environment.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateCliToken.html ">CreateCliToken</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateWebLoginToken.html">CreateWebLoginToken</a> </p> </li> </ul> </li> <li> <p> <code>ops.airflow.{region}.amazonaws.com</code> - This endpoint is used to push environment metrics that track environment health.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_PublishMetrics.html ">PublishMetrics</a> </p> </li> </ul> </li> </ul> <p> <b>Regions</b> </p> <p>For a list of regions that Amazon MWAA supports, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html#regions-mwaa">Region availability</a> in the <i>Amazon MWAA User Guide</i>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/airflow/>
### Available Operations

* [createCliToken](#createclitoken) - Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.
* [createEnvironment](#createenvironment) - Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [createWebLoginToken](#createweblogintoken) - Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.
* [deleteEnvironment](#deleteenvironment) - Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [getEnvironment](#getenvironment) - Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [listEnvironments](#listenvironments) - Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
* [listTagsForResource](#listtagsforresource) - Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 
* [publishMetrics](#publishmetrics) -  <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.
* [tagResource](#tagresource) - Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 
* [untagResource](#untagresource) - Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
* [updateEnvironment](#updateenvironment) - Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

## createCliToken

Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCliTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCliTokenRequest();
    $request->name = 'Dr. Valerie Toy';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->createCliToken($request);

    if ($response->createCliTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironment

Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyLoggingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ModuleLoggingConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\LoggingLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyNetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyWebserverAccessModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->name = 'Mrs. Sophie Smith MD';
    $request->requestBody = new CreateEnvironmentRequestBody();
    $request->requestBody->airflowConfigurationOptions = [
        'ipsam' => 'repellendus',
    ];
    $request->requestBody->airflowVersion = 'sapiente';
    $request->requestBody->dagS3Path = 'quo';
    $request->requestBody->environmentClass = 'odit';
    $request->requestBody->executionRoleArn = 'at';
    $request->requestBody->kmsKey = 'at';
    $request->requestBody->loggingConfiguration = new CreateEnvironmentRequestBodyLoggingConfiguration();
    $request->requestBody->loggingConfiguration->dagProcessingLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->dagProcessingLogs->enabled = false;
    $request->requestBody->loggingConfiguration->dagProcessingLogs->logLevel = LoggingLevelEnum::DEBUG;
    $request->requestBody->loggingConfiguration->schedulerLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->schedulerLogs->enabled = false;
    $request->requestBody->loggingConfiguration->schedulerLogs->logLevel = LoggingLevelEnum::WARNING;
    $request->requestBody->loggingConfiguration->taskLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->taskLogs->enabled = false;
    $request->requestBody->loggingConfiguration->taskLogs->logLevel = LoggingLevelEnum::INFO;
    $request->requestBody->loggingConfiguration->webserverLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->webserverLogs->enabled = false;
    $request->requestBody->loggingConfiguration->webserverLogs->logLevel = LoggingLevelEnum::DEBUG;
    $request->requestBody->loggingConfiguration->workerLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->workerLogs->enabled = false;
    $request->requestBody->loggingConfiguration->workerLogs->logLevel = LoggingLevelEnum::WARNING;
    $request->requestBody->maxWorkers = 520478;
    $request->requestBody->minWorkers = 780529;
    $request->requestBody->networkConfiguration = new CreateEnvironmentRequestBodyNetworkConfiguration();
    $request->requestBody->networkConfiguration->securityGroupIds = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->requestBody->networkConfiguration->subnetIds = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->requestBody->pluginsS3ObjectVersion = 'optio';
    $request->requestBody->pluginsS3Path = 'totam';
    $request->requestBody->requirementsS3ObjectVersion = 'beatae';
    $request->requestBody->requirementsS3Path = 'commodi';
    $request->requestBody->schedulers = 473600;
    $request->requestBody->sourceBucketArn = 'modi';
    $request->requestBody->startupScriptS3ObjectVersion = 'qui';
    $request->requestBody->startupScriptS3Path = 'impedit';
    $request->requestBody->tags = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->requestBody->webserverAccessMode = CreateEnvironmentRequestBodyWebserverAccessModeEnum::PUBLIC_ONLY;
    $request->requestBody->weeklyMaintenanceWindowStart = 'sed';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->createEnvironment($request);

    if ($response->createEnvironmentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWebLoginToken

Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebLoginTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebLoginTokenRequest();
    $request->name = 'Stacy Moore';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->createWebLoginToken($request);

    if ($response->createWebLoginTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironment

Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentRequest();
    $request->name = 'Connie Herzog';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->deleteEnvironment($request);

    if ($response->deleteEnvironmentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironment

Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentRequest();
    $request->name = 'Miss Aubrey Williamson';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getEnvironment($request);

    if ($response->getEnvironmentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironments

Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentsRequest();
    $request->maxResults = 466311;
    $request->nextToken = 'molestiae';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';

    $response = $sdk->sdk->listEnvironments($request);

    if ($response->listEnvironmentsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 

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
    $request->resourceArn = 'enim';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishMetrics

 <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PublishMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishMetricsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MetricDatum;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\StatisticSet;
use \OpenAPI\OpenAPI\Models\Shared\UnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishMetricsRequest();
    $request->environmentName = 'aut';
    $request->requestBody = new PublishMetricsRequestBody();
    $request->requestBody->metricData = [
        new MetricDatum(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->publishMetrics($request);

    if ($response->publishMetricsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 

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
        'praesentium' => 'voluptatibus',
        'ipsa' => 'omnis',
    ];
    $request->resourceArn = 'voluptate';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.

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
    $request->resourceArn = 'corporis';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->tagKeys = [
        'quae',
        'ipsum',
        'quidem',
        'molestias',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironment

Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBodyLoggingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ModuleLoggingConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\LoggingLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBodyNetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBodyWebserverAccessModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentRequest();
    $request->name = 'Ervin Gleason';
    $request->requestBody = new UpdateEnvironmentRequestBody();
    $request->requestBody->airflowConfigurationOptions = [
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
        'itaque' => 'incidunt',
        'enim' => 'consequatur',
    ];
    $request->requestBody->airflowVersion = 'est';
    $request->requestBody->dagS3Path = 'quibusdam';
    $request->requestBody->environmentClass = 'explicabo';
    $request->requestBody->executionRoleArn = 'deserunt';
    $request->requestBody->loggingConfiguration = new UpdateEnvironmentRequestBodyLoggingConfiguration();
    $request->requestBody->loggingConfiguration->dagProcessingLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->dagProcessingLogs->enabled = false;
    $request->requestBody->loggingConfiguration->dagProcessingLogs->logLevel = LoggingLevelEnum::INFO;
    $request->requestBody->loggingConfiguration->schedulerLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->schedulerLogs->enabled = false;
    $request->requestBody->loggingConfiguration->schedulerLogs->logLevel = LoggingLevelEnum::DEBUG;
    $request->requestBody->loggingConfiguration->taskLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->taskLogs->enabled = false;
    $request->requestBody->loggingConfiguration->taskLogs->logLevel = LoggingLevelEnum::ERROR;
    $request->requestBody->loggingConfiguration->webserverLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->webserverLogs->enabled = false;
    $request->requestBody->loggingConfiguration->webserverLogs->logLevel = LoggingLevelEnum::ERROR;
    $request->requestBody->loggingConfiguration->workerLogs = new ModuleLoggingConfigurationInput();
    $request->requestBody->loggingConfiguration->workerLogs->enabled = false;
    $request->requestBody->loggingConfiguration->workerLogs->logLevel = LoggingLevelEnum::CRITICAL;
    $request->requestBody->maxWorkers = 397821;
    $request->requestBody->minWorkers = 586513;
    $request->requestBody->networkConfiguration = new UpdateEnvironmentRequestBodyNetworkConfiguration();
    $request->requestBody->networkConfiguration->securityGroupIds = [
        'perferendis',
        'magni',
        'assumenda',
    ];
    $request->requestBody->pluginsS3ObjectVersion = 'ipsam';
    $request->requestBody->pluginsS3Path = 'alias';
    $request->requestBody->requirementsS3ObjectVersion = 'fugit';
    $request->requestBody->requirementsS3Path = 'dolorum';
    $request->requestBody->schedulers = 569618;
    $request->requestBody->sourceBucketArn = 'tempora';
    $request->requestBody->startupScriptS3ObjectVersion = 'facilis';
    $request->requestBody->startupScriptS3Path = 'tempore';
    $request->requestBody->webserverAccessMode = UpdateEnvironmentRequestBodyWebserverAccessModeEnum::PRIVATE_ONLY;
    $request->requestBody->weeklyMaintenanceWindowStart = 'delectus';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->updateEnvironment($request);

    if ($response->updateEnvironmentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
