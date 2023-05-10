# SDK

## Overview

Amazon Web Services Mainframe Modernization provides tools and resources to help you plan and implement migration and modernization from mainframes to Amazon Web Services managed runtime environments. It provides tools for analyzing existing mainframe applications, developing or updating mainframe applications using COBOL or PL/I, and implementing an automated pipeline for continuous integration and continuous delivery (CI/CD) of the applications.

Amazon Web Services documentation
<https://docs.aws.amazon.com/m2/>
### Available Operations

* [cancelBatchJobExecution](#cancelbatchjobexecution) - Cancels the running of a specific batch job execution.
* [createApplication](#createapplication) - Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
* [createDataSetImportTask](#createdatasetimporttask) - Starts a data set import task for a specific application.
* [createDeployment](#createdeployment) - Creates and starts a deployment to deploy an application into a runtime environment.
* [createEnvironment](#createenvironment) - Creates a runtime environment for a given runtime engine.
* [deleteApplication](#deleteapplication) - Deletes a specific application. You cannot delete a running application.
* [deleteApplicationFromEnvironment](#deleteapplicationfromenvironment) - Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
* [deleteEnvironment](#deleteenvironment) - Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
* [getApplication](#getapplication) - Describes the details of a specific application.
* [getApplicationVersion](#getapplicationversion) - Returns details about a specific version of a specific application.
* [getBatchJobExecution](#getbatchjobexecution) - Gets the details of a specific batch job execution for a specific application.
* [getDataSetDetails](#getdatasetdetails) - Gets the details of a specific data set.
* [getDataSetImportTask](#getdatasetimporttask) - Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
* [getDeployment](#getdeployment) - Gets details of a specific deployment with a given deployment identifier.
* [getEnvironment](#getenvironment) - Describes a specific runtime environment.
* [listApplicationVersions](#listapplicationversions) - Returns a list of the application versions for a specific application.
* [listApplications](#listapplications) - Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
* [listBatchJobDefinitions](#listbatchjobdefinitions) - Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
* [listBatchJobExecutions](#listbatchjobexecutions) - Lists historical, current, and scheduled batch job executions for a specific application.
* [listDataSetImportHistory](#listdatasetimporthistory) - Lists the data set imports for the specified application.
* [listDataSets](#listdatasets) - Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
* [listDeployments](#listdeployments) - Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
* [listEngineVersions](#listengineversions) - Lists the available engine versions.
* [listEnvironments](#listenvironments) - Lists the runtime environments.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [startApplication](#startapplication) - Starts an application that is currently stopped.
* [startBatchJob](#startbatchjob) - Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
* [stopApplication](#stopapplication) - Stops a running application.
* [tagResource](#tagresource) - Adds one or more tags to the specified resource.
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.
* [updateApplication](#updateapplication) - Updates an application and creates a new version.
* [updateEnvironment](#updateenvironment) - Updates the configuration details for a specific runtime environment.

## cancelBatchJobExecution

Cancels the running of a specific batch job execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelBatchJobExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelBatchJobExecutionRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->applicationId = 'delectus';
    $request->executionId = 'tempora';

    $response = $sdk->sdk->cancelBatchJobExecution($request);

    if ($response->cancelBatchJobExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

Creates a new application with given parameters. Requires an existing runtime environment and application definition file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyDefinition;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyEngineTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->requestBody = new CreateApplicationRequestBody();
    $request->requestBody->clientToken = 'suscipit';
    $request->requestBody->definition = new CreateApplicationRequestBodyDefinition();
    $request->requestBody->definition->content = 'molestiae';
    $request->requestBody->definition->s3Location = 'minus';
    $request->requestBody->description = 'placeat';
    $request->requestBody->engineType = CreateApplicationRequestBodyEngineTypeEnum::BLUAGE;
    $request->requestBody->kmsKeyId = 'iusto';
    $request->requestBody->name = 'Charlie Walsh II';
    $request->requestBody->tags = [
        'deserunt' => 'perferendis',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataSetImportTask

Starts a data set import task for a specific application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSetImportTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSetImportTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSetImportTaskRequestBodyImportConfig;
use \OpenAPI\OpenAPI\Models\Shared\DataSetImportItem;
use \OpenAPI\OpenAPI\Models\Shared\DataSet;
use \OpenAPI\OpenAPI\Models\Shared\DatasetOrgAttributes;
use \OpenAPI\OpenAPI\Models\Shared\GdgAttributes;
use \OpenAPI\OpenAPI\Models\Shared\VsamAttributes;
use \OpenAPI\OpenAPI\Models\Shared\AlternateKey;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryKey;
use \OpenAPI\OpenAPI\Models\Shared\RecordLength;
use \OpenAPI\OpenAPI\Models\Shared\ExternalLocation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataSetImportTaskRequest();
    $request->requestBody = new CreateDataSetImportTaskRequestBody();
    $request->requestBody->clientToken = 'maiores';
    $request->requestBody->importConfig = new CreateDataSetImportTaskRequestBodyImportConfig();
    $request->requestBody->importConfig->dataSets = [
        new DataSetImportItem(),
        new DataSetImportItem(),
    ];
    $request->requestBody->importConfig->s3Location = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->applicationId = 'officia';

    $response = $sdk->sdk->createDataSetImportTask($request);

    if ($response->createDataSetImportTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployment

Creates and starts a deployment to deploy an application into a runtime environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentRequest();
    $request->requestBody = new CreateDeploymentRequestBody();
    $request->requestBody->applicationVersion = 582020;
    $request->requestBody->clientToken = 'fugit';
    $request->requestBody->environmentId = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';
    $request->applicationId = 'qui';

    $response = $sdk->sdk->createDeployment($request);

    if ($response->createDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironment

Creates a runtime environment for a given runtime engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyHighAvailabilityConfig;
use \OpenAPI\OpenAPI\Models\Shared\StorageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EfsStorageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FsxStorageConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->requestBody = new CreateEnvironmentRequestBody();
    $request->requestBody->clientToken = 'impedit';
    $request->requestBody->description = 'cum';
    $request->requestBody->engineType = CreateEnvironmentRequestBodyEngineTypeEnum::MICROFOCUS;
    $request->requestBody->engineVersion = 'ipsum';
    $request->requestBody->highAvailabilityConfig = new CreateEnvironmentRequestBodyHighAvailabilityConfig();
    $request->requestBody->highAvailabilityConfig->desiredCapacity = 568434;
    $request->requestBody->instanceType = 'aspernatur';
    $request->requestBody->kmsKeyId = 'perferendis';
    $request->requestBody->name = 'Faye Cormier';
    $request->requestBody->preferredMaintenanceWindow = 'natus';
    $request->requestBody->publiclyAccessible = false;
    $request->requestBody->securityGroupIds = [
        'hic',
        'saepe',
    ];
    $request->requestBody->storageConfigurations = [
        new StorageConfiguration(),
        new StorageConfiguration(),
        new StorageConfiguration(),
    ];
    $request->requestBody->subnetIds = [
        'corporis',
        'iste',
    ];
    $request->requestBody->tags = [
        'saepe' => 'quidem',
        'architecto' => 'ipsa',
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->createEnvironment($request);

    if ($response->createEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Deletes a specific application. You cannot delete a running application.

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
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->applicationId = 'accusantium';

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->deleteApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationFromEnvironment

Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationFromEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationFromEnvironmentRequest();
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->applicationId = 'culpa';
    $request->environmentId = 'consequuntur';

    $response = $sdk->sdk->deleteApplicationFromEnvironment($request);

    if ($response->deleteApplicationFromEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironment

Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.

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
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->environmentId = 'velit';

    $response = $sdk->sdk->deleteEnvironment($request);

    if ($response->deleteEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplication

Describes the details of a specific application.

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
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->applicationId = 'odit';

    $response = $sdk->sdk->getApplication($request);

    if ($response->getApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplicationVersion

Returns details about a specific version of a specific application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationVersionRequest();
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->applicationId = 'quasi';
    $request->applicationVersion = 622846;

    $response = $sdk->sdk->getApplicationVersion($request);

    if ($response->getApplicationVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchJobExecution

Gets the details of a specific batch job execution for a specific application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchJobExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchJobExecutionRequest();
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->applicationId = 'praesentium';
    $request->executionId = 'voluptatibus';

    $response = $sdk->sdk->getBatchJobExecution($request);

    if ($response->getBatchJobExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataSetDetails

Gets the details of a specific data set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataSetDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataSetDetailsRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->applicationId = 'ut';
    $request->dataSetName = 'maiores';

    $response = $sdk->sdk->getDataSetDetails($request);

    if ($response->getDataSetDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataSetImportTask

Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataSetImportTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataSetImportTaskRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->applicationId = 'accusamus';
    $request->taskId = 'commodi';

    $response = $sdk->sdk->getDataSetImportTask($request);

    if ($response->getDataSetImportTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeployment

Gets details of a specific deployment with a given deployment identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentRequest();
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->applicationId = 'modi';
    $request->deploymentId = 'praesentium';

    $response = $sdk->sdk->getDeployment($request);

    if ($response->getDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironment

Describes a specific runtime environment.

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
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->environmentId = 'incidunt';

    $response = $sdk->sdk->getEnvironment($request);

    if ($response->getEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplicationVersions

Returns a list of the application versions for a specific application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationVersionsRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->applicationId = 'quibusdam';
    $request->maxResults = 289406;
    $request->nextToken = 'modi';

    $response = $sdk->sdk->listApplicationVersions($request);

    if ($response->listApplicationVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationsRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->environmentId = 'ipsam';
    $request->maxResults = 4695;
    $request->names = [
        'dolorum',
    ];
    $request->nextToken = 'excepturi';

    $response = $sdk->sdk->listApplications($request);

    if ($response->listApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBatchJobDefinitions

Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchJobDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBatchJobDefinitionsRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->applicationId = 'eligendi';
    $request->maxResults = 576157;
    $request->nextToken = 'aliquid';
    $request->prefix = 'provident';

    $response = $sdk->sdk->listBatchJobDefinitions($request);

    if ($response->listBatchJobDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBatchJobExecutions

Lists historical, current, and scheduled batch job executions for a specific application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchJobExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchJobExecutionsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBatchJobExecutionsRequest();
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->applicationId = 'in';
    $request->executionIds = [
        'illum',
        'maiores',
    ];
    $request->jobName = 'rerum';
    $request->maxResults = 116202;
    $request->nextToken = 'magnam';
    $request->startedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-23T21:23:35.691Z');
    $request->startedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T06:36:34.417Z');
    $request->status = ListBatchJobExecutionsStatusEnum::SUCCEEDED;

    $response = $sdk->sdk->listBatchJobExecutions($request);

    if ($response->listBatchJobExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataSetImportHistory

Lists the data set imports for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSetImportHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataSetImportHistoryRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->applicationId = 'provident';
    $request->maxResults = 725255;
    $request->nextToken = 'id';

    $response = $sdk->sdk->listDataSetImportHistory($request);

    if ($response->listDataSetImportHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataSets

Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataSetsRequest();
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->applicationId = 'natus';
    $request->maxResults = 606393;
    $request->nextToken = 'molestiae';
    $request->prefix = 'perferendis';

    $response = $sdk->sdk->listDataSets($request);

    if ($response->listDataSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployments

Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentsRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->applicationId = 'natus';
    $request->maxResults = 749170;
    $request->nextToken = 'eum';

    $response = $sdk->sdk->listDeployments($request);

    if ($response->listDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEngineVersions

Lists the available engine versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEngineVersionsEngineTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEngineVersionsRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->engineType = ListEngineVersionsEngineTypeEnum::BLUAGE;
    $request->maxResults = 551816;
    $request->nextToken = 'sint';

    $response = $sdk->sdk->listEngineVersions($request);

    if ($response->listEngineVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironments

Lists the runtime environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentsEngineTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentsRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->engineType = ListEnvironmentsEngineTypeEnum::BLUAGE;
    $request->maxResults = 141264;
    $request->names = [
        'quasi',
        'iure',
    ];
    $request->nextToken = 'doloribus';

    $response = $sdk->sdk->listEnvironments($request);

    if ($response->listEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for the specified resource.

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
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'architecto';
    $request->resourceArn = 'architecto';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startApplication

Starts an application that is currently stopped.

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
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';
    $request->applicationId = 'saepe';

    $response = $sdk->sdk->startApplication($request);

    if ($response->startApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startBatchJob

Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartBatchJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartBatchJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartBatchJobRequestBodyBatchJobIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\FileBatchJobIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ScriptBatchJobIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartBatchJobRequest();
    $request->requestBody = new StartBatchJobRequestBody();
    $request->requestBody->batchJobIdentifier = new StartBatchJobRequestBodyBatchJobIdentifier();
    $request->requestBody->batchJobIdentifier->fileBatchJobIdentifier = new FileBatchJobIdentifier();
    $request->requestBody->batchJobIdentifier->fileBatchJobIdentifier->fileName = 'pariatur';
    $request->requestBody->batchJobIdentifier->fileBatchJobIdentifier->folderPath = 'accusantium';
    $request->requestBody->batchJobIdentifier->scriptBatchJobIdentifier = new ScriptBatchJobIdentifier();
    $request->requestBody->batchJobIdentifier->scriptBatchJobIdentifier->scriptName = 'consequuntur';
    $request->requestBody->jobParams = [
        'natus' => 'magni',
        'sunt' => 'quo',
        'illum' => 'pariatur',
    ];
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'ab';
    $request->applicationId = 'maiores';

    $response = $sdk->sdk->startBatchJob($request);

    if ($response->startBatchJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopApplication

Stops a running application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopApplicationRequest();
    $request->requestBody = new StopApplicationRequestBody();
    $request->requestBody->forceStop = false;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->applicationId = 'nemo';

    $response = $sdk->sdk->stopApplication($request);

    if ($response->stopApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags to the specified resource.

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
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
        'hic' => 'libero',
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->resourceArn = 'nesciunt';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified resource.

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
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->resourceArn = 'nostrum';
    $request->tagKeys = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
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

Updates an application and creates a new version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyDefinition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->requestBody = new UpdateApplicationRequestBody();
    $request->requestBody->currentApplicationVersion = 31838;
    $request->requestBody->definition = new UpdateApplicationRequestBodyDefinition();
    $request->requestBody->definition->content = 'porro';
    $request->requestBody->definition->s3Location = 'consequuntur';
    $request->requestBody->description = 'blanditiis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->applicationId = 'modi';

    $response = $sdk->sdk->updateApplication($request);

    if ($response->updateApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironment

Updates the configuration details for a specific runtime environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentRequest();
    $request->requestBody = new UpdateEnvironmentRequestBody();
    $request->requestBody->applyDuringMaintenanceWindow = false;
    $request->requestBody->desiredCapacity = 613966;
    $request->requestBody->engineVersion = 'dolorum';
    $request->requestBody->instanceType = 'deleniti';
    $request->requestBody->preferredMaintenanceWindow = 'pariatur';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->environmentId = 'dolorem';

    $response = $sdk->sdk->updateEnvironment($request);

    if ($response->updateEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
