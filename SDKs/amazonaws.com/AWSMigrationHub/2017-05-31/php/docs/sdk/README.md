# SDK

## Overview

<p>The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub.</p> <p>Remember that you must set your AWS Migration Hub home region before you call any of these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you must make the API calls while in your home region.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/mgh/>
### Available Operations

* [associateCreatedArtifact](#associatecreatedartifact) - <p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>
* [associateDiscoveredResource](#associatediscoveredresource) - Associates a discovered resource ID from Application Discovery Service with a migration task.
* [createProgressUpdateStream](#createprogressupdatestream) - Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
* [deleteProgressUpdateStream](#deleteprogressupdatestream) - <p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>
* [describeApplicationState](#describeapplicationstate) - Gets the migration status of an application.
* [describeMigrationTask](#describemigrationtask) - Retrieves a list of all attributes associated with a specific migration task.
* [disassociateCreatedArtifact](#disassociatecreatedartifact) - <p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>
* [disassociateDiscoveredResource](#disassociatediscoveredresource) - Disassociate an Application Discovery Service discovered resource from a migration task.
* [importMigrationTask](#importmigrationtask) - <p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>
* [listApplicationStates](#listapplicationstates) - Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.
* [listCreatedArtifacts](#listcreatedartifacts) - <p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>
* [listDiscoveredResources](#listdiscoveredresources) - Lists discovered resources associated with the given <code>MigrationTask</code>.
* [listMigrationTasks](#listmigrationtasks) - <p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>
* [listProgressUpdateStreams](#listprogressupdatestreams) - Lists progress update streams associated with the user account making this call.
* [notifyApplicationState](#notifyapplicationstate) - Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.
* [notifyMigrationTaskState](#notifymigrationtaskstate) - <p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>
* [putResourceAttributes](#putresourceattributes) - <p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>

## associateCreatedArtifact

<p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCreatedArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateCreatedArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatedArtifact;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCreatedArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateCreatedArtifactRequest();
    $request->associateCreatedArtifactRequest = new AssociateCreatedArtifactRequest();
    $request->associateCreatedArtifactRequest->createdArtifact = new CreatedArtifact();
    $request->associateCreatedArtifactRequest->createdArtifact->description = 'ipsa';
    $request->associateCreatedArtifactRequest->createdArtifact->name = 'Ricky Hoppe';
    $request->associateCreatedArtifactRequest->dryRun = false;
    $request->associateCreatedArtifactRequest->migrationTaskName = 'placeat';
    $request->associateCreatedArtifactRequest->progressUpdateStream = 'voluptatum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = AssociateCreatedArtifactXAmzTargetEnum::AWS_MIGRATION_HUB_ASSOCIATE_CREATED_ARTIFACT;

    $response = $sdk->sdk->associateCreatedArtifact($request);

    if ($response->associateCreatedArtifactResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateDiscoveredResource

Associates a discovered resource ID from Application Discovery Service with a migration task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDiscoveredResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateDiscoveredResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveredResource;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDiscoveredResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDiscoveredResourceRequest();
    $request->associateDiscoveredResourceRequest = new AssociateDiscoveredResourceRequest();
    $request->associateDiscoveredResourceRequest->discoveredResource = new DiscoveredResource();
    $request->associateDiscoveredResourceRequest->discoveredResource->configurationId = 'veritatis';
    $request->associateDiscoveredResourceRequest->discoveredResource->description = 'deserunt';
    $request->associateDiscoveredResourceRequest->dryRun = false;
    $request->associateDiscoveredResourceRequest->migrationTaskName = 'perferendis';
    $request->associateDiscoveredResourceRequest->progressUpdateStream = 'ipsam';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = AssociateDiscoveredResourceXAmzTargetEnum::AWS_MIGRATION_HUB_ASSOCIATE_DISCOVERED_RESOURCE;

    $response = $sdk->sdk->associateDiscoveredResource($request);

    if ($response->associateDiscoveredResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProgressUpdateStream

Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProgressUpdateStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProgressUpdateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProgressUpdateStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProgressUpdateStreamRequest();
    $request->createProgressUpdateStreamRequest = new CreateProgressUpdateStreamRequest();
    $request->createProgressUpdateStreamRequest->dryRun = false;
    $request->createProgressUpdateStreamRequest->progressUpdateStreamName = 'molestiae';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CreateProgressUpdateStreamXAmzTargetEnum::AWS_MIGRATION_HUB_CREATE_PROGRESS_UPDATE_STREAM;

    $response = $sdk->sdk->createProgressUpdateStream($request);

    if ($response->createProgressUpdateStreamResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProgressUpdateStream

<p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProgressUpdateStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProgressUpdateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProgressUpdateStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProgressUpdateStreamRequest();
    $request->deleteProgressUpdateStreamRequest = new DeleteProgressUpdateStreamRequest();
    $request->deleteProgressUpdateStreamRequest->dryRun = false;
    $request->deleteProgressUpdateStreamRequest->progressUpdateStreamName = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DeleteProgressUpdateStreamXAmzTargetEnum::AWS_MIGRATION_HUB_DELETE_PROGRESS_UPDATE_STREAM;

    $response = $sdk->sdk->deleteProgressUpdateStream($request);

    if ($response->deleteProgressUpdateStreamResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplicationState

Gets the migration status of an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApplicationStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApplicationStateRequest();
    $request->describeApplicationStateRequest = new DescribeApplicationStateRequest();
    $request->describeApplicationStateRequest->applicationId = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = DescribeApplicationStateXAmzTargetEnum::AWS_MIGRATION_HUB_DESCRIBE_APPLICATION_STATE;

    $response = $sdk->sdk->describeApplicationState($request);

    if ($response->describeApplicationStateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMigrationTask

Retrieves a list of all attributes associated with a specific migration task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMigrationTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMigrationTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMigrationTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMigrationTaskRequest();
    $request->describeMigrationTaskRequest = new DescribeMigrationTaskRequest();
    $request->describeMigrationTaskRequest->migrationTaskName = 'ipsum';
    $request->describeMigrationTaskRequest->progressUpdateStream = 'excepturi';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DescribeMigrationTaskXAmzTargetEnum::AWS_MIGRATION_HUB_DESCRIBE_MIGRATION_TASK;

    $response = $sdk->sdk->describeMigrationTask($request);

    if ($response->describeMigrationTaskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateCreatedArtifact

<p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateCreatedArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateCreatedArtifactRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateCreatedArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateCreatedArtifactRequest();
    $request->disassociateCreatedArtifactRequest = new DisassociateCreatedArtifactRequest();
    $request->disassociateCreatedArtifactRequest->createdArtifactName = 'natus';
    $request->disassociateCreatedArtifactRequest->dryRun = false;
    $request->disassociateCreatedArtifactRequest->migrationTaskName = 'laboriosam';
    $request->disassociateCreatedArtifactRequest->progressUpdateStream = 'hic';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DisassociateCreatedArtifactXAmzTargetEnum::AWS_MIGRATION_HUB_DISASSOCIATE_CREATED_ARTIFACT;

    $response = $sdk->sdk->disassociateCreatedArtifact($request);

    if ($response->disassociateCreatedArtifactResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateDiscoveredResource

Disassociate an Application Discovery Service discovered resource from a migration task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDiscoveredResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateDiscoveredResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDiscoveredResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateDiscoveredResourceRequest();
    $request->disassociateDiscoveredResourceRequest = new DisassociateDiscoveredResourceRequest();
    $request->disassociateDiscoveredResourceRequest->configurationId = 'quidem';
    $request->disassociateDiscoveredResourceRequest->dryRun = false;
    $request->disassociateDiscoveredResourceRequest->migrationTaskName = 'architecto';
    $request->disassociateDiscoveredResourceRequest->progressUpdateStream = 'ipsa';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DisassociateDiscoveredResourceXAmzTargetEnum::AWS_MIGRATION_HUB_DISASSOCIATE_DISCOVERED_RESOURCE;

    $response = $sdk->sdk->disassociateDiscoveredResource($request);

    if ($response->disassociateDiscoveredResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importMigrationTask

<p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportMigrationTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportMigrationTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportMigrationTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportMigrationTaskRequest();
    $request->importMigrationTaskRequest = new ImportMigrationTaskRequest();
    $request->importMigrationTaskRequest->dryRun = false;
    $request->importMigrationTaskRequest->migrationTaskName = 'explicabo';
    $request->importMigrationTaskRequest->progressUpdateStream = 'nobis';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = ImportMigrationTaskXAmzTargetEnum::AWS_MIGRATION_HUB_IMPORT_MIGRATION_TASK;

    $response = $sdk->sdk->importMigrationTask($request);

    if ($response->importMigrationTaskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplicationStates

Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationStatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApplicationStatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationStatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationStatesRequest();
    $request->listApplicationStatesRequest = new ListApplicationStatesRequest();
    $request->listApplicationStatesRequest->applicationIds = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->listApplicationStatesRequest->maxResults = 652790;
    $request->listApplicationStatesRequest->nextToken = 'dolorem';
    $request->maxResults = 'culpa';
    $request->nextToken = 'consequuntur';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = ListApplicationStatesXAmzTargetEnum::AWS_MIGRATION_HUB_LIST_APPLICATION_STATES;

    $response = $sdk->sdk->listApplicationStates($request);

    if ($response->listApplicationStatesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCreatedArtifacts

<p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCreatedArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCreatedArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCreatedArtifactsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCreatedArtifactsRequest();
    $request->listCreatedArtifactsRequest = new ListCreatedArtifactsRequest();
    $request->listCreatedArtifactsRequest->maxResults = 244425;
    $request->listCreatedArtifactsRequest->migrationTaskName = 'error';
    $request->listCreatedArtifactsRequest->nextToken = 'quia';
    $request->listCreatedArtifactsRequest->progressUpdateStream = 'quis';
    $request->maxResults = 'vitae';
    $request->nextToken = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ListCreatedArtifactsXAmzTargetEnum::AWS_MIGRATION_HUB_LIST_CREATED_ARTIFACTS;

    $response = $sdk->sdk->listCreatedArtifacts($request);

    if ($response->listCreatedArtifactsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDiscoveredResources

Lists discovered resources associated with the given <code>MigrationTask</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDiscoveredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDiscoveredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDiscoveredResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDiscoveredResourcesRequest();
    $request->listDiscoveredResourcesRequest = new ListDiscoveredResourcesRequest();
    $request->listDiscoveredResourcesRequest->maxResults = 662527;
    $request->listDiscoveredResourcesRequest->migrationTaskName = 'possimus';
    $request->listDiscoveredResourcesRequest->nextToken = 'aut';
    $request->listDiscoveredResourcesRequest->progressUpdateStream = 'quasi';
    $request->maxResults = 'error';
    $request->nextToken = 'temporibus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = ListDiscoveredResourcesXAmzTargetEnum::AWS_MIGRATION_HUB_LIST_DISCOVERED_RESOURCES;

    $response = $sdk->sdk->listDiscoveredResources($request);

    if ($response->listDiscoveredResourcesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMigrationTasks

<p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMigrationTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMigrationTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMigrationTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMigrationTasksRequest();
    $request->listMigrationTasksRequest = new ListMigrationTasksRequest();
    $request->listMigrationTasksRequest->maxResults = 976762;
    $request->listMigrationTasksRequest->nextToken = 'ipsa';
    $request->listMigrationTasksRequest->resourceName = 'omnis';
    $request->maxResults = 'voluptate';
    $request->nextToken = 'cum';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = ListMigrationTasksXAmzTargetEnum::AWS_MIGRATION_HUB_LIST_MIGRATION_TASKS;

    $response = $sdk->sdk->listMigrationTasks($request);

    if ($response->listMigrationTasksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProgressUpdateStreams

Lists progress update streams associated with the user account making this call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProgressUpdateStreamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProgressUpdateStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProgressUpdateStreamsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProgressUpdateStreamsRequest();
    $request->listProgressUpdateStreamsRequest = new ListProgressUpdateStreamsRequest();
    $request->listProgressUpdateStreamsRequest->maxResults = 296140;
    $request->listProgressUpdateStreamsRequest->nextToken = 'iusto';
    $request->maxResults = 'dicta';
    $request->nextToken = 'harum';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = ListProgressUpdateStreamsXAmzTargetEnum::AWS_MIGRATION_HUB_LIST_PROGRESS_UPDATE_STREAMS;

    $response = $sdk->sdk->listProgressUpdateStreams($request);

    if ($response->listProgressUpdateStreamsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyApplicationState

Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyApplicationStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotifyApplicationStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotifyApplicationStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyApplicationStateRequest();
    $request->notifyApplicationStateRequest = new NotifyApplicationStateRequest();
    $request->notifyApplicationStateRequest->applicationId = 'molestias';
    $request->notifyApplicationStateRequest->dryRun = false;
    $request->notifyApplicationStateRequest->status = ApplicationStatusEnum::IN_PROGRESS;
    $request->notifyApplicationStateRequest->updateDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T09:33:50.291Z');
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = NotifyApplicationStateXAmzTargetEnum::AWS_MIGRATION_HUB_NOTIFY_APPLICATION_STATE;

    $response = $sdk->sdk->notifyApplicationState($request);

    if ($response->notifyApplicationStateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyMigrationTaskState

<p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyMigrationTaskStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotifyMigrationTaskStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\StatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotifyMigrationTaskStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyMigrationTaskStateRequest();
    $request->notifyMigrationTaskStateRequest = new NotifyMigrationTaskStateRequest();
    $request->notifyMigrationTaskStateRequest->dryRun = false;
    $request->notifyMigrationTaskStateRequest->migrationTaskName = 'itaque';
    $request->notifyMigrationTaskStateRequest->nextUpdateSeconds = 277718;
    $request->notifyMigrationTaskStateRequest->progressUpdateStream = 'enim';
    $request->notifyMigrationTaskStateRequest->task = new Task();
    $request->notifyMigrationTaskStateRequest->task->progressPercent = 9356;
    $request->notifyMigrationTaskStateRequest->task->status = StatusEnum::FAILED;
    $request->notifyMigrationTaskStateRequest->task->statusDetail = 'quibusdam';
    $request->notifyMigrationTaskStateRequest->updateDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T18:45:16.013Z');
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = NotifyMigrationTaskStateXAmzTargetEnum::AWS_MIGRATION_HUB_NOTIFY_MIGRATION_TASK_STATE;

    $response = $sdk->sdk->notifyMigrationTaskState($request);

    if ($response->notifyMigrationTaskStateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourceAttributes

<p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourceAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourceAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ResourceAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutResourceAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourceAttributesRequest();
    $request->putResourceAttributesRequest = new PutResourceAttributesRequest();
    $request->putResourceAttributesRequest->dryRun = false;
    $request->putResourceAttributesRequest->migrationTaskName = 'quos';
    $request->putResourceAttributesRequest->progressUpdateStream = 'perferendis';
    $request->putResourceAttributesRequest->resourceAttributeList = [
        new ResourceAttribute(),
    ];
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = PutResourceAttributesXAmzTargetEnum::AWS_MIGRATION_HUB_PUT_RESOURCE_ATTRIBUTES;

    $response = $sdk->sdk->putResourceAttributes($request);

    if ($response->putResourceAttributesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
