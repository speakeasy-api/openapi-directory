import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentMethodsMerchantLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all payment methods
     *
     * @remarks
     * Returns details for all payment methods of the merchant account identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Payment methods read
     *
     */
    getMerchantsMerchantIdPaymentMethodSettings(req: operations.GetMerchantsMerchantIdPaymentMethodSettingsRequest, security: operations.GetMerchantsMerchantIdPaymentMethodSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdPaymentMethodSettingsResponse>;
    /**
     * Get payment method details
     *
     * @remarks
     * Returns details for the merchant account and the payment method identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Payment methods read
     *
     */
    getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(req: operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest, security: operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdResponse>;
    /**
     * Get Apple Pay domains
     *
     * @remarks
     * Returns all Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Payment methods read
     *
     */
    getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(req: operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest, security: operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsResponse>;
    /**
     * Update a payment method
     *
     * @remarks
     * Updates payment method details for the merchant account and the payment method identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Payment methods read and write
     *
     */
    patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(req: operations.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest, security: operations.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdResponse>;
    /**
     * Request a payment method
     *
     * @remarks
     * Sends a request to add a new payment method to the merchant account identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Payment methods read and write
     *
     */
    postMerchantsMerchantIdPaymentMethodSettings(req: operations.PostMerchantsMerchantIdPaymentMethodSettingsRequest, security: operations.PostMerchantsMerchantIdPaymentMethodSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdPaymentMethodSettingsResponse>;
    /**
     * Add an Apple Pay domain
     *
     * @remarks
     * Adds the new domain to the list of Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Payment methods read and write
     *
     */
    postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(req: operations.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest, security: operations.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsResponse>;
}
