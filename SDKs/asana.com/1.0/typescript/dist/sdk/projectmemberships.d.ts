import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (i.e., whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
 */
export declare class ProjectMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a project membership
     *
     * @remarks
     * Returns the complete project record for a single project membership.
     */
    getProjectMembership(req: operations.GetProjectMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectMembershipResponse>;
    /**
     * Get memberships from a project
     *
     * @remarks
     * Returns the compact project membership records for the project.
     */
    getProjectMembershipsForProject(req: operations.GetProjectMembershipsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectMembershipsForProjectResponse>;
}
