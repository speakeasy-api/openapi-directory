import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A team is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
 */
export declare class Teams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a user to a team
     *
     * @remarks
     * The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.
     *
     * Returns the complete team membership record for the newly added user.
     */
    addUserForTeam(req: operations.AddUserForTeamRequest, config?: AxiosRequestConfig): Promise<operations.AddUserForTeamResponse>;
    /**
     * Create a team
     *
     * @remarks
     * Creates a team within the current workspace.
     */
    createTeam(req: operations.CreateTeamRequest, config?: AxiosRequestConfig): Promise<operations.CreateTeamResponse>;
    /**
     * Get a team
     *
     * @remarks
     * Returns the full record for a single team.
     */
    getTeam(req: operations.GetTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamResponse>;
    /**
     * Get teams for a user
     *
     * @remarks
     * Returns the compact records for all teams to which the given user is assigned.
     */
    getTeamsForUser(req: operations.GetTeamsForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsForUserResponse>;
    /**
     * Get teams in a workspace
     *
     * @remarks
     * Returns the compact records for all teams in the workspace visible to the authorized user.
     */
    getTeamsForWorkspace(req: operations.GetTeamsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsForWorkspaceResponse>;
    /**
     * Remove a user from a team
     *
     * @remarks
     * The user making this call must be a member of the team in order to remove themselves or others.
     */
    removeUserForTeam(req: operations.RemoveUserForTeamRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUserForTeamResponse>;
    /**
     * Update a team
     *
     * @remarks
     * Updates a team within the current workspace.
     */
    updateTeam(req: operations.UpdateTeamRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTeamResponse>;
}
