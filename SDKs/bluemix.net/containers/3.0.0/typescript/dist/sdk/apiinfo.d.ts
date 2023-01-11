import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getContainersMessages - List messages for the user
     *
     * This endpoint retrieves all IBM Containers system messages for the user.
    **/
    getContainersMessages(req: operations.GetContainersMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersMessagesResponse>;
    /**
     * getContainersVersion - List latest API version
     *
     * This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.
    **/
    getContainersVersion(config?: AxiosRequestConfig): Promise<operations.GetContainersVersionResponse>;
}
