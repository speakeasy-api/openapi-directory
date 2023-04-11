import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentInstruments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a payment instrument
     *
     * @remarks
     * Returns the details of a payment instrument.
     */
    getPaymentInstrumentsId(req: operations.GetPaymentInstrumentsIdRequest, security: operations.GetPaymentInstrumentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentsIdResponse>;
    /**
     * Get the reveal information of a payment instrument
     *
     * @remarks
     * Returns the reveal information of a payment instrument.
     */
    getPaymentInstrumentsIdReveal(req: operations.GetPaymentInstrumentsIdRevealRequest, security: operations.GetPaymentInstrumentsIdRevealSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentsIdRevealResponse>;
    /**
     * Get all transaction rules for a payment instrument
     *
     * @remarks
     * Returns a list of transaction rules associated with a payment instrument.
     */
    getPaymentInstrumentsIdTransactionRules(req: operations.GetPaymentInstrumentsIdTransactionRulesRequest, security: operations.GetPaymentInstrumentsIdTransactionRulesSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentsIdTransactionRulesResponse>;
    /**
     * Update a payment instrument
     *
     * @remarks
     * Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.
     */
    patchPaymentInstrumentsId(req: operations.PatchPaymentInstrumentsIdRequest, security: operations.PatchPaymentInstrumentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchPaymentInstrumentsIdResponse>;
    /**
     * Create a payment instrument
     *
     * @remarks
     * Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.
     *
     *  For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).
     */
    postPaymentInstruments(req: shared.PaymentInstrumentInfo, security: operations.PostPaymentInstrumentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostPaymentInstrumentsResponse>;
}
