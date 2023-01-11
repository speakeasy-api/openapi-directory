import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RequestedResources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAlmawsV1TaskListsRequestedResources - Get Requested Resources
     *
     * This API returns a list of requested resources to be picked from the shelf in Alma
    **/
    getAlmawsV1TaskListsRequestedResources(req: operations.GetAlmawsV1TaskListsRequestedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetAlmawsV1TaskListsRequestedResourcesResponse>;
    /**
     * postAlmawsV1TaskListsRequestedResources - Act on Requested Resources
     *
     * This API performs an action on requested resources that are on the shelf in Alma
    **/
    postAlmawsV1TaskListsRequestedResources(req: operations.PostAlmawsV1TaskListsRequestedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostAlmawsV1TaskListsRequestedResourcesResponse>;
}
