import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Job {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * jobSearchRead - Return job details search result
     *
     * Return job details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{job_title}__: Used as a key word to search jobs,
     *
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    jobSearchRead(req: operations.JobSearchReadRequest, config?: AxiosRequestConfig): Promise<operations.JobSearchReadResponse>;
    /**
     * jobSearchallRead - Return job details search result
     *
     * Return job details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{company_name}__: Used as a key word to search jobs,
     *
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    jobSearchallRead(req: operations.JobSearchallReadRequest, config?: AxiosRequestConfig): Promise<operations.JobSearchallReadResponse>;
}
