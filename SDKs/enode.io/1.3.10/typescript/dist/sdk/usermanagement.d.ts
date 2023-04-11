import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Unlink User
     *
     * @remarks
     * Deletes a User and all of their data permanently, and invalidates any associated sessions, authorization codes, and access/refresh tokens
     */
    deleteUsersUserid(req: operations.DeleteUsersUseridRequest, security: operations.DeleteUsersUseridSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteUsersUseridResponse>;
    /**
     * Deauthorize User
     *
     * @remarks
     * Deletes the User's stored vendor authorizations and credentials, invalidates any associated sessions, authorization codes, and access/refresh tokens.
     *
     * All other User data is retained, and if the User is sent through the Link User flow in the future their account will be just as they left it.
     *
     * No webhook events will be generated for a deauthorized user.
     */
    deleteUsersUseridAuthorization(req: operations.DeleteUsersUseridAuthorizationRequest, security: operations.DeleteUsersUseridAuthorizationSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteUsersUseridAuthorizationResponse>;
    /**
     * Link User
     *
     * @remarks
     * Creates an Enode Link session attached to the provided User ID. If this User does not exist, it will be created. The returned `linkState` gives the user short-lived access to Enode Link.
     */
    postUsersUseridLink(req: operations.PostUsersUseridLinkRequest, security: operations.PostUsersUseridLinkSecurity, config?: AxiosRequestConfig): Promise<operations.PostUsersUseridLinkResponse>;
}
