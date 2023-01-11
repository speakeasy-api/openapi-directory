import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OpenBanking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getListOfAspsps - Get list of ASPSPs / Banks
     *
     * Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
     * ***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***
     *
    **/
    getListOfAspsps(req: operations.GetListOfAspspsRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfAspspsResponse>;
    /**
     * getPaymentDetails - Get Payment Details
     *
     * Returns the details of a specific payment.
     *
     * As the customer goes through the process of making the payment the status of the payment will change.
     *
     * * `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
     * * `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
     * * `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
     * * `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
     * * `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
     * * `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.
     *
     *
     * You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.
     *
    **/
    getPaymentDetails(req: operations.GetPaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentDetailsResponse>;
    /**
     * newPaymentRequest - Create a Fire Open Payment request
     *
     * Creates a new Fire Open Payment Payment request. A code is returned that can be shared to your customers as a URL by any channel you wish.
     * You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.
     *
    **/
    newPaymentRequest(req: operations.NewPaymentRequestRequest, config?: AxiosRequestConfig): Promise<operations.NewPaymentRequestResponse>;
}
