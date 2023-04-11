import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage users
 */
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List users
     */
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Retrieve a single user by id
     */
    getUsersId(req: operations.GetUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdResponse>;
    /**
     * Retrieve a users linked profile by type
     */
    getUsersIdLinkedType(req: operations.GetUsersIdLinkedTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdLinkedTypeResponse>;
}
