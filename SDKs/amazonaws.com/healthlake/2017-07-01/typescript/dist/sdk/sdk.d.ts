import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://healthlake.{region}.amazonaws.com", "https://healthlake.{region}.amazonaws.com", "http://healthlake.{region}.amazonaws.com.cn", "https://healthlake.{region}.amazonaws.com.cn"];
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
 * Amazon HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.
 *
 * @see {@link https://docs.aws.amazon.com/healthlake/} - Amazon Web Services documentation
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
     * Creates a Data Store that can ingest and export FHIR formatted data.
     */
    createFHIRDatastore(req: operations.CreateFHIRDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateFHIRDatastoreResponse>;
    /**
     * Deletes a Data Store.
     */
    deleteFHIRDatastore(req: operations.DeleteFHIRDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFHIRDatastoreResponse>;
    /**
     * Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
     */
    describeFHIRDatastore(req: operations.DescribeFHIRDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFHIRDatastoreResponse>;
    /**
     * Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
     */
    describeFHIRExportJob(req: operations.DescribeFHIRExportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFHIRExportJobResponse>;
    /**
     * Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job.
     */
    describeFHIRImportJob(req: operations.DescribeFHIRImportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFHIRImportJobResponse>;
    /**
     * Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
     */
    listFHIRDatastores(req: operations.ListFHIRDatastoresRequest, config?: AxiosRequestConfig): Promise<operations.ListFHIRDatastoresResponse>;
    /**
     *  Lists all FHIR export jobs associated with an account and their statuses.
     */
    listFHIRExportJobs(req: operations.ListFHIRExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListFHIRExportJobsResponse>;
    /**
     *  Lists all FHIR import jobs associated with an account and their statuses.
     */
    listFHIRImportJobs(req: operations.ListFHIRImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListFHIRImportJobsResponse>;
    /**
     *  Returns a list of all existing tags associated with a Data Store.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Begins a FHIR export job.
     */
    startFHIRExportJob(req: operations.StartFHIRExportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartFHIRExportJobResponse>;
    /**
     * Begins a FHIR Import job.
     */
    startFHIRImportJob(req: operations.StartFHIRImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartFHIRImportJobResponse>;
    /**
     *  Adds a user specifed key and value tag to a Data Store.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     *  Removes tags from a Data Store.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
