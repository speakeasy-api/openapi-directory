import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Configurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get one Configuration data
     */
    getConfiguration(req: operations.GetConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationResponse>;
    /**
     * Get Configurations data
     */
    getConfigurations(req: operations.GetConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationsResponse>;
    /**
     * Create connector with parameters
     */
    postConfigurations(req: operations.PostConfigurationsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostConfigurationsResponse>;
}
