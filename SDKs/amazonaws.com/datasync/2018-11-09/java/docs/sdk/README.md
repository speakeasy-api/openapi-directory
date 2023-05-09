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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddStorageSystemRequest req = new AddStorageSystemRequest(                new AddStorageSystemRequest(                new String[]{{
                                                add("ipsam"),
                                            }}, "repellendus",                 new Credentials("sapiente", "quo");,                 new DiscoveryServerConfiguration("odit") {{
                                                serverPort = 870013L;
                                            }};, DiscoverySystemTypeEnum.NET_APP_ONTAP) {{
                                cloudWatchLogGroupArn = "at";
                                name = "Javier Schmidt";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("dicta") {{
                                        key = "porro";
                                        value = "dolorum";
                                    }}),
                                    add(new TagListEntry("occaecati") {{
                                        key = "nam";
                                        value = "officia";
                                    }}),
                                    add(new TagListEntry("hic") {{
                                        key = "fugit";
                                        value = "deleniti";
                                    }}),
                                }};
                            }};, AddStorageSystemXAmzTargetEnum.FMRS_SERVICE_ADD_STORAGE_SYSTEM) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            AddStorageSystemResponse res = sdk.sdk.addStorageSystem(req);

            if (res.addStorageSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelTaskExecution

<p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelTaskExecutionRequest;
import org.openapis.openapi.models.operations.CancelTaskExecutionResponse;
import org.openapis.openapi.models.operations.CancelTaskExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelTaskExecutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelTaskExecutionRequest req = new CancelTaskExecutionRequest(                new CancelTaskExecutionRequest("cum");, CancelTaskExecutionXAmzTargetEnum.FMRS_SERVICE_CANCEL_TASK_EXECUTION) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CancelTaskExecutionResponse res = sdk.sdk.cancelTaskExecution(req);

            if (res.cancelTaskExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAgent

<p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAgentRequest;
import org.openapis.openapi.models.operations.CreateAgentResponse;
import org.openapis.openapi.models.operations.CreateAgentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAgentRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAgentRequest req = new CreateAgentRequest(                new CreateAgentRequest("iste") {{
                                agentName = "dolor";
                                securityGroupArns = new String[]{{
                                    add("laboriosam"),
                                    add("hic"),
                                    add("saepe"),
                                }};
                                subnetArns = new String[]{{
                                    add("in"),
                                    add("corporis"),
                                    add("iste"),
                                }};
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("architecto") {{
                                        key = "saepe";
                                        value = "quidem";
                                    }}),
                                    add(new TagListEntry("est") {{
                                        key = "ipsa";
                                        value = "reiciendis";
                                    }}),
                                }};
                                vpcEndpointId = "mollitia";
                            }};, CreateAgentXAmzTargetEnum.FMRS_SERVICE_CREATE_AGENT) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
            }};            

            CreateAgentResponse res = sdk.sdk.createAgent(req);

            if (res.createAgentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationEfs

Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationEfsRequest;
import org.openapis.openapi.models.operations.CreateLocationEfsResponse;
import org.openapis.openapi.models.operations.CreateLocationEfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationEfsRequest;
import org.openapis.openapi.models.shared.Ec2Config;
import org.openapis.openapi.models.shared.EfsInTransitEncryptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationEfsRequest req = new CreateLocationEfsRequest(                new CreateLocationEfsRequest(                new Ec2Config(                new String[]{{
                                                                add("minima"),
                                                                add("excepturi"),
                                                            }}, "accusantium");, "iure") {{
                                accessPointArn = "culpa";
                                fileSystemAccessRoleArn = "doloribus";
                                inTransitEncryption = EfsInTransitEncryptionEnum.TLS12;
                                subdirectory = "architecto";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("consequuntur") {{
                                        key = "dolorem";
                                        value = "culpa";
                                    }}),
                                    add(new TagListEntry("occaecati") {{
                                        key = "repellat";
                                        value = "mollitia";
                                    }}),
                                    add(new TagListEntry("quam") {{
                                        key = "numquam";
                                        value = "commodi";
                                    }}),
                                }};
                            }};, CreateLocationEfsXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_EFS) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            CreateLocationEfsResponse res = sdk.sdk.createLocationEfs(req);

            if (res.createLocationEfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationFsxLustre

Creates an endpoint for an Amazon FSx for Lustre file system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationFsxLustreRequest;
import org.openapis.openapi.models.operations.CreateLocationFsxLustreResponse;
import org.openapis.openapi.models.operations.CreateLocationFsxLustreXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationFsxLustreRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationFsxLustreRequest req = new CreateLocationFsxLustreRequest(                new CreateLocationFsxLustreRequest("enim",                 new String[]{{
                                                add("quo"),
                                            }}) {{
                                subdirectory = "sequi";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("possimus") {{
                                        key = "ipsam";
                                        value = "id";
                                    }}),
                                    add(new TagListEntry("error") {{
                                        key = "aut";
                                        value = "quasi";
                                    }}),
                                    add(new TagListEntry("quasi") {{
                                        key = "temporibus";
                                        value = "laborum";
                                    }}),
                                    add(new TagListEntry("vero") {{
                                        key = "reiciendis";
                                        value = "voluptatibus";
                                    }}),
                                }};
                            }};, CreateLocationFsxLustreXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_FSX_LUSTRE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            CreateLocationFsxLustreResponse res = sdk.sdk.createLocationFsxLustre(req);

            if (res.createLocationFsxLustreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationFsxOntap

Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationFsxOntapRequest;
import org.openapis.openapi.models.operations.CreateLocationFsxOntapResponse;
import org.openapis.openapi.models.operations.CreateLocationFsxOntapXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationFsxOntapRequest;
import org.openapis.openapi.models.shared.FsxProtocol;
import org.openapis.openapi.models.shared.FsxProtocolNfs;
import org.openapis.openapi.models.shared.FsxProtocolSmb;
import org.openapis.openapi.models.shared.NfsMountOptions;
import org.openapis.openapi.models.shared.NfsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmbMountOptions;
import org.openapis.openapi.models.shared.SmbVersionEnum;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationFsxOntapRequest req = new CreateLocationFsxOntapRequest(                new CreateLocationFsxOntapRequest(                new FsxProtocol() {{
                                                nfs = new FsxProtocolNfs() {{
                                                    mountOptions = new NfsMountOptions() {{
                                                        version = NfsVersionEnum.AUTOMATIC;
                                                    }};;
                                                }};;
                                                smb = new FsxProtocolSmb("reprehenderit", "ut") {{
                                                    domain = "maiores";
                                                    mountOptions = new SmbMountOptions() {{
                                                        version = SmbVersionEnum.AUTOMATIC;
                                                    }};;
                                                }};;
                                            }};,                 new String[]{{
                                                add("dolore"),
                                                add("iusto"),
                                            }}, "dicta") {{
                                subdirectory = "harum";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("repudiandae") {{
                                        key = "accusamus";
                                        value = "commodi";
                                    }}),
                                    add(new TagListEntry("quidem") {{
                                        key = "quae";
                                        value = "ipsum";
                                    }}),
                                }};
                            }};, CreateLocationFsxOntapXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_FSX_ONTAP) {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
            }};            

            CreateLocationFsxOntapResponse res = sdk.sdk.createLocationFsxOntap(req);

            if (res.createLocationFsxOntapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationFsxOpenZfs

<p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationFsxOpenZfsRequest;
import org.openapis.openapi.models.operations.CreateLocationFsxOpenZfsResponse;
import org.openapis.openapi.models.operations.CreateLocationFsxOpenZfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationFsxOpenZfsRequest;
import org.openapis.openapi.models.shared.FsxProtocol;
import org.openapis.openapi.models.shared.FsxProtocolNfs;
import org.openapis.openapi.models.shared.FsxProtocolSmb;
import org.openapis.openapi.models.shared.NfsMountOptions;
import org.openapis.openapi.models.shared.NfsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmbMountOptions;
import org.openapis.openapi.models.shared.SmbVersionEnum;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationFsxOpenZfsRequest req = new CreateLocationFsxOpenZfsRequest(                new CreateLocationFsxOpenZfsRequest("repudiandae",                 new FsxProtocol() {{
                                                nfs = new FsxProtocolNfs() {{
                                                    mountOptions = new NfsMountOptions() {{
                                                        version = NfsVersionEnum.NFS40;
                                                    }};;
                                                }};;
                                                smb = new FsxProtocolSmb("veritatis", "itaque") {{
                                                    domain = "incidunt";
                                                    mountOptions = new SmbMountOptions() {{
                                                        version = SmbVersionEnum.SMB2;
                                                    }};;
                                                }};;
                                            }};,                 new String[]{{
                                                add("est"),
                                            }}) {{
                                subdirectory = "quibusdam";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("quibusdam") {{
                                        key = "deserunt";
                                        value = "distinctio";
                                    }}),
                                }};
                            }};, CreateLocationFsxOpenZfsXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_FSX_OPEN_ZFS) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateLocationFsxOpenZfsResponse res = sdk.sdk.createLocationFsxOpenZfs(req);

            if (res.createLocationFsxOpenZfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationFsxWindows

Creates an endpoint for an Amazon FSx for Windows File Server file system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationFsxWindowsRequest;
import org.openapis.openapi.models.operations.CreateLocationFsxWindowsResponse;
import org.openapis.openapi.models.operations.CreateLocationFsxWindowsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationFsxWindowsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationFsxWindowsRequest req = new CreateLocationFsxWindowsRequest(                new CreateLocationFsxWindowsRequest("assumenda", "ipsam",                 new String[]{{
                                                add("fugit"),
                                            }}, "dolorum") {{
                                domain = "excepturi";
                                subdirectory = "tempora";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("delectus") {{
                                        key = "tempore";
                                        value = "labore";
                                    }}),
                                    add(new TagListEntry("eligendi") {{
                                        key = "eum";
                                        value = "non";
                                    }}),
                                    add(new TagListEntry("provident") {{
                                        key = "sint";
                                        value = "aliquid";
                                    }}),
                                }};
                            }};, CreateLocationFsxWindowsXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_FSX_WINDOWS) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateLocationFsxWindowsResponse res = sdk.sdk.createLocationFsxWindows(req);

            if (res.createLocationFsxWindowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationHdfs

Creates an endpoint for a Hadoop Distributed File System (HDFS). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationHdfsRequest;
import org.openapis.openapi.models.operations.CreateLocationHdfsResponse;
import org.openapis.openapi.models.operations.CreateLocationHdfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationHdfsRequest;
import org.openapis.openapi.models.shared.HdfsAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.HdfsDataTransferProtectionEnum;
import org.openapis.openapi.models.shared.HdfsNameNode;
import org.openapis.openapi.models.shared.HdfsRpcProtectionEnum;
import org.openapis.openapi.models.shared.QopConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationHdfsRequest req = new CreateLocationHdfsRequest(                new CreateLocationHdfsRequest(                new String[]{{
                                                add("illum"),
                                                add("maiores"),
                                            }}, HdfsAuthenticationTypeEnum.KERBEROS,                 new org.openapis.openapi.models.shared.HdfsNameNode[]{{
                                                add(new HdfsNameNode("aliquid", 675439L) {{
                                                    hostname = "fond-salute.net";
                                                    port = 411820L;
                                                }}),
                                            }}) {{
                                blockSize = 881104L;
                                kerberosKeytab = "non";
                                kerberosKrb5Conf = "occaecati";
                                kerberosPrincipal = "enim";
                                kmsKeyProviderUri = "accusamus";
                                qopConfiguration = new QopConfiguration() {{
                                    dataTransferProtection = HdfsDataTransferProtectionEnum.PRIVACY;
                                    rpcProtection = HdfsRpcProtectionEnum.INTEGRITY;
                                }};;
                                replicationFactor = 588465L;
                                simpleUser = "nam";
                                subdirectory = "id";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("amet") {{
                                        key = "deleniti";
                                        value = "sapiente";
                                    }}),
                                    add(new TagListEntry("vel") {{
                                        key = "deserunt";
                                        value = "nisi";
                                    }}),
                                    add(new TagListEntry("molestiae") {{
                                        key = "natus";
                                        value = "omnis";
                                    }}),
                                }};
                            }};, CreateLocationHdfsXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_HDFS) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "magnam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "id";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "labore";
            }};            

            CreateLocationHdfsResponse res = sdk.sdk.createLocationHdfs(req);

            if (res.createLocationHdfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationNfs

Defines a file system on a Network File System (NFS) server that can be read from or written to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationNfsRequest;
import org.openapis.openapi.models.operations.CreateLocationNfsResponse;
import org.openapis.openapi.models.operations.CreateLocationNfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationNfsRequest;
import org.openapis.openapi.models.shared.NfsMountOptions;
import org.openapis.openapi.models.shared.NfsVersionEnum;
import org.openapis.openapi.models.shared.OnPremConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationNfsRequest req = new CreateLocationNfsRequest(                new CreateLocationNfsRequest(                new OnPremConfig(                new String[]{{
                                                                add("nobis"),
                                                                add("eum"),
                                                                add("vero"),
                                                            }});, "aspernatur", "architecto") {{
                                mountOptions = new NfsMountOptions() {{
                                    version = NfsVersionEnum.NFS3;
                                }};;
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("provident") {{
                                        key = "excepturi";
                                        value = "ullam";
                                    }}),
                                }};
                            }};, CreateLocationNfsXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_NFS) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "sint";
                xAmzCredential = "accusantium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "ad";
            }};            

            CreateLocationNfsResponse res = sdk.sdk.createLocationNfs(req);

            if (res.createLocationNfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationObjectStorage

Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationObjectStorageRequest;
import org.openapis.openapi.models.operations.CreateLocationObjectStorageResponse;
import org.openapis.openapi.models.operations.CreateLocationObjectStorageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationObjectStorageRequest;
import org.openapis.openapi.models.shared.ObjectStorageServerProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationObjectStorageRequest req = new CreateLocationObjectStorageRequest(                new CreateLocationObjectStorageRequest(                new String[]{{
                                                add("necessitatibus"),
                                            }}, "odit", "nemo") {{
                                accessKey = "quasi";
                                secretKey = "iure";
                                serverCertificate = "doloribus";
                                serverPort = 891924L;
                                serverProtocol = ObjectStorageServerProtocolEnum.HTTPS;
                                subdirectory = "maxime";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("architecto") {{
                                        key = "facilis";
                                        value = "in";
                                    }}),
                                    add(new TagListEntry("ullam") {{
                                        key = "architecto";
                                        value = "repudiandae";
                                    }}),
                                    add(new TagListEntry("repellat") {{
                                        key = "expedita";
                                        value = "nihil";
                                    }}),
                                }};
                            }};, CreateLocationObjectStorageXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_OBJECT_STORAGE) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "sed";
                xAmzCredential = "saepe";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "praesentium";
            }};            

            CreateLocationObjectStorageResponse res = sdk.sdk.createLocationObjectStorage(req);

            if (res.createLocationObjectStorageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationS3

<p>A <i>location</i> is an endpoint for an Amazon S3 bucket. DataSync can use the location as a source or destination for copying data.</p> <important> <p>Before you create your location, make sure that you read the following sections:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a> </p> </li> </ul> </important> <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Creating an Amazon S3 location</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationS3Request;
import org.openapis.openapi.models.operations.CreateLocationS3Response;
import org.openapis.openapi.models.operations.CreateLocationS3XAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationS3Request;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.S3StorageClassEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationS3Request req = new CreateLocationS3Request(                new CreateLocationS3Request("magni",                 new S3Config("sunt");) {{
                                agentArns = new String[]{{
                                    add("illum"),
                                    add("pariatur"),
                                    add("maxime"),
                                    add("ea"),
                                }};
                                s3StorageClass = S3StorageClassEnum.GLACIER;
                                subdirectory = "odit";
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("maiores") {{
                                        key = "accusantium";
                                        value = "ab";
                                    }}),
                                    add(new TagListEntry("voluptate") {{
                                        key = "quidem";
                                        value = "ipsam";
                                    }}),
                                }};
                            }};, CreateLocationS3XAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_S3) {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateLocationS3Response res = sdk.sdk.createLocationS3(req);

            if (res.createLocationS3Response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLocationSmb

Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLocationSmbRequest;
import org.openapis.openapi.models.operations.CreateLocationSmbResponse;
import org.openapis.openapi.models.operations.CreateLocationSmbXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLocationSmbRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmbMountOptions;
import org.openapis.openapi.models.shared.SmbVersionEnum;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLocationSmbRequest req = new CreateLocationSmbRequest(                new CreateLocationSmbRequest(                new String[]{{
                                                add("aut"),
                                            }}, "cumque", "corporis", "hic", "libero") {{
                                domain = "nobis";
                                mountOptions = new SmbMountOptions() {{
                                    version = SmbVersionEnum.AUTOMATIC;
                                }};;
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("eaque") {{
                                        key = "totam";
                                        value = "dignissimos";
                                    }}),
                                    add(new TagListEntry("eos") {{
                                        key = "quis";
                                        value = "nesciunt";
                                    }}),
                                }};
                            }};, CreateLocationSmbXAmzTargetEnum.FMRS_SERVICE_CREATE_LOCATION_SMB) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "minus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nostrum";
            }};            

            CreateLocationSmbResponse res = sdk.sdk.createLocationSmb(req);

            if (res.createLocationSmbResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTask

<p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskRequest;
import org.openapis.openapi.models.operations.CreateTaskResponse;
import org.openapis.openapi.models.operations.CreateTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.AtimeEnum;
import org.openapis.openapi.models.shared.CreateTaskRequest;
import org.openapis.openapi.models.shared.FilterRule;
import org.openapis.openapi.models.shared.FilterTypeEnum;
import org.openapis.openapi.models.shared.GidEnum;
import org.openapis.openapi.models.shared.LogLevelEnum;
import org.openapis.openapi.models.shared.MtimeEnum;
import org.openapis.openapi.models.shared.ObjectTagsEnum;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.OverwriteModeEnum;
import org.openapis.openapi.models.shared.PosixPermissionsEnum;
import org.openapis.openapi.models.shared.PreserveDeletedFilesEnum;
import org.openapis.openapi.models.shared.PreserveDevicesEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmbSecurityDescriptorCopyFlagsEnum;
import org.openapis.openapi.models.shared.TagListEntry;
import org.openapis.openapi.models.shared.TaskQueueingEnum;
import org.openapis.openapi.models.shared.TaskSchedule;
import org.openapis.openapi.models.shared.TransferModeEnum;
import org.openapis.openapi.models.shared.UidEnum;
import org.openapis.openapi.models.shared.VerifyModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTaskRequest req = new CreateTaskRequest(                new CreateTaskRequest("recusandae", "omnis") {{
                                cloudWatchLogGroupArn = "facilis";
                                excludes = new org.openapis.openapi.models.shared.FilterRule[]{{
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "voluptatem";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "porro";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "consequuntur";
                                    }}),
                                }};
                                includes = new org.openapis.openapi.models.shared.FilterRule[]{{
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "error";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "eaque";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "occaecati";
                                    }}),
                                }};
                                name = "Travis Zemlak";
                                options = new Options() {{
                                    atime = AtimeEnum.BEST_EFFORT;
                                    bytesPerSecond = 679091L;
                                    gid = GidEnum.NAME;
                                    logLevel = LogLevelEnum.TRANSFER;
                                    mtime = MtimeEnum.PRESERVE;
                                    objectTags = ObjectTagsEnum.NONE;
                                    overwriteMode = OverwriteModeEnum.NEVER;
                                    posixPermissions = PosixPermissionsEnum.PRESERVE;
                                    preserveDeletedFiles = PreserveDeletedFilesEnum.PRESERVE;
                                    preserveDevices = PreserveDevicesEnum.PRESERVE;
                                    securityDescriptorCopyFlags = SmbSecurityDescriptorCopyFlagsEnum.OWNER_DACL;
                                    taskQueueing = TaskQueueingEnum.ENABLED;
                                    transferMode = TransferModeEnum.CHANGED;
                                    uid = UidEnum.NONE;
                                    verifyMode = VerifyModeEnum.POINT_IN_TIME_CONSISTENT;
                                }};;
                                schedule = new TaskSchedule("ipsum");;
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("voluptate") {{
                                        key = "excepturi";
                                        value = "cum";
                                    }}),
                                    add(new TagListEntry("amet") {{
                                        key = "dignissimos";
                                        value = "reiciendis";
                                    }}),
                                    add(new TagListEntry("veritatis") {{
                                        key = "dolorum";
                                        value = "numquam";
                                    }}),
                                    add(new TagListEntry("iure") {{
                                        key = "ipsa";
                                        value = "ipsa";
                                    }}),
                                }};
                            }};, CreateTaskXAmzTargetEnum.FMRS_SERVICE_CREATE_TASK) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            CreateTaskResponse res = sdk.sdk.createTask(req);

            if (res.createTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAgent

Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAgentRequest;
import org.openapis.openapi.models.operations.DeleteAgentResponse;
import org.openapis.openapi.models.operations.DeleteAgentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAgentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAgentRequest req = new DeleteAgentRequest(                new DeleteAgentRequest("atque");, DeleteAgentXAmzTargetEnum.FMRS_SERVICE_DELETE_AGENT) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteAgentResponse res = sdk.sdk.deleteAgent(req);

            if (res.deleteAgentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLocation

Deletes the configuration of a location used by DataSync. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLocationRequest;
import org.openapis.openapi.models.operations.DeleteLocationResponse;
import org.openapis.openapi.models.operations.DeleteLocationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLocationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLocationRequest req = new DeleteLocationRequest(                new DeleteLocationRequest("deleniti");, DeleteLocationXAmzTargetEnum.FMRS_SERVICE_DELETE_LOCATION) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteLocationResponse res = sdk.sdk.deleteLocation(req);

            if (res.deleteLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTask

Deletes an DataSync task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaskRequest;
import org.openapis.openapi.models.operations.DeleteTaskResponse;
import org.openapis.openapi.models.operations.DeleteTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTaskRequest req = new DeleteTaskRequest(                new DeleteTaskRequest("saepe");, DeleteTaskXAmzTargetEnum.FMRS_SERVICE_DELETE_TASK) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "optio";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "ad";
            }};            

            DeleteTaskResponse res = sdk.sdk.deleteTask(req);

            if (res.deleteTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAgent

Returns metadata about an DataSync agent, such as its name, endpoint type, and status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAgentRequest;
import org.openapis.openapi.models.operations.DescribeAgentResponse;
import org.openapis.openapi.models.operations.DescribeAgentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAgentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAgentRequest req = new DescribeAgentRequest(                new DescribeAgentRequest("suscipit");, DescribeAgentXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_AGENT) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            DescribeAgentResponse res = sdk.sdk.describeAgent(req);

            if (res.describeAgentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDiscoveryJob

Returns information about a DataSync discovery job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDiscoveryJobRequest;
import org.openapis.openapi.models.operations.DescribeDiscoveryJobResponse;
import org.openapis.openapi.models.operations.DescribeDiscoveryJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDiscoveryJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDiscoveryJobRequest req = new DescribeDiscoveryJobRequest(                new DescribeDiscoveryJobRequest("quaerat");, DescribeDiscoveryJobXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_DISCOVERY_JOB) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quod";
                xAmzDate = "officiis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "a";
            }};            

            DescribeDiscoveryJobResponse res = sdk.sdk.describeDiscoveryJob(req);

            if (res.describeDiscoveryJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationEfs

Returns metadata about your DataSync location for an Amazon EFS file system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationEfsRequest;
import org.openapis.openapi.models.operations.DescribeLocationEfsResponse;
import org.openapis.openapi.models.operations.DescribeLocationEfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationEfsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationEfsRequest req = new DescribeLocationEfsRequest(                new DescribeLocationEfsRequest("harum");, DescribeLocationEfsXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_EFS) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            DescribeLocationEfsResponse res = sdk.sdk.describeLocationEfs(req);

            if (res.describeLocationEfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationFsxLustre

Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationFsxLustreRequest;
import org.openapis.openapi.models.operations.DescribeLocationFsxLustreResponse;
import org.openapis.openapi.models.operations.DescribeLocationFsxLustreXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationFsxLustreRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationFsxLustreRequest req = new DescribeLocationFsxLustreRequest(                new DescribeLocationFsxLustreRequest("enim");, DescribeLocationFsxLustreXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_FSX_LUSTRE) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
            }};            

            DescribeLocationFsxLustreResponse res = sdk.sdk.describeLocationFsxLustre(req);

            if (res.describeLocationFsxLustreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationFsxOntap

<p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationFsxOntapRequest;
import org.openapis.openapi.models.operations.DescribeLocationFsxOntapResponse;
import org.openapis.openapi.models.operations.DescribeLocationFsxOntapXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationFsxOntapRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationFsxOntapRequest req = new DescribeLocationFsxOntapRequest(                new DescribeLocationFsxOntapRequest("vel");, DescribeLocationFsxOntapXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_FSX_ONTAP) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            DescribeLocationFsxOntapResponse res = sdk.sdk.describeLocationFsxOntap(req);

            if (res.describeLocationFsxOntapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationFsxOpenZfs

<p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationFsxOpenZfsRequest;
import org.openapis.openapi.models.operations.DescribeLocationFsxOpenZfsResponse;
import org.openapis.openapi.models.operations.DescribeLocationFsxOpenZfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationFsxOpenZfsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationFsxOpenZfsRequest req = new DescribeLocationFsxOpenZfsRequest(                new DescribeLocationFsxOpenZfsRequest("maxime");, DescribeLocationFsxOpenZfsXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_FSX_OPEN_ZFS) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DescribeLocationFsxOpenZfsResponse res = sdk.sdk.describeLocationFsxOpenZfs(req);

            if (res.describeLocationFsxOpenZfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationFsxWindows

Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationFsxWindowsRequest;
import org.openapis.openapi.models.operations.DescribeLocationFsxWindowsResponse;
import org.openapis.openapi.models.operations.DescribeLocationFsxWindowsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationFsxWindowsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationFsxWindowsRequest req = new DescribeLocationFsxWindowsRequest(                new DescribeLocationFsxWindowsRequest("distinctio");, DescribeLocationFsxWindowsXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_FSX_WINDOWS) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quam";
                xAmzDate = "molestias";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "neque";
            }};            

            DescribeLocationFsxWindowsResponse res = sdk.sdk.describeLocationFsxWindows(req);

            if (res.describeLocationFsxWindowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationHdfs

Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationHdfsRequest;
import org.openapis.openapi.models.operations.DescribeLocationHdfsResponse;
import org.openapis.openapi.models.operations.DescribeLocationHdfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationHdfsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationHdfsRequest req = new DescribeLocationHdfsRequest(                new DescribeLocationHdfsRequest("magni");, DescribeLocationHdfsXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_HDFS) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            DescribeLocationHdfsResponse res = sdk.sdk.describeLocationHdfs(req);

            if (res.describeLocationHdfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationNfs

Returns metadata, such as the path information, about an NFS location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationNfsRequest;
import org.openapis.openapi.models.operations.DescribeLocationNfsResponse;
import org.openapis.openapi.models.operations.DescribeLocationNfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationNfsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationNfsRequest req = new DescribeLocationNfsRequest(                new DescribeLocationNfsRequest("nobis");, DescribeLocationNfsXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_NFS) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
            }};            

            DescribeLocationNfsResponse res = sdk.sdk.describeLocationNfs(req);

            if (res.describeLocationNfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationObjectStorage

Returns metadata about your DataSync location for an object storage system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationObjectStorageRequest;
import org.openapis.openapi.models.operations.DescribeLocationObjectStorageResponse;
import org.openapis.openapi.models.operations.DescribeLocationObjectStorageXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationObjectStorageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationObjectStorageRequest req = new DescribeLocationObjectStorageRequest(                new DescribeLocationObjectStorageRequest("aperiam");, DescribeLocationObjectStorageXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_OBJECT_STORAGE) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolore";
                xAmzDate = "labore";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeLocationObjectStorageResponse res = sdk.sdk.describeLocationObjectStorage(req);

            if (res.describeLocationObjectStorageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationS3

Returns metadata, such as bucket name, about an Amazon S3 bucket location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationS3Request;
import org.openapis.openapi.models.operations.DescribeLocationS3Response;
import org.openapis.openapi.models.operations.DescribeLocationS3XAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationS3Request;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationS3Request req = new DescribeLocationS3Request(                new DescribeLocationS3Request("aut");, DescribeLocationS3XAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_S3) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "doloribus";
            }};            

            DescribeLocationS3Response res = sdk.sdk.describeLocationS3(req);

            if (res.describeLocationS3Response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocationSmb

Returns metadata, such as the path and user information about an SMB location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationSmbRequest;
import org.openapis.openapi.models.operations.DescribeLocationSmbResponse;
import org.openapis.openapi.models.operations.DescribeLocationSmbXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLocationSmbRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationSmbRequest req = new DescribeLocationSmbRequest(                new DescribeLocationSmbRequest("facilis");, DescribeLocationSmbXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_LOCATION_SMB) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "qui";
                xAmzCredential = "quae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "odio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DescribeLocationSmbResponse res = sdk.sdk.describeLocationSmb(req);

            if (res.describeLocationSmbResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStorageSystem

Returns information about an on-premises storage system that you're using with DataSync Discovery.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStorageSystemRequest;
import org.openapis.openapi.models.operations.DescribeStorageSystemResponse;
import org.openapis.openapi.models.operations.DescribeStorageSystemXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStorageSystemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStorageSystemRequest req = new DescribeStorageSystemRequest(                new DescribeStorageSystemRequest("vero");, DescribeStorageSystemXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_STORAGE_SYSTEM) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "quis";
                xAmzCredential = "ipsum";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vero";
            }};            

            DescribeStorageSystemResponse res = sdk.sdk.describeStorageSystem(req);

            if (res.describeStorageSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStorageSystemResourceMetrics

Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStorageSystemResourceMetricsRequest;
import org.openapis.openapi.models.operations.DescribeStorageSystemResourceMetricsResponse;
import org.openapis.openapi.models.operations.DescribeStorageSystemResourceMetricsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStorageSystemResourceMetricsRequest;
import org.openapis.openapi.models.shared.DiscoveryResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStorageSystemResourceMetricsRequest req = new DescribeStorageSystemResourceMetricsRequest(                new DescribeStorageSystemResourceMetricsRequest("dignissimos", "hic", DiscoveryResourceTypeEnum.CLUSTER) {{
                                endTime = OffsetDateTime.parse("2021-07-17T15:43:35.984Z");
                                maxResults = 630448L;
                                nextToken = "facilis";
                                startTime = OffsetDateTime.parse("2021-07-04T12:52:28.765Z");
                            }};, DescribeStorageSystemResourceMetricsXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_STORAGE_SYSTEM_RESOURCE_METRICS) {{
                maxResults = "dolore";
                nextToken = "quibusdam";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "natus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "exercitationem";
            }};            

            DescribeStorageSystemResourceMetricsResponse res = sdk.sdk.describeStorageSystemResourceMetrics(req);

            if (res.describeStorageSystemResourceMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStorageSystemResources

Returns information that DataSync Discovery collects about resources in your on-premises storage system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStorageSystemResourcesRequest;
import org.openapis.openapi.models.operations.DescribeStorageSystemResourcesResponse;
import org.openapis.openapi.models.operations.DescribeStorageSystemResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStorageSystemResourcesRequest;
import org.openapis.openapi.models.shared.DiscoveryResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStorageSystemResourcesRequest req = new DescribeStorageSystemResourcesRequest(                new DescribeStorageSystemResourcesRequest("fugit", DiscoveryResourceTypeEnum.CLUSTER) {{
                                filter = new java.util.HashMap<String, String[]>() {{
                                    put("doloribus", new String[]{{
                                        add("eligendi"),
                                        add("ducimus"),
                                    }});
                                    put("alias", new String[]{{
                                        add("tempora"),
                                        add("ipsam"),
                                        add("ea"),
                                    }});
                                    put("aspernatur", new String[]{{
                                        add("possimus"),
                                        add("magnam"),
                                    }});
                                    put("ratione", new String[]{{
                                        add("laudantium"),
                                        add("dicta"),
                                    }});
                                }};
                                maxResults = 224317L;
                                nextToken = "maiores";
                                resourceIds = new String[]{{
                                    add("ex"),
                                }};
                            }};, DescribeStorageSystemResourcesXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_STORAGE_SYSTEM_RESOURCES) {{
                maxResults = "nulla";
                nextToken = "excepturi";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "sapiente";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
            }};            

            DescribeStorageSystemResourcesResponse res = sdk.sdk.describeStorageSystemResources(req);

            if (res.describeStorageSystemResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTask

Returns metadata about a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTaskRequest;
import org.openapis.openapi.models.operations.DescribeTaskResponse;
import org.openapis.openapi.models.operations.DescribeTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTaskRequest req = new DescribeTaskRequest(                new DescribeTaskRequest("veniam");, DescribeTaskXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_TASK) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeTaskResponse res = sdk.sdk.describeTask(req);

            if (res.describeTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTaskExecution

Returns detailed metadata about a task that is being executed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTaskExecutionRequest;
import org.openapis.openapi.models.operations.DescribeTaskExecutionResponse;
import org.openapis.openapi.models.operations.DescribeTaskExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTaskExecutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTaskExecutionRequest req = new DescribeTaskExecutionRequest(                new DescribeTaskExecutionRequest("minima");, DescribeTaskExecutionXAmzTargetEnum.FMRS_SERVICE_DESCRIBE_TASK_EXECUTION) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "a";
                xAmzCredential = "libero";
                xAmzDate = "aut";
                xAmzSecurityToken = "aut";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "impedit";
            }};            

            DescribeTaskExecutionResponse res = sdk.sdk.describeTaskExecution(req);

            if (res.describeTaskExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateRecommendations

<p>Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p> <note> <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync Discovery generates the recommendations for you automatically.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateRecommendationsRequest;
import org.openapis.openapi.models.operations.GenerateRecommendationsResponse;
import org.openapis.openapi.models.operations.GenerateRecommendationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DiscoveryResourceTypeEnum;
import org.openapis.openapi.models.shared.GenerateRecommendationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateRecommendationsRequest req = new GenerateRecommendationsRequest(                new GenerateRecommendationsRequest("fugit",                 new String[]{{
                                                add("inventore"),
                                                add("non"),
                                                add("et"),
                                                add("dolorum"),
                                            }}, DiscoveryResourceTypeEnum.CLUSTER);, GenerateRecommendationsXAmzTargetEnum.FMRS_SERVICE_GENERATE_RECOMMENDATIONS) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "velit";
                xAmzCredential = "eum";
                xAmzDate = "autem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "assumenda";
            }};            

            GenerateRecommendationsResponse res = sdk.sdk.generateRecommendations(req);

            if (res.generateRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAgents

<p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAgentsRequest;
import org.openapis.openapi.models.operations.ListAgentsResponse;
import org.openapis.openapi.models.operations.ListAgentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAgentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAgentsRequest req = new ListAgentsRequest(                new ListAgentsRequest() {{
                                maxResults = 379034L;
                                nextToken = "libero";
                            }};, ListAgentsXAmzTargetEnum.FMRS_SERVICE_LIST_AGENTS) {{
                maxResults = "quasi";
                nextToken = "tempora";
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "provident";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "odio";
            }};            

            ListAgentsResponse res = sdk.sdk.listAgents(req);

            if (res.listAgentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDiscoveryJobs

Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDiscoveryJobsRequest;
import org.openapis.openapi.models.operations.ListDiscoveryJobsResponse;
import org.openapis.openapi.models.operations.ListDiscoveryJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDiscoveryJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDiscoveryJobsRequest req = new ListDiscoveryJobsRequest(                new ListDiscoveryJobsRequest() {{
                                maxResults = 458515L;
                                nextToken = "esse";
                                storageSystemArn = "rem";
                            }};, ListDiscoveryJobsXAmzTargetEnum.FMRS_SERVICE_LIST_DISCOVERY_JOBS) {{
                maxResults = "fuga";
                nextToken = "reprehenderit";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ut";
                xAmzDate = "eum";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "eos";
            }};            

            ListDiscoveryJobsResponse res = sdk.sdk.listDiscoveryJobs(req);

            if (res.listDiscoveryJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLocations

<p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLocationsRequest;
import org.openapis.openapi.models.operations.ListLocationsResponse;
import org.openapis.openapi.models.operations.ListLocationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLocationsRequest;
import org.openapis.openapi.models.shared.LocationFilter;
import org.openapis.openapi.models.shared.LocationFilterNameEnum;
import org.openapis.openapi.models.shared.OperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLocationsRequest req = new ListLocationsRequest(                new ListLocationsRequest() {{
                                filters = new org.openapis.openapi.models.shared.LocationFilter[]{{
                                    add(new LocationFilter(LocationFilterNameEnum.CREATION_TIME, OperatorEnum.CONTAINS,                 new String[]{{
                                                        add("eius"),
                                                        add("eos"),
                                                        add("voluptas"),
                                                    }}) {{
                                        name = LocationFilterNameEnum.LOCATION_URI;
                                        operator = OperatorEnum.EQUALS;
                                        values = new String[]{{
                                            add("quidem"),
                                            add("neque"),
                                            add("quo"),
                                        }};
                                    }}),
                                    add(new LocationFilter(LocationFilterNameEnum.CREATION_TIME, OperatorEnum.LESS_THAN_OR_EQUAL,                 new String[]{{
                                                        add("sequi"),
                                                    }}) {{
                                        name = LocationFilterNameEnum.LOCATION_URI;
                                        operator = OperatorEnum.GREATER_THAN_OR_EQUAL;
                                        values = new String[]{{
                                            add("tempora"),
                                        }};
                                    }}),
                                    add(new LocationFilter(LocationFilterNameEnum.LOCATION_URI, OperatorEnum.LESS_THAN,                 new String[]{{
                                                        add("accusamus"),
                                                        add("aliquam"),
                                                        add("odio"),
                                                    }}) {{
                                        name = LocationFilterNameEnum.CREATION_TIME;
                                        operator = OperatorEnum.LESS_THAN;
                                        values = new String[]{{
                                            add("aperiam"),
                                            add("distinctio"),
                                            add("quod"),
                                            add("dignissimos"),
                                        }};
                                    }}),
                                    add(new LocationFilter(LocationFilterNameEnum.CREATION_TIME, OperatorEnum.LESS_THAN,                 new String[]{{
                                                        add("praesentium"),
                                                        add("consequuntur"),
                                                        add("deleniti"),
                                                    }}) {{
                                        name = LocationFilterNameEnum.LOCATION_TYPE;
                                        operator = OperatorEnum.LESS_THAN;
                                        values = new String[]{{
                                            add("dolores"),
                                            add("deserunt"),
                                            add("molestiae"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                }};
                                maxResults = 143829L;
                                nextToken = "fuga";
                            }};, ListLocationsXAmzTargetEnum.FMRS_SERVICE_LIST_LOCATIONS) {{
                maxResults = "mollitia";
                nextToken = "incidunt";
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ListLocationsResponse res = sdk.sdk.listLocations(req);

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStorageSystems

Lists the on-premises storage systems that you're using with DataSync Discovery.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStorageSystemsRequest;
import org.openapis.openapi.models.operations.ListStorageSystemsResponse;
import org.openapis.openapi.models.operations.ListStorageSystemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListStorageSystemsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStorageSystemsRequest req = new ListStorageSystemsRequest(                new ListStorageSystemsRequest() {{
                                maxResults = 129412L;
                                nextToken = "saepe";
                            }};, ListStorageSystemsXAmzTargetEnum.FMRS_SERVICE_LIST_STORAGE_SYSTEMS) {{
                maxResults = "occaecati";
                nextToken = "atque";
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "esse";
                xAmzCredential = "eveniet";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "quod";
            }};            

            ListStorageSystemsResponse res = sdk.sdk.listStorageSystems(req);

            if (res.listStorageSystemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns all the tags associated with an Amazon Web Services resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("vero") {{
                                maxResults = 399025L;
                                nextToken = "quasi";
                            }};, ListTagsForResourceXAmzTargetEnum.FMRS_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                maxResults = "saepe";
                nextToken = "vel";
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "rerum";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "minima";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "eligendi";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTaskExecutions

Returns a list of executed tasks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskExecutionsRequest;
import org.openapis.openapi.models.operations.ListTaskExecutionsResponse;
import org.openapis.openapi.models.operations.ListTaskExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTaskExecutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTaskExecutionsRequest req = new ListTaskExecutionsRequest(                new ListTaskExecutionsRequest() {{
                                maxResults = 636061L;
                                nextToken = "tempore";
                                taskArn = "adipisci";
                            }};, ListTaskExecutionsXAmzTargetEnum.FMRS_SERVICE_LIST_TASK_EXECUTIONS) {{
                maxResults = "cumque";
                nextToken = "consequuntur";
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quaerat";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "blanditiis";
            }};            

            ListTaskExecutionsResponse res = sdk.sdk.listTaskExecutions(req);

            if (res.listTaskExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTasks

Returns a list of the DataSync tasks you created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTasksRequest;
import org.openapis.openapi.models.operations.ListTasksResponse;
import org.openapis.openapi.models.operations.ListTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTasksRequest;
import org.openapis.openapi.models.shared.OperatorEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskFilter;
import org.openapis.openapi.models.shared.TaskFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTasksRequest req = new ListTasksRequest(                new ListTasksRequest() {{
                                filters = new org.openapis.openapi.models.shared.TaskFilter[]{{
                                    add(new TaskFilter(TaskFilterNameEnum.CREATION_TIME, OperatorEnum.GREATER_THAN_OR_EQUAL,                 new String[]{{
                                                        add("possimus"),
                                                        add("quia"),
                                                        add("eveniet"),
                                                        add("asperiores"),
                                                    }}) {{
                                        name = TaskFilterNameEnum.CREATION_TIME;
                                        operator = OperatorEnum.GREATER_THAN_OR_EQUAL;
                                        values = new String[]{{
                                            add("quasi"),
                                            add("a"),
                                        }};
                                    }}),
                                    add(new TaskFilter(TaskFilterNameEnum.CREATION_TIME, OperatorEnum.GREATER_THAN,                 new String[]{{
                                                        add("tenetur"),
                                                        add("quae"),
                                                    }}) {{
                                        name = TaskFilterNameEnum.CREATION_TIME;
                                        operator = OperatorEnum.EQUALS;
                                        values = new String[]{{
                                            add("quasi"),
                                        }};
                                    }}),
                                    add(new TaskFilter(TaskFilterNameEnum.CREATION_TIME, OperatorEnum.CONTAINS,                 new String[]{{
                                                        add("aliquam"),
                                                    }}) {{
                                        name = TaskFilterNameEnum.CREATION_TIME;
                                        operator = OperatorEnum.LESS_THAN;
                                        values = new String[]{{
                                            add("eius"),
                                            add("libero"),
                                        }};
                                    }}),
                                    add(new TaskFilter(TaskFilterNameEnum.LOCATION_ID, OperatorEnum.EQUALS,                 new String[]{{
                                                        add("qui"),
                                                        add("quibusdam"),
                                                        add("ex"),
                                                    }}) {{
                                        name = TaskFilterNameEnum.CREATION_TIME;
                                        operator = OperatorEnum.NOT_EQUALS;
                                        values = new String[]{{
                                            add("reprehenderit"),
                                            add("ullam"),
                                        }};
                                    }}),
                                }};
                                maxResults = 536275L;
                                nextToken = "itaque";
                            }};, ListTasksXAmzTargetEnum.FMRS_SERVICE_LIST_TASKS) {{
                maxResults = "dolorum";
                nextToken = "architecto";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            ListTasksResponse res = sdk.sdk.listTasks(req);

            if (res.listTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeStorageSystem

Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveStorageSystemRequest;
import org.openapis.openapi.models.operations.RemoveStorageSystemResponse;
import org.openapis.openapi.models.operations.RemoveStorageSystemXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveStorageSystemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveStorageSystemRequest req = new RemoveStorageSystemRequest(                new RemoveStorageSystemRequest("veritatis");, RemoveStorageSystemXAmzTargetEnum.FMRS_SERVICE_REMOVE_STORAGE_SYSTEM) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "iste";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "aut";
            }};            

            RemoveStorageSystemResponse res = sdk.sdk.removeStorageSystem(req);

            if (res.removeStorageSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDiscoveryJob

Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDiscoveryJobRequest;
import org.openapis.openapi.models.operations.StartDiscoveryJobResponse;
import org.openapis.openapi.models.operations.StartDiscoveryJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDiscoveryJobRequest;
import org.openapis.openapi.models.shared.TagListEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDiscoveryJobRequest req = new StartDiscoveryJobRequest(                new StartDiscoveryJobRequest("eum", 649832L, "ab") {{
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("dolor") {{
                                        key = "non";
                                        value = "voluptatem";
                                    }}),
                                    add(new TagListEntry("impedit") {{
                                        key = "occaecati";
                                        value = "numquam";
                                    }}),
                                    add(new TagListEntry("aut") {{
                                        key = "explicabo";
                                        value = "voluptas";
                                    }}),
                                }};
                            }};, StartDiscoveryJobXAmzTargetEnum.FMRS_SERVICE_START_DISCOVERY_JOB) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "maiores";
                xAmzDate = "natus";
                xAmzSecurityToken = "velit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            StartDiscoveryJobResponse res = sdk.sdk.startDiscoveryJob(req);

            if (res.startDiscoveryJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTaskExecution

<p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTaskExecutionRequest;
import org.openapis.openapi.models.operations.StartTaskExecutionResponse;
import org.openapis.openapi.models.operations.StartTaskExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AtimeEnum;
import org.openapis.openapi.models.shared.FilterRule;
import org.openapis.openapi.models.shared.FilterTypeEnum;
import org.openapis.openapi.models.shared.GidEnum;
import org.openapis.openapi.models.shared.LogLevelEnum;
import org.openapis.openapi.models.shared.MtimeEnum;
import org.openapis.openapi.models.shared.ObjectTagsEnum;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.OverwriteModeEnum;
import org.openapis.openapi.models.shared.PosixPermissionsEnum;
import org.openapis.openapi.models.shared.PreserveDeletedFilesEnum;
import org.openapis.openapi.models.shared.PreserveDevicesEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmbSecurityDescriptorCopyFlagsEnum;
import org.openapis.openapi.models.shared.StartTaskExecutionRequest;
import org.openapis.openapi.models.shared.TagListEntry;
import org.openapis.openapi.models.shared.TaskQueueingEnum;
import org.openapis.openapi.models.shared.TransferModeEnum;
import org.openapis.openapi.models.shared.UidEnum;
import org.openapis.openapi.models.shared.VerifyModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTaskExecutionRequest req = new StartTaskExecutionRequest(                new StartTaskExecutionRequest("aperiam") {{
                                excludes = new org.openapis.openapi.models.shared.FilterRule[]{{
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "quaerat";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "consequuntur";
                                    }}),
                                }};
                                includes = new org.openapis.openapi.models.shared.FilterRule[]{{
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "officia";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "maxime";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "dignissimos";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "officia";
                                    }}),
                                }};
                                overrideOptions = new Options() {{
                                    atime = AtimeEnum.BEST_EFFORT;
                                    bytesPerSecond = 368102L;
                                    gid = GidEnum.NONE;
                                    logLevel = LogLevelEnum.OFF;
                                    mtime = MtimeEnum.PRESERVE;
                                    objectTags = ObjectTagsEnum.NONE;
                                    overwriteMode = OverwriteModeEnum.ALWAYS;
                                    posixPermissions = PosixPermissionsEnum.NONE;
                                    preserveDeletedFiles = PreserveDeletedFilesEnum.PRESERVE;
                                    preserveDevices = PreserveDevicesEnum.PRESERVE;
                                    securityDescriptorCopyFlags = SmbSecurityDescriptorCopyFlagsEnum.OWNER_DACL;
                                    taskQueueing = TaskQueueingEnum.ENABLED;
                                    transferMode = TransferModeEnum.CHANGED;
                                    uid = UidEnum.NAME;
                                    verifyMode = VerifyModeEnum.ONLY_FILES_TRANSFERRED;
                                }};;
                                tags = new org.openapis.openapi.models.shared.TagListEntry[]{{
                                    add(new TagListEntry("vel") {{
                                        key = "totam";
                                        value = "fugiat";
                                    }}),
                                    add(new TagListEntry("vel") {{
                                        key = "ducimus";
                                        value = "quos";
                                    }}),
                                    add(new TagListEntry("facilis") {{
                                        key = "labore";
                                        value = "possimus";
                                    }}),
                                    add(new TagListEntry("in") {{
                                        key = "cum";
                                        value = "commodi";
                                    }}),
                                }};
                            }};, StartTaskExecutionXAmzTargetEnum.FMRS_SERVICE_START_TASK_EXECUTION) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "assumenda";
                xAmzDate = "nemo";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "aperiam";
            }};            

            StartTaskExecutionResponse res = sdk.sdk.startTaskExecution(req);

            if (res.startTaskExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopDiscoveryJob

<p>Stops a running DataSync discovery job.</p> <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopDiscoveryJobRequest;
import org.openapis.openapi.models.operations.StopDiscoveryJobResponse;
import org.openapis.openapi.models.operations.StopDiscoveryJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDiscoveryJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopDiscoveryJobRequest req = new StopDiscoveryJobRequest(                new StopDiscoveryJobRequest("consectetur");, StopDiscoveryJobXAmzTargetEnum.FMRS_SERVICE_STOP_DISCOVERY_JOB) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "earum";
                xAmzDate = "facere";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "suscipit";
            }};            

            StopDiscoveryJobResponse res = sdk.sdk.stopDiscoveryJob(req);

            if (res.stopDiscoveryJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagListEntry;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("quidem",                 new org.openapis.openapi.models.shared.TagListEntry[]{{
                                                add(new TagListEntry("sunt") {{
                                                    key = "necessitatibus";
                                                    value = "dolore";
                                                }}),
                                                add(new TagListEntry("non") {{
                                                    key = "asperiores";
                                                    value = "adipisci";
                                                }}),
                                                add(new TagListEntry("dignissimos") {{
                                                    key = "amet";
                                                    value = "beatae";
                                                }}),
                                                add(new TagListEntry("consectetur") {{
                                                    key = "a";
                                                    value = "debitis";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.FMRS_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "harum";
                xAmzCredential = "laboriosam";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "vitae";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from an Amazon Web Services resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest(                new String[]{{
                                                add("tempora"),
                                                add("aspernatur"),
                                                add("voluptas"),
                                            }}, "voluptas");, UntagResourceXAmzTargetEnum.FMRS_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nobis";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "dolores";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAgent

Updates the name of an agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAgentRequest;
import org.openapis.openapi.models.operations.UpdateAgentResponse;
import org.openapis.openapi.models.operations.UpdateAgentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAgentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAgentRequest req = new UpdateAgentRequest(                new UpdateAgentRequest("in") {{
                                name = "Suzanne Torphy";
                            }};, UpdateAgentXAmzTargetEnum.FMRS_SERVICE_UPDATE_AGENT) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "cum";
                xAmzCredential = "blanditiis";
                xAmzDate = "quas";
                xAmzSecurityToken = "hic";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "culpa";
            }};            

            UpdateAgentResponse res = sdk.sdk.updateAgent(req);

            if (res.updateAgentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDiscoveryJob

Edits a DataSync discovery job configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDiscoveryJobRequest;
import org.openapis.openapi.models.operations.UpdateDiscoveryJobResponse;
import org.openapis.openapi.models.operations.UpdateDiscoveryJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDiscoveryJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDiscoveryJobRequest req = new UpdateDiscoveryJobRequest(                new UpdateDiscoveryJobRequest(867290L, "totam");, UpdateDiscoveryJobXAmzTargetEnum.FMRS_SERVICE_UPDATE_DISCOVERY_JOB) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nobis";
                xAmzDate = "sit";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateDiscoveryJobResponse res = sdk.sdk.updateDiscoveryJob(req);

            if (res.updateDiscoveryJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLocationHdfs

Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLocationHdfsRequest;
import org.openapis.openapi.models.operations.UpdateLocationHdfsResponse;
import org.openapis.openapi.models.operations.UpdateLocationHdfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.HdfsAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.HdfsDataTransferProtectionEnum;
import org.openapis.openapi.models.shared.HdfsNameNode;
import org.openapis.openapi.models.shared.HdfsRpcProtectionEnum;
import org.openapis.openapi.models.shared.QopConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLocationHdfsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLocationHdfsRequest req = new UpdateLocationHdfsRequest(                new UpdateLocationHdfsRequest("asperiores") {{
                                agentArns = new String[]{{
                                    add("voluptate"),
                                    add("expedita"),
                                    add("ab"),
                                }};
                                authenticationType = HdfsAuthenticationTypeEnum.KERBEROS;
                                blockSize = 292794L;
                                kerberosKeytab = "laborum";
                                kerberosKrb5Conf = "sed";
                                kerberosPrincipal = "in";
                                kmsKeyProviderUri = "commodi";
                                nameNodes = new org.openapis.openapi.models.shared.HdfsNameNode[]{{
                                    add(new HdfsNameNode("suscipit", 960257L) {{
                                        hostname = "common-gather.name";
                                        port = 100032L;
                                    }}),
                                    add(new HdfsNameNode("corrupti", 979574L) {{
                                        hostname = "unlawful-beach.org";
                                        port = 19300L;
                                    }}),
                                    add(new HdfsNameNode("necessitatibus", 215529L) {{
                                        hostname = "favorite-characteristic.name";
                                        port = 258702L;
                                    }}),
                                }};
                                qopConfiguration = new QopConfiguration() {{
                                    dataTransferProtection = HdfsDataTransferProtectionEnum.AUTHENTICATION;
                                    rpcProtection = HdfsRpcProtectionEnum.INTEGRITY;
                                }};;
                                replicationFactor = 552078L;
                                simpleUser = "voluptatibus";
                                subdirectory = "tempora";
                            }};, UpdateLocationHdfsXAmzTargetEnum.FMRS_SERVICE_UPDATE_LOCATION_HDFS) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "reiciendis";
                xAmzDate = "ex";
                xAmzSecurityToken = "sit";
                xAmzSignature = "non";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdateLocationHdfsResponse res = sdk.sdk.updateLocationHdfs(req);

            if (res.updateLocationHdfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLocationNfs

Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLocationNfsRequest;
import org.openapis.openapi.models.operations.UpdateLocationNfsResponse;
import org.openapis.openapi.models.operations.UpdateLocationNfsXAmzTargetEnum;
import org.openapis.openapi.models.shared.NfsMountOptions;
import org.openapis.openapi.models.shared.NfsVersionEnum;
import org.openapis.openapi.models.shared.OnPremConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLocationNfsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLocationNfsRequest req = new UpdateLocationNfsRequest(                new UpdateLocationNfsRequest("facilis") {{
                                mountOptions = new NfsMountOptions() {{
                                    version = NfsVersionEnum.NFS3;
                                }};;
                                onPremConfig = new OnPremConfig(                new String[]{{
                                                    add("ipsam"),
                                                    add("debitis"),
                                                }});;
                                subdirectory = "rem";
                            }};, UpdateLocationNfsXAmzTargetEnum.FMRS_SERVICE_UPDATE_LOCATION_NFS) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "error";
                xAmzDate = "veniam";
                xAmzSecurityToken = "minima";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateLocationNfsResponse res = sdk.sdk.updateLocationNfs(req);

            if (res.updateLocationNfsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLocationObjectStorage

Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLocationObjectStorageRequest;
import org.openapis.openapi.models.operations.UpdateLocationObjectStorageResponse;
import org.openapis.openapi.models.operations.UpdateLocationObjectStorageXAmzTargetEnum;
import org.openapis.openapi.models.shared.ObjectStorageServerProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLocationObjectStorageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLocationObjectStorageRequest req = new UpdateLocationObjectStorageRequest(                new UpdateLocationObjectStorageRequest("magni") {{
                                accessKey = "aperiam";
                                agentArns = new String[]{{
                                    add("numquam"),
                                    add("veniam"),
                                    add("in"),
                                    add("officiis"),
                                }};
                                secretKey = "beatae";
                                serverCertificate = "laudantium";
                                serverPort = 348476L;
                                serverProtocol = ObjectStorageServerProtocolEnum.HTTP;
                                subdirectory = "cum";
                            }};, UpdateLocationObjectStorageXAmzTargetEnum.FMRS_SERVICE_UPDATE_LOCATION_OBJECT_STORAGE) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "voluptatum";
                xAmzDate = "error";
                xAmzSecurityToken = "hic";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "debitis";
            }};            

            UpdateLocationObjectStorageResponse res = sdk.sdk.updateLocationObjectStorage(req);

            if (res.updateLocationObjectStorageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLocationSmb

Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLocationSmbRequest;
import org.openapis.openapi.models.operations.UpdateLocationSmbResponse;
import org.openapis.openapi.models.operations.UpdateLocationSmbXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmbMountOptions;
import org.openapis.openapi.models.shared.SmbVersionEnum;
import org.openapis.openapi.models.shared.UpdateLocationSmbRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLocationSmbRequest req = new UpdateLocationSmbRequest(                new UpdateLocationSmbRequest("dolorum") {{
                                agentArns = new String[]{{
                                    add("officia"),
                                    add("dolorum"),
                                }};
                                domain = "corrupti";
                                mountOptions = new SmbMountOptions() {{
                                    version = SmbVersionEnum.SMB20;
                                }};;
                                password = "tempora";
                                subdirectory = "atque";
                                user = "fugit";
                            }};, UpdateLocationSmbXAmzTargetEnum.FMRS_SERVICE_UPDATE_LOCATION_SMB) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "voluptatem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "consequatur";
            }};            

            UpdateLocationSmbResponse res = sdk.sdk.updateLocationSmb(req);

            if (res.updateLocationSmbResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStorageSystem

Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStorageSystemRequest;
import org.openapis.openapi.models.operations.UpdateStorageSystemResponse;
import org.openapis.openapi.models.operations.UpdateStorageSystemXAmzTargetEnum;
import org.openapis.openapi.models.shared.Credentials;
import org.openapis.openapi.models.shared.DiscoveryServerConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateStorageSystemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStorageSystemRequest req = new UpdateStorageSystemRequest(                new UpdateStorageSystemRequest("ipsam") {{
                                agentArns = new String[]{{
                                    add("voluptatum"),
                                }};
                                cloudWatchLogGroupArn = "quas";
                                credentials = new Credentials("repudiandae", "corporis");;
                                name = "Mattie Jaskolski III";
                                serverConfiguration = new DiscoveryServerConfiguration("nostrum") {{
                                    serverPort = 906172L;
                                }};;
                            }};, UpdateStorageSystemXAmzTargetEnum.FMRS_SERVICE_UPDATE_STORAGE_SYSTEM) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "incidunt";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "dicta";
            }};            

            UpdateStorageSystemResponse res = sdk.sdk.updateStorageSystem(req);

            if (res.updateStorageSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTask

Updates the metadata associated with a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskRequest;
import org.openapis.openapi.models.operations.UpdateTaskResponse;
import org.openapis.openapi.models.operations.UpdateTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.AtimeEnum;
import org.openapis.openapi.models.shared.FilterRule;
import org.openapis.openapi.models.shared.FilterTypeEnum;
import org.openapis.openapi.models.shared.GidEnum;
import org.openapis.openapi.models.shared.LogLevelEnum;
import org.openapis.openapi.models.shared.MtimeEnum;
import org.openapis.openapi.models.shared.ObjectTagsEnum;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.OverwriteModeEnum;
import org.openapis.openapi.models.shared.PosixPermissionsEnum;
import org.openapis.openapi.models.shared.PreserveDeletedFilesEnum;
import org.openapis.openapi.models.shared.PreserveDevicesEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmbSecurityDescriptorCopyFlagsEnum;
import org.openapis.openapi.models.shared.TaskQueueingEnum;
import org.openapis.openapi.models.shared.TaskSchedule;
import org.openapis.openapi.models.shared.TransferModeEnum;
import org.openapis.openapi.models.shared.UidEnum;
import org.openapis.openapi.models.shared.UpdateTaskRequest;
import org.openapis.openapi.models.shared.VerifyModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTaskRequest req = new UpdateTaskRequest(                new UpdateTaskRequest("occaecati") {{
                                cloudWatchLogGroupArn = "labore";
                                excludes = new org.openapis.openapi.models.shared.FilterRule[]{{
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "atque";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "laborum";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "nam";
                                    }}),
                                }};
                                includes = new org.openapis.openapi.models.shared.FilterRule[]{{
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "laboriosam";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "alias";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "amet";
                                    }}),
                                    add(new FilterRule() {{
                                        filterType = FilterTypeEnum.SIMPLE_PATTERN;
                                        value = "deserunt";
                                    }}),
                                }};
                                name = "Lindsey Witting";
                                options = new Options() {{
                                    atime = AtimeEnum.BEST_EFFORT;
                                    bytesPerSecond = 914791L;
                                    gid = GidEnum.NONE;
                                    logLevel = LogLevelEnum.TRANSFER;
                                    mtime = MtimeEnum.PRESERVE;
                                    objectTags = ObjectTagsEnum.PRESERVE;
                                    overwriteMode = OverwriteModeEnum.NEVER;
                                    posixPermissions = PosixPermissionsEnum.PRESERVE;
                                    preserveDeletedFiles = PreserveDeletedFilesEnum.REMOVE;
                                    preserveDevices = PreserveDevicesEnum.PRESERVE;
                                    securityDescriptorCopyFlags = SmbSecurityDescriptorCopyFlagsEnum.OWNER_DACL;
                                    taskQueueing = TaskQueueingEnum.ENABLED;
                                    transferMode = TransferModeEnum.ALL;
                                    uid = UidEnum.BOTH;
                                    verifyMode = VerifyModeEnum.POINT_IN_TIME_CONSISTENT;
                                }};;
                                schedule = new TaskSchedule("atque");;
                            }};, UpdateTaskXAmzTargetEnum.FMRS_SERVICE_UPDATE_TASK) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "totam";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "et";
            }};            

            UpdateTaskResponse res = sdk.sdk.updateTask(req);

            if (res.updateTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTaskExecution

<p>Modifies a running DataSync task.</p> <note> <p>Currently, the only <code>Option</code> that you can modify with <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>, which throttles bandwidth for a running or queued task.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskExecutionRequest;
import org.openapis.openapi.models.operations.UpdateTaskExecutionResponse;
import org.openapis.openapi.models.operations.UpdateTaskExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AtimeEnum;
import org.openapis.openapi.models.shared.GidEnum;
import org.openapis.openapi.models.shared.LogLevelEnum;
import org.openapis.openapi.models.shared.MtimeEnum;
import org.openapis.openapi.models.shared.ObjectTagsEnum;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.OverwriteModeEnum;
import org.openapis.openapi.models.shared.PosixPermissionsEnum;
import org.openapis.openapi.models.shared.PreserveDeletedFilesEnum;
import org.openapis.openapi.models.shared.PreserveDevicesEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmbSecurityDescriptorCopyFlagsEnum;
import org.openapis.openapi.models.shared.TaskQueueingEnum;
import org.openapis.openapi.models.shared.TransferModeEnum;
import org.openapis.openapi.models.shared.UidEnum;
import org.openapis.openapi.models.shared.UpdateTaskExecutionRequest;
import org.openapis.openapi.models.shared.VerifyModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTaskExecutionRequest req = new UpdateTaskExecutionRequest(                new UpdateTaskExecutionRequest(                new Options() {{
                                                atime = AtimeEnum.NONE;
                                                bytesPerSecond = 826825L;
                                                gid = GidEnum.INT_VALUE;
                                                logLevel = LogLevelEnum.BASIC;
                                                mtime = MtimeEnum.PRESERVE;
                                                objectTags = ObjectTagsEnum.NONE;
                                                overwriteMode = OverwriteModeEnum.NEVER;
                                                posixPermissions = PosixPermissionsEnum.PRESERVE;
                                                preserveDeletedFiles = PreserveDeletedFilesEnum.REMOVE;
                                                preserveDevices = PreserveDevicesEnum.NONE;
                                                securityDescriptorCopyFlags = SmbSecurityDescriptorCopyFlagsEnum.NONE;
                                                taskQueueing = TaskQueueingEnum.ENABLED;
                                                transferMode = TransferModeEnum.ALL;
                                                uid = UidEnum.NAME;
                                                verifyMode = VerifyModeEnum.NONE;
                                            }};, "error");, UpdateTaskExecutionXAmzTargetEnum.FMRS_SERVICE_UPDATE_TASK_EXECUTION) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "repudiandae";
                xAmzDate = "atque";
                xAmzSecurityToken = "atque";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "recusandae";
            }};            

            UpdateTaskExecutionResponse res = sdk.sdk.updateTaskExecution(req);

            if (res.updateTaskExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
