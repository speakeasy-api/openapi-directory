import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://emr-serverless.{region}.amazonaws.com", "https://emr-serverless.{region}.amazonaws.com", "http://emr-serverless.{region}.amazonaws.com.cn", "https://emr-serverless.{region}.amazonaws.com.cn"];
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
 * <p>Amazon EMR Serverless is a new deployment option for Amazon EMR. EMR Serverless provides a serverless runtime environment that simplifies running analytics applications using the latest open source frameworks such as Apache Spark and Apache Hive. With EMR Serverless, you don’t have to configure, optimize, secure, or operate clusters to run applications with these frameworks.</p> <p>The API reference to Amazon EMR Serverless is <code>emr-serverless</code>. The <code>emr-serverless</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR Serverless. For example, <code>aws emr-serverless start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR Serverless. For example, <code>"Action": ["emr-serverless:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR Serverless</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR Serverless service endpoints. For example, <code>emr-serverless.us-east-2.amazonaws.com</code>.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/emr-serverless/} - Amazon Web Services documentation
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
     * Cancels a job run.
     */
    cancelJobRun(req: operations.CancelJobRunRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobRunResponse>;
    /**
     * Creates an application.
     */
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Deletes an application. An application has to be in a stopped or created state in order to be deleted.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Displays detailed information about a specified application.
     */
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * Returns a URL to access the job run dashboard.
     */
    getDashboardForJobRun(req: operations.GetDashboardForJobRunRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardForJobRunResponse>;
    /**
     * Displays detailed information about a job run.
     */
    getJobRun(req: operations.GetJobRunRequest, config?: AxiosRequestConfig): Promise<operations.GetJobRunResponse>;
    /**
     * Lists applications based on a set of parameters.
     */
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * Lists job runs based on a set of parameters.
     */
    listJobRuns(req: operations.ListJobRunsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobRunsResponse>;
    /**
     * Lists the tags assigned to the resources.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Starts a specified application and initializes initial capacity if configured.
     */
    startApplication(req: operations.StartApplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartApplicationResponse>;
    /**
     * Starts a job run.
     */
    startJobRun(req: operations.StartJobRunRequest, config?: AxiosRequestConfig): Promise<operations.StartJobRunResponse>;
    /**
     * Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
     */
    stopApplication(req: operations.StopApplicationRequest, config?: AxiosRequestConfig): Promise<operations.StopApplicationResponse>;
    /**
     * Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your AWS resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from resources.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates a specified application. An application has to be in a stopped or created state in order to be updated.
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
}
