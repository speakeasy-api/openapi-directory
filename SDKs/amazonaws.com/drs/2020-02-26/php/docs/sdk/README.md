# SDK

## Overview

AWS Elastic Disaster Recovery Service.

Amazon Web Services documentation
<https://docs.aws.amazon.com/drs/>
### Available Operations

* [createExtendedSourceServer](#createextendedsourceserver) - Create an extended source server in the target Account based on the source server in staging account.
* [createLaunchConfigurationTemplate](#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [createReplicationConfigurationTemplate](#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [deleteJob](#deletejob) - Deletes a single Job by ID.
* [deleteLaunchConfigurationTemplate](#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [deleteRecoveryInstance](#deleterecoveryinstance) - Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
* [deleteReplicationConfigurationTemplate](#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [deleteSourceServer](#deletesourceserver) - Deletes a single Source Server by ID. The Source Server must be disconnected first.
* [describeJobLogItems](#describejoblogitems) - Retrieves a detailed Job log with pagination.
* [describeJobs](#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [describeLaunchConfigurationTemplates](#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [describeRecoveryInstances](#describerecoveryinstances) - Lists all Recovery Instances or multiple Recovery Instances by ID.
* [describeRecoverySnapshots](#describerecoverysnapshots) - Lists all Recovery Snapshots for a single Source Server.
* [describeReplicationConfigurationTemplates](#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [describeSourceServers](#describesourceservers) - Lists all Source Servers or multiple Source Servers filtered by ID.
* [disconnectRecoveryInstance](#disconnectrecoveryinstance) - Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [disconnectSourceServer](#disconnectsourceserver) - Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [getFailbackReplicationConfiguration](#getfailbackreplicationconfiguration) - Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
* [getLaunchConfiguration](#getlaunchconfiguration) - Gets a LaunchConfiguration, filtered by Source Server IDs.
* [getReplicationConfiguration](#getreplicationconfiguration) - Gets a ReplicationConfiguration, filtered by Source Server ID.
* [initializeService](#initializeservice) - Initialize Elastic Disaster Recovery.
* [listExtensibleSourceServers](#listextensiblesourceservers) - Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 
* [listStagingAccounts](#liststagingaccounts) - Returns an array of staging accounts for existing extended source servers.
* [listTagsForResource](#listtagsforresource) - List all tags for your Elastic Disaster Recovery resources.
* [~~retryDataReplication~~](#retrydatareplication) - WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.  :warning: **Deprecated**
* [reverseReplication](#reversereplication) - Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 
* [startFailbackLaunch](#startfailbacklaunch) - Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
* [startRecovery](#startrecovery) - Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
* [startReplication](#startreplication) - Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
* [stopFailback](#stopfailback) - Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
* [stopReplication](#stopreplication) - Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
* [tagResource](#tagresource) - Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [terminateRecoveryInstances](#terminaterecoveryinstances) - Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
* [untagResource](#untagresource) - Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
* [updateFailbackReplicationConfiguration](#updatefailbackreplicationconfiguration) - Allows you to update the failback replication configuration of a Recovery Instance by ID.
* [updateLaunchConfiguration](#updatelaunchconfiguration) - Updates a LaunchConfiguration by Source Server ID.
* [updateLaunchConfigurationTemplate](#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [updateReplicationConfiguration](#updatereplicationconfiguration) - Allows you to update a ReplicationConfiguration by Source Server ID.
* [updateReplicationConfigurationTemplate](#updatereplicationconfigurationtemplate) - Updates a ReplicationConfigurationTemplate by ID.

## createExtendedSourceServer

Create an extended source server in the target Account based on the source server in staging account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExtendedSourceServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExtendedSourceServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExtendedSourceServerRequest();
    $request->requestBody = new CreateExtendedSourceServerRequestBody();
    $request->requestBody->sourceServerArn = 'ipsa';
    $request->requestBody->tags = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ];
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->createExtendedSourceServer($request);

    if ($response->createExtendedSourceServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLaunchConfigurationTemplate

Creates a new Launch Configuration Template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyLicensing;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLaunchConfigurationTemplateRequest();
    $request->requestBody = new CreateLaunchConfigurationTemplateRequestBody();
    $request->requestBody->copyPrivateIp = false;
    $request->requestBody->copyTags = false;
    $request->requestBody->launchDisposition = CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum::STOPPED;
    $request->requestBody->licensing = new CreateLaunchConfigurationTemplateRequestBodyLicensing();
    $request->requestBody->licensing->osByol = false;
    $request->requestBody->tags = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->requestBody->targetInstanceTypeRightSizingMethod = CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum::BASIC;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->createLaunchConfigurationTemplate($request);

    if ($response->createLaunchConfigurationTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReplicationConfigurationTemplate

Creates a new ReplicationConfigurationTemplate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationConfigurationTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PITPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\PITPolicyRuleUnitsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplicationConfigurationTemplateRequest();
    $request->requestBody = new CreateReplicationConfigurationTemplateRequestBody();
    $request->requestBody->associateDefaultSecurityGroup = false;
    $request->requestBody->autoReplicateNewDisks = false;
    $request->requestBody->bandwidthThrottling = 780529;
    $request->requestBody->createPublicIP = false;
    $request->requestBody->dataPlaneRouting = CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum::PUBLIC_IP;
    $request->requestBody->defaultLargeStagingDiskType = CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum::GP2;
    $request->requestBody->ebsEncryption = CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum::CUSTOM;
    $request->requestBody->ebsEncryptionKeyArn = 'officia';
    $request->requestBody->pitPolicy = [
        new PITPolicyRule(),
        new PITPolicyRule(),
        new PITPolicyRule(),
    ];
    $request->requestBody->replicationServerInstanceType = 'fugit';
    $request->requestBody->replicationServersSecurityGroupsIDs = [
        'hic',
        'optio',
        'totam',
    ];
    $request->requestBody->stagingAreaSubnetId = 'beatae';
    $request->requestBody->stagingAreaTags = [
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->requestBody->tags = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->requestBody->useDedicatedReplicationServer = false;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->createReplicationConfigurationTemplate($request);

    if ($response->replicationConfigurationTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJob

Deletes a single Job by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobRequest();
    $request->requestBody = new DeleteJobRequestBody();
    $request->requestBody->jobID = 'saepe';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->deleteJob($request);

    if ($response->deleteJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLaunchConfigurationTemplate

Deletes a single Launch Configuration Template by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLaunchConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLaunchConfigurationTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLaunchConfigurationTemplateRequest();
    $request->requestBody = new DeleteLaunchConfigurationTemplateRequestBody();
    $request->requestBody->launchConfigurationTemplateID = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->deleteLaunchConfigurationTemplate($request);

    if ($response->deleteLaunchConfigurationTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecoveryInstance

Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecoveryInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecoveryInstanceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecoveryInstanceRequest();
    $request->requestBody = new DeleteRecoveryInstanceRequestBody();
    $request->requestBody->recoveryInstanceID = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->deleteRecoveryInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReplicationConfigurationTemplate

Deletes a single Replication Configuration Template by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationConfigurationTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReplicationConfigurationTemplateRequest();
    $request->requestBody = new DeleteReplicationConfigurationTemplateRequestBody();
    $request->requestBody->replicationConfigurationTemplateID = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->deleteReplicationConfigurationTemplate($request);

    if ($response->deleteReplicationConfigurationTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSourceServer

Deletes a single Source Server by ID. The Source Server must be disconnected first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSourceServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSourceServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSourceServerRequest();
    $request->requestBody = new DeleteSourceServerRequestBody();
    $request->requestBody->sourceServerID = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->deleteSourceServer($request);

    if ($response->deleteSourceServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobLogItems

Retrieves a detailed Job log with pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobLogItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobLogItemsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobLogItemsRequest();
    $request->requestBody = new DescribeJobLogItemsRequestBody();
    $request->requestBody->jobID = 'molestiae';
    $request->requestBody->maxResults = 244425;
    $request->requestBody->nextToken = 'error';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->maxResults = 'quo';
    $request->nextToken = 'sequi';

    $response = $sdk->sdk->describeJobLogItems($request);

    if ($response->describeJobLogItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobs

Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobsRequest();
    $request->requestBody = new DescribeJobsRequestBody();
    $request->requestBody->filters = new DescribeJobsRequestBodyFilters();
    $request->requestBody->filters->fromDate = 'tenetur';
    $request->requestBody->filters->jobIDs = [
        'id',
        'possimus',
    ];
    $request->requestBody->filters->toDate = 'aut';
    $request->requestBody->maxResults = 97101;
    $request->requestBody->nextToken = 'error';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->maxResults = 'praesentium';
    $request->nextToken = 'voluptatibus';

    $response = $sdk->sdk->describeJobs($request);

    if ($response->describeJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLaunchConfigurationTemplates

Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLaunchConfigurationTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLaunchConfigurationTemplatesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLaunchConfigurationTemplatesRequest();
    $request->requestBody = new DescribeLaunchConfigurationTemplatesRequestBody();
    $request->requestBody->launchConfigurationTemplateIDs = [
        'omnis',
    ];
    $request->requestBody->maxResults = 451159;
    $request->requestBody->nextToken = 'cum';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->maxResults = 'dolore';
    $request->nextToken = 'iusto';

    $response = $sdk->sdk->describeLaunchConfigurationTemplates($request);

    if ($response->describeLaunchConfigurationTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecoveryInstances

Lists all Recovery Instances or multiple Recovery Instances by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecoveryInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecoveryInstancesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecoveryInstancesRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecoveryInstancesRequest();
    $request->requestBody = new DescribeRecoveryInstancesRequestBody();
    $request->requestBody->filters = new DescribeRecoveryInstancesRequestBodyFilters();
    $request->requestBody->filters->recoveryInstanceIDs = [
        'harum',
    ];
    $request->requestBody->filters->sourceServerIDs = [
        'accusamus',
        'commodi',
    ];
    $request->requestBody->maxResults = 918236;
    $request->requestBody->nextToken = 'quae';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->maxResults = 'rem';
    $request->nextToken = 'voluptates';

    $response = $sdk->sdk->describeRecoveryInstances($request);

    if ($response->describeRecoveryInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecoverySnapshots

Lists all Recovery Snapshots for a single Source Server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecoverySnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecoverySnapshotsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecoverySnapshotsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecoverySnapshotsRequestBodyOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecoverySnapshotsRequest();
    $request->requestBody = new DescribeRecoverySnapshotsRequestBody();
    $request->requestBody->filters = new DescribeRecoverySnapshotsRequestBodyFilters();
    $request->requestBody->filters->fromDateTime = 'quasi';
    $request->requestBody->filters->toDateTime = 'repudiandae';
    $request->requestBody->maxResults = 575947;
    $request->requestBody->nextToken = 'veritatis';
    $request->requestBody->order = DescribeRecoverySnapshotsRequestBodyOrderEnum::DESC;
    $request->requestBody->sourceServerID = 'incidunt';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'labore';

    $response = $sdk->sdk->describeRecoverySnapshots($request);

    if ($response->describeRecoverySnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReplicationConfigurationTemplates

Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationConfigurationTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReplicationConfigurationTemplatesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReplicationConfigurationTemplatesRequest();
    $request->requestBody = new DescribeReplicationConfigurationTemplatesRequestBody();
    $request->requestBody->maxResults = 264730;
    $request->requestBody->nextToken = 'qui';
    $request->requestBody->replicationConfigurationTemplateIDs = [
        'cupiditate',
        'quos',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->maxResults = 'excepturi';
    $request->nextToken = 'tempora';

    $response = $sdk->sdk->describeReplicationConfigurationTemplates($request);

    if ($response->describeReplicationConfigurationTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSourceServers

Lists all Source Servers or multiple Source Servers filtered by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSourceServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSourceServersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSourceServersRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSourceServersRequest();
    $request->requestBody = new DescribeSourceServersRequestBody();
    $request->requestBody->filters = new DescribeSourceServersRequestBodyFilters();
    $request->requestBody->filters->hardwareId = 'facilis';
    $request->requestBody->filters->sourceServerIDs = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->requestBody->filters->stagingAccountIDs = [
        'eligendi',
    ];
    $request->requestBody->maxResults = 576157;
    $request->requestBody->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';
    $request->maxResults = 'dolorum';
    $request->nextToken = 'in';

    $response = $sdk->sdk->describeSourceServers($request);

    if ($response->describeSourceServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectRecoveryInstance

Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectRecoveryInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectRecoveryInstanceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectRecoveryInstanceRequest();
    $request->requestBody = new DisconnectRecoveryInstanceRequestBody();
    $request->requestBody->recoveryInstanceID = 'in';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->disconnectRecoveryInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectSourceServer

Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectSourceServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectSourceServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectSourceServerRequest();
    $request->requestBody = new DisconnectSourceServerRequestBody();
    $request->requestBody->sourceServerID = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->disconnectSourceServer($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailbackReplicationConfiguration

Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFailbackReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFailbackReplicationConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFailbackReplicationConfigurationRequest();
    $request->requestBody = new GetFailbackReplicationConfigurationRequestBody();
    $request->requestBody->recoveryInstanceID = 'delectus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getFailbackReplicationConfiguration($request);

    if ($response->getFailbackReplicationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLaunchConfiguration

Gets a LaunchConfiguration, filtered by Source Server IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLaunchConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLaunchConfigurationRequest();
    $request->requestBody = new GetLaunchConfigurationRequestBody();
    $request->requestBody->sourceServerID = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getLaunchConfiguration($request);

    if ($response->launchConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReplicationConfiguration

Gets a ReplicationConfiguration, filtered by Source Server ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReplicationConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReplicationConfigurationRequest();
    $request->requestBody = new GetReplicationConfigurationRequestBody();
    $request->requestBody->sourceServerID = 'nihil';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getReplicationConfiguration($request);

    if ($response->replicationConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initializeService

Initialize Elastic Disaster Recovery.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InitializeServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InitializeServiceRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->initializeService($request);

    if ($response->initializeServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExtensibleSourceServers

Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExtensibleSourceServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExtensibleSourceServersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExtensibleSourceServersRequest();
    $request->requestBody = new ListExtensibleSourceServersRequestBody();
    $request->requestBody->maxResults = 569965;
    $request->requestBody->nextToken = 'ullam';
    $request->requestBody->stagingAccountID = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->maxResults = 'eum';
    $request->nextToken = 'dolor';

    $response = $sdk->sdk->listExtensibleSourceServers($request);

    if ($response->listExtensibleSourceServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStagingAccounts

Returns an array of staging accounts for existing extended source servers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStagingAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStagingAccountsRequest();
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';
    $request->maxResults = 260341;
    $request->nextToken = 'maxime';

    $response = $sdk->sdk->listStagingAccounts($request);

    if ($response->listStagingAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List all tags for your Elastic Disaster Recovery resources.

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
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->resourceArn = 'expedita';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~retryDataReplication~~

WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetryDataReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetryDataReplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetryDataReplicationRequest();
    $request->requestBody = new RetryDataReplicationRequestBody();
    $request->requestBody->sourceServerID = 'nihil';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->retryDataReplication($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reverseReplication

Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReverseReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReverseReplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReverseReplicationRequest();
    $request->requestBody = new ReverseReplicationRequestBody();
    $request->requestBody->recoveryInstanceID = 'praesentium';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->reverseReplication($request);

    if ($response->reverseReplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFailbackLaunch

Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFailbackLaunchRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartFailbackLaunchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFailbackLaunchRequest();
    $request->requestBody = new StartFailbackLaunchRequestBody();
    $request->requestBody->recoveryInstanceIDs = [
        'excepturi',
        'odit',
    ];
    $request->requestBody->tags = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->startFailbackLaunch($request);

    if ($response->startFailbackLaunchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startRecovery

Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRecoveryRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartRecoveryRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StartRecoveryRequestSourceServer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRecoveryRequest();
    $request->requestBody = new StartRecoveryRequestBody();
    $request->requestBody->isDrill = false;
    $request->requestBody->sourceServers = [
        new StartRecoveryRequestSourceServer(),
        new StartRecoveryRequestSourceServer(),
        new StartRecoveryRequestSourceServer(),
        new StartRecoveryRequestSourceServer(),
    ];
    $request->requestBody->tags = [
        'fugiat' => 'amet',
    ];
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->startRecovery($request);

    if ($response->startRecoveryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReplication

Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartReplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReplicationRequest();
    $request->requestBody = new StartReplicationRequestBody();
    $request->requestBody->sourceServerID = 'quis';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->startReplication($request);

    if ($response->startReplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopFailback

Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopFailbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopFailbackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopFailbackRequest();
    $request->requestBody = new StopFailbackRequestBody();
    $request->requestBody->recoveryInstanceID = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->stopFailback($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopReplication

Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopReplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopReplicationRequest();
    $request->requestBody = new StopReplicationRequestBody();
    $request->requestBody->sourceServerID = 'omnis';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->stopReplication($request);

    if ($response->stopReplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.

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
        'occaecati' => 'rerum',
    ];
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->resourceArn = 'pariatur';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateRecoveryInstances

Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateRecoveryInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TerminateRecoveryInstancesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateRecoveryInstancesRequest();
    $request->requestBody = new TerminateRecoveryInstancesRequestBody();
    $request->requestBody->recoveryInstanceIDs = [
        'nobis',
        'libero',
        'delectus',
    ];
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->terminateRecoveryInstances($request);

    if ($response->terminateRecoveryInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.

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
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->resourceArn = 'amet';
    $request->tagKeys = [
        'numquam',
        'veritatis',
        'ipsa',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFailbackReplicationConfiguration

Allows you to update the failback replication configuration of a Recovery Instance by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFailbackReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFailbackReplicationConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFailbackReplicationConfigurationRequest();
    $request->requestBody = new UpdateFailbackReplicationConfigurationRequestBody();
    $request->requestBody->bandwidthThrottling = 56418;
    $request->requestBody->name = 'Viola Hahn';
    $request->requestBody->recoveryInstanceID = 'voluptatibus';
    $request->requestBody->usePrivateIP = false;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->updateFailbackReplicationConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLaunchConfiguration

Updates a LaunchConfiguration by Source Server ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBodyLicensing;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLaunchConfigurationRequest();
    $request->requestBody = new UpdateLaunchConfigurationRequestBody();
    $request->requestBody->copyPrivateIp = false;
    $request->requestBody->copyTags = false;
    $request->requestBody->launchDisposition = UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum::STARTED;
    $request->requestBody->licensing = new UpdateLaunchConfigurationRequestBodyLicensing();
    $request->requestBody->licensing->osByol = false;
    $request->requestBody->name = 'Ted Kling';
    $request->requestBody->sourceServerID = 'omnis';
    $request->requestBody->targetInstanceTypeRightSizingMethod = UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum::BASIC;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->updateLaunchConfiguration($request);

    if ($response->launchConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLaunchConfigurationTemplate

Updates an existing Launch Configuration Template by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyLicensing;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLaunchConfigurationTemplateRequest();
    $request->requestBody = new UpdateLaunchConfigurationTemplateRequestBody();
    $request->requestBody->copyPrivateIp = false;
    $request->requestBody->copyTags = false;
    $request->requestBody->launchConfigurationTemplateID = 'eius';
    $request->requestBody->launchDisposition = UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum::STOPPED;
    $request->requestBody->licensing = new UpdateLaunchConfigurationTemplateRequestBodyLicensing();
    $request->requestBody->licensing->osByol = false;
    $request->requestBody->targetInstanceTypeRightSizingMethod = UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum::NONE;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->updateLaunchConfigurationTemplate($request);

    if ($response->updateLaunchConfigurationTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReplicationConfiguration

Allows you to update a ReplicationConfiguration by Source Server ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PITPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\PITPolicyRuleUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationConfigurationReplicatedDisk;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReplicationConfigurationRequest();
    $request->requestBody = new UpdateReplicationConfigurationRequestBody();
    $request->requestBody->associateDefaultSecurityGroup = false;
    $request->requestBody->autoReplicateNewDisks = false;
    $request->requestBody->bandwidthThrottling = 588317;
    $request->requestBody->createPublicIP = false;
    $request->requestBody->dataPlaneRouting = UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum::PRIVATE_IP;
    $request->requestBody->defaultLargeStagingDiskType = UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum::AUTO;
    $request->requestBody->ebsEncryption = UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum::CUSTOM;
    $request->requestBody->ebsEncryptionKeyArn = 'similique';
    $request->requestBody->name = 'Cristina Hahn';
    $request->requestBody->pitPolicy = [
        new PITPolicyRule(),
        new PITPolicyRule(),
        new PITPolicyRule(),
        new PITPolicyRule(),
    ];
    $request->requestBody->replicatedDisks = [
        new ReplicationConfigurationReplicatedDisk(),
        new ReplicationConfigurationReplicatedDisk(),
        new ReplicationConfigurationReplicatedDisk(),
        new ReplicationConfigurationReplicatedDisk(),
    ];
    $request->requestBody->replicationServerInstanceType = 'qui';
    $request->requestBody->replicationServersSecurityGroupsIDs = [
        'a',
        'esse',
        'harum',
    ];
    $request->requestBody->sourceServerID = 'iusto';
    $request->requestBody->stagingAreaSubnetId = 'ipsum';
    $request->requestBody->stagingAreaTags = [
        'tenetur' => 'amet',
        'tempore' => 'accusamus',
        'numquam' => 'enim',
        'dolorem' => 'sapiente',
    ];
    $request->requestBody->useDedicatedReplicationServer = false;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->updateReplicationConfiguration($request);

    if ($response->replicationConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReplicationConfigurationTemplate

Updates a ReplicationConfigurationTemplate by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PITPolicyRule;
use \OpenAPI\OpenAPI\Models\Shared\PITPolicyRuleUnitsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReplicationConfigurationTemplateRequest();
    $request->requestBody = new UpdateReplicationConfigurationTemplateRequestBody();
    $request->requestBody->arn = 'libero';
    $request->requestBody->associateDefaultSecurityGroup = false;
    $request->requestBody->autoReplicateNewDisks = false;
    $request->requestBody->bandwidthThrottling = 374170;
    $request->requestBody->createPublicIP = false;
    $request->requestBody->dataPlaneRouting = UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum::PUBLIC_IP;
    $request->requestBody->defaultLargeStagingDiskType = UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum::GP3;
    $request->requestBody->ebsEncryption = UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum::DEFAULT;
    $request->requestBody->ebsEncryptionKeyArn = 'incidunt';
    $request->requestBody->pitPolicy = [
        new PITPolicyRule(),
    ];
    $request->requestBody->replicationConfigurationTemplateID = 'cupiditate';
    $request->requestBody->replicationServerInstanceType = 'maxime';
    $request->requestBody->replicationServersSecurityGroupsIDs = [
        'soluta',
        'dicta',
        'laborum',
        'totam',
    ];
    $request->requestBody->stagingAreaSubnetId = 'incidunt';
    $request->requestBody->stagingAreaTags = [
        'dolores' => 'distinctio',
    ];
    $request->requestBody->useDedicatedReplicationServer = false;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->updateReplicationConfigurationTemplate($request);

    if ($response->replicationConfigurationTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
