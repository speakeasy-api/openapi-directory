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
     * List Users
     *
     * @remarks
     * List Users
     */
    collectionUsersAll(req: operations.CollectionUsersAllRequest, security: operations.CollectionUsersAllSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionUsersAllResponse>;
    /**
     * Get user
     *
     * @remarks
     * Get user
     */
    collectionUsersOne(req: operations.CollectionUsersOneRequest, security: operations.CollectionUsersOneSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionUsersOneResponse>;
}
