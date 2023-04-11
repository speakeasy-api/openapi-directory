import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can manage your Configs.
 *
 * @remarks
 * This also can be used to manage [Feature Flags and Settings](#tag/Feature-Flags-and-Settings) and their
 * [served values](#tag/Feature-Flag-and-Setting-values) through this API.
 *
 * <a href="https://configcat.com/docs/main-concepts/#config" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Configs.
 */
export declare class Configs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Config
     *
     * @remarks
     * This endpoint creates a new Config in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    createConfig(req: operations.CreateConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigResponse>;
    /**
     * Delete Config
     *
     * @remarks
     * This endpoint removes a Config identified by the `configId` parameter.
     */
    deleteConfig(req: operations.DeleteConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigResponse>;
    /**
     * Get Config
     *
     * @remarks
     * This endpoint returns the metadata of a Config
     * identified by the `configId`.
     */
    getConfig(req: operations.GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
    /**
     * List Configs
     *
     * @remarks
     * This endpoint returns the list of the Configs that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    getConfigs(req: operations.GetConfigsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigsResponse>;
    /**
     * Update Config
     *
     * @remarks
     * This endpoint updates a Config identified by the `configId` parameter.
     */
    updateConfig(req: operations.UpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigResponse>;
}
