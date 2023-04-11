import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalSettingsCompanyLevel {
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
     * Returns the logo that is configured for a specific payment terminal model at the company identified in the path.
     *
     * The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.
     * This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal).
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getCompaniesCompanyIdTerminalLogos(req: operations.GetCompaniesCompanyIdTerminalLogosRequest, security: operations.GetCompaniesCompanyIdTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdTerminalLogosResponse>;
    /**
     * Get terminal settings
     *
     * @remarks
     * Returns the payment terminal settings that are configured for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     *
     * For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
     * * Management API—Terminal settings Advanced read and write
     */
    getCompaniesCompanyIdTerminalSettings(req: operations.GetCompaniesCompanyIdTerminalSettingsRequest, security: operations.GetCompaniesCompanyIdTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdTerminalSettingsResponse>;
    /**
     * Update the terminal logo
     *
     * @remarks
     * Updates the logo that is configured for a specific payment terminal model at the company identified in the path. You can update the logo for only one terminal model at a time.
     * This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal).
     * * To change the logo, specify the image file as a Base64-encoded string.
     * * To restore the logo inherited from the Adyen PSP level, specify an empty logo value.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchCompaniesCompanyIdTerminalLogos(req: operations.PatchCompaniesCompanyIdTerminalLogosRequest, security: operations.PatchCompaniesCompanyIdTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.PatchCompaniesCompanyIdTerminalLogosResponse>;
    /**
     * Update terminal settings
     *
     * @remarks
     * Updates payment terminal settings for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).
     *
     * * To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
     * * To restore a parameter value inherited from the Adyen PSP level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
     * * Objects that are not included in the request are not updated.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchCompaniesCompanyIdTerminalSettings(req: operations.PatchCompaniesCompanyIdTerminalSettingsRequest, security: operations.PatchCompaniesCompanyIdTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.PatchCompaniesCompanyIdTerminalSettingsResponse>;
}
