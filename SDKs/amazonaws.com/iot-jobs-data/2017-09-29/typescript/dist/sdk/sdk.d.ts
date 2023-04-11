import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://data.jobs.iot.{region}.amazonaws.com", "https://data.jobs.iot.{region}.amazonaws.com", "http://data.jobs.iot.{region}.amazonaws.com.cn", "https://data.jobs.iot.{region}.amazonaws.com.cn"];
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
 * <p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.</p> <p> To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.</p> <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job</p>
 *
 * @see {@link https://docs.aws.amazon.com/iot/} - Amazon Web Services documentation
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
     * Gets details of a job execution.
     */
    describeJobExecution(req: operations.DescribeJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobExecutionResponse>;
    /**
     * Gets the list of all jobs for a thing that are not in a terminal status.
     */
    getPendingJobExecutions(req: operations.GetPendingJobExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPendingJobExecutionsResponse>;
    /**
     * Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.
     */
    startNextPendingJobExecution(req: operations.StartNextPendingJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartNextPendingJobExecutionResponse>;
    /**
     * Updates the status of a job execution.
     */
    updateJobExecution(req: operations.UpdateJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJobExecutionResponse>;
}
