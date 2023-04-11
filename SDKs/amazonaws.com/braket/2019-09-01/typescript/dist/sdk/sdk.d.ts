import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://braket.{region}.amazonaws.com", "https://braket.{region}.amazonaws.com", "http://braket.{region}.amazonaws.com.cn", "https://braket.{region}.amazonaws.com.cn"];
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
 * <p>The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket.</p> <p>Additional Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">Amazon Braket Developer Guide</a> </p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/braket/} - Amazon Web Services documentation
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
     * Cancels an Amazon Braket job.
     */
    cancelJob(req: operations.CancelJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobResponse>;
    /**
     * Cancels the specified task.
     */
    cancelQuantumTask(req: operations.CancelQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelQuantumTaskResponse>;
    /**
     * Creates an Amazon Braket job.
     */
    createJob(req: operations.CreateJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateJobResponse>;
    /**
     * Creates a quantum task.
     */
    createQuantumTask(req: operations.CreateQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateQuantumTaskResponse>;
    /**
     * <p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>
     */
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * Retrieves the specified Amazon Braket job.
     */
    getJob(req: operations.GetJobRequest, config?: AxiosRequestConfig): Promise<operations.GetJobResponse>;
    /**
     * Retrieves the specified quantum task.
     */
    getQuantumTask(req: operations.GetQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetQuantumTaskResponse>;
    /**
     * Shows the tags associated with this resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Searches for devices using the specified filters.
     */
    searchDevices(req: operations.SearchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.SearchDevicesResponse>;
    /**
     * Searches for Amazon Braket jobs that match the specified filter values.
     */
    searchJobs(req: operations.SearchJobsRequest, config?: AxiosRequestConfig): Promise<operations.SearchJobsResponse>;
    /**
     * Searches for tasks that match the specified filter values.
     */
    searchQuantumTasks(req: operations.SearchQuantumTasksRequest, config?: AxiosRequestConfig): Promise<operations.SearchQuantumTasksResponse>;
    /**
     * Add a tag to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Remove tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
