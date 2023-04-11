import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserListOfValuesLOV {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the list of values related to this list name
     */
    getUserListOfValues(req: operations.GetUserListOfValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserListOfValuesResponse>;
    /**
     * Get all list names
     */
    getUserLovIndex(config?: AxiosRequestConfig): Promise<operations.GetUserLovIndexResponse>;
}
