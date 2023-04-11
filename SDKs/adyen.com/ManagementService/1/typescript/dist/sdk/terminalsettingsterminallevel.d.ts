import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalSettingsTerminalLevel {
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
     * Returns the logo that is configured for the payment terminal identified in the path.
     * The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getTerminalsTerminalIdTerminalLogos(req: operations.GetTerminalsTerminalIdTerminalLogosRequest, security: operations.GetTerminalsTerminalIdTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.GetTerminalsTerminalIdTerminalLogosResponse>;
    /**
     * Get terminal settings
     *
     * @remarks
     * Returns the settings that are configured for the payment terminal identified in the path.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read
     * * Management API—Terminal settings read and write
     */
    getTerminalsTerminalIdTerminalSettings(req: operations.GetTerminalsTerminalIdTerminalSettingsRequest, security: operations.GetTerminalsTerminalIdTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTerminalsTerminalIdTerminalSettingsResponse>;
    /**
     * Update the logo
     *
     * @remarks
     * Updates the logo for the payment terminal identified in the path.
     *
     * * To change the logo, specify the image file as a Base64-encoded string.
     * * To restore the logo inherited from a higher level (store, merchant account, or company account), specify an empty logo value.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchTerminalsTerminalIdTerminalLogos(req: operations.PatchTerminalsTerminalIdTerminalLogosRequest, security: operations.PatchTerminalsTerminalIdTerminalLogosSecurity, config?: AxiosRequestConfig): Promise<operations.PatchTerminalsTerminalIdTerminalLogosResponse>;
    /**
     * Update terminal settings
     *
     * @remarks
     * Updates the settings that are configured for the payment terminal identified in the path.
     *
     * * To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
     * * To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
     * * Objects that are not included in the request are not updated.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal settings read and write
     */
    patchTerminalsTerminalIdTerminalSettings(req: operations.PatchTerminalsTerminalIdTerminalSettingsRequest, security: operations.PatchTerminalsTerminalIdTerminalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.PatchTerminalsTerminalIdTerminalSettingsResponse>;
}
