# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddStorageSystemRequest;
import org.openapis.openapi.models.operations.AddStorageSystemResponse;
import org.openapis.openapi.models.operations.AddStorageSystemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddStorageSystemRequest;
import org.openapis.openapi.models.shared.Credentials;
import org.openapis.openapi.models.shared.DiscoveryServerConfiguration;
import org.openapis.openapi.models.shared.DiscoverySystemTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddStorageSystemRequest req = new AddStorageSystemRequest(                new AddStorageSystemRequest(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}, "nulla",                 new Credentials("corrupti", "illum");,                 new DiscoveryServerConfiguration("vel") {{
                                                serverPort = 623564L;
                                            }};, DiscoverySystemTypeEnum.NET_APP_ONTAP) {{
                                cloudWatchLogGroupArn = "deserunt";
                                name = "Willie Gulgowski DVM";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("minus") {{
                                        key = "suscipit";
                                        value = "molestiae";
                                    }}),
                                    add(new TagListEntry("iusto") {{
                                        key = "placeat";
                                        value = "voluptatum";
                                    }}),
                                }};
                            }};, AddStorageSystemXAmzTargetEnum.FMRS_SERVICE_ADD_STORAGE_SYSTEM) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            AddStorageSystemResponse res = sdk.addStorageSystem(req);

            if (res.addStorageSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [addStorageSystem](docs/sdk/README.md#addstoragesystem) - Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect information about.
* [cancelTaskExecution](docs/sdk/README.md#canceltaskexecution) - <p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>
* [createAgent](docs/sdk/README.md#createagent) - <p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>
* [createLocationEfs](docs/sdk/README.md#createlocationefs) - Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.
* [createLocationFsxLustre](docs/sdk/README.md#createlocationfsxlustre) - Creates an endpoint for an Amazon FSx for Lustre file system.
* [createLocationFsxOntap](docs/sdk/README.md#createlocationfsxontap) - Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.
* [createLocationFsxOpenZfs](docs/sdk/README.md#createlocationfsxopenzfs) - <p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>
* [createLocationFsxWindows](docs/sdk/README.md#createlocationfsxwindows) - Creates an endpoint for an Amazon FSx for Windows File Server file system.
* [createLocationHdfs](docs/sdk/README.md#createlocationhdfs) - Creates an endpoint for a Hadoop Distributed File System (HDFS). 
* [createLocationNfs](docs/sdk/README.md#createlocationnfs) - Defines a file system on a Network File System (NFS) server that can be read from or written to.
* [createLocationObjectStorage](docs/sdk/README.md#createlocationobjectstorage) - Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* [createLocationS3](docs/sdk/README.md#createlocations3) - <p>A <i>location</i> is an endpoint for an Amazon S3 bucket. DataSync can use the location as a source or destination for copying data.</p> <important> <p>Before you create your location, make sure that you read the following sections:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a> </p> </li> </ul> </important> <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Creating an Amazon S3 location</a>.</p>
* [createLocationSmb](docs/sdk/README.md#createlocationsmb) - Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.
* [createTask](docs/sdk/README.md#createtask) - <p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
* [deleteAgent](docs/sdk/README.md#deleteagent) - Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
* [deleteLocation](docs/sdk/README.md#deletelocation) - Deletes the configuration of a location used by DataSync. 
* [deleteTask](docs/sdk/README.md#deletetask) - Deletes an DataSync task.
* [describeAgent](docs/sdk/README.md#describeagent) - Returns metadata about an DataSync agent, such as its name, endpoint type, and status.
* [describeDiscoveryJob](docs/sdk/README.md#describediscoveryjob) - Returns information about a DataSync discovery job.
* [describeLocationEfs](docs/sdk/README.md#describelocationefs) - Returns metadata about your DataSync location for an Amazon EFS file system.
* [describeLocationFsxLustre](docs/sdk/README.md#describelocationfsxlustre) - Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.
* [describeLocationFsxOntap](docs/sdk/README.md#describelocationfsxontap) - <p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>
* [describeLocationFsxOpenZfs](docs/sdk/README.md#describelocationfsxopenzfs) - <p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>
* [describeLocationFsxWindows](docs/sdk/README.md#describelocationfsxwindows) - Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.
* [describeLocationHdfs](docs/sdk/README.md#describelocationhdfs) - Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 
* [describeLocationNfs](docs/sdk/README.md#describelocationnfs) - Returns metadata, such as the path information, about an NFS location.
* [describeLocationObjectStorage](docs/sdk/README.md#describelocationobjectstorage) - Returns metadata about your DataSync location for an object storage system.
* [describeLocationS3](docs/sdk/README.md#describelocations3) - Returns metadata, such as bucket name, about an Amazon S3 bucket location.
* [describeLocationSmb](docs/sdk/README.md#describelocationsmb) - Returns metadata, such as the path and user information about an SMB location.
* [describeStorageSystem](docs/sdk/README.md#describestoragesystem) - Returns information about an on-premises storage system that you're using with DataSync Discovery.
* [describeStorageSystemResourceMetrics](docs/sdk/README.md#describestoragesystemresourcemetrics) - Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system.
* [describeStorageSystemResources](docs/sdk/README.md#describestoragesystemresources) - Returns information that DataSync Discovery collects about resources in your on-premises storage system.
* [describeTask](docs/sdk/README.md#describetask) - Returns metadata about a task.
* [describeTaskExecution](docs/sdk/README.md#describetaskexecution) - Returns detailed metadata about a task that is being executed.
* [generateRecommendations](docs/sdk/README.md#generaterecommendations) - <p>Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p> <note> <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync Discovery generates the recommendations for you automatically.</p> </note>
* [listAgents](docs/sdk/README.md#listagents) - <p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>
* [listDiscoveryJobs](docs/sdk/README.md#listdiscoveryjobs) - Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery.
* [listLocations](docs/sdk/README.md#listlocations) - <p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
* [listStorageSystems](docs/sdk/README.md#liststoragesystems) - Lists the on-premises storage systems that you're using with DataSync Discovery.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns all the tags associated with an Amazon Web Services resource.
* [listTaskExecutions](docs/sdk/README.md#listtaskexecutions) - Returns a list of executed tasks.
* [listTasks](docs/sdk/README.md#listtasks) - Returns a list of the DataSync tasks you created.
* [removeStorageSystem](docs/sdk/README.md#removestoragesystem) - Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations.
* [startDiscoveryJob](docs/sdk/README.md#startdiscoveryjob) - Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a> operation.
* [startTaskExecution](docs/sdk/README.md#starttaskexecution) - <p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
* [stopDiscoveryJob](docs/sdk/README.md#stopdiscoveryjob) - <p>Stops a running DataSync discovery job.</p> <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>
* [tagResource](docs/sdk/README.md#tagresource) - <p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from an Amazon Web Services resource.
* [updateAgent](docs/sdk/README.md#updateagent) - Updates the name of an agent.
* [updateDiscoveryJob](docs/sdk/README.md#updatediscoveryjob) - Edits a DataSync discovery job configuration.
* [updateLocationHdfs](docs/sdk/README.md#updatelocationhdfs) - Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.
* [updateLocationNfs](docs/sdk/README.md#updatelocationnfs) - Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.
* [updateLocationObjectStorage](docs/sdk/README.md#updatelocationobjectstorage) - Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* [updateLocationSmb](docs/sdk/README.md#updatelocationsmb) - Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.
* [updateStorageSystem](docs/sdk/README.md#updatestoragesystem) - Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery.
* [updateTask](docs/sdk/README.md#updatetask) - Updates the metadata associated with a task.
* [updateTaskExecution](docs/sdk/README.md#updatetaskexecution) - <p>Modifies a running DataSync task.</p> <note> <p>Currently, the only <code>Option</code> that you can modify with <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>, which throttles bandwidth for a running or queued task.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
