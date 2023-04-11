import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PublicSecuritySecurity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Login
     *
     * @remarks
     * User Login - The login will give your tokens
     */
    login(req: shared.LoginRequest, config?: AxiosRequestConfig): Promise<operations.LoginResponse>;
    /**
     * Lost password
     *
     * @remarks
     * Lost password - Your password will be regenerated and sent to your email
     */
    lostPassword(req: string, config?: AxiosRequestConfig): Promise<operations.LostPasswordResponse>;
    /**
     * User Registration
     *
     * @remarks
     * User Registration - Create a new user on BeezUP
     */
    register(req: shared.RegisterRequest, config?: AxiosRequestConfig): Promise<operations.RegisterResponse>;
}
