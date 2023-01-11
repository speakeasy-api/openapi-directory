import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cancelJob - Cancels a job
    **/
    cancelJob(req: operations.CancelJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobResponse>;
    /**
     * getJobInfo - Get information about a job
    **/
    getJobInfo(req: operations.GetJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetJobInfoResponse>;
    /**
     * listJobsFor - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.
    **/
    listJobsFor(req: operations.ListJobsForRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsForResponse>;
}
