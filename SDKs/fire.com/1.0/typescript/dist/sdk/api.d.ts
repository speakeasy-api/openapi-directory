import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Api {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createApiApplication - Create a new API Application
     *
     * Create a new API Application with specified permissions
    **/
    createApiApplication(req: operations.CreateApiApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiApplicationResponse>;
}
