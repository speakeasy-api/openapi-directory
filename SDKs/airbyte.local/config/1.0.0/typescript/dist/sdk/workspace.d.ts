import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Workspace {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createWorkspace - Creates a workspace
    **/
    createWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    /**
     * deleteWorkspace - Deletes a workspace
    **/
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * getWorkspace - Find workspace by ID
    **/
    getWorkspace(req: operations.GetWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    /**
     * getWorkspaceBySlug - Find workspace by slug
    **/
    getWorkspaceBySlug(req: operations.GetWorkspaceBySlugRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceBySlugResponse>;
    /**
     * listWorkspaces - List all workspaces registered in the current Airbyte deployment
    **/
    listWorkspaces(config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    /**
     * updateWorkspace - Update workspace state
    **/
    updateWorkspace(req: operations.UpdateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
}
