import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Configs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createConfig - Create Config
     *
     * This endpoint creates a new Config in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    createConfig(req: operations.CreateConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigResponse>;
    /**
     * deleteConfig - Delete Config
     *
     * This endpoint removes a Config identified by the `configId` parameter.
    **/
    deleteConfig(req: operations.DeleteConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigResponse>;
    /**
     * getConfig - Get Config
     *
     * This endpoint returns the metadata of a Config
     * identified by the `configId`.
    **/
    getConfig(req: operations.GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
    /**
     * getConfigs - List Configs
     *
     * This endpoint returns the list of the Configs that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    getConfigs(req: operations.GetConfigsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigsResponse>;
    /**
     * updateConfig - Update Config
     *
     * This endpoint updates a Config identified by the `configId` parameter.
    **/
    updateConfig(req: operations.UpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigResponse>;
}
