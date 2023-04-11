import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Export {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new export configuration
     */
    exportConfigurationsCreate(req: operations.ExportConfigurationsCreateRequest, security: operations.ExportConfigurationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ExportConfigurationsCreateResponse>;
    /**
     * Delete export configuration.
     */
    exportConfigurationsDelete(req: operations.ExportConfigurationsDeleteRequest, security: operations.ExportConfigurationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ExportConfigurationsDeleteResponse>;
    /**
     * Disable export configuration.
     */
    exportConfigurationsDisable(req: operations.ExportConfigurationsDisableRequest, security: operations.ExportConfigurationsDisableSecurity, config?: AxiosRequestConfig): Promise<operations.ExportConfigurationsDisableResponse>;
    /**
     * Enable export configuration.
     */
    exportConfigurationsEnable(req: operations.ExportConfigurationsEnableRequest, security: operations.ExportConfigurationsEnableSecurity, config?: AxiosRequestConfig): Promise<operations.ExportConfigurationsEnableResponse>;
    /**
     * Get export configuration.
     */
    exportConfigurationsGet(req: operations.ExportConfigurationsGetRequest, security: operations.ExportConfigurationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ExportConfigurationsGetResponse>;
    /**
     * List export configurations.
     */
    exportConfigurationsList(req: operations.ExportConfigurationsListRequest, security: operations.ExportConfigurationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ExportConfigurationsListResponse>;
    /**
     * Partially update export configuration.
     */
    exportConfigurationsPartialUpdate(req: operations.ExportConfigurationsPartialUpdateRequest, security: operations.ExportConfigurationsPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ExportConfigurationsPartialUpdateResponse>;
}
