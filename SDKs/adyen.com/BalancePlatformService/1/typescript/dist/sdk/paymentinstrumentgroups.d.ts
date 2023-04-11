import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentInstrumentGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a payment instrument group
     *
     * @remarks
     * Returns the details of a payment instrument group.
     */
    getPaymentInstrumentGroupsId(req: operations.GetPaymentInstrumentGroupsIdRequest, security: operations.GetPaymentInstrumentGroupsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentGroupsIdResponse>;
    /**
     * Get all transaction rules for a payment instrument group
     *
     * @remarks
     * Returns a list of all the transaction rules associated with a payment instrument group.
     */
    getPaymentInstrumentGroupsIdTransactionRules(req: operations.GetPaymentInstrumentGroupsIdTransactionRulesRequest, security: operations.GetPaymentInstrumentGroupsIdTransactionRulesSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInstrumentGroupsIdTransactionRulesResponse>;
    /**
     * Create a payment instrument group
     *
     * @remarks
     * Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.
     */
    postPaymentInstrumentGroups(req: shared.PaymentInstrumentGroupInfo, security: operations.PostPaymentInstrumentGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.PostPaymentInstrumentGroupsResponse>;
}
