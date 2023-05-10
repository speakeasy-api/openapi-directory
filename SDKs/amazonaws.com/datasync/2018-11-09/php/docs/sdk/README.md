# SDK

## Overview

<fullname>DataSync</fullname> <p>DataSync is a managed data transfer service that makes it simpler for you to automate moving data between on-premises storage and Amazon Web Services storage services. You also can use DataSync to transfer data between other cloud providers and Amazon Web Services storage services.</p> <p>This API interface reference includes documentation for using DataSync programmatically. For complete information, see the <i> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User Guide</a> </i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/datasync/>
### Available Operations

* [addStorageSystem](#addstoragesystem) - Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect information about.
* [cancelTaskExecution](#canceltaskexecution) - <p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>
* [createAgent](#createagent) - <p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>
* [createLocationEfs](#createlocationefs) - Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.
* [createLocationFsxLustre](#createlocationfsxlustre) - Creates an endpoint for an Amazon FSx for Lustre file system.
* [createLocationFsxOntap](#createlocationfsxontap) - Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.
* [createLocationFsxOpenZfs](#createlocationfsxopenzfs) - <p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>
* [createLocationFsxWindows](#createlocationfsxwindows) - Creates an endpoint for an Amazon FSx for Windows File Server file system.
* [createLocationHdfs](#createlocationhdfs) - Creates an endpoint for a Hadoop Distributed File System (HDFS). 
* [createLocationNfs](#createlocationnfs) - Defines a file system on a Network File System (NFS) server that can be read from or written to.
* [createLocationObjectStorage](#createlocationobjectstorage) - Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* [createLocationS3](#createlocations3) - <p>A <i>location</i> is an endpoint for an Amazon S3 bucket. DataSync can use the location as a source or destination for copying data.</p> <important> <p>Before you create your location, make sure that you read the following sections:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a> </p> </li> </ul> </important> <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Creating an Amazon S3 location</a>.</p>
* [createLocationSmb](#createlocationsmb) - Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.
* [createTask](#createtask) - <p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
* [deleteAgent](#deleteagent) - Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
* [deleteLocation](#deletelocation) - Deletes the configuration of a location used by DataSync. 
* [deleteTask](#deletetask) - Deletes an DataSync task.
* [describeAgent](#describeagent) - Returns metadata about an DataSync agent, such as its name, endpoint type, and status.
* [describeDiscoveryJob](#describediscoveryjob) - Returns information about a DataSync discovery job.
* [describeLocationEfs](#describelocationefs) - Returns metadata about your DataSync location for an Amazon EFS file system.
* [describeLocationFsxLustre](#describelocationfsxlustre) - Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.
* [describeLocationFsxOntap](#describelocationfsxontap) - <p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>
* [describeLocationFsxOpenZfs](#describelocationfsxopenzfs) - <p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>
* [describeLocationFsxWindows](#describelocationfsxwindows) - Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.
* [describeLocationHdfs](#describelocationhdfs) - Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 
* [describeLocationNfs](#describelocationnfs) - Returns metadata, such as the path information, about an NFS location.
* [describeLocationObjectStorage](#describelocationobjectstorage) - Returns metadata about your DataSync location for an object storage system.
* [describeLocationS3](#describelocations3) - Returns metadata, such as bucket name, about an Amazon S3 bucket location.
* [describeLocationSmb](#describelocationsmb) - Returns metadata, such as the path and user information about an SMB location.
* [describeStorageSystem](#describestoragesystem) - Returns information about an on-premises storage system that you're using with DataSync Discovery.
* [describeStorageSystemResourceMetrics](#describestoragesystemresourcemetrics) - Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system.
* [describeStorageSystemResources](#describestoragesystemresources) - Returns information that DataSync Discovery collects about resources in your on-premises storage system.
* [describeTask](#describetask) - Returns metadata about a task.
* [describeTaskExecution](#describetaskexecution) - Returns detailed metadata about a task that is being executed.
* [generateRecommendations](#generaterecommendations) - <p>Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p> <note> <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync Discovery generates the recommendations for you automatically.</p> </note>
* [listAgents](#listagents) - <p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>
* [listDiscoveryJobs](#listdiscoveryjobs) - Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery.
* [listLocations](#listlocations) - <p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
* [listStorageSystems](#liststoragesystems) - Lists the on-premises storage systems that you're using with DataSync Discovery.
* [listTagsForResource](#listtagsforresource) - Returns all the tags associated with an Amazon Web Services resource.
* [listTaskExecutions](#listtaskexecutions) - Returns a list of executed tasks.
* [listTasks](#listtasks) - Returns a list of the DataSync tasks you created.
* [removeStorageSystem](#removestoragesystem) - Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations.
* [startDiscoveryJob](#startdiscoveryjob) - Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a> operation.
* [startTaskExecution](#starttaskexecution) - <p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
* [stopDiscoveryJob](#stopdiscoveryjob) - <p>Stops a running DataSync discovery job.</p> <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>
* [tagResource](#tagresource) - <p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>
* [untagResource](#untagresource) - Removes tags from an Amazon Web Services resource.
* [updateAgent](#updateagent) - Updates the name of an agent.
* [updateDiscoveryJob](#updatediscoveryjob) - Edits a DataSync discovery job configuration.
* [updateLocationHdfs](#updatelocationhdfs) - Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.
* [updateLocationNfs](#updatelocationnfs) - Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.
* [updateLocationObjectStorage](#updatelocationobjectstorage) - Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* [updateLocationSmb](#updatelocationsmb) - Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.
* [updateStorageSystem](#updatestoragesystem) - Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery.
* [updateTask](#updatetask) - Updates the metadata associated with a task.
* [updateTaskExecution](#updatetaskexecution) - <p>Modifies a running DataSync task.</p> <note> <p>Currently, the only <code>Option</code> that you can modify with <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>, which throttles bandwidth for a running or queued task.</p> </note>

## addStorageSystem

Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect information about.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Credentials;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveryServerConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiscoverySystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\AddStorageSystemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddStorageSystemRequest();
    $request->addStorageSystemRequest = new AddStorageSystemRequest();
    $request->addStorageSystemRequest->agentArns = [
        'excepturi',
        'nisi',
    ];
    $request->addStorageSystemRequest->clientToken = 'recusandae';
    $request->addStorageSystemRequest->cloudWatchLogGroupArn = 'temporibus';
    $request->addStorageSystemRequest->credentials = new Credentials();
    $request->addStorageSystemRequest->credentials->password = 'ab';
    $request->addStorageSystemRequest->credentials->username = 'quis';
    $request->addStorageSystemRequest->name = 'Iris Aufderhar';
    $request->addStorageSystemRequest->serverConfiguration = new DiscoveryServerConfiguration();
    $request->addStorageSystemRequest->serverConfiguration->serverHostname = 'sapiente';
    $request->addStorageSystemRequest->serverConfiguration->serverPort = 778157;
    $request->addStorageSystemRequest->systemType = DiscoverySystemTypeEnum::NET_APP_ONTAP;
    $request->addStorageSystemRequest->tags = [
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = AddStorageSystemXAmzTargetEnum::FMRS_SERVICE_ADD_STORAGE_SYSTEM;

    $response = $sdk->sdk->addStorageSystem($request);

    if ($response->addStorageSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelTaskExecution

<p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelTaskExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelTaskExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelTaskExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelTaskExecutionRequest();
    $request->cancelTaskExecutionRequest = new CancelTaskExecutionRequest();
    $request->cancelTaskExecutionRequest->taskExecutionArn = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = CancelTaskExecutionXAmzTargetEnum::FMRS_SERVICE_CANCEL_TASK_EXECUTION;

    $response = $sdk->sdk->cancelTaskExecution($request);

    if ($response->cancelTaskExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAgent

<p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateAgentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAgentRequest();
    $request->createAgentRequest = new CreateAgentRequest();
    $request->createAgentRequest->activationKey = 'deleniti';
    $request->createAgentRequest->agentName = 'hic';
    $request->createAgentRequest->securityGroupArns = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->createAgentRequest->subnetArns = [
        'qui',
        'impedit',
    ];
    $request->createAgentRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->createAgentRequest->vpcEndpointId = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = CreateAgentXAmzTargetEnum::FMRS_SERVICE_CREATE_AGENT;

    $response = $sdk->sdk->createAgent($request);

    if ($response->createAgentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationEfs

Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationEfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationEfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Ec2Config;
use \OpenAPI\OpenAPI\Models\Shared\EfsInTransitEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationEfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationEfsRequest();
    $request->createLocationEfsRequest = new CreateLocationEfsRequest();
    $request->createLocationEfsRequest->accessPointArn = 'iste';
    $request->createLocationEfsRequest->ec2Config = new Ec2Config();
    $request->createLocationEfsRequest->ec2Config->securityGroupArns = [
        'natus',
    ];
    $request->createLocationEfsRequest->ec2Config->subnetArn = 'laboriosam';
    $request->createLocationEfsRequest->efsFilesystemArn = 'hic';
    $request->createLocationEfsRequest->fileSystemAccessRoleArn = 'saepe';
    $request->createLocationEfsRequest->inTransitEncryption = EfsInTransitEncryptionEnum::TLS12;
    $request->createLocationEfsRequest->subdirectory = 'in';
    $request->createLocationEfsRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = CreateLocationEfsXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_EFS;

    $response = $sdk->sdk->createLocationEfs($request);

    if ($response->createLocationEfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationFsxLustre

Creates an endpoint for an Amazon FSx for Lustre file system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationFsxLustreRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationFsxLustreRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationFsxLustreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationFsxLustreRequest();
    $request->createLocationFsxLustreRequest = new CreateLocationFsxLustreRequest();
    $request->createLocationFsxLustreRequest->fsxFilesystemArn = 'est';
    $request->createLocationFsxLustreRequest->securityGroupArns = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->createLocationFsxLustreRequest->subdirectory = 'corporis';
    $request->createLocationFsxLustreRequest->tags = [
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = CreateLocationFsxLustreXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_FSX_LUSTRE;

    $response = $sdk->sdk->createLocationFsxLustre($request);

    if ($response->createLocationFsxLustreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationFsxOntap

Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationFsxOntapRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationFsxOntapRequest;
use \OpenAPI\OpenAPI\Models\Shared\FsxProtocol;
use \OpenAPI\OpenAPI\Models\Shared\FsxProtocolNfs;
use \OpenAPI\OpenAPI\Models\Shared\NfsMountOptions;
use \OpenAPI\OpenAPI\Models\Shared\NfsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FsxProtocolSmb;
use \OpenAPI\OpenAPI\Models\Shared\SmbMountOptions;
use \OpenAPI\OpenAPI\Models\Shared\SmbVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationFsxOntapXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationFsxOntapRequest();
    $request->createLocationFsxOntapRequest = new CreateLocationFsxOntapRequest();
    $request->createLocationFsxOntapRequest->protocol = new FsxProtocol();
    $request->createLocationFsxOntapRequest->protocol->nfs = new FsxProtocolNfs();
    $request->createLocationFsxOntapRequest->protocol->nfs->mountOptions = new NfsMountOptions();
    $request->createLocationFsxOntapRequest->protocol->nfs->mountOptions->version = NfsVersionEnum::NFS3;
    $request->createLocationFsxOntapRequest->protocol->smb = new FsxProtocolSmb();
    $request->createLocationFsxOntapRequest->protocol->smb->domain = 'culpa';
    $request->createLocationFsxOntapRequest->protocol->smb->mountOptions = new SmbMountOptions();
    $request->createLocationFsxOntapRequest->protocol->smb->mountOptions->version = SmbVersionEnum::SMB20;
    $request->createLocationFsxOntapRequest->protocol->smb->password = 'sapiente';
    $request->createLocationFsxOntapRequest->protocol->smb->user = 'architecto';
    $request->createLocationFsxOntapRequest->securityGroupArns = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->createLocationFsxOntapRequest->storageVirtualMachineArn = 'repellat';
    $request->createLocationFsxOntapRequest->subdirectory = 'mollitia';
    $request->createLocationFsxOntapRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = CreateLocationFsxOntapXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_FSX_ONTAP;

    $response = $sdk->sdk->createLocationFsxOntap($request);

    if ($response->createLocationFsxOntapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationFsxOpenZfs

<p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationFsxOpenZfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationFsxOpenZfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FsxProtocol;
use \OpenAPI\OpenAPI\Models\Shared\FsxProtocolNfs;
use \OpenAPI\OpenAPI\Models\Shared\NfsMountOptions;
use \OpenAPI\OpenAPI\Models\Shared\NfsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FsxProtocolSmb;
use \OpenAPI\OpenAPI\Models\Shared\SmbMountOptions;
use \OpenAPI\OpenAPI\Models\Shared\SmbVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationFsxOpenZfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationFsxOpenZfsRequest();
    $request->createLocationFsxOpenZfsRequest = new CreateLocationFsxOpenZfsRequest();
    $request->createLocationFsxOpenZfsRequest->fsxFilesystemArn = 'quis';
    $request->createLocationFsxOpenZfsRequest->protocol = new FsxProtocol();
    $request->createLocationFsxOpenZfsRequest->protocol->nfs = new FsxProtocolNfs();
    $request->createLocationFsxOpenZfsRequest->protocol->nfs->mountOptions = new NfsMountOptions();
    $request->createLocationFsxOpenZfsRequest->protocol->nfs->mountOptions->version = NfsVersionEnum::AUTOMATIC;
    $request->createLocationFsxOpenZfsRequest->protocol->smb = new FsxProtocolSmb();
    $request->createLocationFsxOpenZfsRequest->protocol->smb->domain = 'laborum';
    $request->createLocationFsxOpenZfsRequest->protocol->smb->mountOptions = new SmbMountOptions();
    $request->createLocationFsxOpenZfsRequest->protocol->smb->mountOptions->version = SmbVersionEnum::SMB1;
    $request->createLocationFsxOpenZfsRequest->protocol->smb->password = 'enim';
    $request->createLocationFsxOpenZfsRequest->protocol->smb->user = 'odit';
    $request->createLocationFsxOpenZfsRequest->securityGroupArns = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->createLocationFsxOpenZfsRequest->subdirectory = 'possimus';
    $request->createLocationFsxOpenZfsRequest->tags = [
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = CreateLocationFsxOpenZfsXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_FSX_OPEN_ZFS;

    $response = $sdk->sdk->createLocationFsxOpenZfs($request);

    if ($response->createLocationFsxOpenZfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationFsxWindows

Creates an endpoint for an Amazon FSx for Windows File Server file system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationFsxWindowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationFsxWindowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationFsxWindowsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationFsxWindowsRequest();
    $request->createLocationFsxWindowsRequest = new CreateLocationFsxWindowsRequest();
    $request->createLocationFsxWindowsRequest->domain = 'vero';
    $request->createLocationFsxWindowsRequest->fsxFilesystemArn = 'nihil';
    $request->createLocationFsxWindowsRequest->password = 'praesentium';
    $request->createLocationFsxWindowsRequest->securityGroupArns = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->createLocationFsxWindowsRequest->subdirectory = 'perferendis';
    $request->createLocationFsxWindowsRequest->tags = [
        new TagListEntry(),
    ];
    $request->createLocationFsxWindowsRequest->user = 'reprehenderit';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CreateLocationFsxWindowsXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_FSX_WINDOWS;

    $response = $sdk->sdk->createLocationFsxWindows($request);

    if ($response->createLocationFsxWindowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationHdfs

Creates an endpoint for a Hadoop Distributed File System (HDFS). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationHdfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationHdfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\HdfsAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HdfsNameNode;
use \OpenAPI\OpenAPI\Models\Shared\QopConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HdfsDataTransferProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\HdfsRpcProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationHdfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationHdfsRequest();
    $request->createLocationHdfsRequest = new CreateLocationHdfsRequest();
    $request->createLocationHdfsRequest->agentArns = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->createLocationHdfsRequest->authenticationType = HdfsAuthenticationTypeEnum::KERBEROS;
    $request->createLocationHdfsRequest->blockSize = 64147;
    $request->createLocationHdfsRequest->kerberosKeytab = 'ipsum';
    $request->createLocationHdfsRequest->kerberosKrb5Conf = 'quidem';
    $request->createLocationHdfsRequest->kerberosPrincipal = 'molestias';
    $request->createLocationHdfsRequest->kmsKeyProviderUri = 'excepturi';
    $request->createLocationHdfsRequest->nameNodes = [
        new HdfsNameNode(),
        new HdfsNameNode(),
        new HdfsNameNode(),
        new HdfsNameNode(),
    ];
    $request->createLocationHdfsRequest->qopConfiguration = new QopConfiguration();
    $request->createLocationHdfsRequest->qopConfiguration->dataTransferProtection = HdfsDataTransferProtectionEnum::AUTHENTICATION;
    $request->createLocationHdfsRequest->qopConfiguration->rpcProtection = HdfsRpcProtectionEnum::INTEGRITY;
    $request->createLocationHdfsRequest->replicationFactor = 523248;
    $request->createLocationHdfsRequest->simpleUser = 'voluptates';
    $request->createLocationHdfsRequest->subdirectory = 'quasi';
    $request->createLocationHdfsRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = CreateLocationHdfsXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_HDFS;

    $response = $sdk->sdk->createLocationHdfs($request);

    if ($response->createLocationHdfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationNfs

Defines a file system on a Network File System (NFS) server that can be read from or written to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationNfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationNfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NfsMountOptions;
use \OpenAPI\OpenAPI\Models\Shared\NfsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnPremConfig;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationNfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationNfsRequest();
    $request->createLocationNfsRequest = new CreateLocationNfsRequest();
    $request->createLocationNfsRequest->mountOptions = new NfsMountOptions();
    $request->createLocationNfsRequest->mountOptions->version = NfsVersionEnum::NFS41;
    $request->createLocationNfsRequest->onPremConfig = new OnPremConfig();
    $request->createLocationNfsRequest->onPremConfig->agentArns = [
        'deserunt',
    ];
    $request->createLocationNfsRequest->serverHostname = 'distinctio';
    $request->createLocationNfsRequest->subdirectory = 'quibusdam';
    $request->createLocationNfsRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = CreateLocationNfsXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_NFS;

    $response = $sdk->sdk->createLocationNfs($request);

    if ($response->createLocationNfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationObjectStorage

Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationObjectStorageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationObjectStorageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectStorageServerProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationObjectStorageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationObjectStorageRequest();
    $request->createLocationObjectStorageRequest = new CreateLocationObjectStorageRequest();
    $request->createLocationObjectStorageRequest->accessKey = 'assumenda';
    $request->createLocationObjectStorageRequest->agentArns = [
        'alias',
        'fugit',
    ];
    $request->createLocationObjectStorageRequest->bucketName = 'dolorum';
    $request->createLocationObjectStorageRequest->secretKey = 'excepturi';
    $request->createLocationObjectStorageRequest->serverCertificate = 'tempora';
    $request->createLocationObjectStorageRequest->serverHostname = 'facilis';
    $request->createLocationObjectStorageRequest->serverPort = 735194;
    $request->createLocationObjectStorageRequest->serverProtocol = ObjectStorageServerProtocolEnum::HTTPS;
    $request->createLocationObjectStorageRequest->subdirectory = 'delectus';
    $request->createLocationObjectStorageRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = CreateLocationObjectStorageXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_OBJECT_STORAGE;

    $response = $sdk->sdk->createLocationObjectStorage($request);

    if ($response->createLocationObjectStorageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationS3

<p>A <i>location</i> is an endpoint for an Amazon S3 bucket. DataSync can use the location as a source or destination for copying data.</p> <important> <p>Before you create your location, make sure that you read the following sections:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a> </p> </li> </ul> </important> <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Creating an Amazon S3 location</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationS3Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationS3Request;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\S3StorageClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationS3XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationS3Request();
    $request->createLocationS3Request = new CreateLocationS3Request();
    $request->createLocationS3Request->agentArns = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->createLocationS3Request->s3BucketArn = 'dolorum';
    $request->createLocationS3Request->s3Config = new S3Config();
    $request->createLocationS3Request->s3Config->bucketAccessRoleArn = 'in';
    $request->createLocationS3Request->s3StorageClass = S3StorageClassEnum::INTELLIGENT_TIERING;
    $request->createLocationS3Request->subdirectory = 'illum';
    $request->createLocationS3Request->tags = [
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = CreateLocationS3XAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_S3;

    $response = $sdk->sdk->createLocationS3($request);

    if ($response->createLocationS3Response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLocationSmb

Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationSmbRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLocationSmbRequest;
use \OpenAPI\OpenAPI\Models\Shared\SmbMountOptions;
use \OpenAPI\OpenAPI\Models\Shared\SmbVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateLocationSmbXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLocationSmbRequest();
    $request->createLocationSmbRequest = new CreateLocationSmbRequest();
    $request->createLocationSmbRequest->agentArns = [
        'accusamus',
        'non',
        'occaecati',
    ];
    $request->createLocationSmbRequest->domain = 'enim';
    $request->createLocationSmbRequest->mountOptions = new SmbMountOptions();
    $request->createLocationSmbRequest->mountOptions->version = SmbVersionEnum::SMB20;
    $request->createLocationSmbRequest->password = 'delectus';
    $request->createLocationSmbRequest->serverHostname = 'quidem';
    $request->createLocationSmbRequest->subdirectory = 'provident';
    $request->createLocationSmbRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->createLocationSmbRequest->user = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = CreateLocationSmbXAmzTargetEnum::FMRS_SERVICE_CREATE_LOCATION_SMB;

    $response = $sdk->sdk->createLocationSmb($request);

    if ($response->createLocationSmbResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTask

<p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterRule;
use \OpenAPI\OpenAPI\Models\Shared\FilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\AtimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GidEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MtimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\OverwriteModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreserveDeletedFilesEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreserveDevicesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SmbSecurityDescriptorCopyFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskQueueingEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UidEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedule;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskRequest();
    $request->createTaskRequest = new CreateTaskRequest();
    $request->createTaskRequest->cloudWatchLogGroupArn = 'natus';
    $request->createTaskRequest->destinationLocationArn = 'omnis';
    $request->createTaskRequest->excludes = [
        new FilterRule(),
        new FilterRule(),
    ];
    $request->createTaskRequest->includes = [
        new FilterRule(),
    ];
    $request->createTaskRequest->name = 'Megan Rau';
    $request->createTaskRequest->options = new Options();
    $request->createTaskRequest->options->atime = AtimeEnum::NONE;
    $request->createTaskRequest->options->bytesPerSecond = 383462;
    $request->createTaskRequest->options->gid = GidEnum::NAME;
    $request->createTaskRequest->options->logLevel = LogLevelEnum::TRANSFER;
    $request->createTaskRequest->options->mtime = MtimeEnum::NONE;
    $request->createTaskRequest->options->objectTags = ObjectTagsEnum::NONE;
    $request->createTaskRequest->options->overwriteMode = OverwriteModeEnum::ALWAYS;
    $request->createTaskRequest->options->posixPermissions = PosixPermissionsEnum::NONE;
    $request->createTaskRequest->options->preserveDeletedFiles = PreserveDeletedFilesEnum::PRESERVE;
    $request->createTaskRequest->options->preserveDevices = PreserveDevicesEnum::NONE;
    $request->createTaskRequest->options->securityDescriptorCopyFlags = SmbSecurityDescriptorCopyFlagsEnum::OWNER_DACL;
    $request->createTaskRequest->options->taskQueueing = TaskQueueingEnum::ENABLED;
    $request->createTaskRequest->options->transferMode = TransferModeEnum::ALL;
    $request->createTaskRequest->options->uid = UidEnum::NAME;
    $request->createTaskRequest->options->verifyMode = VerifyModeEnum::ONLY_FILES_TRANSFERRED;
    $request->createTaskRequest->schedule = new TaskSchedule();
    $request->createTaskRequest->schedule->scheduleExpression = 'accusantium';
    $request->createTaskRequest->sourceLocationArn = 'mollitia';
    $request->createTaskRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = CreateTaskXAmzTargetEnum::FMRS_SERVICE_CREATE_TASK;

    $response = $sdk->sdk->createTask($request);

    if ($response->createTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAgent

Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAgentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAgentRequest();
    $request->deleteAgentRequest = new DeleteAgentRequest();
    $request->deleteAgentRequest->agentArn = 'quasi';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DeleteAgentXAmzTargetEnum::FMRS_SERVICE_DELETE_AGENT;

    $response = $sdk->sdk->deleteAgent($request);

    if ($response->deleteAgentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLocation

Deletes the configuration of a location used by DataSync. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLocationRequest();
    $request->deleteLocationRequest = new DeleteLocationRequest();
    $request->deleteLocationRequest->locationArn = 'in';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = DeleteLocationXAmzTargetEnum::FMRS_SERVICE_DELETE_LOCATION;

    $response = $sdk->sdk->deleteLocation($request);

    if ($response->deleteLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTask

Deletes an DataSync task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaskRequest();
    $request->deleteTaskRequest = new DeleteTaskRequest();
    $request->deleteTaskRequest->taskArn = 'quibusdam';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeleteTaskXAmzTargetEnum::FMRS_SERVICE_DELETE_TASK;

    $response = $sdk->sdk->deleteTask($request);

    if ($response->deleteTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAgent

Returns metadata about an DataSync agent, such as its name, endpoint type, and status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAgentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAgentRequest();
    $request->describeAgentRequest = new DescribeAgentRequest();
    $request->describeAgentRequest->agentArn = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeAgentXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_AGENT;

    $response = $sdk->sdk->describeAgent($request);

    if ($response->describeAgentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDiscoveryJob

Returns information about a DataSync discovery job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDiscoveryJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDiscoveryJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDiscoveryJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDiscoveryJobRequest();
    $request->describeDiscoveryJobRequest = new DescribeDiscoveryJobRequest();
    $request->describeDiscoveryJobRequest->discoveryJobArn = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DescribeDiscoveryJobXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_DISCOVERY_JOB;

    $response = $sdk->sdk->describeDiscoveryJob($request);

    if ($response->describeDiscoveryJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationEfs

Returns metadata about your DataSync location for an Amazon EFS file system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationEfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationEfsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationEfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationEfsRequest();
    $request->describeLocationEfsRequest = new DescribeLocationEfsRequest();
    $request->describeLocationEfsRequest->locationArn = 'autem';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = DescribeLocationEfsXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_EFS;

    $response = $sdk->sdk->describeLocationEfs($request);

    if ($response->describeLocationEfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationFsxLustre

Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationFsxLustreRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationFsxLustreRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationFsxLustreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationFsxLustreRequest();
    $request->describeLocationFsxLustreRequest = new DescribeLocationFsxLustreRequest();
    $request->describeLocationFsxLustreRequest->locationArn = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = DescribeLocationFsxLustreXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_FSX_LUSTRE;

    $response = $sdk->sdk->describeLocationFsxLustre($request);

    if ($response->describeLocationFsxLustreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationFsxOntap

<p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationFsxOntapRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationFsxOntapRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationFsxOntapXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationFsxOntapRequest();
    $request->describeLocationFsxOntapRequest = new DescribeLocationFsxOntapRequest();
    $request->describeLocationFsxOntapRequest->locationArn = 'quis';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DescribeLocationFsxOntapXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_FSX_ONTAP;

    $response = $sdk->sdk->describeLocationFsxOntap($request);

    if ($response->describeLocationFsxOntapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationFsxOpenZfs

<p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationFsxOpenZfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationFsxOpenZfsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationFsxOpenZfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationFsxOpenZfsRequest();
    $request->describeLocationFsxOpenZfsRequest = new DescribeLocationFsxOpenZfsRequest();
    $request->describeLocationFsxOpenZfsRequest->locationArn = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = DescribeLocationFsxOpenZfsXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_FSX_OPEN_ZFS;

    $response = $sdk->sdk->describeLocationFsxOpenZfs($request);

    if ($response->describeLocationFsxOpenZfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationFsxWindows

Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationFsxWindowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationFsxWindowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationFsxWindowsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationFsxWindowsRequest();
    $request->describeLocationFsxWindowsRequest = new DescribeLocationFsxWindowsRequest();
    $request->describeLocationFsxWindowsRequest->locationArn = 'omnis';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = DescribeLocationFsxWindowsXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_FSX_WINDOWS;

    $response = $sdk->sdk->describeLocationFsxWindows($request);

    if ($response->describeLocationFsxWindowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationHdfs

Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationHdfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationHdfsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationHdfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationHdfsRequest();
    $request->describeLocationHdfsRequest = new DescribeLocationHdfsRequest();
    $request->describeLocationHdfsRequest->locationArn = 'eaque';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = DescribeLocationHdfsXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_HDFS;

    $response = $sdk->sdk->describeLocationHdfs($request);

    if ($response->describeLocationHdfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationNfs

Returns metadata, such as the path information, about an NFS location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationNfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationNfsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationNfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationNfsRequest();
    $request->describeLocationNfsRequest = new DescribeLocationNfsRequest();
    $request->describeLocationNfsRequest->locationArn = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = DescribeLocationNfsXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_NFS;

    $response = $sdk->sdk->describeLocationNfs($request);

    if ($response->describeLocationNfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationObjectStorage

Returns metadata about your DataSync location for an object storage system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationObjectStorageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationObjectStorageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationObjectStorageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationObjectStorageRequest();
    $request->describeLocationObjectStorageRequest = new DescribeLocationObjectStorageRequest();
    $request->describeLocationObjectStorageRequest->locationArn = 'quos';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DescribeLocationObjectStorageXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_OBJECT_STORAGE;

    $response = $sdk->sdk->describeLocationObjectStorage($request);

    if ($response->describeLocationObjectStorageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationS3

Returns metadata, such as bucket name, about an Amazon S3 bucket location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationS3Request;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationS3Request;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationS3XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationS3Request();
    $request->describeLocationS3Request = new DescribeLocationS3Request();
    $request->describeLocationS3Request->locationArn = 'excepturi';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = DescribeLocationS3XAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_S3;

    $response = $sdk->sdk->describeLocationS3($request);

    if ($response->describeLocationS3Response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocationSmb

Returns metadata, such as the path and user information about an SMB location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationSmbRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLocationSmbRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationSmbXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationSmbRequest();
    $request->describeLocationSmbRequest = new DescribeLocationSmbRequest();
    $request->describeLocationSmbRequest->locationArn = 'veritatis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DescribeLocationSmbXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_LOCATION_SMB;

    $response = $sdk->sdk->describeLocationSmb($request);

    if ($response->describeLocationSmbResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStorageSystem

Returns information about an on-premises storage system that you're using with DataSync Discovery.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageSystemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStorageSystemRequest();
    $request->describeStorageSystemRequest = new DescribeStorageSystemRequest();
    $request->describeStorageSystemRequest->storageSystemArn = 'voluptatibus';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = DescribeStorageSystemXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_STORAGE_SYSTEM;

    $response = $sdk->sdk->describeStorageSystem($request);

    if ($response->describeStorageSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStorageSystemResourceMetrics

Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageSystemResourceMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStorageSystemResourceMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveryResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageSystemResourceMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStorageSystemResourceMetricsRequest();
    $request->describeStorageSystemResourceMetricsRequest = new DescribeStorageSystemResourceMetricsRequest();
    $request->describeStorageSystemResourceMetricsRequest->discoveryJobArn = 'soluta';
    $request->describeStorageSystemResourceMetricsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-16T14:59:31.978Z');
    $request->describeStorageSystemResourceMetricsRequest->maxResults = 453697;
    $request->describeStorageSystemResourceMetricsRequest->nextToken = 'dolorum';
    $request->describeStorageSystemResourceMetricsRequest->resourceId = 'deleniti';
    $request->describeStorageSystemResourceMetricsRequest->resourceType = DiscoveryResourceTypeEnum::VOLUME;
    $request->describeStorageSystemResourceMetricsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-09T09:45:52.295Z');
    $request->maxResults = 'asperiores';
    $request->nextToken = 'nihil';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DescribeStorageSystemResourceMetricsXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_STORAGE_SYSTEM_RESOURCE_METRICS;

    $response = $sdk->sdk->describeStorageSystemResourceMetrics($request);

    if ($response->describeStorageSystemResourceMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStorageSystemResources

Returns information that DataSync Discovery collects about resources in your on-premises storage system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageSystemResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStorageSystemResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveryResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStorageSystemResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStorageSystemResourcesRequest();
    $request->describeStorageSystemResourcesRequest = new DescribeStorageSystemResourcesRequest();
    $request->describeStorageSystemResourcesRequest->discoveryJobArn = 'amet';
    $request->describeStorageSystemResourcesRequest->filter = [
        'accusamus' => [
            'saepe',
            'suscipit',
        ],
        'deserunt' => [
            'minima',
            'repellendus',
            'totam',
        ],
        'similique' => [
            'at',
        ],
        'quaerat' => [
            'vel',
            'quod',
        ],
    ];
    $request->describeStorageSystemResourcesRequest->maxResults = 885338;
    $request->describeStorageSystemResourcesRequest->nextToken = 'qui';
    $request->describeStorageSystemResourcesRequest->resourceIds = [
        'a',
        'esse',
        'harum',
    ];
    $request->describeStorageSystemResourcesRequest->resourceType = DiscoveryResourceTypeEnum::VOLUME;
    $request->maxResults = 'ipsum';
    $request->nextToken = 'quisquam';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribeStorageSystemResourcesXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_STORAGE_SYSTEM_RESOURCES;

    $response = $sdk->sdk->describeStorageSystemResources($request);

    if ($response->describeStorageSystemResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTask

Returns metadata about a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTaskRequest();
    $request->describeTaskRequest = new DescribeTaskRequest();
    $request->describeTaskRequest->taskArn = 'sapiente';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DescribeTaskXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_TASK;

    $response = $sdk->sdk->describeTask($request);

    if ($response->describeTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTaskExecution

Returns detailed metadata about a task that is being executed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTaskExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTaskExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTaskExecutionRequest();
    $request->describeTaskExecutionRequest = new DescribeTaskExecutionRequest();
    $request->describeTaskExecutionRequest->taskExecutionArn = 'libero';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DescribeTaskExecutionXAmzTargetEnum::FMRS_SERVICE_DESCRIBE_TASK_EXECUTION;

    $response = $sdk->sdk->describeTaskExecution($request);

    if ($response->describeTaskExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateRecommendations

<p>Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p> <note> <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync Discovery generates the recommendations for you automatically.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerateRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveryResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenerateRecommendationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateRecommendationsRequest();
    $request->generateRecommendationsRequest = new GenerateRecommendationsRequest();
    $request->generateRecommendationsRequest->discoveryJobArn = 'maxime';
    $request->generateRecommendationsRequest->resourceIds = [
        'soluta',
        'dicta',
        'laborum',
        'totam',
    ];
    $request->generateRecommendationsRequest->resourceType = DiscoveryResourceTypeEnum::SVM;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = GenerateRecommendationsXAmzTargetEnum::FMRS_SERVICE_GENERATE_RECOMMENDATIONS;

    $response = $sdk->sdk->generateRecommendations($request);

    if ($response->generateRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAgents

<p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAgentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAgentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAgentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAgentsRequest();
    $request->listAgentsRequest = new ListAgentsRequest();
    $request->listAgentsRequest->maxResults = 840429;
    $request->listAgentsRequest->nextToken = 'qui';
    $request->maxResults = 'neque';
    $request->nextToken = 'fugit';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = ListAgentsXAmzTargetEnum::FMRS_SERVICE_LIST_AGENTS;

    $response = $sdk->sdk->listAgents($request);

    if ($response->listAgentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDiscoveryJobs

Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDiscoveryJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDiscoveryJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDiscoveryJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDiscoveryJobsRequest();
    $request->listDiscoveryJobsRequest = new ListDiscoveryJobsRequest();
    $request->listDiscoveryJobsRequest->maxResults = 765326;
    $request->listDiscoveryJobsRequest->nextToken = 'soluta';
    $request->listDiscoveryJobsRequest->storageSystemArn = 'nobis';
    $request->maxResults = 'et';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = ListDiscoveryJobsXAmzTargetEnum::FMRS_SERVICE_LIST_DISCOVERY_JOBS;

    $response = $sdk->sdk->listDiscoveryJobs($request);

    if ($response->listDiscoveryJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLocations

<p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocationFilter;
use \OpenAPI\OpenAPI\Models\Shared\LocationFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLocationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLocationsRequest();
    $request->listLocationsRequest = new ListLocationsRequest();
    $request->listLocationsRequest->filters = [
        new LocationFilter(),
        new LocationFilter(),
        new LocationFilter(),
        new LocationFilter(),
    ];
    $request->listLocationsRequest->maxResults = 209157;
    $request->listLocationsRequest->nextToken = 'dolore';
    $request->maxResults = 'labore';
    $request->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = ListLocationsXAmzTargetEnum::FMRS_SERVICE_LIST_LOCATIONS;

    $response = $sdk->sdk->listLocations($request);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStorageSystems

Lists the on-premises storage systems that you're using with DataSync Discovery.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStorageSystemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStorageSystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStorageSystemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStorageSystemsRequest();
    $request->listStorageSystemsRequest = new ListStorageSystemsRequest();
    $request->listStorageSystemsRequest->maxResults = 669917;
    $request->listStorageSystemsRequest->nextToken = 'repellendus';
    $request->maxResults = 'porro';
    $request->nextToken = 'doloribus';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = ListStorageSystemsXAmzTargetEnum::FMRS_SERVICE_LIST_STORAGE_SYSTEMS;

    $response = $sdk->sdk->listStorageSystems($request);

    if ($response->listStorageSystemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns all the tags associated with an Amazon Web Services resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->maxResults = 580447;
    $request->listTagsForResourceRequest->nextToken = 'voluptatibus';
    $request->listTagsForResourceRequest->resourceArn = 'quisquam';
    $request->maxResults = 'vero';
    $request->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::FMRS_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTaskExecutions

Returns a list of executed tasks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTaskExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskExecutionsRequest();
    $request->listTaskExecutionsRequest = new ListTaskExecutionsRequest();
    $request->listTaskExecutionsRequest->maxResults = 492268;
    $request->listTaskExecutionsRequest->nextToken = 'hic';
    $request->listTaskExecutionsRequest->taskArn = 'distinctio';
    $request->maxResults = 'quod';
    $request->nextToken = 'odio';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = ListTaskExecutionsXAmzTargetEnum::FMRS_SERVICE_LIST_TASK_EXECUTIONS;

    $response = $sdk->sdk->listTaskExecutions($request);

    if ($response->listTaskExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTasks

Returns a list of the DataSync tasks you created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskFilter;
use \OpenAPI\OpenAPI\Models\Shared\TaskFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTasksRequest();
    $request->listTasksRequest = new ListTasksRequest();
    $request->listTasksRequest->filters = [
        new TaskFilter(),
    ];
    $request->listTasksRequest->maxResults = 617877;
    $request->listTasksRequest->nextToken = 'impedit';
    $request->maxResults = 'aut';
    $request->nextToken = 'voluptatibus';
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = ListTasksXAmzTargetEnum::FMRS_SERVICE_LIST_TASKS;

    $response = $sdk->sdk->listTasks($request);

    if ($response->listTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeStorageSystem

Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveStorageSystemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveStorageSystemRequest();
    $request->removeStorageSystemRequest = new RemoveStorageSystemRequest();
    $request->removeStorageSystemRequest->storageSystemArn = 'eligendi';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = RemoveStorageSystemXAmzTargetEnum::FMRS_SERVICE_REMOVE_STORAGE_SYSTEM;

    $response = $sdk->sdk->removeStorageSystem($request);

    if ($response->removeStorageSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDiscoveryJob

Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDiscoveryJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDiscoveryJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\StartDiscoveryJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDiscoveryJobRequest();
    $request->startDiscoveryJobRequest = new StartDiscoveryJobRequest();
    $request->startDiscoveryJobRequest->clientToken = 'vel';
    $request->startDiscoveryJobRequest->collectionDurationMinutes = 822118;
    $request->startDiscoveryJobRequest->storageSystemArn = 'magnam';
    $request->startDiscoveryJobRequest->tags = [
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = StartDiscoveryJobXAmzTargetEnum::FMRS_SERVICE_START_DISCOVERY_JOB;

    $response = $sdk->sdk->startDiscoveryJob($request);

    if ($response->startDiscoveryJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTaskExecution

<p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTaskExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartTaskExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterRule;
use \OpenAPI\OpenAPI\Models\Shared\FilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\AtimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GidEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MtimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\OverwriteModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreserveDeletedFilesEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreserveDevicesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SmbSecurityDescriptorCopyFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskQueueingEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UidEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\StartTaskExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTaskExecutionRequest();
    $request->startTaskExecutionRequest = new StartTaskExecutionRequest();
    $request->startTaskExecutionRequest->excludes = [
        new FilterRule(),
        new FilterRule(),
        new FilterRule(),
        new FilterRule(),
    ];
    $request->startTaskExecutionRequest->includes = [
        new FilterRule(),
        new FilterRule(),
        new FilterRule(),
    ];
    $request->startTaskExecutionRequest->overrideOptions = new Options();
    $request->startTaskExecutionRequest->overrideOptions->atime = AtimeEnum::BEST_EFFORT;
    $request->startTaskExecutionRequest->overrideOptions->bytesPerSecond = 343605;
    $request->startTaskExecutionRequest->overrideOptions->gid = GidEnum::BOTH;
    $request->startTaskExecutionRequest->overrideOptions->logLevel = LogLevelEnum::TRANSFER;
    $request->startTaskExecutionRequest->overrideOptions->mtime = MtimeEnum::PRESERVE;
    $request->startTaskExecutionRequest->overrideOptions->objectTags = ObjectTagsEnum::PRESERVE;
    $request->startTaskExecutionRequest->overrideOptions->overwriteMode = OverwriteModeEnum::NEVER;
    $request->startTaskExecutionRequest->overrideOptions->posixPermissions = PosixPermissionsEnum::NONE;
    $request->startTaskExecutionRequest->overrideOptions->preserveDeletedFiles = PreserveDeletedFilesEnum::PRESERVE;
    $request->startTaskExecutionRequest->overrideOptions->preserveDevices = PreserveDevicesEnum::NONE;
    $request->startTaskExecutionRequest->overrideOptions->securityDescriptorCopyFlags = SmbSecurityDescriptorCopyFlagsEnum::NONE;
    $request->startTaskExecutionRequest->overrideOptions->taskQueueing = TaskQueueingEnum::ENABLED;
    $request->startTaskExecutionRequest->overrideOptions->transferMode = TransferModeEnum::CHANGED;
    $request->startTaskExecutionRequest->overrideOptions->uid = UidEnum::BOTH;
    $request->startTaskExecutionRequest->overrideOptions->verifyMode = VerifyModeEnum::POINT_IN_TIME_CONSISTENT;
    $request->startTaskExecutionRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->startTaskExecutionRequest->taskArn = 'aspernatur';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = StartTaskExecutionXAmzTargetEnum::FMRS_SERVICE_START_TASK_EXECUTION;

    $response = $sdk->sdk->startTaskExecution($request);

    if ($response->startTaskExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopDiscoveryJob

<p>Stops a running DataSync discovery job.</p> <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopDiscoveryJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopDiscoveryJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopDiscoveryJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopDiscoveryJobRequest();
    $request->stopDiscoveryJobRequest = new StopDiscoveryJobRequest();
    $request->stopDiscoveryJobRequest->discoveryJobArn = 'impedit';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = StopDiscoveryJobXAmzTargetEnum::FMRS_SERVICE_STOP_DISCOVERY_JOB;

    $response = $sdk->sdk->stopDiscoveryJob($request);

    if ($response->stopDiscoveryJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'laborum';
    $request->tagResourceRequest->tags = [
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::FMRS_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from an Amazon Web Services resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->keys = [
        'libero',
        'quasi',
    ];
    $request->untagResourceRequest->resourceArn = 'tempora';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::FMRS_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAgent

Updates the name of an agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAgentRequest();
    $request->updateAgentRequest = new UpdateAgentRequest();
    $request->updateAgentRequest->agentArn = 'eius';
    $request->updateAgentRequest->name = 'Tamara Leffler';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = UpdateAgentXAmzTargetEnum::FMRS_SERVICE_UPDATE_AGENT;

    $response = $sdk->sdk->updateAgent($request);

    if ($response->updateAgentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDiscoveryJob

Edits a DataSync discovery job configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDiscoveryJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDiscoveryJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDiscoveryJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDiscoveryJobRequest();
    $request->updateDiscoveryJobRequest = new UpdateDiscoveryJobRequest();
    $request->updateDiscoveryJobRequest->collectionDurationMinutes = 509342;
    $request->updateDiscoveryJobRequest->discoveryJobArn = 'quisquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = UpdateDiscoveryJobXAmzTargetEnum::FMRS_SERVICE_UPDATE_DISCOVERY_JOB;

    $response = $sdk->sdk->updateDiscoveryJob($request);

    if ($response->updateDiscoveryJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLocationHdfs

Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationHdfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLocationHdfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\HdfsAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HdfsNameNode;
use \OpenAPI\OpenAPI\Models\Shared\QopConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HdfsDataTransferProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\HdfsRpcProtectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationHdfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLocationHdfsRequest();
    $request->updateLocationHdfsRequest = new UpdateLocationHdfsRequest();
    $request->updateLocationHdfsRequest->agentArns = [
        'fuga',
        'eius',
        'eos',
        'voluptas',
    ];
    $request->updateLocationHdfsRequest->authenticationType = HdfsAuthenticationTypeEnum::SIMPLE;
    $request->updateLocationHdfsRequest->blockSize = 587600;
    $request->updateLocationHdfsRequest->kerberosKeytab = 'consequatur';
    $request->updateLocationHdfsRequest->kerberosKrb5Conf = 'tempora';
    $request->updateLocationHdfsRequest->kerberosPrincipal = 'debitis';
    $request->updateLocationHdfsRequest->kmsKeyProviderUri = 'ipsam';
    $request->updateLocationHdfsRequest->locationArn = 'aspernatur';
    $request->updateLocationHdfsRequest->nameNodes = [
        new HdfsNameNode(),
    ];
    $request->updateLocationHdfsRequest->qopConfiguration = new QopConfiguration();
    $request->updateLocationHdfsRequest->qopConfiguration->dataTransferProtection = HdfsDataTransferProtectionEnum::PRIVACY;
    $request->updateLocationHdfsRequest->qopConfiguration->rpcProtection = HdfsRpcProtectionEnum::AUTHENTICATION;
    $request->updateLocationHdfsRequest->replicationFactor = 925164;
    $request->updateLocationHdfsRequest->simpleUser = 'aperiam';
    $request->updateLocationHdfsRequest->subdirectory = 'distinctio';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = UpdateLocationHdfsXAmzTargetEnum::FMRS_SERVICE_UPDATE_LOCATION_HDFS;

    $response = $sdk->sdk->updateLocationHdfs($request);

    if ($response->updateLocationHdfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLocationNfs

Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationNfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLocationNfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NfsMountOptions;
use \OpenAPI\OpenAPI\Models\Shared\NfsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnPremConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationNfsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLocationNfsRequest();
    $request->updateLocationNfsRequest = new UpdateLocationNfsRequest();
    $request->updateLocationNfsRequest->locationArn = 'odio';
    $request->updateLocationNfsRequest->mountOptions = new NfsMountOptions();
    $request->updateLocationNfsRequest->mountOptions->version = NfsVersionEnum::NFS40;
    $request->updateLocationNfsRequest->onPremConfig = new OnPremConfig();
    $request->updateLocationNfsRequest->onPremConfig->agentArns = [
        'sapiente',
        'dolores',
    ];
    $request->updateLocationNfsRequest->subdirectory = 'deserunt';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = UpdateLocationNfsXAmzTargetEnum::FMRS_SERVICE_UPDATE_LOCATION_NFS;

    $response = $sdk->sdk->updateLocationNfs($request);

    if ($response->updateLocationNfsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLocationObjectStorage

Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationObjectStorageRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLocationObjectStorageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ObjectStorageServerProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationObjectStorageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLocationObjectStorageRequest();
    $request->updateLocationObjectStorageRequest = new UpdateLocationObjectStorageRequest();
    $request->updateLocationObjectStorageRequest->accessKey = 'deleniti';
    $request->updateLocationObjectStorageRequest->agentArns = [
        'fuga',
    ];
    $request->updateLocationObjectStorageRequest->locationArn = 'mollitia';
    $request->updateLocationObjectStorageRequest->secretKey = 'incidunt';
    $request->updateLocationObjectStorageRequest->serverCertificate = 'atque';
    $request->updateLocationObjectStorageRequest->serverPort = 128860;
    $request->updateLocationObjectStorageRequest->serverProtocol = ObjectStorageServerProtocolEnum::HTTPS;
    $request->updateLocationObjectStorageRequest->subdirectory = 'nisi';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = UpdateLocationObjectStorageXAmzTargetEnum::FMRS_SERVICE_UPDATE_LOCATION_OBJECT_STORAGE;

    $response = $sdk->sdk->updateLocationObjectStorage($request);

    if ($response->updateLocationObjectStorageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLocationSmb

Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationSmbRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLocationSmbRequest;
use \OpenAPI\OpenAPI\Models\Shared\SmbMountOptions;
use \OpenAPI\OpenAPI\Models\Shared\SmbVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationSmbXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLocationSmbRequest();
    $request->updateLocationSmbRequest = new UpdateLocationSmbRequest();
    $request->updateLocationSmbRequest->agentArns = [
        'et',
        'esse',
        'eveniet',
    ];
    $request->updateLocationSmbRequest->domain = 'accusamus';
    $request->updateLocationSmbRequest->locationArn = 'veritatis';
    $request->updateLocationSmbRequest->mountOptions = new SmbMountOptions();
    $request->updateLocationSmbRequest->mountOptions->version = SmbVersionEnum::SMB3;
    $request->updateLocationSmbRequest->password = 'quod';
    $request->updateLocationSmbRequest->subdirectory = 'nam';
    $request->updateLocationSmbRequest->user = 'vero';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = UpdateLocationSmbXAmzTargetEnum::FMRS_SERVICE_UPDATE_LOCATION_SMB;

    $response = $sdk->sdk->updateLocationSmb($request);

    if ($response->updateLocationSmbResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStorageSystem

Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Credentials;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveryServerConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStorageSystemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStorageSystemRequest();
    $request->updateStorageSystemRequest = new UpdateStorageSystemRequest();
    $request->updateStorageSystemRequest->agentArns = [
        'minima',
        'distinctio',
        'eligendi',
    ];
    $request->updateStorageSystemRequest->cloudWatchLogGroupArn = 'sit';
    $request->updateStorageSystemRequest->credentials = new Credentials();
    $request->updateStorageSystemRequest->credentials->password = 'culpa';
    $request->updateStorageSystemRequest->credentials->username = 'tempore';
    $request->updateStorageSystemRequest->name = 'Miss Blanca Cronin';
    $request->updateStorageSystemRequest->serverConfiguration = new DiscoveryServerConfiguration();
    $request->updateStorageSystemRequest->serverConfiguration->serverHostname = 'sapiente';
    $request->updateStorageSystemRequest->serverConfiguration->serverPort = 232865;
    $request->updateStorageSystemRequest->storageSystemArn = 'esse';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = UpdateStorageSystemXAmzTargetEnum::FMRS_SERVICE_UPDATE_STORAGE_SYSTEM;

    $response = $sdk->sdk->updateStorageSystem($request);

    if ($response->updateStorageSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTask

Updates the metadata associated with a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterRule;
use \OpenAPI\OpenAPI\Models\Shared\FilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\AtimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GidEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MtimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\OverwriteModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreserveDeletedFilesEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreserveDevicesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SmbSecurityDescriptorCopyFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskQueueingEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UidEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskSchedule;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskRequest();
    $request->updateTaskRequest = new UpdateTaskRequest();
    $request->updateTaskRequest->cloudWatchLogGroupArn = 'a';
    $request->updateTaskRequest->excludes = [
        new FilterRule(),
        new FilterRule(),
        new FilterRule(),
    ];
    $request->updateTaskRequest->includes = [
        new FilterRule(),
        new FilterRule(),
        new FilterRule(),
    ];
    $request->updateTaskRequest->name = 'Rufus Crona';
    $request->updateTaskRequest->options = new Options();
    $request->updateTaskRequest->options->atime = AtimeEnum::BEST_EFFORT;
    $request->updateTaskRequest->options->bytesPerSecond = 85001;
    $request->updateTaskRequest->options->gid = GidEnum::NONE;
    $request->updateTaskRequest->options->logLevel = LogLevelEnum::OFF;
    $request->updateTaskRequest->options->mtime = MtimeEnum::PRESERVE;
    $request->updateTaskRequest->options->objectTags = ObjectTagsEnum::NONE;
    $request->updateTaskRequest->options->overwriteMode = OverwriteModeEnum::ALWAYS;
    $request->updateTaskRequest->options->posixPermissions = PosixPermissionsEnum::PRESERVE;
    $request->updateTaskRequest->options->preserveDeletedFiles = PreserveDeletedFilesEnum::PRESERVE;
    $request->updateTaskRequest->options->preserveDevices = PreserveDevicesEnum::PRESERVE;
    $request->updateTaskRequest->options->securityDescriptorCopyFlags = SmbSecurityDescriptorCopyFlagsEnum::OWNER_DACL;
    $request->updateTaskRequest->options->taskQueueing = TaskQueueingEnum::ENABLED;
    $request->updateTaskRequest->options->transferMode = TransferModeEnum::CHANGED;
    $request->updateTaskRequest->options->uid = UidEnum::NAME;
    $request->updateTaskRequest->options->verifyMode = VerifyModeEnum::NONE;
    $request->updateTaskRequest->schedule = new TaskSchedule();
    $request->updateTaskRequest->schedule->scheduleExpression = 'soluta';
    $request->updateTaskRequest->taskArn = 'accusantium';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = UpdateTaskXAmzTargetEnum::FMRS_SERVICE_UPDATE_TASK;

    $response = $sdk->sdk->updateTask($request);

    if ($response->updateTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTaskExecution

<p>Modifies a running DataSync task.</p> <note> <p>Currently, the only <code>Option</code> that you can modify with <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>, which throttles bandwidth for a running or queued task.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTaskExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\AtimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GidEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MtimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\OverwriteModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreserveDeletedFilesEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreserveDevicesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SmbSecurityDescriptorCopyFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskQueueingEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UidEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskExecutionRequest();
    $request->updateTaskExecutionRequest = new UpdateTaskExecutionRequest();
    $request->updateTaskExecutionRequest->options = new Options();
    $request->updateTaskExecutionRequest->options->atime = AtimeEnum::NONE;
    $request->updateTaskExecutionRequest->options->bytesPerSecond = 531849;
    $request->updateTaskExecutionRequest->options->gid = GidEnum::NONE;
    $request->updateTaskExecutionRequest->options->logLevel = LogLevelEnum::TRANSFER;
    $request->updateTaskExecutionRequest->options->mtime = MtimeEnum::NONE;
    $request->updateTaskExecutionRequest->options->objectTags = ObjectTagsEnum::NONE;
    $request->updateTaskExecutionRequest->options->overwriteMode = OverwriteModeEnum::NEVER;
    $request->updateTaskExecutionRequest->options->posixPermissions = PosixPermissionsEnum::PRESERVE;
    $request->updateTaskExecutionRequest->options->preserveDeletedFiles = PreserveDeletedFilesEnum::PRESERVE;
    $request->updateTaskExecutionRequest->options->preserveDevices = PreserveDevicesEnum::PRESERVE;
    $request->updateTaskExecutionRequest->options->securityDescriptorCopyFlags = SmbSecurityDescriptorCopyFlagsEnum::OWNER_DACL_SACL;
    $request->updateTaskExecutionRequest->options->taskQueueing = TaskQueueingEnum::ENABLED;
    $request->updateTaskExecutionRequest->options->transferMode = TransferModeEnum::ALL;
    $request->updateTaskExecutionRequest->options->uid = UidEnum::NONE;
    $request->updateTaskExecutionRequest->options->verifyMode = VerifyModeEnum::ONLY_FILES_TRANSFERRED;
    $request->updateTaskExecutionRequest->taskExecutionArn = 'ipsa';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = UpdateTaskExecutionXAmzTargetEnum::FMRS_SERVICE_UPDATE_TASK_EXECUTION;

    $response = $sdk->sdk->updateTaskExecution($request);

    if ($response->updateTaskExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
