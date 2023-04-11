import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Deployment' entry type
 */
export declare class TypeProjectDeployment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Deployment' entry type
     *
     * @remarks
     * API to search for entries of type Deployment
     */
    searchProjectDeployment(req: operations.SearchProjectDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectDeploymentResponse>;
}
