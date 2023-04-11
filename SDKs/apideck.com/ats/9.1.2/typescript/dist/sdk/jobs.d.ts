import * as operations from "./models/operations";
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
     * List Jobs
     *
     * @remarks
     * List Jobs
     */
    jobsAll(req: operations.JobsAllRequest, security: operations.JobsAllSecurity, config?: AxiosRequestConfig): Promise<operations.JobsAllResponse>;
    /**
     * Get Job
     *
     * @remarks
     * Get Job
     */
    jobsOne(req: operations.JobsOneRequest, security: operations.JobsOneSecurity, config?: AxiosRequestConfig): Promise<operations.JobsOneResponse>;
}
