import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * countOrgaUsers - Count the organization users using the provided filters
    **/
    countOrgaUsers(req: operations.CountOrgaUsersRequest, config?: AxiosRequestConfig): Promise<operations.CountOrgaUsersResponse>;
    /**
     * createLtiCredentials - Create a new couple of LTI 1.x credentials
     *
     * Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).
     *
    **/
    createLtiCredentials(req: operations.CreateLtiCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.CreateLtiCredentialsResponse>;
    /**
     * createOrganizationInvitation - Create a new invitation to join the organization
     *
     * This method creates and sends invitation for teachers and admins.
     *
     * Invitations can only be used by new Flat users or users who are not part of the organization yet.
     *
     * If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.
     *
    **/
    createOrganizationInvitation(req: operations.CreateOrganizationInvitationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInvitationResponse>;
    /**
     * createOrganizationUser - Create a new user account
    **/
    createOrganizationUser(req: operations.CreateOrganizationUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationUserResponse>;
    /**
     * listLtiCredentials - List LTI 1.x credentials
    **/
    listLtiCredentials(req: operations.ListLtiCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ListLtiCredentialsResponse>;
    /**
     * listOrganizationInvitations - List the organization invitations
    **/
    listOrganizationInvitations(req: operations.ListOrganizationInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationInvitationsResponse>;
    /**
     * listOrganizationUsers - List the organization users
    **/
    listOrganizationUsers(req: operations.ListOrganizationUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationUsersResponse>;
    /**
     * removeOrganizationInvitation - Remove an organization invitation
    **/
    removeOrganizationInvitation(req: operations.RemoveOrganizationInvitationRequest, config?: AxiosRequestConfig): Promise<operations.RemoveOrganizationInvitationResponse>;
    /**
     * removeOrganizationUser - Remove an account from Flat
     *
     * This operation removes an account from Flat and its data, including:
     * * The music scores created by this user (documents, history, comments, collaboration information)
     * * Education related data (assignments and classroom information)
     *
    **/
    removeOrganizationUser(req: operations.RemoveOrganizationUserRequest, config?: AxiosRequestConfig): Promise<operations.RemoveOrganizationUserResponse>;
    /**
     * revokeLtiCredentials - Revoke LTI 1.x credentials
    **/
    revokeLtiCredentials(req: operations.RevokeLtiCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.RevokeLtiCredentialsResponse>;
    /**
     * updateOrganizationUser - Update account information
    **/
    updateOrganizationUser(req: operations.UpdateOrganizationUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationUserResponse>;
}
