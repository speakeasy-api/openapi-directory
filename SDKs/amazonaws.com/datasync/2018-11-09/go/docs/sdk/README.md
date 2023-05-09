# SDK

## Overview

<fullname>DataSync</fullname> <p>DataSync is a managed data transfer service that makes it simpler for you to automate moving data between on-premises storage and Amazon Web Services storage services. You also can use DataSync to transfer data between other cloud providers and Amazon Web Services storage services.</p> <p>This API interface reference includes documentation for using DataSync programmatically. For complete information, see the <i> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User Guide</a> </i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/datasync/>
### Available Operations

* [AddStorageSystem](#addstoragesystem) - Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect information about.
* [CancelTaskExecution](#canceltaskexecution) - <p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>
* [CreateAgent](#createagent) - <p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>
* [CreateLocationEfs](#createlocationefs) - Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.
* [CreateLocationFsxLustre](#createlocationfsxlustre) - Creates an endpoint for an Amazon FSx for Lustre file system.
* [CreateLocationFsxOntap](#createlocationfsxontap) - Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.
* [CreateLocationFsxOpenZfs](#createlocationfsxopenzfs) - <p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>
* [CreateLocationFsxWindows](#createlocationfsxwindows) - Creates an endpoint for an Amazon FSx for Windows File Server file system.
* [CreateLocationHdfs](#createlocationhdfs) - Creates an endpoint for a Hadoop Distributed File System (HDFS). 
* [CreateLocationNfs](#createlocationnfs) - Defines a file system on a Network File System (NFS) server that can be read from or written to.
* [CreateLocationObjectStorage](#createlocationobjectstorage) - Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* [CreateLocationS3](#createlocations3) - <p>A <i>location</i> is an endpoint for an Amazon S3 bucket. DataSync can use the location as a source or destination for copying data.</p> <important> <p>Before you create your location, make sure that you read the following sections:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a> </p> </li> </ul> </important> <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Creating an Amazon S3 location</a>.</p>
* [CreateLocationSmb](#createlocationsmb) - Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.
* [CreateTask](#createtask) - <p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
* [DeleteAgent](#deleteagent) - Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
* [DeleteLocation](#deletelocation) - Deletes the configuration of a location used by DataSync. 
* [DeleteTask](#deletetask) - Deletes an DataSync task.
* [DescribeAgent](#describeagent) - Returns metadata about an DataSync agent, such as its name, endpoint type, and status.
* [DescribeDiscoveryJob](#describediscoveryjob) - Returns information about a DataSync discovery job.
* [DescribeLocationEfs](#describelocationefs) - Returns metadata about your DataSync location for an Amazon EFS file system.
* [DescribeLocationFsxLustre](#describelocationfsxlustre) - Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.
* [DescribeLocationFsxOntap](#describelocationfsxontap) - <p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>
* [DescribeLocationFsxOpenZfs](#describelocationfsxopenzfs) - <p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>
* [DescribeLocationFsxWindows](#describelocationfsxwindows) - Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.
* [DescribeLocationHdfs](#describelocationhdfs) - Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 
* [DescribeLocationNfs](#describelocationnfs) - Returns metadata, such as the path information, about an NFS location.
* [DescribeLocationObjectStorage](#describelocationobjectstorage) - Returns metadata about your DataSync location for an object storage system.
* [DescribeLocationS3](#describelocations3) - Returns metadata, such as bucket name, about an Amazon S3 bucket location.
* [DescribeLocationSmb](#describelocationsmb) - Returns metadata, such as the path and user information about an SMB location.
* [DescribeStorageSystem](#describestoragesystem) - Returns information about an on-premises storage system that you're using with DataSync Discovery.
* [DescribeStorageSystemResourceMetrics](#describestoragesystemresourcemetrics) - Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system.
* [DescribeStorageSystemResources](#describestoragesystemresources) - Returns information that DataSync Discovery collects about resources in your on-premises storage system.
* [DescribeTask](#describetask) - Returns metadata about a task.
* [DescribeTaskExecution](#describetaskexecution) - Returns detailed metadata about a task that is being executed.
* [GenerateRecommendations](#generaterecommendations) - <p>Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p> <note> <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync Discovery generates the recommendations for you automatically.</p> </note>
* [ListAgents](#listagents) - <p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>
* [ListDiscoveryJobs](#listdiscoveryjobs) - Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery.
* [ListLocations](#listlocations) - <p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
* [ListStorageSystems](#liststoragesystems) - Lists the on-premises storage systems that you're using with DataSync Discovery.
* [ListTagsForResource](#listtagsforresource) - Returns all the tags associated with an Amazon Web Services resource.
* [ListTaskExecutions](#listtaskexecutions) - Returns a list of executed tasks.
* [ListTasks](#listtasks) - Returns a list of the DataSync tasks you created.
* [RemoveStorageSystem](#removestoragesystem) - Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations.
* [StartDiscoveryJob](#startdiscoveryjob) - Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a> operation.
* [StartTaskExecution](#starttaskexecution) - <p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
* [StopDiscoveryJob](#stopdiscoveryjob) - <p>Stops a running DataSync discovery job.</p> <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>
* [TagResource](#tagresource) - <p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>
* [UntagResource](#untagresource) - Removes tags from an Amazon Web Services resource.
* [UpdateAgent](#updateagent) - Updates the name of an agent.
* [UpdateDiscoveryJob](#updatediscoveryjob) - Edits a DataSync discovery job configuration.
* [UpdateLocationHdfs](#updatelocationhdfs) - Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.
* [UpdateLocationNfs](#updatelocationnfs) - Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.
* [UpdateLocationObjectStorage](#updatelocationobjectstorage) - Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* [UpdateLocationSmb](#updatelocationsmb) - Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.
* [UpdateStorageSystem](#updatestoragesystem) - Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery.
* [UpdateTask](#updatetask) - Updates the metadata associated with a task.
* [UpdateTaskExecution](#updatetaskexecution) - <p>Modifies a running DataSync task.</p> <note> <p>Currently, the only <code>Option</code> that you can modify with <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>, which throttles bandwidth for a running or queued task.</p> </note>

## AddStorageSystem

Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect information about.

### Example Usage

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
    res, err := s.SDK.AddStorageSystem(ctx, operations.AddStorageSystemRequest{
        AddStorageSystemRequest: shared.AddStorageSystemRequest{
            AgentArns: []string{
                "recusandae",
                "temporibus",
            },
            ClientToken: "ab",
            CloudWatchLogGroupArn: sdk.String("quis"),
            Credentials: shared.Credentials{
                Password: "veritatis",
                Username: "deserunt",
            },
            Name: sdk.String("Roberta Sipes"),
            ServerConfiguration: shared.DiscoveryServerConfiguration{
                ServerHostname: "odit",
                ServerPort: sdk.Int64(870013),
            },
            SystemType: shared.DiscoverySystemTypeEnumNetAppOntap,
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "maiores",
                    Value: sdk.String("molestiae"),
                },
                shared.TagListEntry{
                    Key: "quod",
                    Value: sdk.String("quod"),
                },
                shared.TagListEntry{
                    Key: "esse",
                    Value: sdk.String("totam"),
                },
                shared.TagListEntry{
                    Key: "porro",
                    Value: sdk.String("dolorum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("hic"),
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

## CancelTaskExecution

<p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>

### Example Usage

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
    res, err := s.SDK.CancelTaskExecution(ctx, operations.CancelTaskExecutionRequest{
        CancelTaskExecutionRequest: shared.CancelTaskExecutionRequest{
            TaskExecutionArn: "optio",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.CancelTaskExecutionXAmzTargetEnumFmrsServiceCancelTaskExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTaskExecutionResponse != nil {
        // handle response
    }
}
```

## CreateAgent

<p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>

### Example Usage

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
    res, err := s.SDK.CreateAgent(ctx, operations.CreateAgentRequest{
        CreateAgentRequest: shared.CreateAgentRequest{
            ActivationKey: "cum",
            AgentName: sdk.String("esse"),
            SecurityGroupArns: []string{
                "excepturi",
            },
            SubnetArns: []string{
                "perferendis",
            },
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "natus",
                    Value: sdk.String("sed"),
                },
                shared.TagListEntry{
                    Key: "iste",
                    Value: sdk.String("dolor"),
                },
            },
            VpcEndpointID: sdk.String("natus"),
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.CreateAgentXAmzTargetEnumFmrsServiceCreateAgent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAgentResponse != nil {
        // handle response
    }
}
```

## CreateLocationEfs

Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.

### Example Usage

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
    res, err := s.SDK.CreateLocationEfs(ctx, operations.CreateLocationEfsRequest{
        CreateLocationEfsRequest: shared.CreateLocationEfsRequest{
            AccessPointArn: sdk.String("iure"),
            Ec2Config: shared.Ec2Config{
                SecurityGroupArns: []string{
                    "quidem",
                    "architecto",
                    "ipsa",
                    "reiciendis",
                },
                SubnetArn: "est",
            },
            EfsFilesystemArn: "mollitia",
            FileSystemAccessRoleArn: sdk.String("laborum"),
            InTransitEncryption: shared.EfsInTransitEncryptionEnumNone.ToPointer(),
            Subdirectory: sdk.String("dolorem"),
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "explicabo",
                    Value: sdk.String("nobis"),
                },
                shared.TagListEntry{
                    Key: "enim",
                    Value: sdk.String("omnis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.CreateLocationEfsXAmzTargetEnumFmrsServiceCreateLocationEfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationEfsResponse != nil {
        // handle response
    }
}
```

## CreateLocationFsxLustre

Creates an endpoint for an Amazon FSx for Lustre file system.

### Example Usage

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
    res, err := s.SDK.CreateLocationFsxLustre(ctx, operations.CreateLocationFsxLustreRequest{
        CreateLocationFsxLustreRequest: shared.CreateLocationFsxLustreRequest{
            FsxFilesystemArn: "sapiente",
            SecurityGroupArns: []string{
                "mollitia",
            },
            Subdirectory: sdk.String("dolorem"),
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "consequuntur",
                    Value: sdk.String("repellat"),
                },
                shared.TagListEntry{
                    Key: "mollitia",
                    Value: sdk.String("occaecati"),
                },
                shared.TagListEntry{
                    Key: "numquam",
                    Value: sdk.String("commodi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.CreateLocationFsxLustreXAmzTargetEnumFmrsServiceCreateLocationFsxLustre,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationFsxLustreResponse != nil {
        // handle response
    }
}
```

## CreateLocationFsxOntap

Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.

### Example Usage

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
    res, err := s.SDK.CreateLocationFsxOntap(ctx, operations.CreateLocationFsxOntapRequest{
        CreateLocationFsxOntapRequest: shared.CreateLocationFsxOntapRequest{
            Protocol: shared.FsxProtocol{
                Nfs: &shared.FsxProtocolNfs{
                    MountOptions: &shared.NfsMountOptions{
                        Version: shared.NfsVersionEnumNfs40.ToPointer(),
                    },
                },
                Smb: &shared.FsxProtocolSmb{
                    Domain: sdk.String("animi"),
                    MountOptions: &shared.SmbMountOptions{
                        Version: shared.SmbVersionEnumSmb2.ToPointer(),
                    },
                    Password: "odit",
                    User: "quo",
                },
            },
            SecurityGroupArns: []string{
                "tenetur",
            },
            StorageVirtualMachineArn: "ipsam",
            Subdirectory: sdk.String("id"),
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "aut",
                    Value: sdk.String("quasi"),
                },
                shared.TagListEntry{
                    Key: "error",
                    Value: sdk.String("temporibus"),
                },
                shared.TagListEntry{
                    Key: "laborum",
                    Value: sdk.String("quasi"),
                },
                shared.TagListEntry{
                    Key: "reiciendis",
                    Value: sdk.String("voluptatibus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.CreateLocationFsxOntapXAmzTargetEnumFmrsServiceCreateLocationFsxOntap,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationFsxOntapResponse != nil {
        // handle response
    }
}
```

## CreateLocationFsxOpenZfs

<p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>

### Example Usage

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
    res, err := s.SDK.CreateLocationFsxOpenZfs(ctx, operations.CreateLocationFsxOpenZfsRequest{
        CreateLocationFsxOpenZfsRequest: shared.CreateLocationFsxOpenZfsRequest{
            FsxFilesystemArn: "cum",
            Protocol: shared.FsxProtocol{
                Nfs: &shared.FsxProtocolNfs{
                    MountOptions: &shared.NfsMountOptions{
                        Version: shared.NfsVersionEnumAutomatic.ToPointer(),
                    },
                },
                Smb: &shared.FsxProtocolSmb{
                    Domain: sdk.String("doloremque"),
                    MountOptions: &shared.SmbMountOptions{
                        Version: shared.SmbVersionEnumSmb3.ToPointer(),
                    },
                    Password: "ut",
                    User: "maiores",
                },
            },
            SecurityGroupArns: []string{
                "corporis",
            },
            Subdirectory: sdk.String("dolore"),
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "dicta",
                    Value: sdk.String("harum"),
                },
                shared.TagListEntry{
                    Key: "enim",
                    Value: sdk.String("accusamus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateLocationFsxOpenZfsXAmzTargetEnumFmrsServiceCreateLocationFsxOpenZfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationFsxOpenZfsResponse != nil {
        // handle response
    }
}
```

## CreateLocationFsxWindows

Creates an endpoint for an Amazon FSx for Windows File Server file system.

### Example Usage

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
    res, err := s.SDK.CreateLocationFsxWindows(ctx, operations.CreateLocationFsxWindowsRequest{
        CreateLocationFsxWindowsRequest: shared.CreateLocationFsxWindowsRequest{
            Domain: sdk.String("pariatur"),
            FsxFilesystemArn: "modi",
            Password: "praesentium",
            SecurityGroupArns: []string{
                "voluptates",
                "quasi",
                "repudiandae",
            },
            Subdirectory: sdk.String("sint"),
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "itaque",
                    Value: sdk.String("incidunt"),
                },
            },
            User: "enim",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.CreateLocationFsxWindowsXAmzTargetEnumFmrsServiceCreateLocationFsxWindows,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationFsxWindowsResponse != nil {
        // handle response
    }
}
```

## CreateLocationHdfs

Creates an endpoint for a Hadoop Distributed File System (HDFS). 

### Example Usage

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
    res, err := s.SDK.CreateLocationHdfs(ctx, operations.CreateLocationHdfsRequest{
        CreateLocationHdfsRequest: shared.CreateLocationHdfsRequest{
            AgentArns: []string{
                "modi",
                "qui",
            },
            AuthenticationType: shared.HdfsAuthenticationTypeEnumSimple,
            BlockSize: sdk.Int64(586513),
            KerberosKeytab: sdk.String("quos"),
            KerberosKrb5Conf: sdk.String("perferendis"),
            KerberosPrincipal: sdk.String("magni"),
            KmsKeyProviderURI: sdk.String("assumenda"),
            NameNodes: []shared.HdfsNameNode{
                shared.HdfsNameNode{
                    Hostname: "acceptable-chamber.net",
                    Port: 569618,
                },
                shared.HdfsNameNode{
                    Hostname: "far-off-prune.net",
                    Port: 288476,
                },
            },
            QopConfiguration: &shared.QopConfiguration{
                DataTransferProtection: shared.HdfsDataTransferProtectionEnumPrivacy.ToPointer(),
                RPCProtection: shared.HdfsRPCProtectionEnumAuthentication.ToPointer(),
            },
            ReplicationFactor: sdk.Int64(248753),
            SimpleUser: sdk.String("eligendi"),
            Subdirectory: sdk.String("sint"),
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "provident",
                    Value: sdk.String("necessitatibus"),
                },
                shared.TagListEntry{
                    Key: "sint",
                    Value: sdk.String("officia"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.CreateLocationHdfsXAmzTargetEnumFmrsServiceCreateLocationHdfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationHdfsResponse != nil {
        // handle response
    }
}
```

## CreateLocationNfs

Defines a file system on a Network File System (NFS) server that can be read from or written to.

### Example Usage

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
    res, err := s.SDK.CreateLocationNfs(ctx, operations.CreateLocationNfsRequest{
        CreateLocationNfsRequest: shared.CreateLocationNfsRequest{
            MountOptions: &shared.NfsMountOptions{
                Version: shared.NfsVersionEnumNfs41.ToPointer(),
            },
            OnPremConfig: shared.OnPremConfig{
                AgentArns: []string{
                    "dicta",
                    "magnam",
                    "cumque",
                },
            },
            ServerHostname: "facere",
            Subdirectory: "ea",
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "laborum",
                    Value: sdk.String("accusamus"),
                },
                shared.TagListEntry{
                    Key: "non",
                    Value: sdk.String("occaecati"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.CreateLocationNfsXAmzTargetEnumFmrsServiceCreateLocationNfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationNfsResponse != nil {
        // handle response
    }
}
```

## CreateLocationObjectStorage

Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.

### Example Usage

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
    res, err := s.SDK.CreateLocationObjectStorage(ctx, operations.CreateLocationObjectStorageRequest{
        CreateLocationObjectStorageRequest: shared.CreateLocationObjectStorageRequest{
            AccessKey: sdk.String("blanditiis"),
            AgentArns: []string{
                "sapiente",
                "amet",
                "deserunt",
            },
            BucketName: "nisi",
            SecretKey: sdk.String("vel"),
            ServerCertificate: sdk.String("natus"),
            ServerHostname: "omnis",
            ServerPort: sdk.Int64(474867),
            ServerProtocol: shared.ObjectStorageServerProtocolEnumHTTPS.ToPointer(),
            Subdirectory: sdk.String("nihil"),
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "distinctio",
                    Value: sdk.String("id"),
                },
                shared.TagListEntry{
                    Key: "labore",
                    Value: sdk.String("labore"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateLocationObjectStorageXAmzTargetEnumFmrsServiceCreateLocationObjectStorage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationObjectStorageResponse != nil {
        // handle response
    }
}
```

## CreateLocationS3

<p>A <i>location</i> is an endpoint for an Amazon S3 bucket. DataSync can use the location as a source or destination for copying data.</p> <important> <p>Before you create your location, make sure that you read the following sections:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a> </p> </li> </ul> </important> <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Creating an Amazon S3 location</a>.</p>

### Example Usage

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
    res, err := s.SDK.CreateLocationS3(ctx, operations.CreateLocationS3Request{
        CreateLocationS3Request: shared.CreateLocationS3Request{
            AgentArns: []string{
                "et",
                "excepturi",
            },
            S3BucketArn: "ullam",
            S3Config: shared.S3Config{
                BucketAccessRoleArn: "provident",
            },
            S3StorageClass: shared.S3StorageClassEnumGlacier.ToPointer(),
            Subdirectory: sdk.String("sint"),
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "mollitia",
                    Value: sdk.String("reiciendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.CreateLocationS3XAmzTargetEnumFmrsServiceCreateLocationS3,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationS3Response != nil {
        // handle response
    }
}
```

## CreateLocationSmb

Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.

### Example Usage

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
    res, err := s.SDK.CreateLocationSmb(ctx, operations.CreateLocationSmbRequest{
        CreateLocationSmbRequest: shared.CreateLocationSmbRequest{
            AgentArns: []string{
                "iure",
            },
            Domain: sdk.String("doloribus"),
            MountOptions: &shared.SmbMountOptions{
                Version: shared.SmbVersionEnumSmb20.ToPointer(),
            },
            Password: "eius",
            ServerHostname: "maxime",
            Subdirectory: "deleniti",
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "in",
                    Value: sdk.String("architecto"),
                },
                shared.TagListEntry{
                    Key: "architecto",
                    Value: sdk.String("repudiandae"),
                },
                shared.TagListEntry{
                    Key: "ullam",
                    Value: sdk.String("expedita"),
                },
            },
            User: "nihil",
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.CreateLocationSmbXAmzTargetEnumFmrsServiceCreateLocationSmb,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationSmbResponse != nil {
        // handle response
    }
}
```

## CreateTask

<p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>

### Example Usage

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
    res, err := s.SDK.CreateTask(ctx, operations.CreateTaskRequest{
        CreateTaskRequest: shared.CreateTaskRequest{
            CloudWatchLogGroupArn: sdk.String("praesentium"),
            DestinationLocationArn: "natus",
            Excludes: []shared.FilterRule{
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("sunt"),
                },
            },
            Includes: []shared.FilterRule{
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("illum"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("pariatur"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("maxime"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("ea"),
                },
            },
            Name: sdk.String("Mr. Harry Jaskolski"),
            Options: &shared.Options{
                Atime: shared.AtimeEnumBestEffort.ToPointer(),
                BytesPerSecond: sdk.Int64(373291),
                Gid: shared.GidEnumIntValue.ToPointer(),
                LogLevel: shared.LogLevelEnumBasic.ToPointer(),
                Mtime: shared.MtimeEnumPreserve.ToPointer(),
                ObjectTags: shared.ObjectTagsEnumPreserve.ToPointer(),
                OverwriteMode: shared.OverwriteModeEnumNever.ToPointer(),
                PosixPermissions: shared.PosixPermissionsEnumNone.ToPointer(),
                PreserveDeletedFiles: shared.PreserveDeletedFilesEnumRemove.ToPointer(),
                PreserveDevices: shared.PreserveDevicesEnumNone.ToPointer(),
                SecurityDescriptorCopyFlags: shared.SmbSecurityDescriptorCopyFlagsEnumOwnerDaclSacl.ToPointer(),
                TaskQueueing: shared.TaskQueueingEnumEnabled.ToPointer(),
                TransferMode: shared.TransferModeEnumChanged.ToPointer(),
                UID: shared.UIDEnumBoth.ToPointer(),
                VerifyMode: shared.VerifyModeEnumOnlyFilesTransferred.ToPointer(),
            },
            Schedule: &shared.TaskSchedule{
                ScheduleExpression: "hic",
            },
            SourceLocationArn: "libero",
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "dolores",
                    Value: sdk.String("quis"),
                },
                shared.TagListEntry{
                    Key: "totam",
                    Value: sdk.String("dignissimos"),
                },
                shared.TagListEntry{
                    Key: "eaque",
                    Value: sdk.String("quis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.CreateTaskXAmzTargetEnumFmrsServiceCreateTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTaskResponse != nil {
        // handle response
    }
}
```

## DeleteAgent

Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.

### Example Usage

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
    res, err := s.SDK.DeleteAgent(ctx, operations.DeleteAgentRequest{
        DeleteAgentRequest: shared.DeleteAgentRequest{
            AgentArn: "vero",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DeleteAgentXAmzTargetEnumFmrsServiceDeleteAgent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAgentResponse != nil {
        // handle response
    }
}
```

## DeleteLocation

Deletes the configuration of a location used by DataSync. 

### Example Usage

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
    res, err := s.SDK.DeleteLocation(ctx, operations.DeleteLocationRequest{
        DeleteLocationRequest: shared.DeleteLocationRequest{
            LocationArn: "porro",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DeleteLocationXAmzTargetEnumFmrsServiceDeleteLocation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLocationResponse != nil {
        // handle response
    }
}
```

## DeleteTask

Deletes an DataSync task.

### Example Usage

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
    res, err := s.SDK.DeleteTask(ctx, operations.DeleteTaskRequest{
        DeleteTaskRequest: shared.DeleteTaskRequest{
            TaskArn: "asperiores",
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DeleteTaskXAmzTargetEnumFmrsServiceDeleteTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTaskResponse != nil {
        // handle response
    }
}
```

## DescribeAgent

Returns metadata about an DataSync agent, such as its name, endpoint type, and status.

### Example Usage

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
    res, err := s.SDK.DescribeAgent(ctx, operations.DescribeAgentRequest{
        DescribeAgentRequest: shared.DescribeAgentRequest{
            AgentArn: "nobis",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeAgentXAmzTargetEnumFmrsServiceDescribeAgent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAgentResponse != nil {
        // handle response
    }
}
```

## DescribeDiscoveryJob

Returns information about a DataSync discovery job.

### Example Usage

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
    res, err := s.SDK.DescribeDiscoveryJob(ctx, operations.DescribeDiscoveryJobRequest{
        DescribeDiscoveryJobRequest: shared.DescribeDiscoveryJobRequest{
            DiscoveryJobArn: "dolor",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.DescribeDiscoveryJobXAmzTargetEnumFmrsServiceDescribeDiscoveryJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDiscoveryJobResponse != nil {
        // handle response
    }
}
```

## DescribeLocationEfs

Returns metadata about your DataSync location for an Amazon EFS file system.

### Example Usage

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
    res, err := s.SDK.DescribeLocationEfs(ctx, operations.DescribeLocationEfsRequest{
        DescribeLocationEfsRequest: shared.DescribeLocationEfsRequest{
            LocationArn: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.DescribeLocationEfsXAmzTargetEnumFmrsServiceDescribeLocationEfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationEfsResponse != nil {
        // handle response
    }
}
```

## DescribeLocationFsxLustre

Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.

### Example Usage

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
    res, err := s.SDK.DescribeLocationFsxLustre(ctx, operations.DescribeLocationFsxLustreRequest{
        DescribeLocationFsxLustreRequest: shared.DescribeLocationFsxLustreRequest{
            LocationArn: "odio",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.DescribeLocationFsxLustreXAmzTargetEnumFmrsServiceDescribeLocationFsxLustre,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationFsxLustreResponse != nil {
        // handle response
    }
}
```

## DescribeLocationFsxOntap

<p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>

### Example Usage

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
    res, err := s.SDK.DescribeLocationFsxOntap(ctx, operations.DescribeLocationFsxOntapRequest{
        DescribeLocationFsxOntapRequest: shared.DescribeLocationFsxOntapRequest{
            LocationArn: "atque",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DescribeLocationFsxOntapXAmzTargetEnumFmrsServiceDescribeLocationFsxOntap,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationFsxOntapResponse != nil {
        // handle response
    }
}
```

## DescribeLocationFsxOpenZfs

<p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>

### Example Usage

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
    res, err := s.SDK.DescribeLocationFsxOpenZfs(ctx, operations.DescribeLocationFsxOpenZfsRequest{
        DescribeLocationFsxOpenZfsRequest: shared.DescribeLocationFsxOpenZfsRequest{
            LocationArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeLocationFsxOpenZfsXAmzTargetEnumFmrsServiceDescribeLocationFsxOpenZfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationFsxOpenZfsResponse != nil {
        // handle response
    }
}
```

## DescribeLocationFsxWindows

Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.

### Example Usage

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
    res, err := s.SDK.DescribeLocationFsxWindows(ctx, operations.DescribeLocationFsxWindowsRequest{
        DescribeLocationFsxWindowsRequest: shared.DescribeLocationFsxWindowsRequest{
            LocationArn: "voluptate",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.DescribeLocationFsxWindowsXAmzTargetEnumFmrsServiceDescribeLocationFsxWindows,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationFsxWindowsResponse != nil {
        // handle response
    }
}
```

## DescribeLocationHdfs

Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 

### Example Usage

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
    res, err := s.SDK.DescribeLocationHdfs(ctx, operations.DescribeLocationHdfsRequest{
        DescribeLocationHdfsRequest: shared.DescribeLocationHdfsRequest{
            LocationArn: "accusamus",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.DescribeLocationHdfsXAmzTargetEnumFmrsServiceDescribeLocationHdfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationHdfsResponse != nil {
        // handle response
    }
}
```

## DescribeLocationNfs

Returns metadata, such as the path information, about an NFS location.

### Example Usage

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
    res, err := s.SDK.DescribeLocationNfs(ctx, operations.DescribeLocationNfsRequest{
        DescribeLocationNfsRequest: shared.DescribeLocationNfsRequest{
            LocationArn: "totam",
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DescribeLocationNfsXAmzTargetEnumFmrsServiceDescribeLocationNfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationNfsResponse != nil {
        // handle response
    }
}
```

## DescribeLocationObjectStorage

Returns metadata about your DataSync location for an object storage system.

### Example Usage

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
    res, err := s.SDK.DescribeLocationObjectStorage(ctx, operations.DescribeLocationObjectStorageRequest{
        DescribeLocationObjectStorageRequest: shared.DescribeLocationObjectStorageRequest{
            LocationArn: "officiis",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeLocationObjectStorageXAmzTargetEnumFmrsServiceDescribeLocationObjectStorage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationObjectStorageResponse != nil {
        // handle response
    }
}
```

## DescribeLocationS3

Returns metadata, such as bucket name, about an Amazon S3 bucket location.

### Example Usage

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
    res, err := s.SDK.DescribeLocationS3(ctx, operations.DescribeLocationS3Request{
        DescribeLocationS3Request: shared.DescribeLocationS3Request{
            LocationArn: "quisquam",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DescribeLocationS3XAmzTargetEnumFmrsServiceDescribeLocationS3,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationS3Response != nil {
        // handle response
    }
}
```

## DescribeLocationSmb

Returns metadata, such as the path and user information about an SMB location.

### Example Usage

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
    res, err := s.SDK.DescribeLocationSmb(ctx, operations.DescribeLocationSmbRequest{
        DescribeLocationSmbRequest: shared.DescribeLocationSmbRequest{
            LocationArn: "sapiente",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DescribeLocationSmbXAmzTargetEnumFmrsServiceDescribeLocationSmb,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLocationSmbResponse != nil {
        // handle response
    }
}
```

## DescribeStorageSystem

Returns information about an on-premises storage system that you're using with DataSync Discovery.

### Example Usage

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
    res, err := s.SDK.DescribeStorageSystem(ctx, operations.DescribeStorageSystemRequest{
        DescribeStorageSystemRequest: shared.DescribeStorageSystemRequest{
            StorageSystemArn: "libero",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.DescribeStorageSystemXAmzTargetEnumFmrsServiceDescribeStorageSystem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStorageSystemResponse != nil {
        // handle response
    }
}
```

## DescribeStorageSystemResourceMetrics

Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeStorageSystemResourceMetrics(ctx, operations.DescribeStorageSystemResourceMetricsRequest{
        DescribeStorageSystemResourceMetricsRequest: shared.DescribeStorageSystemResourceMetricsRequest{
            DiscoveryJobArn: "maxime",
            EndTime: types.MustTimeFromString("2020-10-04T22:45:05.165Z"),
            MaxResults: sdk.Int64(117531),
            NextToken: sdk.String("laborum"),
            ResourceID: "totam",
            ResourceType: shared.DiscoveryResourceTypeEnumSvm,
            StartTime: types.MustTimeFromString("2022-10-29T03:47:52.981Z"),
        },
        MaxResults: sdk.String("distinctio"),
        NextToken: sdk.String("facilis"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DescribeStorageSystemResourceMetricsXAmzTargetEnumFmrsServiceDescribeStorageSystemResourceMetrics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStorageSystemResourceMetricsResponse != nil {
        // handle response
    }
}
```

## DescribeStorageSystemResources

Returns information that DataSync Discovery collects about resources in your on-premises storage system.

### Example Usage

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
    res, err := s.SDK.DescribeStorageSystemResources(ctx, operations.DescribeStorageSystemResourcesRequest{
        DescribeStorageSystemResourcesRequest: shared.DescribeStorageSystemResourcesRequest{
            DiscoveryJobArn: "magni",
            Filter: map[string][]string{
                "sunt": []string{
                    "nam",
                    "hic",
                },
                "voluptatem": []string{
                    "soluta",
                    "nobis",
                    "et",
                    "saepe",
                },
            },
            MaxResults: sdk.Int64(217450),
            NextToken: sdk.String("veritatis"),
            ResourceIds: []string{
                "quos",
                "tempore",
                "cupiditate",
            },
            ResourceType: shared.DiscoveryResourceTypeEnumSvm,
        },
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("dolorem"),
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.DescribeStorageSystemResourcesXAmzTargetEnumFmrsServiceDescribeStorageSystemResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStorageSystemResourcesResponse != nil {
        // handle response
    }
}
```

## DescribeTask

Returns metadata about a task.

### Example Usage

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
    res, err := s.SDK.DescribeTask(ctx, operations.DescribeTaskRequest{
        DescribeTaskRequest: shared.DescribeTaskRequest{
            TaskArn: "quas",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.DescribeTaskXAmzTargetEnumFmrsServiceDescribeTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTaskResponse != nil {
        // handle response
    }
}
```

## DescribeTaskExecution

Returns detailed metadata about a task that is being executed.

### Example Usage

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
    res, err := s.SDK.DescribeTaskExecution(ctx, operations.DescribeTaskExecutionRequest{
        DescribeTaskExecutionRequest: shared.DescribeTaskExecutionRequest{
            TaskExecutionArn: "facilis",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DescribeTaskExecutionXAmzTargetEnumFmrsServiceDescribeTaskExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTaskExecutionResponse != nil {
        // handle response
    }
}
```

## GenerateRecommendations

<p>Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p> <note> <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync Discovery generates the recommendations for you automatically.</p> </note>

### Example Usage

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
    res, err := s.SDK.GenerateRecommendations(ctx, operations.GenerateRecommendationsRequest{
        GenerateRecommendationsRequest: shared.GenerateRecommendationsRequest{
            DiscoveryJobArn: "quisquam",
            ResourceIds: []string{
                "omnis",
                "quis",
                "ipsum",
                "delectus",
            },
            ResourceType: shared.DiscoveryResourceTypeEnumVolume,
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.GenerateRecommendationsXAmzTargetEnumFmrsServiceGenerateRecommendations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateRecommendationsResponse != nil {
        // handle response
    }
}
```

## ListAgents

<p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>

### Example Usage

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
    res, err := s.SDK.ListAgents(ctx, operations.ListAgentsRequest{
        ListAgentsRequest: shared.ListAgentsRequest{
            MaxResults: sdk.Int64(486160),
            NextToken: sdk.String("similique"),
        },
        MaxResults: sdk.String("facilis"),
        NextToken: sdk.String("vero"),
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListAgentsXAmzTargetEnumFmrsServiceListAgents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAgentsResponse != nil {
        // handle response
    }
}
```

## ListDiscoveryJobs

Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery.

### Example Usage

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
    res, err := s.SDK.ListDiscoveryJobs(ctx, operations.ListDiscoveryJobsRequest{
        ListDiscoveryJobsRequest: shared.ListDiscoveryJobsRequest{
            MaxResults: sdk.Int64(13236),
            NextToken: sdk.String("voluptatibus"),
            StorageSystemArn: sdk.String("exercitationem"),
        },
        MaxResults: sdk.String("nulla"),
        NextToken: sdk.String("fugit"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.ListDiscoveryJobsXAmzTargetEnumFmrsServiceListDiscoveryJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDiscoveryJobsResponse != nil {
        // handle response
    }
}
```

## ListLocations

<p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>

### Example Usage

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
    res, err := s.SDK.ListLocations(ctx, operations.ListLocationsRequest{
        ListLocationsRequest: shared.ListLocationsRequest{
            Filters: []shared.LocationFilter{
                shared.LocationFilter{
                    Name: shared.LocationFilterNameEnumLocationURI,
                    Operator: shared.OperatorEnumLessThanOrEqual,
                    Values: []string{
                        "aspernatur",
                        "vel",
                    },
                },
                shared.LocationFilter{
                    Name: shared.LocationFilterNameEnumCreationTime,
                    Operator: shared.OperatorEnumIn,
                    Values: []string{
                        "ex",
                    },
                },
                shared.LocationFilter{
                    Name: shared.LocationFilterNameEnumLocationType,
                    Operator: shared.OperatorEnumNotEquals,
                    Values: []string{
                        "maiores",
                    },
                },
            },
            MaxResults: sdk.Int64(97844),
            NextToken: sdk.String("ex"),
        },
        MaxResults: sdk.String("nulla"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListLocationsXAmzTargetEnumFmrsServiceListLocations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## ListStorageSystems

Lists the on-premises storage systems that you're using with DataSync Discovery.

### Example Usage

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
    res, err := s.SDK.ListStorageSystems(ctx, operations.ListStorageSystemsRequest{
        ListStorageSystemsRequest: shared.ListStorageSystemsRequest{
            MaxResults: sdk.Int64(359271),
            NextToken: sdk.String("veniam"),
        },
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("inventore"),
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.ListStorageSystemsXAmzTargetEnumFmrsServiceListStorageSystems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStorageSystemsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns all the tags associated with an Amazon Web Services resource.

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            MaxResults: sdk.Int64(53427),
            NextToken: sdk.String("a"),
            ResourceArn: "libero",
        },
        MaxResults: sdk.String("aut"),
        NextToken: sdk.String("aut"),
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumFmrsServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTaskExecutions

Returns a list of executed tasks.

### Example Usage

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
    res, err := s.SDK.ListTaskExecutions(ctx, operations.ListTaskExecutionsRequest{
        ListTaskExecutionsRequest: shared.ListTaskExecutionsRequest{
            MaxResults: sdk.Int64(89603),
            NextToken: sdk.String("dolorum"),
            TaskArn: sdk.String("laborum"),
        },
        MaxResults: sdk.String("placeat"),
        NextToken: sdk.String("velit"),
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.ListTaskExecutionsXAmzTargetEnumFmrsServiceListTaskExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskExecutionsResponse != nil {
        // handle response
    }
}
```

## ListTasks

Returns a list of the DataSync tasks you created.

### Example Usage

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
    res, err := s.SDK.ListTasks(ctx, operations.ListTasksRequest{
        ListTasksRequest: shared.ListTasksRequest{
            Filters: []shared.TaskFilter{
                shared.TaskFilter{
                    Name: shared.TaskFilterNameEnumLocationID,
                    Operator: shared.OperatorEnumIn,
                    Values: []string{
                        "explicabo",
                        "provident",
                    },
                },
                shared.TaskFilter{
                    Name: shared.TaskFilterNameEnumLocationID,
                    Operator: shared.OperatorEnumLessThan,
                    Values: []string{
                        "odio",
                        "eius",
                    },
                },
                shared.TaskFilter{
                    Name: shared.TaskFilterNameEnumLocationID,
                    Operator: shared.OperatorEnumLessThan,
                    Values: []string{
                        "fuga",
                        "reprehenderit",
                        "quidem",
                    },
                },
            },
            MaxResults: sdk.Int64(852635),
            NextToken: sdk.String("ut"),
        },
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.ListTasksXAmzTargetEnumFmrsServiceListTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTasksResponse != nil {
        // handle response
    }
}
```

## RemoveStorageSystem

Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations.

### Example Usage

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
    res, err := s.SDK.RemoveStorageSystem(ctx, operations.RemoveStorageSystemRequest{
        RemoveStorageSystemRequest: shared.RemoveStorageSystemRequest{
            StorageSystemArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.RemoveStorageSystemXAmzTargetEnumFmrsServiceRemoveStorageSystem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveStorageSystemResponse != nil {
        // handle response
    }
}
```

## StartDiscoveryJob

Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a> operation.

### Example Usage

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
    res, err := s.SDK.StartDiscoveryJob(ctx, operations.StartDiscoveryJobRequest{
        StartDiscoveryJobRequest: shared.StartDiscoveryJobRequest{
            ClientToken: "voluptas",
            CollectionDurationMinutes: 69859,
            StorageSystemArn: "cupiditate",
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "tempora",
                    Value: sdk.String("debitis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.StartDiscoveryJobXAmzTargetEnumFmrsServiceStartDiscoveryJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDiscoveryJobResponse != nil {
        // handle response
    }
}
```

## StartTaskExecution

<p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>

### Example Usage

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
    res, err := s.SDK.StartTaskExecution(ctx, operations.StartTaskExecutionRequest{
        StartTaskExecutionRequest: shared.StartTaskExecutionRequest{
            Excludes: []shared.FilterRule{
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("quod"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("dignissimos"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("inventore"),
                },
            },
            Includes: []shared.FilterRule{
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("totam"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("accusamus"),
                },
            },
            OverrideOptions: &shared.Options{
                Atime: shared.AtimeEnumNone.ToPointer(),
                BytesPerSecond: sdk.Int64(488410),
                Gid: shared.GidEnumName.ToPointer(),
                LogLevel: shared.LogLevelEnumBasic.ToPointer(),
                Mtime: shared.MtimeEnumPreserve.ToPointer(),
                ObjectTags: shared.ObjectTagsEnumPreserve.ToPointer(),
                OverwriteMode: shared.OverwriteModeEnumNever.ToPointer(),
                PosixPermissions: shared.PosixPermissionsEnumNone.ToPointer(),
                PreserveDeletedFiles: shared.PreserveDeletedFilesEnumPreserve.ToPointer(),
                PreserveDevices: shared.PreserveDevicesEnumPreserve.ToPointer(),
                SecurityDescriptorCopyFlags: shared.SmbSecurityDescriptorCopyFlagsEnumOwnerDacl.ToPointer(),
                TaskQueueing: shared.TaskQueueingEnumDisabled.ToPointer(),
                TransferMode: shared.TransferModeEnumAll.ToPointer(),
                UID: shared.UIDEnumNone.ToPointer(),
                VerifyMode: shared.VerifyModeEnumOnlyFilesTransferred.ToPointer(),
            },
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "fuga",
                    Value: sdk.String("mollitia"),
                },
            },
            TaskArn: "incidunt",
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.StartTaskExecutionXAmzTargetEnumFmrsServiceStartTaskExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTaskExecutionResponse != nil {
        // handle response
    }
}
```

## StopDiscoveryJob

<p>Stops a running DataSync discovery job.</p> <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>

### Example Usage

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
    res, err := s.SDK.StopDiscoveryJob(ctx, operations.StopDiscoveryJobRequest{
        StopDiscoveryJobRequest: shared.StopDiscoveryJobRequest{
            DiscoveryJobArn: "ratione",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.StopDiscoveryJobXAmzTargetEnumFmrsServiceStopDiscoveryJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopDiscoveryJobResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "accusamus",
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "esse",
                    Value: sdk.String("quod"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumFmrsServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from an Amazon Web Services resource.

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            Keys: []string{
                "rerum",
                "occaecati",
            },
            ResourceArn: "minima",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumFmrsServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAgent

Updates the name of an agent.

### Example Usage

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
    res, err := s.SDK.UpdateAgent(ctx, operations.UpdateAgentRequest{
        UpdateAgentRequest: shared.UpdateAgentRequest{
            AgentArn: "consequuntur",
            Name: sdk.String("Sadie Hackett"),
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.UpdateAgentXAmzTargetEnumFmrsServiceUpdateAgent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAgentResponse != nil {
        // handle response
    }
}
```

## UpdateDiscoveryJob

Edits a DataSync discovery job configuration.

### Example Usage

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
    res, err := s.SDK.UpdateDiscoveryJob(ctx, operations.UpdateDiscoveryJobRequest{
        UpdateDiscoveryJobRequest: shared.UpdateDiscoveryJobRequest{
            CollectionDurationMinutes: 97468,
            DiscoveryJobArn: "a",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.UpdateDiscoveryJobXAmzTargetEnumFmrsServiceUpdateDiscoveryJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDiscoveryJobResponse != nil {
        // handle response
    }
}
```

## UpdateLocationHdfs

Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.

### Example Usage

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
    res, err := s.SDK.UpdateLocationHdfs(ctx, operations.UpdateLocationHdfsRequest{
        UpdateLocationHdfsRequest: shared.UpdateLocationHdfsRequest{
            AgentArns: []string{
                "veritatis",
                "consequuntur",
                "quasi",
                "similique",
            },
            AuthenticationType: shared.HdfsAuthenticationTypeEnumKerberos.ToPointer(),
            BlockSize: sdk.Int64(398434),
            KerberosKeytab: sdk.String("tenetur"),
            KerberosKrb5Conf: sdk.String("quae"),
            KerberosPrincipal: sdk.String("earum"),
            KmsKeyProviderURI: sdk.String("vel"),
            LocationArn: "in",
            NameNodes: []shared.HdfsNameNode{
                shared.HdfsNameNode{
                    Hostname: "second-statute.net",
                    Port: 33304,
                },
                shared.HdfsNameNode{
                    Hostname: "free-violet.com",
                    Port: 355369,
                },
            },
            QopConfiguration: &shared.QopConfiguration{
                DataTransferProtection: shared.HdfsDataTransferProtectionEnumAuthentication.ToPointer(),
                RPCProtection: shared.HdfsRPCProtectionEnumAuthentication.ToPointer(),
            },
            ReplicationFactor: sdk.Int64(391774),
            SimpleUser: sdk.String("aut"),
            Subdirectory: sdk.String("voluptatum"),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.UpdateLocationHdfsXAmzTargetEnumFmrsServiceUpdateLocationHdfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLocationHdfsResponse != nil {
        // handle response
    }
}
```

## UpdateLocationNfs

Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.

### Example Usage

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
    res, err := s.SDK.UpdateLocationNfs(ctx, operations.UpdateLocationNfsRequest{
        UpdateLocationNfsRequest: shared.UpdateLocationNfsRequest{
            LocationArn: "omnis",
            MountOptions: &shared.NfsMountOptions{
                Version: shared.NfsVersionEnumNfs41.ToPointer(),
            },
            OnPremConfig: &shared.OnPremConfig{
                AgentArns: []string{
                    "at",
                },
            },
            Subdirectory: sdk.String("et"),
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.UpdateLocationNfsXAmzTargetEnumFmrsServiceUpdateLocationNfs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLocationNfsResponse != nil {
        // handle response
    }
}
```

## UpdateLocationObjectStorage

Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.

### Example Usage

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
    res, err := s.SDK.UpdateLocationObjectStorage(ctx, operations.UpdateLocationObjectStorageRequest{
        UpdateLocationObjectStorageRequest: shared.UpdateLocationObjectStorageRequest{
            AccessKey: sdk.String("temporibus"),
            AgentArns: []string{
                "rem",
            },
            LocationArn: "aut",
            SecretKey: sdk.String("laudantium"),
            ServerCertificate: sdk.String("eum"),
            ServerPort: sdk.Int64(649832),
            ServerProtocol: shared.ObjectStorageServerProtocolEnumHTTPS.ToPointer(),
            Subdirectory: sdk.String("corrupti"),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.UpdateLocationObjectStorageXAmzTargetEnumFmrsServiceUpdateLocationObjectStorage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLocationObjectStorageResponse != nil {
        // handle response
    }
}
```

## UpdateLocationSmb

Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.

### Example Usage

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
    res, err := s.SDK.UpdateLocationSmb(ctx, operations.UpdateLocationSmbRequest{
        UpdateLocationSmbRequest: shared.UpdateLocationSmbRequest{
            AgentArns: []string{
                "aut",
                "dignissimos",
            },
            Domain: sdk.String("dicta"),
            LocationArn: "maiores",
            MountOptions: &shared.SmbMountOptions{
                Version: shared.SmbVersionEnumSmb1.ToPointer(),
            },
            Password: sdk.String("velit"),
            Subdirectory: sdk.String("voluptatibus"),
            User: sdk.String("voluptas"),
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.UpdateLocationSmbXAmzTargetEnumFmrsServiceUpdateLocationSmb,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLocationSmbResponse != nil {
        // handle response
    }
}
```

## UpdateStorageSystem

Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery.

### Example Usage

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
    res, err := s.SDK.UpdateStorageSystem(ctx, operations.UpdateStorageSystemRequest{
        UpdateStorageSystemRequest: shared.UpdateStorageSystemRequest{
            AgentArns: []string{
                "dignissimos",
                "officia",
                "asperiores",
                "nemo",
            },
            CloudWatchLogGroupArn: sdk.String("quae"),
            Credentials: &shared.Credentials{
                Password: "quaerat",
                Username: "porro",
            },
            Name: sdk.String("Francisco Bernier"),
            ServerConfiguration: &shared.DiscoveryServerConfiguration{
                ServerHostname: "id",
                ServerPort: sdk.Int64(380729),
            },
            StorageSystemArn: "velit",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.UpdateStorageSystemXAmzTargetEnumFmrsServiceUpdateStorageSystem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStorageSystemResponse != nil {
        // handle response
    }
}
```

## UpdateTask

Updates the metadata associated with a task.

### Example Usage

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
    res, err := s.SDK.UpdateTask(ctx, operations.UpdateTaskRequest{
        UpdateTaskRequest: shared.UpdateTaskRequest{
            CloudWatchLogGroupArn: sdk.String("quos"),
            Excludes: []shared.FilterRule{
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("labore"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("possimus"),
                },
            },
            Includes: []shared.FilterRule{
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("cum"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("commodi"),
                },
                shared.FilterRule{
                    FilterType: shared.FilterTypeEnumSimplePattern.ToPointer(),
                    Value: sdk.String("in"),
                },
            },
            Name: sdk.String("Lela Shields"),
            Options: &shared.Options{
                Atime: shared.AtimeEnumNone.ToPointer(),
                BytesPerSecond: sdk.Int64(46007),
                Gid: shared.GidEnumName.ToPointer(),
                LogLevel: shared.LogLevelEnumOff.ToPointer(),
                Mtime: shared.MtimeEnumNone.ToPointer(),
                ObjectTags: shared.ObjectTagsEnumPreserve.ToPointer(),
                OverwriteMode: shared.OverwriteModeEnumNever.ToPointer(),
                PosixPermissions: shared.PosixPermissionsEnumPreserve.ToPointer(),
                PreserveDeletedFiles: shared.PreserveDeletedFilesEnumPreserve.ToPointer(),
                PreserveDevices: shared.PreserveDevicesEnumPreserve.ToPointer(),
                SecurityDescriptorCopyFlags: shared.SmbSecurityDescriptorCopyFlagsEnumOwnerDacl.ToPointer(),
                TaskQueueing: shared.TaskQueueingEnumDisabled.ToPointer(),
                TransferMode: shared.TransferModeEnumAll.ToPointer(),
                UID: shared.UIDEnumBoth.ToPointer(),
                VerifyMode: shared.VerifyModeEnumNone.ToPointer(),
            },
            Schedule: &shared.TaskSchedule{
                ScheduleExpression: "dolore",
            },
            TaskArn: "sunt",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.UpdateTaskXAmzTargetEnumFmrsServiceUpdateTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTaskResponse != nil {
        // handle response
    }
}
```

## UpdateTaskExecution

<p>Modifies a running DataSync task.</p> <note> <p>Currently, the only <code>Option</code> that you can modify with <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>, which throttles bandwidth for a running or queued task.</p> </note>

### Example Usage

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
    res, err := s.SDK.UpdateTaskExecution(ctx, operations.UpdateTaskExecutionRequest{
        UpdateTaskExecutionRequest: shared.UpdateTaskExecutionRequest{
            Options: shared.Options{
                Atime: shared.AtimeEnumBestEffort.ToPointer(),
                BytesPerSecond: sdk.Int64(233420),
                Gid: shared.GidEnumIntValue.ToPointer(),
                LogLevel: shared.LogLevelEnumTransfer.ToPointer(),
                Mtime: shared.MtimeEnumNone.ToPointer(),
                ObjectTags: shared.ObjectTagsEnumPreserve.ToPointer(),
                OverwriteMode: shared.OverwriteModeEnumNever.ToPointer(),
                PosixPermissions: shared.PosixPermissionsEnumPreserve.ToPointer(),
                PreserveDeletedFiles: shared.PreserveDeletedFilesEnumPreserve.ToPointer(),
                PreserveDevices: shared.PreserveDevicesEnumPreserve.ToPointer(),
                SecurityDescriptorCopyFlags: shared.SmbSecurityDescriptorCopyFlagsEnumOwnerDacl.ToPointer(),
                TaskQueueing: shared.TaskQueueingEnumEnabled.ToPointer(),
                TransferMode: shared.TransferModeEnumChanged.ToPointer(),
                UID: shared.UIDEnumIntValue.ToPointer(),
                VerifyMode: shared.VerifyModeEnumOnlyFilesTransferred.ToPointer(),
            },
            TaskExecutionArn: "voluptas",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.UpdateTaskExecutionXAmzTargetEnumFmrsServiceUpdateTaskExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTaskExecutionResponse != nil {
        // handle response
    }
}
```
