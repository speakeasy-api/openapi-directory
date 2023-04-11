import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIResources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get API Resource Coverage
     *
     * @remarks
     * Get API Resource Coverage
     */
    apiResourceCoverageOne(req: operations.ApiResourceCoverageOneRequest, security: operations.ApiResourceCoverageOneSecurity, config?: AxiosRequestConfig): Promise<operations.ApiResourceCoverageOneResponse>;
    /**
     * Get API Resource
     *
     * @remarks
     * Get API Resource
     */
    apiResourcesOne(req: operations.ApiResourcesOneRequest, security: operations.ApiResourcesOneSecurity, config?: AxiosRequestConfig): Promise<operations.ApiResourcesOneResponse>;
}
