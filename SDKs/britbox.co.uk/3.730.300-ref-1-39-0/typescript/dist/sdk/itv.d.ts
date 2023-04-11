import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Itv {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activates the discount for a user. Only Stripe platform is currently supported.
     */
    activateSaveOffer(req: operations.ActivateSaveOfferRequest, security: operations.ActivateSaveOfferSecurity, config?: AxiosRequestConfig): Promise<operations.ActivateSaveOfferResponse>;
    /**
     * Change payment card details.
     */
    changeCardDetails(req: operations.ChangeCardDetailsRequest, security: operations.ChangeCardDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ChangeCardDetailsResponse>;
    /**
     * Change email address related to account/profile.
     *
     * The expected token scope is Settings.
     *
     */
    changeEmail(req: operations.ChangeEmailRequest, security: operations.ChangeEmailSecurity, config?: AxiosRequestConfig): Promise<operations.ChangeEmailResponse>;
    /**
     * Change marketing preferences related to account/profile.
     *
     * The expected token scope is Settings.
     *
     */
    changeMarketing(req: operations.ChangeMarketingRequest, security: operations.ChangeMarketingSecurity, config?: AxiosRequestConfig): Promise<operations.ChangeMarketingResponse>;
    /**
     * Check whether the user has been previously entitled.
     */
    checkPreviousEntitlements(req: operations.CheckPreviousEntitlementsRequest, security: operations.CheckPreviousEntitlementsSecurity, config?: AxiosRequestConfig): Promise<operations.CheckPreviousEntitlementsResponse>;
    /**
     * Validates the coupon/voucher for specified payment platform.
     */
    checkVoucher(req: operations.CheckVoucherRequest, security: operations.CheckVoucherSecurity, config?: AxiosRequestConfig): Promise<operations.CheckVoucherResponse>;
    /**
     * Confirms purchase and returns the details of purchased subscription for specified payment platform.
     */
    confirmPurchase(req: operations.ConfirmPurchaseRequest, security: operations.ConfirmPurchaseSecurity, config?: AxiosRequestConfig): Promise<operations.ConfirmPurchaseResponse>;
    /**
     * Confirms purchase and returns the details of purchased subscription for specified payment platform.
     */
    confirmPurchaseStrong(req: operations.ConfirmPurchaseStrongRequest, security: operations.ConfirmPurchaseStrongSecurity, config?: AxiosRequestConfig): Promise<operations.ConfirmPurchaseStrongResponse>;
    /**
     * Confirms purchase and returns the details of purchased subscription for specified payment platform.
     */
    confirmPurchaseWithOffer(req: operations.ConfirmPurchaseWithOfferRequest, security: operations.ConfirmPurchaseWithOfferSecurity, config?: AxiosRequestConfig): Promise<operations.ConfirmPurchaseWithOfferResponse>;
    /**
     * Delete account in compliance with GDPR.
     *
     * The expected token scope is Settings.
     *
     */
    deleteAccount(req: operations.DeleteAccountRequest, security: operations.DeleteAccountSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAccountResponse>;
    /**
     * Cancel a plan subscription.
     *
     * A cancelled subscription will continue to be valid until the subscription
     * expiry date or next renewal date.
     *
     */
    deleteItvPurchasePlatform(req: operations.DeleteItvPurchasePlatformRequest, security: operations.DeleteItvPurchasePlatformSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteItvPurchasePlatformResponse>;
    /**
     * Sends request to execute specified transaction.
     */
    executeTransaction(req: operations.ExecuteTransactionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteTransactionResponse>;
    /**
     * Provides authorization with parental control pin.
     *
     * Returns an array containing account token with Playback scope.
     *
     * Requires access token with Catalog scope.
     *
     * Pin must be a 4-digit string
     *
     */
    getAccountTokenWithPin(req: operations.GetAccountTokenWithPinRequest, security: operations.GetAccountTokenWithPinSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountTokenWithPinResponse>;
    /**
     * Returns the list of billing records for specified payment platform.
     */
    getBillingHistory(req: operations.GetBillingHistoryRequest, security: operations.GetBillingHistorySecurity, config?: AxiosRequestConfig): Promise<operations.GetBillingHistoryResponse>;
    /**
     * Get payment card details.
     */
    getCardDetails(req: operations.GetCardDetailsRequest, security: operations.GetCardDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCardDetailsResponse>;
    /**
     * Returns current entitlement.
     */
    getCurrentEntitlement(req: operations.GetCurrentEntitlementRequest, security: operations.GetCurrentEntitlementSecurity, config?: AxiosRequestConfig): Promise<operations.GetCurrentEntitlementResponse>;
    /**
     * Returns the details of current subscription for specified payment platform.
     */
    getCurrentSubscription(req: operations.GetCurrentSubscriptionRequest, security: operations.GetCurrentSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.GetCurrentSubscriptionResponse>;
    /**
     * Returns the state of subscription for any payment platform.
     */
    getEntitlementsHistory(req: operations.GetEntitlementsHistoryRequest, security: operations.GetEntitlementsHistorySecurity, config?: AxiosRequestConfig): Promise<operations.GetEntitlementsHistoryResponse>;
    /**
     * Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.
     */
    getFeatureFlag(req: operations.GetFeatureFlagRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureFlagResponse>;
    /**
     * Returns full price renewal state and reason for specific user.
     */
    getFullPriceRenewal(req: operations.GetFullPriceRenewalRequest, security: operations.GetFullPriceRenewalSecurity, config?: AxiosRequestConfig): Promise<operations.GetFullPriceRenewalResponse>;
    /**
     * Returns the ITV profile token.
     */
    getItvProfileToken(req: operations.GetItvProfileTokenRequest, security: operations.GetItvProfileTokenSecurity, config?: AxiosRequestConfig): Promise<operations.GetItvProfileTokenResponse>;
    /**
     * Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
     * There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.
     *
     */
    getPublicPreview(config?: AxiosRequestConfig): Promise<operations.GetPublicPreviewResponse>;
    /**
     * Get the list of recommended items under the active profile.
     */
    getRecommendedList(req: operations.GetRecommendedListRequest, security: operations.GetRecommendedListSecurity, config?: AxiosRequestConfig): Promise<operations.GetRecommendedListResponse>;
    /**
     * Checks the provided coupon id for a user. Only Stripe platform is currently supported.
     */
    getSaveOffer(req: operations.GetSaveOfferRequest, security: operations.GetSaveOfferSecurity, config?: AxiosRequestConfig): Promise<operations.GetSaveOfferResponse>;
    /**
     * Returns the state of subscription for any payment platform.
     */
    getSubscriptionState(req: operations.GetSubscriptionStateRequest, security: operations.GetSubscriptionStateSecurity, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionStateResponse>;
    /**
     * Returns status of latest payment intent.
     */
    getSubscriptionStatus(req: operations.GetSubscriptionStatusRequest, security: operations.GetSubscriptionStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionStatusResponse>;
    /**
     * Returns an upcoming invoice
     */
    getUpcomingInvoice(req: operations.GetUpcomingInvoiceRequest, security: operations.GetUpcomingInvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.GetUpcomingInvoiceResponse>;
    /**
     * Checks the provided coupon id for a user. Only Stripe platform is currently supported.
     */
    getVoucherById(req: operations.GetVoucherByIdRequest, security: operations.GetVoucherByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetVoucherByIdResponse>;
    /**
     * Redirects to corresponding Axis Item details page.
     */
    getItvItemsummaryExternalId(req: operations.GetItvItemsummaryExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItvItemsummaryExternalIdResponse>;
    /**
     * Returns the plans available for specified payment platform.
     */
    getItvPlansPlatform(req: operations.GetItvPlansPlatformRequest, security: operations.GetItvPlansPlatformSecurity, config?: AxiosRequestConfig): Promise<operations.GetItvPlansPlatformResponse>;
    /**
     * Returns the ITV profile object.
     */
    getItvProfile(req: operations.GetItvProfileRequest, security: operations.GetItvProfileSecurity, config?: AxiosRequestConfig): Promise<operations.GetItvProfileResponse>;
    /**
     * Gets available Roku plans.
     */
    getItvRokuPlans(req: operations.GetItvRokuPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetItvRokuPlansResponse>;
    /**
     * Get the list of recommended items under the active profile.
     */
    googlePaySubscription(req: operations.GooglePaySubscriptionRequest, security: operations.GooglePaySubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.GooglePaySubscriptionResponse>;
    /**
     * Resubscription for a user.
     */
    resubscribe(req: operations.ResubscribeRequest, security: operations.ResubscribeSecurity, config?: AxiosRequestConfig): Promise<operations.ResubscribeResponse>;
    /**
     * Change payment method details.
     */
    updatePaymentIntentStrong(req: operations.UpdatePaymentIntentStrongRequest, security: operations.UpdatePaymentIntentStrongSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentIntentStrongResponse>;
    /**
     * Change payment method details.
     */
    updatePaymentMethodStrong(req: operations.UpdatePaymentMethodStrongRequest, security: operations.UpdatePaymentMethodStrongSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentMethodStrongResponse>;
    /**
     * Update ITV profile.
     *
     * The expected token scope is Settings.
     *
     */
    updateProfile(req: operations.UpdateProfileRequest, security: operations.UpdateProfileSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
    /**
     * Upgrades the plan for the current user.
     */
    upgradePlan(req: operations.UpgradePlanRequest, security: operations.UpgradePlanSecurity, config?: AxiosRequestConfig): Promise<operations.UpgradePlanResponse>;
}
