import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://importexport.amazonaws.com", "https://importexport.amazonaws.com", "http://importexport.{region}.amazonaws.com.cn", "https://importexport.{region}.amazonaws.com.cn"];
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
 * <fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.
 *
 * @see {@link https://docs.aws.amazon.com/importexport/} - Amazon Web Services documentation
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
     * This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
     */
    getCancelJob(req: operations.GETCancelJobRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelJobResponse>;
    /**
     * This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
     */
    getCreateJob(req: operations.GETCreateJobRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateJobResponse>;
    /**
     * This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
     */
    getGETShippingLabel(req: operations.GETGETShippingLabelRequest, config?: AxiosRequestConfig): Promise<operations.GETGETShippingLabelResponse>;
    /**
     * This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
     */
    getGETStatus(req: operations.GETGETStatusRequest, config?: AxiosRequestConfig): Promise<operations.GETGETStatusResponse>;
    /**
     * This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
     */
    getListJobs(req: operations.GETListJobsRequest, config?: AxiosRequestConfig): Promise<operations.GETListJobsResponse>;
    /**
     * You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
     */
    getUpdateJob(req: operations.GETUpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateJobResponse>;
    /**
     * This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
     */
    postCancelJob(req: operations.POSTCancelJobRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelJobResponse>;
    /**
     * This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
     */
    postCreateJob(req: operations.POSTCreateJobRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateJobResponse>;
    /**
     * This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
     */
    postGetShippingLabel(req: operations.POSTGetShippingLabelRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetShippingLabelResponse>;
    /**
     * This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
     */
    postGetStatus(req: operations.POSTGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetStatusResponse>;
    /**
     * This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
     */
    postListJobs(req: operations.POSTListJobsRequest, config?: AxiosRequestConfig): Promise<operations.POSTListJobsResponse>;
    /**
     * You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
     */
    postUpdateJob(req: operations.POSTUpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateJobResponse>;
}
