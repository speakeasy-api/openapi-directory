import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RequestedResources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Requested Resources
     *
     * @remarks
     * This API returns a list of requested resources to be picked from the shelf in Alma
     */
    getAlmawsV1TaskListsRequestedResources(req: operations.GetAlmawsV1TaskListsRequestedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetAlmawsV1TaskListsRequestedResourcesResponse>;
    /**
     * Act on Requested Resources
     *
     * @remarks
     * This API performs an action on requested resources that are on the shelf in Alma
     */
    postAlmawsV1TaskListsRequestedResources(req: operations.PostAlmawsV1TaskListsRequestedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostAlmawsV1TaskListsRequestedResourcesResponse>;
}
