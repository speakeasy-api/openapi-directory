import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUserInformation - Get User Information
     *
     * To show information about the current user account, send a GET request to `/v2/account`.
    **/
    getUserInformation(config?: AxiosRequestConfig): Promise<operations.GetUserInformationResponse>;
}
