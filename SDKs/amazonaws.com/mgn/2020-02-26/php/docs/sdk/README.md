# SDK

## Overview

The Application Migration Service service.

Amazon Web Services documentation
<https://docs.aws.amazon.com/mgn/>
### Available Operations

* [archiveApplication](#archiveapplication) - Archive application.
* [archiveWave](#archivewave) - Archive wave.
* [associateApplications](#associateapplications) - Associate applications to wave.
* [associateSourceServers](#associatesourceservers) - Associate source servers to application.
* [changeServerLifeCycleState](#changeserverlifecyclestate) - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
* [createApplication](#createapplication) - Create application.
* [createLaunchConfigurationTemplate](#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [createReplicationConfigurationTemplate](#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [createWave](#createwave) - Create wave.
* [deleteApplication](#deleteapplication) - Delete application.
* [deleteJob](#deletejob) - Deletes a single Job by ID.
* [deleteLaunchConfigurationTemplate](#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [deleteReplicationConfigurationTemplate](#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [deleteSourceServer](#deletesourceserver) - Deletes a single source server by ID.
* [deleteVcenterClient](#deletevcenterclient) - Deletes a given vCenter client by ID.
* [deleteWave](#deletewave) - Delete wave.
* [describeJobLogItems](#describejoblogitems) - Retrieves detailed job log items with paging.
* [describeJobs](#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [describeLaunchConfigurationTemplates](#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [describeReplicationConfigurationTemplates](#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [describeSourceServers](#describesourceservers) - Retrieves all SourceServers or multiple SourceServers by ID.
* [describeVcenterClients](#describevcenterclients) - Returns a list of the installed vCenter clients.
* [disassociateApplications](#disassociateapplications) - Disassociate applications from wave.
* [disassociateSourceServers](#disassociatesourceservers) - Disassociate source servers from application.
* [disconnectFromService](#disconnectfromservice) - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [finalizeCutover](#finalizecutover) - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [getLaunchConfiguration](#getlaunchconfiguration) - Lists all LaunchConfigurations available, filtered by Source Server IDs.
* [getReplicationConfiguration](#getreplicationconfiguration) - Lists all ReplicationConfigurations, filtered by Source Server ID.
* [initializeService](#initializeservice) - Initialize Application Migration Service.
* [listApplications](#listapplications) - Retrieves all applications or multiple applications by ID.
* [listExportErrors](#listexporterrors) - List export errors.
* [listExports](#listexports) - List exports.
* [listImportErrors](#listimporterrors) - List import errors.
* [listImports](#listimports) - List imports.
* [listSourceServerActions](#listsourceserveractions) - List source server post migration custom actions.
* [listTagsForResource](#listtagsforresource) - List all tags for your Application Migration Service resources.
* [listTemplateActions](#listtemplateactions) - List template post migration custom actions.
* [listWaves](#listwaves) - Retrieves all waves or multiple waves by ID.
* [markAsArchived](#markasarchived) - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
* [putSourceServerAction](#putsourceserveraction) - Put source server post migration custom action.
* [putTemplateAction](#puttemplateaction) - Put template post migration custom action.
* [removeSourceServerAction](#removesourceserveraction) - Remove source server post migration custom action.
* [removeTemplateAction](#removetemplateaction) - Remove template post migration custom action.
* [retryDataReplication](#retrydatareplication) - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
* [startCutover](#startcutover) - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
* [startExport](#startexport) - Start export.
* [startImport](#startimport) - Start import.
* [startReplication](#startreplication) - Starts replication for SNAPSHOT_SHIPPING agents.
* [startTest](#starttest) - Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
* [tagResource](#tagresource) - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [terminateTargetInstances](#terminatetargetinstances) - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
* [unarchiveApplication](#unarchiveapplication) - Unarchive application.
* [unarchiveWave](#unarchivewave) - Unarchive wave.
* [untagResource](#untagresource) - Deletes the specified set of tags from the specified set of Application Migration Service resources.
* [updateApplication](#updateapplication) - Update application.
* [updateLaunchConfiguration](#updatelaunchconfiguration) - Updates multiple LaunchConfigurations by Source Server ID.
* [updateLaunchConfigurationTemplate](#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [updateReplicationConfiguration](#updatereplicationconfiguration) - Allows you to update multiple ReplicationConfigurations by Source Server ID.
* [updateReplicationConfigurationTemplate](#updatereplicationconfigurationtemplate) - Updates multiple ReplicationConfigurationTemplates by ID.
* [updateSourceServerReplicationType](#updatesourceserverreplicationtype) - Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
* [updateWave](#updatewave) - Update wave.

## archiveApplication

Archive application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArchiveApplicationRequest();
    $request->requestBody = new ArchiveApplicationRequestBody();
    $request->requestBody->applicationID = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->archiveApplication($request);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## archiveWave

Archive wave.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveWaveRequest;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveWaveRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArchiveWaveRequest();
    $request->requestBody = new ArchiveWaveRequestBody();
    $request->requestBody->waveID = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->archiveWave($request);

    if ($response->wave !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateApplications

Associate applications to wave.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApplicationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApplicationsRequest();
    $request->requestBody = new AssociateApplicationsRequestBody();
    $request->requestBody->applicationIDs = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->requestBody->waveID = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->associateApplications($request);

    if ($response->associateApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateSourceServers

Associate source servers to application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateSourceServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateSourceServersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateSourceServersRequest();
    $request->requestBody = new AssociateSourceServersRequestBody();
    $request->requestBody->applicationID = 'quo';
    $request->requestBody->sourceServerIDs = [
        'at',
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->associateSourceServers($request);

    if ($response->associateSourceServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeServerLifeCycleState

Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangeServerLifeCycleStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChangeServerLifeCycleStateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ChangeServerLifeCycleStateRequestBodyLifeCycle;
use \OpenAPI\OpenAPI\Models\Shared\ChangeServerLifeCycleStateSourceServerLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeServerLifeCycleStateRequest();
    $request->requestBody = new ChangeServerLifeCycleStateRequestBody();
    $request->requestBody->lifeCycle = new ChangeServerLifeCycleStateRequestBodyLifeCycle();
    $request->requestBody->lifeCycle->state = ChangeServerLifeCycleStateSourceServerLifecycleStateEnum::CUTOVER;
    $request->requestBody->sourceServerID = 'dolorum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->changeServerLifeCycleState($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

Create application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->requestBody = new CreateApplicationRequestBody();
    $request->requestBody->description = 'optio';
    $request->requestBody->name = 'Jack Johns';
    $request->requestBody->tags = [
        'impedit' => 'cum',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->createApplication($request);

    if ($response->application !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyBootModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyLargeVolumeConf;
use \OpenAPI\OpenAPI\Models\Shared\VolumeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyLicensing;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyPostLaunchActions;
use \OpenAPI\OpenAPI\Models\Shared\PostLaunchActionsDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SsmDocument;
use \OpenAPI\OpenAPI\Models\Shared\SsmExternalParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodySmallVolumeConf;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLaunchConfigurationTemplateRequest();
    $request->requestBody = new CreateLaunchConfigurationTemplateRequestBody();
    $request->requestBody->associatePublicIpAddress = false;
    $request->requestBody->bootMode = CreateLaunchConfigurationTemplateRequestBodyBootModeEnum::LEGACY_BIOS;
    $request->requestBody->copyPrivateIp = false;
    $request->requestBody->copyTags = false;
    $request->requestBody->enableMapAutoTagging = false;
    $request->requestBody->largeVolumeConf = new CreateLaunchConfigurationTemplateRequestBodyLargeVolumeConf();
    $request->requestBody->largeVolumeConf->iops = 612096;
    $request->requestBody->largeVolumeConf->throughput = 222321;
    $request->requestBody->largeVolumeConf->volumeType = VolumeTypeEnum::ST1;
    $request->requestBody->launchDisposition = CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum::STOPPED;
    $request->requestBody->licensing = new CreateLaunchConfigurationTemplateRequestBodyLicensing();
    $request->requestBody->licensing->osByol = false;
    $request->requestBody->mapAutoTaggingMpeID = 'hic';
    $request->requestBody->postLaunchActions = new CreateLaunchConfigurationTemplateRequestBodyPostLaunchActions();
    $request->requestBody->postLaunchActions->cloudWatchLogGroupName = 'saepe';
    $request->requestBody->postLaunchActions->deployment = PostLaunchActionsDeploymentTypeEnum::TEST_ONLY;
    $request->requestBody->postLaunchActions->s3LogBucket = 'in';
    $request->requestBody->postLaunchActions->s3OutputKeyPrefix = 'corporis';
    $request->requestBody->postLaunchActions->ssmDocuments = [
        new SsmDocument(),
        new SsmDocument(),
        new SsmDocument(),
    ];
    $request->requestBody->smallVolumeConf = new CreateLaunchConfigurationTemplateRequestBodySmallVolumeConf();
    $request->requestBody->smallVolumeConf->iops = 437032;
    $request->requestBody->smallVolumeConf->throughput = 902349;
    $request->requestBody->smallVolumeConf->volumeType = VolumeTypeEnum::ST1;
    $request->requestBody->smallVolumeMaxSize = 99280;
    $request->requestBody->tags = [
        'reiciendis' => 'est',
    ];
    $request->requestBody->targetInstanceTypeRightSizingMethod = CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum::BASIC;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->createLaunchConfigurationTemplate($request);

    if ($response->launchConfigurationTemplate !== null) {
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplicationConfigurationTemplateRequest();
    $request->requestBody = new CreateReplicationConfigurationTemplateRequestBody();
    $request->requestBody->associateDefaultSecurityGroup = false;
    $request->requestBody->bandwidthThrottling = 607831;
    $request->requestBody->createPublicIP = false;
    $request->requestBody->dataPlaneRouting = CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum::PRIVATE_IP;
    $request->requestBody->defaultLargeStagingDiskType = CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum::GP2;
    $request->requestBody->ebsEncryption = CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum::CUSTOM;
    $request->requestBody->ebsEncryptionKeyArn = 'accusantium';
    $request->requestBody->replicationServerInstanceType = 'iure';
    $request->requestBody->replicationServersSecurityGroupsIDs = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->requestBody->stagingAreaSubnetId = 'mollitia';
    $request->requestBody->stagingAreaTags = [
        'culpa' => 'consequuntur',
    ];
    $request->requestBody->tags = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->requestBody->useDedicatedReplicationServer = false;
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->createReplicationConfigurationTemplate($request);

    if ($response->replicationConfigurationTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWave

Create wave.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWaveRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWaveRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWaveRequest();
    $request->requestBody = new CreateWaveRequestBody();
    $request->requestBody->description = 'quo';
    $request->requestBody->name = 'Mandy Hills';
    $request->requestBody->tags = [
        'quasi' => 'error',
    ];
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->createWave($request);

    if ($response->wave !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Delete application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->requestBody = new DeleteApplicationRequestBody();
    $request->requestBody->applicationID = 'praesentium';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->deleteApplicationResponse !== null) {
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
    $request->requestBody->jobID = 'reprehenderit';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

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
    $request->requestBody->launchConfigurationTemplateID = 'harum';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->deleteLaunchConfigurationTemplate($request);

    if ($response->deleteLaunchConfigurationTemplateResponse !== null) {
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
    $request->requestBody->replicationConfigurationTemplateID = 'molestias';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->deleteReplicationConfigurationTemplate($request);

    if ($response->deleteReplicationConfigurationTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSourceServer

Deletes a single source server by ID.

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
    $request->requestBody->sourceServerID = 'repudiandae';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->deleteSourceServer($request);

    if ($response->deleteSourceServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVcenterClient

Deletes a given vCenter client by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVcenterClientRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVcenterClientRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVcenterClientRequest();
    $request->requestBody = new DeleteVcenterClientRequestBody();
    $request->requestBody->vcenterClientID = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->deleteVcenterClient($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWave

Delete wave.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWaveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWaveRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWaveRequest();
    $request->requestBody = new DeleteWaveRequestBody();
    $request->requestBody->waveID = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->deleteWave($request);

    if ($response->deleteWaveResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobLogItems

Retrieves detailed job log items with paging.

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
    $request->requestBody->jobID = 'fugit';
    $request->requestBody->maxResults = 677817;
    $request->requestBody->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->maxResults = 'eligendi';
    $request->nextToken = 'sint';

    $response = $sdk->sdk->describeJobLogItems($request);

    if ($response->describeJobLogItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobs

Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.

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
    $request->requestBody->filters->fromDate = 'aliquid';
    $request->requestBody->filters->jobIDs = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->requestBody->filters->toDate = 'dolor';
    $request->requestBody->maxResults = 891555;
    $request->requestBody->nextToken = 'a';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->maxResults = 'magnam';
    $request->nextToken = 'cumque';

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
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->requestBody->maxResults = 249796;
    $request->requestBody->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->maxResults = 'blanditiis';
    $request->nextToken = 'deleniti';

    $response = $sdk->sdk->describeLaunchConfigurationTemplates($request);

    if ($response->describeLaunchConfigurationTemplatesResponse !== null) {
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
    $request->requestBody->maxResults = 956084;
    $request->requestBody->nextToken = 'amet';
    $request->requestBody->replicationConfigurationTemplateIDs = [
        'nisi',
        'vel',
        'natus',
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->maxResults = 'labore';
    $request->nextToken = 'labore';

    $response = $sdk->sdk->describeReplicationConfigurationTemplates($request);

    if ($response->describeReplicationConfigurationTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSourceServers

Retrieves all SourceServers or multiple SourceServers by ID.

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
use \OpenAPI\OpenAPI\Models\Shared\LifeCycleStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSourceServersRequest();
    $request->requestBody = new DescribeSourceServersRequestBody();
    $request->requestBody->filters = new DescribeSourceServersRequestBodyFilters();
    $request->requestBody->filters->applicationIDs = [
        'natus',
        'nobis',
    ];
    $request->requestBody->filters->isArchived = false;
    $request->requestBody->filters->lifeCycleStates = [
        LifeCycleStateEnum::DISCOVERED,
        LifeCycleStateEnum::NOT_READY,
    ];
    $request->requestBody->filters->replicationTypes = [
        ReplicationTypeEnum::AGENT_BASED,
    ];
    $request->requestBody->filters->sourceServerIDs = [
        'excepturi',
    ];
    $request->requestBody->maxResults = 354047;
    $request->requestBody->nextToken = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->maxResults = 'eum';
    $request->nextToken = 'dolor';

    $response = $sdk->sdk->describeSourceServers($request);

    if ($response->describeSourceServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVcenterClients

Returns a list of the installed vCenter clients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVcenterClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVcenterClientsRequest();
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';
    $request->maxResults = 260341;
    $request->nextToken = 'maxime';

    $response = $sdk->sdk->describeVcenterClients($request);

    if ($response->describeVcenterClientsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateApplications

Disassociate applications from wave.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApplicationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateApplicationsRequest();
    $request->requestBody = new DisassociateApplicationsRequestBody();
    $request->requestBody->applicationIDs = [
        'facilis',
        'in',
        'architecto',
    ];
    $request->requestBody->waveID = 'architecto';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->disassociateApplications($request);

    if ($response->disassociateApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateSourceServers

Disassociate source servers from application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateSourceServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateSourceServersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateSourceServersRequest();
    $request->requestBody = new DisassociateSourceServersRequestBody();
    $request->requestBody->applicationID = 'saepe';
    $request->requestBody->sourceServerIDs = [
        'accusantium',
        'consequuntur',
        'praesentium',
        'natus',
    ];
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->disassociateSourceServers($request);

    if ($response->disassociateSourceServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectFromService

Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectFromServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectFromServiceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectFromServiceRequest();
    $request->requestBody = new DisconnectFromServiceRequestBody();
    $request->requestBody->sourceServerID = 'excepturi';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->disconnectFromService($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## finalizeCutover

Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FinalizeCutoverRequest;
use \OpenAPI\OpenAPI\Models\Operations\FinalizeCutoverRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FinalizeCutoverRequest();
    $request->requestBody = new FinalizeCutoverRequestBody();
    $request->requestBody->sourceServerID = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->finalizeCutover($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLaunchConfiguration

Lists all LaunchConfigurations available, filtered by Source Server IDs.

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
    $request->requestBody->sourceServerID = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getLaunchConfiguration($request);

    if ($response->launchConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReplicationConfiguration

Lists all ReplicationConfigurations, filtered by Source Server ID.

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
    $request->requestBody->sourceServerID = 'dolores';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->getReplicationConfiguration($request);

    if ($response->replicationConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initializeService

Initialize Application Migration Service.

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
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->initializeService($request);

    if ($response->initializeServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

Retrieves all applications or multiple applications by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationsRequest();
    $request->requestBody = new ListApplicationsRequestBody();
    $request->requestBody->filters = new ListApplicationsRequestBodyFilters();
    $request->requestBody->filters->applicationIDs = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
    ];
    $request->requestBody->filters->isArchived = false;
    $request->requestBody->filters->waveIDs = [
        'porro',
    ];
    $request->requestBody->maxResults = 164694;
    $request->requestBody->nextToken = 'blanditiis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->maxResults = 'modi';
    $request->nextToken = 'iste';

    $response = $sdk->sdk->listApplications($request);

    if ($response->listApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExportErrors

List export errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExportErrorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExportErrorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExportErrorsRequest();
    $request->requestBody = new ListExportErrorsRequestBody();
    $request->requestBody->exportID = 'dolorum';
    $request->requestBody->maxResults = 535633;
    $request->requestBody->nextToken = 'pariatur';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->maxResults = 'dolorem';
    $request->nextToken = 'dolorem';

    $response = $sdk->sdk->listExportErrors($request);

    if ($response->listExportErrorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExports

List exports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExportsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListExportsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExportsRequest();
    $request->requestBody = new ListExportsRequestBody();
    $request->requestBody->filters = new ListExportsRequestBodyFilters();
    $request->requestBody->filters->exportIDs = [
        'qui',
    ];
    $request->requestBody->maxResults = 218749;
    $request->requestBody->nextToken = 'hic';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->maxResults = 'numquam';
    $request->nextToken = 'veritatis';

    $response = $sdk->sdk->listExports($request);

    if ($response->listExportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImportErrors

List import errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImportErrorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImportErrorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImportErrorsRequest();
    $request->requestBody = new ListImportErrorsRequestBody();
    $request->requestBody->importID = 'ipsa';
    $request->requestBody->maxResults = 56418;
    $request->requestBody->nextToken = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';
    $request->maxResults = 'eos';
    $request->nextToken = 'atque';

    $response = $sdk->sdk->listImportErrors($request);

    if ($response->listImportErrorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImports

List imports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImportsRequest();
    $request->requestBody = new ListImportsRequestBody();
    $request->requestBody->filters = new ListImportsRequestBodyFilters();
    $request->requestBody->filters->importIDs = [
        'fugiat',
    ];
    $request->requestBody->maxResults = 67249;
    $request->requestBody->nextToken = 'soluta';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->maxResults = 'distinctio';
    $request->nextToken = 'asperiores';

    $response = $sdk->sdk->listImports($request);

    if ($response->listImportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceServerActions

List source server post migration custom actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceServerActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceServerActionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceServerActionsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceServerActionsRequest();
    $request->requestBody = new ListSourceServerActionsRequestBody();
    $request->requestBody->filters = new ListSourceServerActionsRequestBodyFilters();
    $request->requestBody->filters->actionIDs = [
        'ipsum',
        'voluptate',
    ];
    $request->requestBody->maxResults = 663078;
    $request->requestBody->nextToken = 'saepe';
    $request->requestBody->sourceServerID = 'eius';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';
    $request->maxResults = 'suscipit';
    $request->nextToken = 'deserunt';

    $response = $sdk->sdk->listSourceServerActions($request);

    if ($response->listSourceServerActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List all tags for your Application Migration Service resources.

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
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'at';
    $request->resourceArn = 'quaerat';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplateActions

List template post migration custom actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplateActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplateActionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplateActionsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplateActionsRequest();
    $request->requestBody = new ListTemplateActionsRequestBody();
    $request->requestBody->filters = new ListTemplateActionsRequestBodyFilters();
    $request->requestBody->filters->actionIDs = [
        'vel',
        'quod',
    ];
    $request->requestBody->launchConfigurationTemplateID = 'officiis';
    $request->requestBody->maxResults = 185636;
    $request->requestBody->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->maxResults = 'amet';
    $request->nextToken = 'tempore';

    $response = $sdk->sdk->listTemplateActions($request);

    if ($response->listTemplateActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWaves

Retrieves all waves or multiple waves by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWavesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWavesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListWavesRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWavesRequest();
    $request->requestBody = new ListWavesRequestBody();
    $request->requestBody->filters = new ListWavesRequestBodyFilters();
    $request->requestBody->filters->isArchived = false;
    $request->requestBody->filters->waveIDs = [
        'numquam',
        'enim',
        'dolorem',
        'sapiente',
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

    $response = $sdk->sdk->listWaves($request);

    if ($response->listWavesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## markAsArchived

Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MarkAsArchivedRequest;
use \OpenAPI\OpenAPI\Models\Operations\MarkAsArchivedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MarkAsArchivedRequest();
    $request->requestBody = new MarkAsArchivedRequestBody();
    $request->requestBody->sourceServerID = 'ipsum';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->markAsArchived($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSourceServerAction

Put source server post migration custom action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSourceServerActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutSourceServerActionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutSourceServerActionRequestBodyCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SsmExternalParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSourceServerActionRequest();
    $request->requestBody = new PutSourceServerActionRequestBody();
    $request->requestBody->actionID = 'laborum';
    $request->requestBody->actionName = 'totam';
    $request->requestBody->active = false;
    $request->requestBody->category = PutSourceServerActionRequestBodyCategoryEnum::LICENSE_AND_SUBSCRIPTION;
    $request->requestBody->description = 'aspernatur';
    $request->requestBody->documentIdentifier = 'dolores';
    $request->requestBody->documentVersion = 'distinctio';
    $request->requestBody->externalParameters = [
        'aliquid' => new SsmExternalParameter(),
        'quam' => new SsmExternalParameter(),
        'molestias' => new SsmExternalParameter(),
    ];
    $request->requestBody->mustSucceedForCutover = false;
    $request->requestBody->order = 840429;
    $request->requestBody->parameters = [
        'neque' => [
            new SsmParameterStoreParameter(),
        ],
    ];
    $request->requestBody->sourceServerID = 'magni';
    $request->requestBody->timeoutSeconds = 488056;
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->putSourceServerAction($request);

    if ($response->sourceServerActionDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTemplateAction

Put template post migration custom action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutTemplateActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutTemplateActionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutTemplateActionRequestBodyCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SsmExternalParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTemplateActionRequest();
    $request->requestBody = new PutTemplateActionRequestBody();
    $request->requestBody->actionID = 'nobis';
    $request->requestBody->actionName = 'et';
    $request->requestBody->active = false;
    $request->requestBody->category = PutTemplateActionRequestBodyCategoryEnum::OTHER;
    $request->requestBody->description = 'ipsum';
    $request->requestBody->documentIdentifier = 'veritatis';
    $request->requestBody->documentVersion = 'nobis';
    $request->requestBody->externalParameters = [
        'tempore' => new SsmExternalParameter(),
        'cupiditate' => new SsmExternalParameter(),
        'aperiam' => new SsmExternalParameter(),
    ];
    $request->requestBody->launchConfigurationTemplateID = 'delectus';
    $request->requestBody->mustSucceedForCutover = false;
    $request->requestBody->operatingSystem = 'dolorem';
    $request->requestBody->order = 292147;
    $request->requestBody->parameters = [
        'adipisci' => [
            new SsmParameterStoreParameter(),
            new SsmParameterStoreParameter(),
            new SsmParameterStoreParameter(),
        ],
        'architecto' => [
            new SsmParameterStoreParameter(),
        ],
    ];
    $request->requestBody->timeoutSeconds = 16429;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->putTemplateAction($request);

    if ($response->templateActionDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeSourceServerAction

Remove source server post migration custom action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSourceServerActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSourceServerActionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveSourceServerActionRequest();
    $request->requestBody = new RemoveSourceServerActionRequestBody();
    $request->requestBody->actionID = 'ut';
    $request->requestBody->sourceServerID = 'facilis';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->removeSourceServerAction($request);

    if ($response->removeSourceServerActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTemplateAction

Remove template post migration custom action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTemplateActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTemplateActionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTemplateActionRequest();
    $request->requestBody = new RemoveTemplateActionRequestBody();
    $request->requestBody->actionID = 'quisquam';
    $request->requestBody->launchConfigurationTemplateID = 'vero';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->removeTemplateAction($request);

    if ($response->removeTemplateActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retryDataReplication

Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.

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
    $request->requestBody->sourceServerID = 'tenetur';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->retryDataReplication($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startCutover

Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartCutoverRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartCutoverRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartCutoverRequest();
    $request->requestBody = new StartCutoverRequestBody();
    $request->requestBody->sourceServerIDs = [
        'ducimus',
        'dolore',
        'quibusdam',
        'illum',
    ];
    $request->requestBody->tags = [
        'natus' => 'impedit',
    ];
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->startCutover($request);

    if ($response->startCutoverResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startExport

Start export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartExportRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartExportRequest();
    $request->requestBody = new StartExportRequestBody();
    $request->requestBody->s3Bucket = 'doloribus';
    $request->requestBody->s3BucketOwner = 'iusto';
    $request->requestBody->s3Key = 'eligendi';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->startExport($request);

    if ($response->startExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImport

Start import.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImportRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartImportRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartImportRequestBodyS3BucketSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImportRequest();
    $request->requestBody = new StartImportRequestBody();
    $request->requestBody->clientToken = 'vel';
    $request->requestBody->s3BucketSource = new StartImportRequestBodyS3BucketSource();
    $request->requestBody->s3BucketSource->s3Bucket = 'possimus';
    $request->requestBody->s3BucketSource->s3BucketOwner = 'magnam';
    $request->requestBody->s3BucketSource->s3Key = 'ratione';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->startImport($request);

    if ($response->startImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReplication

Starts replication for SNAPSHOT_SHIPPING agents.

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
    $request->requestBody->sourceServerID = 'nulla';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->startReplication($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTest

Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartTestRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTestRequest();
    $request->requestBody = new StartTestRequestBody();
    $request->requestBody->sourceServerIDs = [
        'corporis',
        'veniam',
        'aliquid',
        'inventore',
    ];
    $request->requestBody->tags = [
        'ea' => 'quo',
        'consectetur' => 'recusandae',
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->startTest($request);

    if ($response->startTestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.

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
        'impedit' => 'aliquam',
        'fugit' => 'accusamus',
        'inventore' => 'non',
    ];
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'autem';
    $request->resourceArn = 'nobis';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateTargetInstances

Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateTargetInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TerminateTargetInstancesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateTargetInstancesRequest();
    $request->requestBody = new TerminateTargetInstancesRequestBody();
    $request->requestBody->sourceServerIDs = [
        'assumenda',
        'nulla',
        'voluptas',
    ];
    $request->requestBody->tags = [
        'quasi' => 'tempora',
        'numquam' => 'explicabo',
        'provident' => 'ipsa',
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->terminateTargetInstances($request);

    if ($response->terminateTargetInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unarchiveApplication

Unarchive application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnarchiveApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnarchiveApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnarchiveApplicationRequest();
    $request->requestBody = new UnarchiveApplicationRequestBody();
    $request->requestBody->applicationID = 'fuga';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->unarchiveApplication($request);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unarchiveWave

Unarchive wave.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnarchiveWaveRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnarchiveWaveRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnarchiveWaveRequest();
    $request->requestBody = new UnarchiveWaveRequestBody();
    $request->requestBody->waveID = 'eos';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->unarchiveWave($request);

    if ($response->wave !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes the specified set of tags from the specified set of Application Migration Service resources.

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
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->resourceArn = 'ab';
    $request->tagKeys = [
        'consequatur',
        'tempora',
        'debitis',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

Update application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->requestBody = new UpdateApplicationRequestBody();
    $request->requestBody->applicationID = 'ipsam';
    $request->requestBody->description = 'aspernatur';
    $request->requestBody->name = 'Angelica Koelpin MD';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->updateApplication($request);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLaunchConfiguration

Updates multiple LaunchConfigurations by Source Server ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBodyBootModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBodyLicensing;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBodyPostLaunchActions;
use \OpenAPI\OpenAPI\Models\Shared\PostLaunchActionsDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SsmDocument;
use \OpenAPI\OpenAPI\Models\Shared\SsmExternalParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLaunchConfigurationRequest();
    $request->requestBody = new UpdateLaunchConfigurationRequestBody();
    $request->requestBody->bootMode = UpdateLaunchConfigurationRequestBodyBootModeEnum::LEGACY_BIOS;
    $request->requestBody->copyPrivateIp = false;
    $request->requestBody->copyTags = false;
    $request->requestBody->enableMapAutoTagging = false;
    $request->requestBody->launchDisposition = UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum::STARTED;
    $request->requestBody->licensing = new UpdateLaunchConfigurationRequestBodyLicensing();
    $request->requestBody->licensing->osByol = false;
    $request->requestBody->mapAutoTaggingMpeID = 'commodi';
    $request->requestBody->name = 'Todd Oberbrunner DDS';
    $request->requestBody->postLaunchActions = new UpdateLaunchConfigurationRequestBodyPostLaunchActions();
    $request->requestBody->postLaunchActions->cloudWatchLogGroupName = 'eum';
    $request->requestBody->postLaunchActions->deployment = PostLaunchActionsDeploymentTypeEnum::CUTOVER_ONLY;
    $request->requestBody->postLaunchActions->s3LogBucket = 'praesentium';
    $request->requestBody->postLaunchActions->s3OutputKeyPrefix = 'consequuntur';
    $request->requestBody->postLaunchActions->ssmDocuments = [
        new SsmDocument(),
        new SsmDocument(),
        new SsmDocument(),
    ];
    $request->requestBody->sourceServerID = 'fugit';
    $request->requestBody->targetInstanceTypeRightSizingMethod = UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum::BASIC;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'fugit';

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
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyBootModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyLargeVolumeConf;
use \OpenAPI\OpenAPI\Models\Shared\VolumeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyLicensing;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyPostLaunchActions;
use \OpenAPI\OpenAPI\Models\Shared\PostLaunchActionsDeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SsmDocument;
use \OpenAPI\OpenAPI\Models\Shared\SsmExternalParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameter;
use \OpenAPI\OpenAPI\Models\Shared\SsmParameterStoreParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodySmallVolumeConf;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLaunchConfigurationTemplateRequest();
    $request->requestBody = new UpdateLaunchConfigurationTemplateRequestBody();
    $request->requestBody->associatePublicIpAddress = false;
    $request->requestBody->bootMode = UpdateLaunchConfigurationTemplateRequestBodyBootModeEnum::UEFI;
    $request->requestBody->copyPrivateIp = false;
    $request->requestBody->copyTags = false;
    $request->requestBody->enableMapAutoTagging = false;
    $request->requestBody->largeVolumeConf = new UpdateLaunchConfigurationTemplateRequestBodyLargeVolumeConf();
    $request->requestBody->largeVolumeConf->iops = 159870;
    $request->requestBody->largeVolumeConf->throughput = 187131;
    $request->requestBody->largeVolumeConf->volumeType = VolumeTypeEnum::IO1;
    $request->requestBody->launchConfigurationTemplateID = 'saepe';
    $request->requestBody->launchDisposition = UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum::STARTED;
    $request->requestBody->licensing = new UpdateLaunchConfigurationTemplateRequestBodyLicensing();
    $request->requestBody->licensing->osByol = false;
    $request->requestBody->mapAutoTaggingMpeID = 'atque';
    $request->requestBody->postLaunchActions = new UpdateLaunchConfigurationTemplateRequestBodyPostLaunchActions();
    $request->requestBody->postLaunchActions->cloudWatchLogGroupName = 'et';
    $request->requestBody->postLaunchActions->deployment = PostLaunchActionsDeploymentTypeEnum::CUTOVER_ONLY;
    $request->requestBody->postLaunchActions->s3LogBucket = 'eveniet';
    $request->requestBody->postLaunchActions->s3OutputKeyPrefix = 'accusamus';
    $request->requestBody->postLaunchActions->ssmDocuments = [
        new SsmDocument(),
    ];
    $request->requestBody->smallVolumeConf = new UpdateLaunchConfigurationTemplateRequestBodySmallVolumeConf();
    $request->requestBody->smallVolumeConf->iops = 458604;
    $request->requestBody->smallVolumeConf->throughput = 800379;
    $request->requestBody->smallVolumeConf->volumeType = VolumeTypeEnum::SC1;
    $request->requestBody->smallVolumeMaxSize = 877131;
    $request->requestBody->targetInstanceTypeRightSizingMethod = UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum::NONE;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->updateLaunchConfigurationTemplate($request);

    if ($response->launchConfigurationTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReplicationConfiguration

Allows you to update multiple ReplicationConfigurations by Source Server ID.

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
use \OpenAPI\OpenAPI\Models\Shared\ReplicationConfigurationReplicatedDisk;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReplicationConfigurationRequest();
    $request->requestBody = new UpdateReplicationConfigurationRequestBody();
    $request->requestBody->associateDefaultSecurityGroup = false;
    $request->requestBody->bandwidthThrottling = 327720;
    $request->requestBody->createPublicIP = false;
    $request->requestBody->dataPlaneRouting = UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum::PUBLIC_IP;
    $request->requestBody->defaultLargeStagingDiskType = UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum::GP3;
    $request->requestBody->ebsEncryption = UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum::DEFAULT;
    $request->requestBody->ebsEncryptionKeyArn = 'culpa';
    $request->requestBody->name = 'Chad Runolfsson DDS';
    $request->requestBody->replicatedDisks = [
        new ReplicationConfigurationReplicatedDisk(),
        new ReplicationConfigurationReplicatedDisk(),
    ];
    $request->requestBody->replicationServerInstanceType = 'sapiente';
    $request->requestBody->replicationServersSecurityGroupsIDs = [
        'esse',
    ];
    $request->requestBody->sourceServerID = 'blanditiis';
    $request->requestBody->stagingAreaSubnetId = 'provident';
    $request->requestBody->stagingAreaTags = [
        'nulla' => 'quas',
        'esse' => 'quasi',
        'a' => 'error',
        'sint' => 'pariatur',
    ];
    $request->requestBody->useDedicatedReplicationServer = false;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->updateReplicationConfiguration($request);

    if ($response->replicationConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReplicationConfigurationTemplate

Updates multiple ReplicationConfigurationTemplates by ID.

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReplicationConfigurationTemplateRequest();
    $request->requestBody = new UpdateReplicationConfigurationTemplateRequestBody();
    $request->requestBody->arn = 'quasi';
    $request->requestBody->associateDefaultSecurityGroup = false;
    $request->requestBody->bandwidthThrottling = 628899;
    $request->requestBody->createPublicIP = false;
    $request->requestBody->dataPlaneRouting = UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum::PUBLIC_IP;
    $request->requestBody->defaultLargeStagingDiskType = UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum::ST1;
    $request->requestBody->ebsEncryption = UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum::CUSTOM;
    $request->requestBody->ebsEncryptionKeyArn = 'quae';
    $request->requestBody->replicationConfigurationTemplateID = 'earum';
    $request->requestBody->replicationServerInstanceType = 'vel';
    $request->requestBody->replicationServersSecurityGroupsIDs = [
        'eius',
        'libero',
    ];
    $request->requestBody->stagingAreaSubnetId = 'illum';
    $request->requestBody->stagingAreaTags = [
        'accusantium' => 'aliquam',
        'sapiente' => 'dicta',
        'ullam' => 'reprehenderit',
    ];
    $request->requestBody->useDedicatedReplicationServer = false;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->updateReplicationConfigurationTemplate($request);

    if ($response->replicationConfigurationTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSourceServerReplicationType

Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceServerReplicationTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceServerReplicationTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceServerReplicationTypeRequestBodyReplicationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSourceServerReplicationTypeRequest();
    $request->requestBody = new UpdateSourceServerReplicationTypeRequestBody();
    $request->requestBody->replicationType = UpdateSourceServerReplicationTypeRequestBodyReplicationTypeEnum::SNAPSHOT_SHIPPING;
    $request->requestBody->sourceServerID = 'itaque';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->updateSourceServerReplicationType($request);

    if ($response->sourceServer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWave

Update wave.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWaveRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWaveRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWaveRequest();
    $request->requestBody = new UpdateWaveRequestBody();
    $request->requestBody->description = 'voluptate';
    $request->requestBody->name = 'Joann Bogan';
    $request->requestBody->waveID = 'iste';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->updateWave($request);

    if ($response->wave !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
