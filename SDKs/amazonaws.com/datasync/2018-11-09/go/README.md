# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/datasync/2018-11-09/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddStorageSystem(ctx, operations.AddStorageSystemRequest{
        AddStorageSystemRequest: shared.AddStorageSystemRequest{
            AgentArns: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ClientToken: "unde",
            CloudWatchLogGroupArn: sdk.String("nulla"),
            Credentials: shared.Credentials{
                Password: "corrupti",
                Username: "illum",
            },
            Name: sdk.String("Sabrina Oberbrunner"),
            ServerConfiguration: shared.DiscoveryServerConfiguration{
                ServerHostname: "magnam",
                ServerPort: sdk.Int64(891773),
            },
            SystemType: shared.DiscoverySystemTypeEnumNetAppOntap,
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "delectus",
                    Value: sdk.String("tempora"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.AddStorageSystemXAmzTargetEnumFmrsServiceAddStorageSystem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddStorageSystemResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AddStorageSystem](docs/sdk/README.md#addstoragesystem) - Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect information about.
* [CancelTaskExecution](docs/sdk/README.md#canceltaskexecution) - <p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>
* [CreateAgent](docs/sdk/README.md#createagent) - <p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>
* [CreateLocationEfs](docs/sdk/README.md#createlocationefs) - Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.
* [CreateLocationFsxLustre](docs/sdk/README.md#createlocationfsxlustre) - Creates an endpoint for an Amazon FSx for Lustre file system.
* [CreateLocationFsxOntap](docs/sdk/README.md#createlocationfsxontap) - Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.
* [CreateLocationFsxOpenZfs](docs/sdk/README.md#createlocationfsxopenzfs) - <p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>
* [CreateLocationFsxWindows](docs/sdk/README.md#createlocationfsxwindows) - Creates an endpoint for an Amazon FSx for Windows File Server file system.
* [CreateLocationHdfs](docs/sdk/README.md#createlocationhdfs) - Creates an endpoint for a Hadoop Distributed File System (HDFS). 
* [CreateLocationNfs](docs/sdk/README.md#createlocationnfs) - Defines a file system on a Network File System (NFS) server that can be read from or written to.
* [CreateLocationObjectStorage](docs/sdk/README.md#createlocationobjectstorage) - Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* [CreateLocationS3](docs/sdk/README.md#createlocations3) - <p>A <i>location</i> is an endpoint for an Amazon S3 bucket. DataSync can use the location as a source or destination for copying data.</p> <important> <p>Before you create your location, make sure that you read the following sections:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a> </p> </li> </ul> </important> <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Creating an Amazon S3 location</a>.</p>
* [CreateLocationSmb](docs/sdk/README.md#createlocationsmb) - Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.
* [CreateTask](docs/sdk/README.md#createtask) - <p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
* [DeleteAgent](docs/sdk/README.md#deleteagent) - Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
* [DeleteLocation](docs/sdk/README.md#deletelocation) - Deletes the configuration of a location used by DataSync. 
* [DeleteTask](docs/sdk/README.md#deletetask) - Deletes an DataSync task.
* [DescribeAgent](docs/sdk/README.md#describeagent) - Returns metadata about an DataSync agent, such as its name, endpoint type, and status.
* [DescribeDiscoveryJob](docs/sdk/README.md#describediscoveryjob) - Returns information about a DataSync discovery job.
* [DescribeLocationEfs](docs/sdk/README.md#describelocationefs) - Returns metadata about your DataSync location for an Amazon EFS file system.
* [DescribeLocationFsxLustre](docs/sdk/README.md#describelocationfsxlustre) - Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.
* [DescribeLocationFsxOntap](docs/sdk/README.md#describelocationfsxontap) - <p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>
* [DescribeLocationFsxOpenZfs](docs/sdk/README.md#describelocationfsxopenzfs) - <p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>
* [DescribeLocationFsxWindows](docs/sdk/README.md#describelocationfsxwindows) - Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.
* [DescribeLocationHdfs](docs/sdk/README.md#describelocationhdfs) - Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 
* [DescribeLocationNfs](docs/sdk/README.md#describelocationnfs) - Returns metadata, such as the path information, about an NFS location.
* [DescribeLocationObjectStorage](docs/sdk/README.md#describelocationobjectstorage) - Returns metadata about your DataSync location for an object storage system.
* [DescribeLocationS3](docs/sdk/README.md#describelocations3) - Returns metadata, such as bucket name, about an Amazon S3 bucket location.
* [DescribeLocationSmb](docs/sdk/README.md#describelocationsmb) - Returns metadata, such as the path and user information about an SMB location.
* [DescribeStorageSystem](docs/sdk/README.md#describestoragesystem) - Returns information about an on-premises storage system that you're using with DataSync Discovery.
* [DescribeStorageSystemResourceMetrics](docs/sdk/README.md#describestoragesystemresourcemetrics) - Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system.
* [DescribeStorageSystemResources](docs/sdk/README.md#describestoragesystemresources) - Returns information that DataSync Discovery collects about resources in your on-premises storage system.
* [DescribeTask](docs/sdk/README.md#describetask) - Returns metadata about a task.
* [DescribeTaskExecution](docs/sdk/README.md#describetaskexecution) - Returns detailed metadata about a task that is being executed.
* [GenerateRecommendations](docs/sdk/README.md#generaterecommendations) - <p>Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p> <note> <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync Discovery generates the recommendations for you automatically.</p> </note>
* [ListAgents](docs/sdk/README.md#listagents) - <p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>
* [ListDiscoveryJobs](docs/sdk/README.md#listdiscoveryjobs) - Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery.
* [ListLocations](docs/sdk/README.md#listlocations) - <p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
* [ListStorageSystems](docs/sdk/README.md#liststoragesystems) - Lists the on-premises storage systems that you're using with DataSync Discovery.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns all the tags associated with an Amazon Web Services resource.
* [ListTaskExecutions](docs/sdk/README.md#listtaskexecutions) - Returns a list of executed tasks.
* [ListTasks](docs/sdk/README.md#listtasks) - Returns a list of the DataSync tasks you created.
* [RemoveStorageSystem](docs/sdk/README.md#removestoragesystem) - Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations.
* [StartDiscoveryJob](docs/sdk/README.md#startdiscoveryjob) - Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a> operation.
* [StartTaskExecution](docs/sdk/README.md#starttaskexecution) - <p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
* [StopDiscoveryJob](docs/sdk/README.md#stopdiscoveryjob) - <p>Stops a running DataSync discovery job.</p> <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>
* [TagResource](docs/sdk/README.md#tagresource) - <p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from an Amazon Web Services resource.
* [UpdateAgent](docs/sdk/README.md#updateagent) - Updates the name of an agent.
* [UpdateDiscoveryJob](docs/sdk/README.md#updatediscoveryjob) - Edits a DataSync discovery job configuration.
* [UpdateLocationHdfs](docs/sdk/README.md#updatelocationhdfs) - Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.
* [UpdateLocationNfs](docs/sdk/README.md#updatelocationnfs) - Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.
* [UpdateLocationObjectStorage](docs/sdk/README.md#updatelocationobjectstorage) - Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* [UpdateLocationSmb](docs/sdk/README.md#updatelocationsmb) - Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.
* [UpdateStorageSystem](docs/sdk/README.md#updatestoragesystem) - Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery.
* [UpdateTask](docs/sdk/README.md#updatetask) - Updates the metadata associated with a task.
* [UpdateTaskExecution](docs/sdk/README.md#updatetaskexecution) - <p>Modifies a running DataSync task.</p> <note> <p>Currently, the only <code>Option</code> that you can modify with <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>, which throttles bandwidth for a running or queued task.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
