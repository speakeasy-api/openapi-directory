import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectResources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * assignDefaultProjectResources - Assign Resources to Default Project
     *
     * To assign resources to your default project, send a POST request to `/v2/projects/default/resources`.
    **/
    assignDefaultProjectResources(req: operations.AssignDefaultProjectResourcesRequest, config?: AxiosRequestConfig): Promise<operations.AssignDefaultProjectResourcesResponse>;
    /**
     * assignProjectResources - Assign Resources to a Project
     *
     * To assign resources to a project, send a POST request to `/v2/projects/$PROJECT_ID/resources`.
    **/
    assignProjectResources(req: operations.AssignProjectResourcesRequest, config?: AxiosRequestConfig): Promise<operations.AssignProjectResourcesResponse>;
    /**
     * listDefaultProjectResources - List Default Project Resources
     *
     * To list all your resources in your default project, send a GET request to `/v2/projects/default/resources`.
    **/
    listDefaultProjectResources(config?: AxiosRequestConfig): Promise<operations.ListDefaultProjectResourcesResponse>;
    /**
     * listProjectResources - List Project Resources
     *
     * To list all your resources in a project, send a GET request to `/v2/projects/$PROJECT_ID/resources`.
    **/
    listProjectResources(req: operations.ListProjectResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectResourcesResponse>;
}
