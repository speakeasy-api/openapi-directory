import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Teams service allows you to group users of your project and to enable them to share read and write access to your project resources
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
     * Create Team
     *
     * @remarks
     * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.
     */
    teamsCreate(req: operations.TeamsCreateRequestBody, security: operations.TeamsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsCreateResponse>;
    /**
     * Create Team Membership
     *
     * @remarks
     * Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.
     *
     * Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.
     *
     * Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.
     */
    teamsCreateMembership(req: operations.TeamsCreateMembershipRequest, security: operations.TeamsCreateMembershipSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsCreateMembershipResponse>;
    /**
     * Delete Team
     *
     * @remarks
     * Delete a team by its unique ID. Only team owners have write access for this resource.
     */
    teamsDelete(req: operations.TeamsDeleteRequest, security: operations.TeamsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteResponse>;
    /**
     * Delete Team Membership
     *
     * @remarks
     * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
     */
    teamsDeleteMembership(req: operations.TeamsDeleteMembershipRequest, security: operations.TeamsDeleteMembershipSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteMembershipResponse>;
    /**
     * Get Team
     *
     * @remarks
     * Get a team by its unique ID. All team members have read access for this resource.
     */
    teamsGet(req: operations.TeamsGetRequest, security: operations.TeamsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsGetResponse>;
    /**
     * Get Team Memberships
     *
     * @remarks
     * Get a team members by the team unique ID. All team members have read access for this list of resources.
     */
    teamsGetMemberships(req: operations.TeamsGetMembershipsRequest, security: operations.TeamsGetMembershipsSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsGetMembershipsResponse>;
    /**
     * List Teams
     *
     * @remarks
     * Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).
     */
    teamsList(req: operations.TeamsListRequest, security: operations.TeamsListSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsListResponse>;
    /**
     * Update Team
     *
     * @remarks
     * Update a team by its unique ID. Only team owners have write access for this resource.
     */
    teamsUpdate(req: operations.TeamsUpdateRequest, security: operations.TeamsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateResponse>;
    /**
     * Update Membership Roles
     */
    teamsUpdateMembershipRoles(req: operations.TeamsUpdateMembershipRolesRequest, security: operations.TeamsUpdateMembershipRolesSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateMembershipRolesResponse>;
    /**
     * Update Team Membership Status
     *
     * @remarks
     * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.
     */
    teamsUpdateMembershipStatus(req: operations.TeamsUpdateMembershipStatusRequest, security: operations.TeamsUpdateMembershipStatusSecurity, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateMembershipStatusResponse>;
}
