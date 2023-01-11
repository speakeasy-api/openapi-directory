import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserListOfValuesLov {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUserListOfValues - Get the list of values related to this list name
    **/
    getUserListOfValues(req: operations.GetUserListOfValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserListOfValuesResponse>;
    /**
     * getUserLovIndex - Get all list names
    **/
    getUserLovIndex(config?: AxiosRequestConfig): Promise<operations.GetUserLovIndexResponse>;
}
