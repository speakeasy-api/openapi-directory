import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentInstrumentGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPaymentInstrumentGroupsId - Retrieve a payment instrument group.
     *
     * Returns a specific payment instrument group.
    **/
    getPaymentInstrumentGroupsId(req: operations.GetPaymentInstrumentGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentGroupsIdResponse>;
    /**
     * getPaymentInstrumentGroupsIdTransactionRules - Retrieve all transaction rules for a specific payment instruments group.
     *
     * Returns a list of all the transaction rules associated with a specific payment instrument group.
    **/
    getPaymentInstrumentGroupsIdTransactionRules(req: operations.GetPaymentInstrumentGroupsIdTransactionRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentGroupsIdTransactionRulesResponse>;
    /**
     * postPaymentInstrumentGroups - Create a payment instrument group.
     *
     * Creates a payment instrument group, which you use to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.
    **/
    postPaymentInstrumentGroups(req: operations.PostPaymentInstrumentGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostPaymentInstrumentGroupsResponse>;
}
