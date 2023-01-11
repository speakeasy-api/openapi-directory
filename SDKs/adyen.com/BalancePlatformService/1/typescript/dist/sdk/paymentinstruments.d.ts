import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentInstruments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPaymentInstrumentsId - Retrieve a payment instrument.
     *
     * Returns a specific payment instrument.
    **/
    getPaymentInstrumentsId(req: operations.GetPaymentInstrumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentsIdResponse>;
    /**
     * getPaymentInstrumentsIdTransactionRules - Retrieve all transaction rules for a specific payment instrument.
     *
     * Returns a list of transaction rules associated to a specific payment instrument.
    **/
    getPaymentInstrumentsIdTransactionRules(req: operations.GetPaymentInstrumentsIdTransactionRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentsIdTransactionRulesResponse>;
    /**
     * patchPaymentInstrumentsId - Update a payment instrument.
     *
     * Updates a specific payment instrument. Once a payment instrument is already active, you can only update the status. However, for cards created with a **Requested** or **Inactive** status, you can still update the balance account associated with the card.
    **/
    patchPaymentInstrumentsId(req: operations.PatchPaymentInstrumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchPaymentInstrumentsIdResponse>;
    /**
     * postPaymentInstruments - Create a payment instrument.
     *
     * Creates a payment instrument, which results in issuing either a physical or a virtual card to your user.
     *
     *  For more information, refer to [Create cards](https://docs.adyen.com/issuing/create-cards).
    **/
    postPaymentInstruments(req: operations.PostPaymentInstrumentsRequest, config?: AxiosRequestConfig): Promise<operations.PostPaymentInstrumentsResponse>;
}
