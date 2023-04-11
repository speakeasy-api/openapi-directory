import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 *
 * @remarks
 *
 * An *organization* is a special kind of workspace that represents a company. In an organization, you can group your projects into teams. You can read more about how organizations work on the Asana Guide. To tell if your workspace is an organization or not, check its `is_organization` property.
 *
 * Over time, we intend to migrate most workspaces into organizations and to release more organization-specific functionality. We may eventually deprecate using workspace-based APIs for organizations. Currently, and until after some reasonable grace period following any further announcements, you can still reference organizations in any `workspace` parameter.
 */
export declare class Workspaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a user to a workspace or organization
     *
     * @remarks
     * Add a user to a workspace or organization.
     * The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.
     */
    addUserForWorkspace(req: operations.AddUserForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.AddUserForWorkspaceResponse>;
    /**
     * Get a workspace
     *
     * @remarks
     * Returns the full workspace record for a single workspace.
     */
    getWorkspace(req: operations.GetWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    /**
     * Get multiple workspaces
     *
     * @remarks
     * Returns the compact records for all workspaces visible to the authorized user.
     */
    getWorkspaces(req: operations.GetWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesResponse>;
    /**
     * Remove a user from a workspace or organization
     *
     * @remarks
     * Remove a user from a workspace or organization.
     * The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
     * Returns an empty data record.
     */
    removeUserForWorkspace(req: operations.RemoveUserForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUserForWorkspaceResponse>;
    /**
     * Update a workspace
     *
     * @remarks
     * A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
     * Currently the only field that can be modified for a workspace is its name.
     * Returns the complete, updated workspace record.
     */
    updateWorkspace(req: operations.UpdateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
}
