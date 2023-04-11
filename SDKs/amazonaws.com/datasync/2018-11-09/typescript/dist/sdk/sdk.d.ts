import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://datasync.{region}.amazonaws.com", "https://datasync.{region}.amazonaws.com", "http://datasync.{region}.amazonaws.com.cn", "https://datasync.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>DataSync</fullname> <p>DataSync is a managed data transfer service that makes it simpler for you to automate moving data between on-premises storage and Amazon Web Services storage services. You also can use DataSync to transfer data between other cloud providers and Amazon Web Services storage services.</p> <p>This API interface reference includes documentation for using DataSync programmatically. For complete information, see the <i> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User Guide</a> </i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/datasync/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>
     */
    cancelTaskExecution(req: operations.CancelTaskExecutionRequest, config?: AxiosRequestConfig): Promise<operations.CancelTaskExecutionResponse>;
    /**
     * <p>Activates an DataSync agent that you have deployed in your storage environment. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p>
     */
    createAgent(req: operations.CreateAgentRequest, config?: AxiosRequestConfig): Promise<operations.CreateAgentResponse>;
    /**
     * Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.
     */
    createLocationEfs(req: operations.CreateLocationEfsRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationEfsResponse>;
    /**
     * Creates an endpoint for an Amazon FSx for Lustre file system.
     */
    createLocationFsxLustre(req: operations.CreateLocationFsxLustreRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationFsxLustreResponse>;
    /**
     * Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.
     */
    createLocationFsxOntap(req: operations.CreateLocationFsxOntapRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationFsxOntapResponse>;
    /**
     * <p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>
     */
    createLocationFsxOpenZfs(req: operations.CreateLocationFsxOpenZfsRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationFsxOpenZfsResponse>;
    /**
     * Creates an endpoint for an Amazon FSx for Windows File Server file system.
     */
    createLocationFsxWindows(req: operations.CreateLocationFsxWindowsRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationFsxWindowsResponse>;
    /**
     * Creates an endpoint for a Hadoop Distributed File System (HDFS).
     */
    createLocationHdfs(req: operations.CreateLocationHdfsRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationHdfsResponse>;
    /**
     * Defines a file system on a Network File System (NFS) server that can be read from or written to.
     */
    createLocationNfs(req: operations.CreateLocationNfsRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationNfsResponse>;
    /**
     * Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
     */
    createLocationObjectStorage(req: operations.CreateLocationObjectStorageRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationObjectStorageResponse>;
    /**
     * Creates an endpoint for an Amazon S3 bucket that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Create an Amazon S3 location</a>.
     */
    createLocationS3(req: operations.CreateLocationS3Request, config?: AxiosRequestConfig): Promise<operations.CreateLocationS3Response>;
    /**
     * Creates an endpoint for a Server Message Block (SMB) file server that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating an SMB location</a>.
     */
    createLocationSmb(req: operations.CreateLocationSmbRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationSmbResponse>;
    /**
     * <p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p>
     */
    createTask(req: operations.CreateTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    /**
     * Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
     */
    deleteAgent(req: operations.DeleteAgentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAgentResponse>;
    /**
     * Deletes the configuration of a location used by DataSync.
     */
    deleteLocation(req: operations.DeleteLocationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocationResponse>;
    /**
     * Deletes an DataSync task.
     */
    deleteTask(req: operations.DeleteTaskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTaskResponse>;
    /**
     * Returns metadata about an DataSync agent, such as its name, endpoint type, and status.
     */
    describeAgent(req: operations.DescribeAgentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAgentResponse>;
    /**
     * Returns metadata about your DataSync location for an Amazon EFS file system.
     */
    describeLocationEfs(req: operations.DescribeLocationEfsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationEfsResponse>;
    /**
     * Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.
     */
    describeLocationFsxLustre(req: operations.DescribeLocationFsxLustreRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationFsxLustreResponse>;
    /**
     * <p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>
     */
    describeLocationFsxOntap(req: operations.DescribeLocationFsxOntapRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationFsxOntapResponse>;
    /**
     * <p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>
     */
    describeLocationFsxOpenZfs(req: operations.DescribeLocationFsxOpenZfsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationFsxOpenZfsResponse>;
    /**
     * Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.
     */
    describeLocationFsxWindows(req: operations.DescribeLocationFsxWindowsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationFsxWindowsResponse>;
    /**
     * Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location.
     */
    describeLocationHdfs(req: operations.DescribeLocationHdfsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationHdfsResponse>;
    /**
     * Returns metadata, such as the path information, about an NFS location.
     */
    describeLocationNfs(req: operations.DescribeLocationNfsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationNfsResponse>;
    /**
     * Returns metadata about your DataSync location for an object storage system.
     */
    describeLocationObjectStorage(req: operations.DescribeLocationObjectStorageRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationObjectStorageResponse>;
    /**
     * Returns metadata, such as bucket name, about an Amazon S3 bucket location.
     */
    describeLocationS3(req: operations.DescribeLocationS3Request, config?: AxiosRequestConfig): Promise<operations.DescribeLocationS3Response>;
    /**
     * Returns metadata, such as the path and user information about an SMB location.
     */
    describeLocationSmb(req: operations.DescribeLocationSmbRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationSmbResponse>;
    /**
     * Returns metadata about a task.
     */
    describeTask(req: operations.DescribeTaskRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTaskResponse>;
    /**
     * Returns detailed metadata about a task that is being executed.
     */
    describeTaskExecution(req: operations.DescribeTaskExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTaskExecutionResponse>;
    /**
     * <p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>
     */
    listAgents(req: operations.ListAgentsRequest, config?: AxiosRequestConfig): Promise<operations.ListAgentsResponse>;
    /**
     * <p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
     */
    listLocations(req: operations.ListLocationsRequest, config?: AxiosRequestConfig): Promise<operations.ListLocationsResponse>;
    /**
     * Returns all the tags associated with an Amazon Web Services resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Returns a list of executed tasks.
     */
    listTaskExecutions(req: operations.ListTaskExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTaskExecutionsResponse>;
    /**
     * Returns a list of the DataSync tasks you created.
     */
    listTasks(req: operations.ListTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListTasksResponse>;
    /**
     * <p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p>
     */
    startTaskExecution(req: operations.StartTaskExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartTaskExecutionResponse>;
    /**
     * <p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from an Amazon Web Services resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the name of an agent.
     */
    updateAgent(req: operations.UpdateAgentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAgentResponse>;
    /**
     * Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.
     */
    updateLocationHdfs(req: operations.UpdateLocationHdfsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationHdfsResponse>;
    /**
     * Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.
     */
    updateLocationNfs(req: operations.UpdateLocationNfsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationNfsResponse>;
    /**
     * Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
     */
    updateLocationObjectStorage(req: operations.UpdateLocationObjectStorageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationObjectStorageResponse>;
    /**
     * Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.
     */
    updateLocationSmb(req: operations.UpdateLocationSmbRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationSmbResponse>;
    /**
     * Updates the metadata associated with a task.
     */
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
    /**
     * <p>Updates execution of a task.</p> <p>You can modify bandwidth throttling for a task execution that is running or queued. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#adjust-bandwidth-throttling">Adjusting Bandwidth Throttling for a Task Execution</a>.</p> <note> <p>The only <code>Option</code> that can be modified by <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>.</p> </note>
     */
    updateTaskExecution(req: operations.UpdateTaskExecutionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskExecutionResponse>;
}
