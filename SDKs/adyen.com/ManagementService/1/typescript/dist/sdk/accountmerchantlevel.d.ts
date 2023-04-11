import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountMerchantLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of merchant accounts
     *
     * @remarks
     * Returns the list of merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Account read
     */
    getMerchants(req: operations.GetMerchantsRequest, security: operations.GetMerchantsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsResponse>;
    /**
     * Get a merchant account
     *
     * @remarks
     * Returns the merchant account specified in the path. Your API credential must have access to the merchant account.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Account read
     */
    getMerchantsMerchantId(req: operations.GetMerchantsMerchantIdRequest, security: operations.GetMerchantsMerchantIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdResponse>;
    /**
     * Create a merchant account
     *
     * @remarks
     * Creates a merchant account for the company account specified in the request.
     *
     * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Accounts read and write
     */
    postMerchants(req: shared.CreateMerchantRequest, security: operations.PostMerchantsSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsResponse>;
    /**
     * Request to activate a merchant account
     *
     * @remarks
     * Sends a request to activate the merchant account identified in the path.
     *
     * You get the result of the activation asychronously through a [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated) webhook. Once the merchant account is activated, you can start using it to accept payments and payouts.
     *
     * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Accounts read and write
     */
    postMerchantsMerchantIdActivate(req: operations.PostMerchantsMerchantIdActivateRequest, security: operations.PostMerchantsMerchantIdActivateSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdActivateResponse>;
}
