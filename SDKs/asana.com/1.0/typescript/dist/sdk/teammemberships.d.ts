import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This object determines if a user is a member of a team.
 */
export declare class TeamMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a team membership
     *
     * @remarks
     * Returns the complete team membership record for a single team membership.
     */
    getTeamMembership(req: operations.GetTeamMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMembershipResponse>;
    /**
     * Get team memberships
     *
     * @remarks
     * Returns compact team membership records.
     */
    getTeamMemberships(req: operations.GetTeamMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMembershipsResponse>;
    /**
     * Get memberships from a team
     *
     * @remarks
     * Returns the compact team memberships for the team.
     */
    getTeamMembershipsForTeam(req: operations.GetTeamMembershipsForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMembershipsForTeamResponse>;
    /**
     * Get memberships from a user
     *
     * @remarks
     * Returns the compact team membership records for the user.
     */
    getTeamMembershipsForUser(req: operations.GetTeamMembershipsForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMembershipsForUserResponse>;
}
