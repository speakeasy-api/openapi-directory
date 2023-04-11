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
     * Authenticate a user
     *
     * @remarks
     * Start a session with Authentiq Connect to authenticate a user.
     *
     * ```
     * GET https://connect.authentiq.io/authorize?client_id=<your-client-id>&response_type=code+id_token&scope=openid+email&redirect_uri=<your-redirect-uri>&state=0123456789
     * ```
     *
     * This endpoint also supports the POST method.
     *
     *
     * @see {@link http://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint} - OIDC Authorization Endpoint
     */
    authorize(req: operations.AuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizeResponse>;
    /**
     * Obtain an ID Token
     *
     * @remarks
     * Exchange en authorization code for an ID Token or Access Token.
     *
     * This endpoint supports both `client_secret_basic` (default) and `client_secret_basic` authentication methods, as specified by the client's `token_endpoint_auth_method`.
     *
     *
     * @see {@link http://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint} - OIDC Token Endpoint
     */
    token(req: operations.TokenRequest, config?: AxiosRequestConfig): Promise<operations.TokenResponse>;
    /**
     * Retrieve a user profile
     *
     * @remarks
     * Use this endpoint to retrieve a user's profile in case you are unable to parse an ID Token or you've not already obtained enough details from the ID Token via the Token Endpoint.
     *
     *
     * @see {@link http://openid.net/specs/openid-connect-core-1_0.html#UserInfo} - OIDC UserInfo Endpoint
     */
    userInfo(config?: AxiosRequestConfig): Promise<operations.UserInfoResponse>;
}
