import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Authentication {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove user access
     *
     * @remarks
     * This endpoint removes the token in use.<br><br>
     */
    deleteAuthToken(config?: AxiosRequestConfig): Promise<operations.DeleteAuthTokenResponse>;
    /**
     * Delete the user
     *
     * @remarks
     * This endpoint deletes the user.<br><br>
     */
    deleteUsersIdUser(req: operations.DeleteUsersIdUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserResponse>;
    /**
     * Generate a user temporary token
     *
     * @remarks
     * This endpoint generates a new temporary token for the user.<br><br>In case the access_token is used by a trusted device, and you want to let another one (for example a web browser) access to user resources, use this service to create a token which will expire in 30 minutes.<br><br>Additionally, you can also generate a temporary single-use token by specifying 'type=singleAccess' as query parameter. A single-use token can only be used once no matter the endpoint being accessed.<br><br>
     */
    getAuthTokenCode(config?: AxiosRequestConfig): Promise<operations.GetAuthTokenCodeResponse>;
    /**
     * Get the latest certificate of a type
     */
    getCertificateType(req: operations.GetCertificateTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificateTypeResponse>;
    /**
     * Get a user
     */
    getUsersIdUser(req: operations.GetUsersIdUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserResponse>;
    /**
     * Generate a jwt manage token
     *
     * @remarks
     * This endpoint generates a new jwt manage token. It requires an admin manage token to be used<br><br>
     */
    postAdminJwt(req: operations.PostAdminJwtRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminJwtResponse>;
    /**
     * Create a new anonymous user
     *
     * @remarks
     * This endpoint creates a new temporary token related to a new anonymous user.<br><br>It will expire 30 minutes after.<br><br>Note: if you supply client_id and client_secret, or if you call this endpoint with the manage_token, the token will be permanent.<br><br>
     */
    postAuthInit(req: operations.PostAuthInitRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAuthInitResponse>;
    /**
     * Generate a user jwt token
     *
     * @remarks
     * This endpoint generates a new jwt token for the user. This token will last the time in minutes given by the config key auth.default_token_expire (permanent if this the parameter expire=False is given)<br><br>
     */
    postAuthJwt(req: operations.PostAuthJwtRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAuthJwtResponse>;
    /**
     * Get a new access token given an user id and client credentials
     */
    postAuthRenew(req: operations.PostAuthRenewRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAuthRenewResponse>;
    /**
     * Transform a temporary code to a access_token
     *
     * @remarks
     * In order to register a new user with the OAuth 2 process, the client has to call this endpoint to request a granted access_token with the received temporary code.<br><br>
     */
    postAuthTokenAccess(req: operations.PostAuthTokenAccessRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAuthTokenAccessResponse>;
    /**
     * Create a token
     *
     * @remarks
     * Create an access_token for this user and get it.<br><br>
     */
    postUsersIdUserToken(req: operations.PostUsersIdUserTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserTokenResponse>;
}
