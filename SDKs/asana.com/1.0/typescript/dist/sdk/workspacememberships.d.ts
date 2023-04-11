import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This object determines if a user is a member of a workspace.
 */
export declare class WorkspaceMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a workspace membership
     *
     * @remarks
     * Returns the complete workspace record for a single workspace membership.
     */
    getWorkspaceMembership(req: operations.GetWorkspaceMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceMembershipResponse>;
    /**
     * Get workspace memberships for a user
     *
     * @remarks
     * Returns the compact workspace membership records for the user.
     */
    getWorkspaceMembershipsForUser(req: operations.GetWorkspaceMembershipsForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceMembershipsForUserResponse>;
    /**
     * Get the workspace memberships for a workspace
     *
     * @remarks
     * Returns the compact workspace membership records for the workspace.
     */
    getWorkspaceMembershipsForWorkspace(req: operations.GetWorkspaceMembershipsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceMembershipsForWorkspaceResponse>;
}
