import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalSettingsStoreLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the terminal logo
     *
     * @remarks
     * Returns the logo that is configured for a specific payment terminal model at the store identified in the path.
     * The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.
     * This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getMerchantsMerchantIdStoresReferenceTerminalLogos(req: operations.GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest, security: operations.GetMerchantsMerchantIdStoresReferenceTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdStoresReferenceTerminalLogosResponse>;
    /**
     * Get terminal settings
     *
     * @remarks
     * Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getMerchantsMerchantIdStoresReferenceTerminalSettings(req: operations.GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest, security: operations.GetMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdStoresReferenceTerminalSettingsResponse>;
    /**
     * Get the terminal logo
     *
     * @remarks
     * Returns the logo that is configured for a specific payment terminal model at the store identified in the path.
     * The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.
     * This logo applies to all terminals of that model under the store unless a different logo is configured for an individual terminal.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getStoresStoreIdTerminalLogos(req: operations.GetStoresStoreIdTerminalLogosRequest, security: operations.GetStoresStoreIdTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.GetStoresStoreIdTerminalLogosResponse>;
    /**
     * Get terminal settings
     *
     * @remarks
     * Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getStoresStoreIdTerminalSettings(req: operations.GetStoresStoreIdTerminalSettingsRequest, security: operations.GetStoresStoreIdTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetStoresStoreIdTerminalSettingsResponse>;
    /**
     * Update the terminal logo
     *
     * @remarks
     * Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
     * This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal.
     *
     * * To change the logo, specify the image file as a Base64-encoded string.
     * * To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchMerchantsMerchantIdStoresReferenceTerminalLogos(req: operations.PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest, security: operations.PatchMerchantsMerchantIdStoresReferenceTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdStoresReferenceTerminalLogosResponse>;
    /**
     * Update terminal settings
     *
     * @remarks
     * Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.
     *
     * * To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
     * * To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
     * * Objects that are not included in the request are not updated.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchMerchantsMerchantIdStoresReferenceTerminalSettings(req: operations.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest, security: operations.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsResponse>;
    /**
     * Update the terminal logo
     *
     * @remarks
     * Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
     * This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal.
     *
     * * To change the logo, specify the image file as a Base64-encoded string.
     * * To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchStoresStoreIdTerminalLogos(req: operations.PatchStoresStoreIdTerminalLogosRequest, security: operations.PatchStoresStoreIdTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.PatchStoresStoreIdTerminalLogosResponse>;
    /**
     * Update terminal settings
     *
     * @remarks
     * Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.
     *
     * * To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
     * * To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
     * * Objects that are not included in the request are not updated.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchStoresStoreIdTerminalSettings(req: operations.PatchStoresStoreIdTerminalSettingsRequest, security: operations.PatchStoresStoreIdTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.PatchStoresStoreIdTerminalSettingsResponse>;
}
