import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancels a job
     */
    cancelJob(req: shared.JobIdRequestBody, config?: AxiosRequestConfig): Promise<operations.CancelJobResponse>;
    /**
     * Get normalization status to determine if we can bypass normalization phase
     */
    getAttemptNormalizationStatusesForJob(req: shared.JobIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetAttemptNormalizationStatusesForJobResponse>;
    /**
     * Gets all information needed to debug this job
     */
    getJobDebugInfo(req: shared.JobIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetJobDebugInfoResponse>;
    /**
     * Get information about a job
     */
    getJobInfo(req: shared.JobIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetJobInfoResponse>;
    /**
     * Get information about a job excluding attempt info and logs
     */
    getJobInfoLight(req: shared.JobIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetJobInfoLightResponse>;
    getLastReplicationJob(req: shared.ConnectionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetLastReplicationJobResponse>;
    /**
     * Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.
     */
    listJobsFor(req: shared.JobListRequestBody, config?: AxiosRequestConfig): Promise<operations.ListJobsForResponse>;
}
