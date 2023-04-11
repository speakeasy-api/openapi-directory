import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Flat for Education organizations
 */
export declare class Organization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Count the organization users using the provided filters
     */
    countOrgaUsers(req: operations.CountOrgaUsersRequest, security: operations.CountOrgaUsersSecurity, config?: AxiosRequestConfig): Promise<operations.CountOrgaUsersResponse>;
    /**
     * Create a new couple of LTI 1.x credentials
     *
     * @remarks
     * Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).
     *
     */
    createLtiCredentials(req: shared.LtiCredentialsCreation, security: operations.CreateLtiCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.CreateLtiCredentialsResponse>;
    /**
     * Create a new invitation to join the organization
     *
     * @remarks
     * This method creates and sends invitation for teachers and admins.
     *
     * Invitations can only be used by new Flat users or users who are not part of the organization yet.
     *
     * If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.
     *
     */
    createOrganizationInvitation(req: shared.OrganizationInvitationCreation, security: operations.CreateOrganizationInvitationSecurity, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInvitationResponse>;
    /**
     * Create a new user account
     */
    createOrganizationUser(req: shared.UserCreation, security: operations.CreateOrganizationUserSecurity, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationUserResponse>;
    /**
     * List LTI 1.x credentials
     */
    listLtiCredentials(config?: AxiosRequestConfig): Promise<operations.ListLtiCredentialsResponse>;
    /**
     * List the organization invitations
     */
    listOrganizationInvitations(req: operations.ListOrganizationInvitationsRequest, security: operations.ListOrganizationInvitationsSecurity, config?: AxiosRequestConfig): Promise<operations.ListOrganizationInvitationsResponse>;
    /**
     * List the organization users
     */
    listOrganizationUsers(req: operations.ListOrganizationUsersRequest, security: operations.ListOrganizationUsersSecurity, config?: AxiosRequestConfig): Promise<operations.ListOrganizationUsersResponse>;
    /**
     * Remove an organization invitation
     */
    removeOrganizationInvitation(req: operations.RemoveOrganizationInvitationRequest, security: operations.RemoveOrganizationInvitationSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveOrganizationInvitationResponse>;
    /**
     * Remove an account from Flat
     *
     * @remarks
     * This operation removes an account from Flat and its data, including:
     * * The music scores created by this user (documents, history, comments, collaboration information)
     * * Education related data (assignments and classroom information)
     *
     */
    removeOrganizationUser(req: operations.RemoveOrganizationUserRequest, security: operations.RemoveOrganizationUserSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveOrganizationUserResponse>;
    /**
     * Revoke LTI 1.x credentials
     */
    revokeLtiCredentials(req: operations.RevokeLtiCredentialsRequest, security: operations.RevokeLtiCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.RevokeLtiCredentialsResponse>;
    /**
     * Update account information
     */
    updateOrganizationUser(req: operations.UpdateOrganizationUserRequest, security: operations.UpdateOrganizationUserSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationUserResponse>;
}
