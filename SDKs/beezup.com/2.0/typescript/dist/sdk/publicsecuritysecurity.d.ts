import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PublicSecuritySecurity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * login - Login
     *
     * User Login - The login will give your tokens
    **/
    login(req: operations.LoginRequest, config?: AxiosRequestConfig): Promise<operations.LoginResponse>;
    /**
     * lostPassword - Lost password
     *
     * Lost password - Your password will be regenerated and sent to your email
    **/
    lostPassword(req: operations.LostPasswordRequest, config?: AxiosRequestConfig): Promise<operations.LostPasswordResponse>;
    /**
     * register - User Registration
     *
     * User Registration - Create a new user on BeezUP
    **/
    register(req: operations.RegisterRequest, config?: AxiosRequestConfig): Promise<operations.RegisterResponse>;
}
