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
     * Returns details of a specific fire.com user.
     *
     * @remarks
     * You can retrieve the details of a specific fire.com user
     */
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * Returns list of all users on your fire.com account
     *
     * @remarks
     * You can retrieve the details of all fire.com users on your acount.
     */
    getUsers(config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
}
