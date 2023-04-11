import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Disable stored payment details
     *
     * @remarks
     * Disables stored payment details to stop charging a shopper with this particular recurring detail ID.
     *
     * For more information, refer to [Disable stored details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).
     */
    postDisable(req: shared.DisableRequest, security: operations.PostDisableSecurity, config?: AxiosRequestConfig): Promise<operations.PostDisableResponse>;
    /**
     * Get stored payment details
     *
     * @remarks
     * Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.
     *
     * For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).
     */
    postListRecurringDetails(req: shared.RecurringDetailsRequest, security: operations.PostListRecurringDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PostListRecurringDetailsResponse>;
    /**
     * Ask issuer to notify the shopper
     *
     * @remarks
     * Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).
     */
    postNotifyShopper(req: shared.NotifyShopperRequest, security: operations.PostNotifyShopperSecurity, config?: AxiosRequestConfig): Promise<operations.PostNotifyShopperResponse>;
    /**
     * Schedule running the Account Updater
     *
     * @remarks
     * When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:
     * * If the card information is provided, all the sub-fields for `card` are mandatory.
     * * If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.
     */
    postScheduleAccountUpdater(req: shared.ScheduleAccountUpdaterRequest, security: operations.PostScheduleAccountUpdaterSecurity, config?: AxiosRequestConfig): Promise<operations.PostScheduleAccountUpdaterResponse>;
}
