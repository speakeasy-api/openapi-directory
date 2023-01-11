import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUser - Returns details of a specific fire.com user.
     *
     * You can retrieve the details of a specific fire.com user
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUsers - Returns list of all users on your fire.com account
     *
     * You can retrieve the details of all fire.com users on your acount.
    **/
    getUsers(config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
}
