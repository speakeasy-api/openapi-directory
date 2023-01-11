import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Configurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConfiguration - Get one Configuration data
    **/
    getConfiguration(req: operations.GetConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationResponse>;
    /**
     * getConfigurations - Get Configurations data
    **/
    getConfigurations(req: operations.GetConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationsResponse>;
    /**
     * postConfigurations - Create connector with parameters
    **/
    postConfigurations(req: operations.PostConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.PostConfigurationsResponse>;
}
