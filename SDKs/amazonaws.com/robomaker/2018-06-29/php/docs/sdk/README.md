# SDK

## Overview

This section provides documentation for the AWS RoboMaker API operations.

Amazon Web Services documentation
<https://docs.aws.amazon.com/robomaker/>
### Available Operations

* [batchDeleteWorlds](#batchdeleteworlds) - Deletes one or more worlds in a batch operation.
* [batchDescribeSimulationJob](#batchdescribesimulationjob) - Describes one or more simulation jobs.
* [~~cancelDeploymentJob~~](#canceldeploymentjob) - <p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [cancelSimulationJob](#cancelsimulationjob) - Cancels the specified simulation job.
* [cancelSimulationJobBatch](#cancelsimulationjobbatch) - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* [cancelWorldExportJob](#cancelworldexportjob) - Cancels the specified export job.
* [cancelWorldGenerationJob](#cancelworldgenerationjob) - Cancels the specified world generator job.
* [~~createDeploymentJob~~](#createdeploymentjob) - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note> :warning: **Deprecated**
* [~~createFleet~~](#createfleet) - <p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [~~createRobot~~](#createrobot) - <p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [createRobotApplication](#createrobotapplication) - Creates a robot application. 
* [createRobotApplicationVersion](#createrobotapplicationversion) - Creates a version of a robot application.
* [createSimulationApplication](#createsimulationapplication) - Creates a simulation application.
* [createSimulationApplicationVersion](#createsimulationapplicationversion) - Creates a simulation application with a specific revision id.
* [createSimulationJob](#createsimulationjob) - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* [createWorldExportJob](#createworldexportjob) - Creates a world export job.
* [createWorldGenerationJob](#createworldgenerationjob) - Creates worlds using the specified template.
* [createWorldTemplate](#createworldtemplate) - Creates a world template.
* [~~deleteFleet~~](#deletefleet) - <p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~deleteRobot~~](#deleterobot) - <p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [deleteRobotApplication](#deleterobotapplication) - Deletes a robot application.
* [deleteSimulationApplication](#deletesimulationapplication) - Deletes a simulation application.
* [deleteWorldTemplate](#deleteworldtemplate) - Deletes a world template.
* [~~deregisterRobot~~](#deregisterrobot) - <p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeDeploymentJob~~](#describedeploymentjob) - <p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeFleet~~](#describefleet) - <p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeRobot~~](#describerobot) - <p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [describeRobotApplication](#describerobotapplication) - Describes a robot application.
* [describeSimulationApplication](#describesimulationapplication) - Describes a simulation application.
* [describeSimulationJob](#describesimulationjob) - Describes a simulation job.
* [describeSimulationJobBatch](#describesimulationjobbatch) - Describes a simulation job batch.
* [describeWorld](#describeworld) - Describes a world.
* [describeWorldExportJob](#describeworldexportjob) - Describes a world export job.
* [describeWorldGenerationJob](#describeworldgenerationjob) - Describes a world generation job.
* [describeWorldTemplate](#describeworldtemplate) - Describes a world template.
* [getWorldTemplateBody](#getworldtemplatebody) - Gets the world template body.
* [~~listDeploymentJobs~~](#listdeploymentjobs) - <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~listFleets~~](#listfleets) - <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [listRobotApplications](#listrobotapplications) - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* [~~listRobots~~](#listrobots) - <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [listSimulationApplications](#listsimulationapplications) - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* [listSimulationJobBatches](#listsimulationjobbatches) - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* [listSimulationJobs](#listsimulationjobs) - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* [listTagsForResource](#listtagsforresource) - Lists all tags on a AWS RoboMaker resource.
* [listWorldExportJobs](#listworldexportjobs) - Lists world export jobs.
* [listWorldGenerationJobs](#listworldgenerationjobs) - Lists world generator jobs.
* [listWorldTemplates](#listworldtemplates) - Lists world templates.
* [listWorlds](#listworlds) - Lists worlds.
* [~~registerRobot~~](#registerrobot) - <p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [restartSimulationJob](#restartsimulationjob) - Restarts a running simulation job.
* [startSimulationJobBatch](#startsimulationjobbatch) - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* [~~syncDeploymentJob~~](#syncdeploymentjob) - <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [tagResource](#tagresource) - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* [untagResource](#untagresource) - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* [updateRobotApplication](#updaterobotapplication) - Updates a robot application.
* [updateSimulationApplication](#updatesimulationapplication) - Updates a simulation application.
* [updateWorldTemplate](#updateworldtemplate) - Updates a world template.

## batchDeleteWorlds

Deletes one or more worlds in a batch operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteWorldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteWorldsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteWorldsRequest();
    $request->requestBody = new BatchDeleteWorldsRequestBody();
    $request->requestBody->worlds = [
        'iure',
        'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->batchDeleteWorlds($request);

    if ($response->batchDeleteWorldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDescribeSimulationJob

Describes one or more simulation jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDescribeSimulationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDescribeSimulationJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDescribeSimulationJobRequest();
    $request->requestBody = new BatchDescribeSimulationJobRequestBody();
    $request->requestBody->jobs = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->batchDescribeSimulationJob($request);

    if ($response->batchDescribeSimulationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~cancelDeploymentJob~~

<p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelDeploymentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelDeploymentJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelDeploymentJobRequest();
    $request->requestBody = new CancelDeploymentJobRequestBody();
    $request->requestBody->job = 'ipsam';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->cancelDeploymentJob($request);

    if ($response->cancelDeploymentJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelSimulationJob

Cancels the specified simulation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelSimulationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelSimulationJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelSimulationJobRequest();
    $request->requestBody = new CancelSimulationJobRequestBody();
    $request->requestBody->job = 'molestiae';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->cancelSimulationJob($request);

    if ($response->cancelSimulationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelSimulationJobBatch

Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelSimulationJobBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelSimulationJobBatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelSimulationJobBatchRequest();
    $request->requestBody = new CancelSimulationJobBatchRequestBody();
    $request->requestBody->batch = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->cancelSimulationJobBatch($request);

    if ($response->cancelSimulationJobBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelWorldExportJob

Cancels the specified export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelWorldExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelWorldExportJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelWorldExportJobRequest();
    $request->requestBody = new CancelWorldExportJobRequestBody();
    $request->requestBody->job = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->cancelWorldExportJob($request);

    if ($response->cancelWorldExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelWorldGenerationJob

Cancels the specified world generator job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelWorldGenerationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelWorldGenerationJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelWorldGenerationJobRequest();
    $request->requestBody = new CancelWorldGenerationJobRequestBody();
    $request->requestBody->job = 'ipsum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->cancelWorldGenerationJob($request);

    if ($response->cancelWorldGenerationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createDeploymentJob~~

<p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentJobRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentApplicationConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentLaunchConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentJobRequestBodyDeploymentConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentJobRequest();
    $request->requestBody = new CreateDeploymentJobRequestBody();
    $request->requestBody->clientRequestToken = 'dolor';
    $request->requestBody->deploymentApplicationConfigs = [
        new DeploymentApplicationConfig(),
        new DeploymentApplicationConfig(),
        new DeploymentApplicationConfig(),
    ];
    $request->requestBody->deploymentConfig = new CreateDeploymentJobRequestBodyDeploymentConfig();
    $request->requestBody->deploymentConfig->concurrentDeploymentPercentage = 386489;
    $request->requestBody->deploymentConfig->downloadConditionFile = new S3Object();
    $request->requestBody->deploymentConfig->downloadConditionFile->bucket = 'hic';
    $request->requestBody->deploymentConfig->downloadConditionFile->etag = 'saepe';
    $request->requestBody->deploymentConfig->downloadConditionFile->key = 'fuga';
    $request->requestBody->deploymentConfig->failureThresholdPercentage = 449950;
    $request->requestBody->deploymentConfig->robotDeploymentTimeoutInSeconds = 359508;
    $request->requestBody->fleet = 'iste';
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

    $response = $sdk->sdk->createDeploymentJob($request);

    if ($response->createDeploymentJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createFleet~~

<p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFleetRequest();
    $request->requestBody = new CreateFleetRequestBody();
    $request->requestBody->name = 'Della Halvorson';
    $request->requestBody->tags = [
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->createFleet($request);

    if ($response->createFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createRobot~~

<p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotRequestBodyArchitectureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRobotRequest();
    $request->requestBody = new CreateRobotRequestBody();
    $request->requestBody->architecture = CreateRobotRequestBodyArchitectureEnum::ARMHF;
    $request->requestBody->greengrassGroupId = 'mollitia';
    $request->requestBody->name = 'Francis Jerde';
    $request->requestBody->tags = [
        'error' => 'quia',
    ];
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->createRobot($request);

    if ($response->createRobotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRobotApplication

Creates a robot application. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotApplicationRequestBodyEnvironment;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotApplicationRequestBodyRobotSoftwareSuite;
use \OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuiteVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRobotApplicationRequest();
    $request->requestBody = new CreateRobotApplicationRequestBody();
    $request->requestBody->environment = new CreateRobotApplicationRequestBodyEnvironment();
    $request->requestBody->environment->uri = 'http://weary-fright.name';
    $request->requestBody->name = 'Richard Boyer';
    $request->requestBody->robotSoftwareSuite = new CreateRobotApplicationRequestBodyRobotSoftwareSuite();
    $request->requestBody->robotSoftwareSuite->name = RobotSoftwareSuiteTypeEnum::GENERAL;
    $request->requestBody->robotSoftwareSuite->version = RobotSoftwareSuiteVersionTypeEnum::KINETIC;
    $request->requestBody->sources = [
        new SourceConfig(),
        new SourceConfig(),
        new SourceConfig(),
        new SourceConfig(),
    ];
    $request->requestBody->tags = [
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
        'ipsa' => 'omnis',
        'voluptate' => 'cum',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->createRobotApplication($request);

    if ($response->createRobotApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRobotApplicationVersion

Creates a version of a robot application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRobotApplicationVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRobotApplicationVersionRequest();
    $request->requestBody = new CreateRobotApplicationVersionRequestBody();
    $request->requestBody->application = 'dolore';
    $request->requestBody->currentRevisionId = 'iusto';
    $request->requestBody->imageDigest = 'dicta';
    $request->requestBody->s3Etags = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->createRobotApplicationVersion($request);

    if ($response->createRobotApplicationVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSimulationApplication

Creates a simulation application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationApplicationRequestBodyEnvironment;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationApplicationRequestBodyRenderingEngine;
use \OpenAPI\OpenAPI\Models\Shared\RenderingEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationApplicationRequestBodyRobotSoftwareSuite;
use \OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuiteVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationApplicationRequestBodySimulationSoftwareSuite;
use \OpenAPI\OpenAPI\Models\Shared\SimulationSoftwareSuiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSimulationApplicationRequest();
    $request->requestBody = new CreateSimulationApplicationRequestBody();
    $request->requestBody->environment = new CreateSimulationApplicationRequestBodyEnvironment();
    $request->requestBody->environment->uri = 'http://lumpy-loincloth.org';
    $request->requestBody->name = 'Dr. Casey Mayer';
    $request->requestBody->renderingEngine = new CreateSimulationApplicationRequestBodyRenderingEngine();
    $request->requestBody->renderingEngine->name = RenderingEngineTypeEnum::OGRE;
    $request->requestBody->renderingEngine->version = 'enim';
    $request->requestBody->robotSoftwareSuite = new CreateSimulationApplicationRequestBodyRobotSoftwareSuite();
    $request->requestBody->robotSoftwareSuite->name = RobotSoftwareSuiteTypeEnum::ROS;
    $request->requestBody->robotSoftwareSuite->version = RobotSoftwareSuiteVersionTypeEnum::DASHING;
    $request->requestBody->simulationSoftwareSuite = new CreateSimulationApplicationRequestBodySimulationSoftwareSuite();
    $request->requestBody->simulationSoftwareSuite->name = SimulationSoftwareSuiteTypeEnum::SIMULATION_RUNTIME;
    $request->requestBody->simulationSoftwareSuite->version = 'explicabo';
    $request->requestBody->sources = [
        new SourceConfig(),
        new SourceConfig(),
        new SourceConfig(),
    ];
    $request->requestBody->tags = [
        'quibusdam' => 'labore',
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->createSimulationApplication($request);

    if ($response->createSimulationApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSimulationApplicationVersion

Creates a simulation application with a specific revision id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationApplicationVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSimulationApplicationVersionRequest();
    $request->requestBody = new CreateSimulationApplicationVersionRequestBody();
    $request->requestBody->application = 'dolorum';
    $request->requestBody->currentRevisionId = 'excepturi';
    $request->requestBody->imageDigest = 'tempora';
    $request->requestBody->s3Etags = [
        'tempore',
        'labore',
        'delectus',
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->createSimulationApplicationVersion($request);

    if ($response->createSimulationApplicationVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSimulationJob

<p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationJobRequestBodyCompute;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationJobRequestBodyFailureBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationJobRequestBodyLoggingConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationJobRequestBodyOutputLocation;
use \OpenAPI\OpenAPI\Models\Shared\RobotApplicationConfig;
use \OpenAPI\OpenAPI\Models\Shared\LaunchConfig;
use \OpenAPI\OpenAPI\Models\Shared\PortForwardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\Tool;
use \OpenAPI\OpenAPI\Models\Shared\ExitBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\UploadConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UploadBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimulationApplicationConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorldConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimulationJobRequestBodyVpcConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSimulationJobRequest();
    $request->requestBody = new CreateSimulationJobRequestBody();
    $request->requestBody->clientRequestToken = 'sint';
    $request->requestBody->compute = new CreateSimulationJobRequestBodyCompute();
    $request->requestBody->compute->computeType = ComputeTypeEnum::GPU_AND_CPU;
    $request->requestBody->compute->gpuUnitLimit = 223081;
    $request->requestBody->compute->simulationUnitLimit = 891555;
    $request->requestBody->dataSources = [
        new DataSourceConfig(),
        new DataSourceConfig(),
        new DataSourceConfig(),
        new DataSourceConfig(),
    ];
    $request->requestBody->failureBehavior = CreateSimulationJobRequestBodyFailureBehaviorEnum::CONTINUE;
    $request->requestBody->iamRole = 'in';
    $request->requestBody->loggingConfig = new CreateSimulationJobRequestBodyLoggingConfig();
    $request->requestBody->loggingConfig->recordAllRosTopics = false;
    $request->requestBody->maxJobDurationInSeconds = 449198;
    $request->requestBody->outputLocation = new CreateSimulationJobRequestBodyOutputLocation();
    $request->requestBody->outputLocation->s3Bucket = 'illum';
    $request->requestBody->outputLocation->s3Prefix = 'maiores';
    $request->requestBody->robotApplications = [
        new RobotApplicationConfig(),
        new RobotApplicationConfig(),
        new RobotApplicationConfig(),
    ];
    $request->requestBody->simulationApplications = [
        new SimulationApplicationConfig(),
    ];
    $request->requestBody->tags = [
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->requestBody->vpcConfig = new CreateSimulationJobRequestBodyVpcConfig();
    $request->requestBody->vpcConfig->assignPublicIp = false;
    $request->requestBody->vpcConfig->securityGroups = [
        'accusamus',
        'non',
        'occaecati',
    ];
    $request->requestBody->vpcConfig->subnets = [
        'accusamus',
        'delectus',
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->createSimulationJob($request);

    if ($response->createSimulationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorldExportJob

Creates a world export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldExportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldExportJobRequestBodyOutputLocation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorldExportJobRequest();
    $request->requestBody = new CreateWorldExportJobRequestBody();
    $request->requestBody->clientRequestToken = 'amet';
    $request->requestBody->iamRole = 'deserunt';
    $request->requestBody->outputLocation = new CreateWorldExportJobRequestBodyOutputLocation();
    $request->requestBody->outputLocation->s3Bucket = 'nisi';
    $request->requestBody->outputLocation->s3Prefix = 'vel';
    $request->requestBody->tags = [
        'omnis' => 'molestiae',
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->requestBody->worlds = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->createWorldExportJob($request);

    if ($response->createWorldExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorldGenerationJob

Creates worlds using the specified template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldGenerationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldGenerationJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldGenerationJobRequestBodyWorldCount;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorldGenerationJobRequest();
    $request->requestBody = new CreateWorldGenerationJobRequestBody();
    $request->requestBody->clientRequestToken = 'et';
    $request->requestBody->tags = [
        'ullam' => 'provident',
        'quos' => 'sint',
        'accusantium' => 'mollitia',
    ];
    $request->requestBody->template = 'reiciendis';
    $request->requestBody->worldCount = new CreateWorldGenerationJobRequestBodyWorldCount();
    $request->requestBody->worldCount->floorplanCount = 652103;
    $request->requestBody->worldCount->interiorCountPerFloorplan = 320997;
    $request->requestBody->worldTags = [
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->createWorldGenerationJob($request);

    if ($response->createWorldGenerationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorldTemplate

Creates a world template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorldTemplateRequestBodyTemplateLocation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorldTemplateRequest();
    $request->requestBody = new CreateWorldTemplateRequestBody();
    $request->requestBody->clientRequestToken = 'facilis';
    $request->requestBody->name = 'Alice Bradtke';
    $request->requestBody->tags = [
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->requestBody->templateBody = 'accusantium';
    $request->requestBody->templateLocation = new CreateWorldTemplateRequestBodyTemplateLocation();
    $request->requestBody->templateLocation->s3Bucket = 'consequuntur';
    $request->requestBody->templateLocation->s3Key = 'praesentium';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->createWorldTemplate($request);

    if ($response->createWorldTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deleteFleet~~

<p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFleetRequest();
    $request->requestBody = new DeleteFleetRequestBody();
    $request->requestBody->fleet = 'ea';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->deleteFleet($request);

    if ($response->deleteFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deleteRobot~~

<p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRobotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRobotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRobotRequest();
    $request->requestBody = new DeleteRobotRequestBody();
    $request->requestBody->robot = 'ipsam';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->deleteRobot($request);

    if ($response->deleteRobotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRobotApplication

Deletes a robot application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRobotApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRobotApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRobotApplicationRequest();
    $request->requestBody = new DeleteRobotApplicationRequestBody();
    $request->requestBody->application = 'perferendis';
    $request->requestBody->applicationVersion = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->deleteRobotApplication($request);

    if ($response->deleteRobotApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSimulationApplication

Deletes a simulation application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSimulationApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSimulationApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSimulationApplicationRequest();
    $request->requestBody = new DeleteSimulationApplicationRequestBody();
    $request->requestBody->application = 'dolores';
    $request->requestBody->applicationVersion = 'quis';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->deleteSimulationApplication($request);

    if ($response->deleteSimulationApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorldTemplate

Deletes a world template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorldTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorldTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorldTemplateRequest();
    $request->requestBody = new DeleteWorldTemplateRequestBody();
    $request->requestBody->template = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->deleteWorldTemplate($request);

    if ($response->deleteWorldTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deregisterRobot~~

<p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterRobotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterRobotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterRobotRequest();
    $request->requestBody = new DeregisterRobotRequestBody();
    $request->requestBody->fleet = 'omnis';
    $request->requestBody->robot = 'facilis';
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->deregisterRobot($request);

    if ($response->deregisterRobotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeDeploymentJob~~

<p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeploymentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeploymentJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeploymentJobRequest();
    $request->requestBody = new DescribeDeploymentJobRequestBody();
    $request->requestBody->job = 'occaecati';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->describeDeploymentJob($request);

    if ($response->describeDeploymentJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeFleet~~

<p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetRequest();
    $request->requestBody = new DescribeFleetRequestBody();
    $request->requestBody->fleet = 'deleniti';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->describeFleet($request);

    if ($response->describeFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeRobot~~

<p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRobotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRobotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRobotRequest();
    $request->requestBody = new DescribeRobotRequestBody();
    $request->requestBody->robot = 'aliquid';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->describeRobot($request);

    if ($response->describeRobotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRobotApplication

Describes a robot application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRobotApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRobotApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRobotApplicationRequest();
    $request->requestBody = new DescribeRobotApplicationRequestBody();
    $request->requestBody->application = 'cum';
    $request->requestBody->applicationVersion = 'voluptate';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->describeRobotApplication($request);

    if ($response->describeRobotApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSimulationApplication

Describes a simulation application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSimulationApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSimulationApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSimulationApplicationRequest();
    $request->requestBody = new DescribeSimulationApplicationRequestBody();
    $request->requestBody->application = 'ipsa';
    $request->requestBody->applicationVersion = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->describeSimulationApplication($request);

    if ($response->describeSimulationApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSimulationJob

Describes a simulation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSimulationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSimulationJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSimulationJobRequest();
    $request->requestBody = new DescribeSimulationJobRequestBody();
    $request->requestBody->job = 'eos';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->describeSimulationJob($request);

    if ($response->describeSimulationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSimulationJobBatch

Describes a simulation job batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSimulationJobBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSimulationJobBatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSimulationJobBatchRequest();
    $request->requestBody = new DescribeSimulationJobBatchRequestBody();
    $request->requestBody->batch = 'voluptate';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->describeSimulationJobBatch($request);

    if ($response->describeSimulationJobBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorld

Describes a world.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorldRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorldRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorldRequest();
    $request->requestBody = new DescribeWorldRequestBody();
    $request->requestBody->world = 'ipsum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->describeWorld($request);

    if ($response->describeWorldResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorldExportJob

Describes a world export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorldExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorldExportJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorldExportJobRequest();
    $request->requestBody = new DescribeWorldExportJobRequestBody();
    $request->requestBody->job = 'optio';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->describeWorldExportJob($request);

    if ($response->describeWorldExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorldGenerationJob

Describes a world generation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorldGenerationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorldGenerationJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorldGenerationJobRequest();
    $request->requestBody = new DescribeWorldGenerationJobRequestBody();
    $request->requestBody->job = 'repellendus';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->describeWorldGenerationJob($request);

    if ($response->describeWorldGenerationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorldTemplate

Describes a world template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorldTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorldTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorldTemplateRequest();
    $request->requestBody = new DescribeWorldTemplateRequestBody();
    $request->requestBody->template = 'quod';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->describeWorldTemplate($request);

    if ($response->describeWorldTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorldTemplateBody

Gets the world template body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorldTemplateBodyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorldTemplateBodyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorldTemplateBodyRequest();
    $request->requestBody = new GetWorldTemplateBodyRequestBody();
    $request->requestBody->generationJob = 'ipsum';
    $request->requestBody->template = 'quisquam';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->getWorldTemplateBody($request);

    if ($response->getWorldTemplateBodyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listDeploymentJobs~~

<p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentJobsRequest();
    $request->requestBody = new ListDeploymentJobsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 518201;
    $request->requestBody->nextToken = 'nihil';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->maxResults = 'deserunt';
    $request->nextToken = 'quam';

    $response = $sdk->sdk->listDeploymentJobs($request);

    if ($response->listDeploymentJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listFleets~~

<p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFleetsRequest();
    $request->requestBody = new ListFleetsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 277628;
    $request->requestBody->nextToken = 'qui';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->maxResults = 'incidunt';
    $request->nextToken = 'aspernatur';

    $response = $sdk->sdk->listFleets($request);

    if ($response->listFleetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRobotApplications

Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRobotApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRobotApplicationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRobotApplicationsRequest();
    $request->requestBody = new ListRobotApplicationsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 716860;
    $request->requestBody->nextToken = 'facilis';
    $request->requestBody->versionQualifier = 'aliquid';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';
    $request->maxResults = 'odio';
    $request->nextToken = 'sunt';

    $response = $sdk->sdk->listRobotApplications($request);

    if ($response->listRobotApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listRobots~~

<p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRobotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRobotsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRobotsRequest();
    $request->requestBody = new ListRobotsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 722081;
    $request->requestBody->nextToken = 'hic';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->maxResults = 'veritatis';
    $request->nextToken = 'nobis';

    $response = $sdk->sdk->listRobots($request);

    if ($response->listRobotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSimulationApplications

Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSimulationApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSimulationApplicationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSimulationApplicationsRequest();
    $request->requestBody = new ListSimulationApplicationsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 731694;
    $request->requestBody->nextToken = 'cupiditate';
    $request->requestBody->versionQualifier = 'aperiam';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';
    $request->maxResults = 'quae';
    $request->nextToken = 'aut';

    $response = $sdk->sdk->listSimulationApplications($request);

    if ($response->listSimulationApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSimulationJobBatches

Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSimulationJobBatchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSimulationJobBatchesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSimulationJobBatchesRequest();
    $request->requestBody = new ListSimulationJobBatchesRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 929530;
    $request->requestBody->nextToken = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->maxResults = 'qui';
    $request->nextToken = 'quae';

    $response = $sdk->sdk->listSimulationJobBatches($request);

    if ($response->listSimulationJobBatchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSimulationJobs

Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSimulationJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSimulationJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSimulationJobsRequest();
    $request->requestBody = new ListSimulationJobsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 485628;
    $request->requestBody->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'delectus';
    $request->maxResults = 'voluptate';
    $request->nextToken = 'consectetur';

    $response = $sdk->sdk->listSimulationJobs($request);

    if ($response->listSimulationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags on a AWS RoboMaker resource.

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
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->resourceArn = 'similique';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorldExportJobs

Lists world export jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorldExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorldExportJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorldExportJobsRequest();
    $request->requestBody = new ListWorldExportJobsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 874288;
    $request->requestBody->nextToken = 'ducimus';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aut';
    $request->maxResults = 'voluptatibus';
    $request->nextToken = 'exercitationem';

    $response = $sdk->sdk->listWorldExportJobs($request);

    if ($response->listWorldExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorldGenerationJobs

Lists world generator jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorldGenerationJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorldGenerationJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorldGenerationJobsRequest();
    $request->requestBody = new ListWorldGenerationJobsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 148141;
    $request->requestBody->nextToken = 'porro';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';
    $request->maxResults = 'tempora';
    $request->nextToken = 'ipsam';

    $response = $sdk->sdk->listWorldGenerationJobs($request);

    if ($response->listWorldGenerationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorldTemplates

Lists world templates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorldTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorldTemplatesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorldTemplatesRequest();
    $request->requestBody = new ListWorldTemplatesRequestBody();
    $request->requestBody->maxResults = 410492;
    $request->requestBody->nextToken = 'aspernatur';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'dicta';
    $request->maxResults = 'dolor';
    $request->nextToken = 'maiores';

    $response = $sdk->sdk->listWorldTemplates($request);

    if ($response->listWorldTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorlds

Lists worlds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorldsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorldsRequest();
    $request->requestBody = new ListWorldsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 406120;
    $request->requestBody->nextToken = 'nulla';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';
    $request->maxResults = 'impedit';
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->listWorlds($request);

    if ($response->listWorldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~registerRobot~~

<p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterRobotRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterRobotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterRobotRequest();
    $request->requestBody = new RegisterRobotRequestBody();
    $request->requestBody->fleet = 'veniam';
    $request->requestBody->robot = 'aliquid';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->registerRobot($request);

    if ($response->registerRobotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restartSimulationJob

Restarts a running simulation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestartSimulationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestartSimulationJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestartSimulationJobRequest();
    $request->requestBody = new RestartSimulationJobRequestBody();
    $request->requestBody->job = 'minima';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->restartSimulationJob($request);

    if ($response->restartSimulationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSimulationJobBatch

Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSimulationJobBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartSimulationJobBatchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartSimulationJobBatchRequestBodyBatchPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SimulationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\Compute;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FailureBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\OutputLocation;
use \OpenAPI\OpenAPI\Models\Shared\RobotApplicationConfig;
use \OpenAPI\OpenAPI\Models\Shared\LaunchConfig;
use \OpenAPI\OpenAPI\Models\Shared\PortForwardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\Tool;
use \OpenAPI\OpenAPI\Models\Shared\ExitBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\UploadConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UploadBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimulationApplicationConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorldConfig;
use \OpenAPI\OpenAPI\Models\Shared\VPCConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSimulationJobBatchRequest();
    $request->requestBody = new StartSimulationJobBatchRequestBody();
    $request->requestBody->batchPolicy = new StartSimulationJobBatchRequestBodyBatchPolicy();
    $request->requestBody->batchPolicy->maxConcurrency = 304582;
    $request->requestBody->batchPolicy->timeoutInSeconds = 146946;
    $request->requestBody->clientRequestToken = 'accusamus';
    $request->requestBody->createSimulationJobRequests = [
        new SimulationJobRequest(),
    ];
    $request->requestBody->tags = [
        'et' => 'dolorum',
        'laborum' => 'placeat',
    ];
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->startSimulationJobBatch($request);

    if ($response->startSimulationJobBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~syncDeploymentJob~~

<p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SyncDeploymentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\SyncDeploymentJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SyncDeploymentJobRequest();
    $request->requestBody = new SyncDeploymentJobRequestBody();
    $request->requestBody->clientRequestToken = 'voluptas';
    $request->requestBody->fleet = 'libero';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->syncDeploymentJob($request);

    if ($response->syncDeploymentJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>

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
        'odio' => 'eius',
        'esse' => 'esse',
    ];
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'eum';
    $request->resourceArn = 'suscipit';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>

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
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'id';
    $request->resourceArn = 'quidem';
    $request->tagKeys = [
        'quo',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRobotApplication

Updates a robot application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRobotApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRobotApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRobotApplicationRequestBodyEnvironment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRobotApplicationRequestBodyRobotSoftwareSuite;
use \OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuiteVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRobotApplicationRequest();
    $request->requestBody = new UpdateRobotApplicationRequestBody();
    $request->requestBody->application = 'illum';
    $request->requestBody->currentRevisionId = 'quo';
    $request->requestBody->environment = new UpdateRobotApplicationRequestBodyEnvironment();
    $request->requestBody->environment->uri = 'https://fabulous-coinsurance.info';
    $request->requestBody->robotSoftwareSuite = new UpdateRobotApplicationRequestBodyRobotSoftwareSuite();
    $request->requestBody->robotSoftwareSuite->name = RobotSoftwareSuiteTypeEnum::ROS;
    $request->requestBody->robotSoftwareSuite->version = RobotSoftwareSuiteVersionTypeEnum::DASHING;
    $request->requestBody->sources = [
        new SourceConfig(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->updateRobotApplication($request);

    if ($response->updateRobotApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSimulationApplication

Updates a simulation application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimulationApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimulationApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimulationApplicationRequestBodyEnvironment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimulationApplicationRequestBodyRenderingEngine;
use \OpenAPI\OpenAPI\Models\Shared\RenderingEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimulationApplicationRequestBodyRobotSoftwareSuite;
use \OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuiteVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimulationApplicationRequestBodySimulationSoftwareSuite;
use \OpenAPI\OpenAPI\Models\Shared\SimulationSoftwareSuiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSimulationApplicationRequest();
    $request->requestBody = new UpdateSimulationApplicationRequestBody();
    $request->requestBody->application = 'recusandae';
    $request->requestBody->currentRevisionId = 'aperiam';
    $request->requestBody->environment = new UpdateSimulationApplicationRequestBodyEnvironment();
    $request->requestBody->environment->uri = 'https://starchy-kiosk.com';
    $request->requestBody->renderingEngine = new UpdateSimulationApplicationRequestBodyRenderingEngine();
    $request->requestBody->renderingEngine->name = RenderingEngineTypeEnum::OGRE;
    $request->requestBody->renderingEngine->version = 'nihil';
    $request->requestBody->robotSoftwareSuite = new UpdateSimulationApplicationRequestBodyRobotSoftwareSuite();
    $request->requestBody->robotSoftwareSuite->name = RobotSoftwareSuiteTypeEnum::ROS2;
    $request->requestBody->robotSoftwareSuite->version = RobotSoftwareSuiteVersionTypeEnum::FOXY;
    $request->requestBody->simulationSoftwareSuite = new UpdateSimulationApplicationRequestBodySimulationSoftwareSuite();
    $request->requestBody->simulationSoftwareSuite->name = SimulationSoftwareSuiteTypeEnum::GAZEBO;
    $request->requestBody->simulationSoftwareSuite->version = 'odio';
    $request->requestBody->sources = [
        new SourceConfig(),
        new SourceConfig(),
        new SourceConfig(),
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->updateSimulationApplication($request);

    if ($response->updateSimulationApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorldTemplate

Updates a world template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorldTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorldTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorldTemplateRequestBodyTemplateLocation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorldTemplateRequest();
    $request->requestBody = new UpdateWorldTemplateRequestBody();
    $request->requestBody->name = 'Dianne Langosh';
    $request->requestBody->template = 'fugit';
    $request->requestBody->templateBody = 'fuga';
    $request->requestBody->templateLocation = new UpdateWorldTemplateRequestBodyTemplateLocation();
    $request->requestBody->templateLocation->s3Bucket = 'mollitia';
    $request->requestBody->templateLocation->s3Key = 'incidunt';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->updateWorldTemplate($request);

    if ($response->updateWorldTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
