import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Most Docker Hub API endpoints require you to authenticate using your
 *
 * @remarks
 * Docker credentials before using them.
 *
 * Additionally, similar to the Docker Hub UI features, API endpoint responses may vary depending
 * on your plan (Free, Pro, or Team) and your account's permissions.
 *
 * To learn more about the features available in each plan and to upgrade your existing plan, see [Docker Pricing](https://www.docker.com/pricing).
 *
 */
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
     * When user has 2FA enabled, this is the second call to perform after
     * `/v2/users/login` call.
     *
     * Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.
     *
     * The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.
     *
     * Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.
     *
     */
    postUsers2FALogin(req: shared.Users2FALoginRequest, config?: AxiosRequestConfig): Promise<operations.PostUsers2FALoginResponse>;
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
    postUsersLogin(req: shared.UsersLoginRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersLoginResponse>;
}
