import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Second factor authentication.
     *
     * @remarks
     * When a user has 2FA enabled, this is the second call to perform after
     * `/v2/users/login` call.
     *
     * Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.
     *
     * The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.
     *
     * Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.
     *
     */
    postUsers2FALogin(req: shared.Users2FALoginRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostUsers2FALoginResponse>;
    /**
     * Create an authentication token
     *
     * @remarks
     * Creates and returns a bearer token in JWT format that you can use to
     * authenticate with Docker Hub APIs.
     *
     * The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.
     *
     * Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.
     *
     */
    postUsersLogin(req: shared.UsersLoginRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostUsersLoginResponse>;
}
