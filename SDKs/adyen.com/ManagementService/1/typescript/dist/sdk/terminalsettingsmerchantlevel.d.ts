import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalSettingsMerchantLevel {
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
     * Returns the logo that is configured for a specific payment terminal model at the merchant account identified in the path.
     * The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.
     * This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getMerchantsMerchantIdTerminalLogos(req: operations.GetMerchantsMerchantIdTerminalLogosRequest, security: operations.GetMerchantsMerchantIdTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdTerminalLogosResponse>;
    /**
     * Get terminal settings
     *
     * @remarks
     * Returns the payment terminal settings that are configured for the merchant account identified in the path. These settings apply to all terminals under the merchant account unless different values are configured at a lower level (store or individual terminal).
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getMerchantsMerchantIdTerminalSettings(req: operations.GetMerchantsMerchantIdTerminalSettingsRequest, security: operations.GetMerchantsMerchantIdTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdTerminalSettingsResponse>;
    /**
     * Update the terminal logo
     *
     * @remarks
     * Updates the logo for a specific payment terminal model at the merchant account identified in the path. You can update the logo for only one terminal model at a time.
     * This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).
     *
     * * To change the logo, specify the image file as a Base64-encoded string.
     * * To restore the logo inherited from the company account, specify an empty logo value.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchMerchantsMerchantIdTerminalLogos(req: operations.PatchMerchantsMerchantIdTerminalLogosRequest, security: operations.PatchMerchantsMerchantIdTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdTerminalLogosResponse>;
    /**
     * Update terminal settings
     *
     * @remarks
     * Updates payment terminal settings for the merchant account identified in the path.
     * These settings apply to all terminals under the merchant account, unless different values are configured at a lower level (store or individual terminal).
     *
     * * To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
     * * To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
     * * Objects that are not included in the request are not updated.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchMerchantsMerchantIdTerminalSettings(req: operations.PatchMerchantsMerchantIdTerminalSettingsRequest, security: operations.PatchMerchantsMerchantIdTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdTerminalSettingsResponse>;
}
