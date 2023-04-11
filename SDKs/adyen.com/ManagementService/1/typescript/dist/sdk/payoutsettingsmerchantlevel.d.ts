import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayoutSettingsMerchantLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a payout setting
     *
     * @remarks
     * Deletes the payout setting identified in the path.
     *
     * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     *
     * * Management API—Payout account settings read and write
     */
    deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(req: operations.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, security: operations.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse>;
    /**
     * Get a list of payout settings
     *
     * @remarks
     * Returns the list of payout settings for the merchant account identified in the path.
     *
     * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Payout account settings read
     */
    getMerchantsMerchantIdPayoutSettings(req: operations.GetMerchantsMerchantIdPayoutSettingsRequest, security: operations.GetMerchantsMerchantIdPayoutSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdPayoutSettingsResponse>;
    /**
     * Get a payout setting
     *
     * @remarks
     * Returns the payout setting identified in the path.
     *
     * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Payout account settings read
     */
    getMerchantsMerchantIdPayoutSettingsPayoutSettingsId(req: operations.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, security: operations.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse>;
    /**
     * Update a payout setting
     *
     * @remarks
     * Updates the payout setting identified in the path. You can enable or disable the payout setting.
     *
     * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     *
     * * Management API—Payout account settings read and write
     */
    patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(req: operations.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, security: operations.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse>;
    /**
     * Add a payout setting
     *
     * @remarks
     * Sends a request to add a payout setting for the merchant account specified in the path. A payout setting links the merchant account to the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the payout bank account. Adyen verifies the bank account before allowing and enabling the payout setting.
     *
     * If you're accepting payments in multiple currencies, you may add multiple payout settings for the merchant account.
     *
     * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     *
     * * Management API—Payout account settings read and write
     */
    postMerchantsMerchantIdPayoutSettings(req: operations.PostMerchantsMerchantIdPayoutSettingsRequest, security: operations.PostMerchantsMerchantIdPayoutSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdPayoutSettingsResponse>;
}
