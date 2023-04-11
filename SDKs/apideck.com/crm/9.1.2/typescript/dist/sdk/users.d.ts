import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create user
     *
     * @remarks
     * Create user
     */
    usersAdd(req: operations.UsersAddRequest, security: operations.UsersAddSecurity, config?: AxiosRequestConfig): Promise<operations.UsersAddResponse>;
    /**
     * List users
     *
     * @remarks
     * List users
     */
    usersAll(req: operations.UsersAllRequest, security: operations.UsersAllSecurity, config?: AxiosRequestConfig): Promise<operations.UsersAllResponse>;
    /**
     * Delete user
     *
     * @remarks
     * Delete user
     */
    usersDelete(req: operations.UsersDeleteRequest, security: operations.UsersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.UsersDeleteResponse>;
    /**
     * Get user
     *
     * @remarks
     * Get user
     */
    usersOne(req: operations.UsersOneRequest, security: operations.UsersOneSecurity, config?: AxiosRequestConfig): Promise<operations.UsersOneResponse>;
    /**
     * Update user
     *
     * @remarks
     * Update user
     */
    usersUpdate(req: operations.UsersUpdateRequest, security: operations.UsersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.UsersUpdateResponse>;
}
