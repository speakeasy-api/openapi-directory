import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Workspace related resources.
 */
export declare class Workspace {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a workspace
     */
    createWorkspace(req: shared.WorkspaceCreate, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    /**
     * Deletes a workspace
     */
    deleteWorkspace(req: shared.WorkspaceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * Find workspace by ID
     */
    getWorkspace(req: shared.WorkspaceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    /**
     * Find workspace by connection id
     */
    getWorkspaceByConnectionId(req: shared.ConnectionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceByConnectionIdResponse>;
    /**
     * Find workspace by slug
     */
    getWorkspaceBySlug(req: shared.SlugRequestBody, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceBySlugResponse>;
    /**
     * List all workspaces registered in the current Airbyte deployment
     */
    listWorkspaces(config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    /**
     * Update workspace state
     */
    updateWorkspace(req: shared.WorkspaceUpdate, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
    /**
     * Update workspace feedback state
     */
    updateWorkspaceFeedback(req: shared.WorkspaceGiveFeedback, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceFeedbackResponse>;
    /**
     * Update workspace name
     */
    updateWorkspaceName(req: shared.WorkspaceUpdateName, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceNameResponse>;
}
