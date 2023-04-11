import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TransactionRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a transaction rule
     *
     * @remarks
     * Deletes a transaction rule.
     */
    deleteTransactionRulesTransactionRuleId(req: operations.DeleteTransactionRulesTransactionRuleIdRequest, security: operations.DeleteTransactionRulesTransactionRuleIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionRulesTransactionRuleIdResponse>;
    /**
     * Get a transaction rule
     *
     * @remarks
     * Returns the details of a transaction rule.
     */
    getTransactionRulesTransactionRuleId(req: operations.GetTransactionRulesTransactionRuleIdRequest, security: operations.GetTransactionRulesTransactionRuleIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetTransactionRulesTransactionRuleIdResponse>;
    /**
     * Update a transaction rule
     *
     * @remarks
     * Updates a transaction rule.
     *
     * * To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.
     *
     * * When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.
     */
    patchTransactionRulesTransactionRuleId(req: operations.PatchTransactionRulesTransactionRuleIdRequest, security: operations.PatchTransactionRulesTransactionRuleIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchTransactionRulesTransactionRuleIdResponse>;
    /**
     * Create a transaction rule
     *
     * @remarks
     * Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).
     */
    postTransactionRules(req: shared.TransactionRuleInfo, security: operations.PostTransactionRulesSecurity, config?: AxiosRequestConfig): Promise<operations.PostTransactionRulesResponse>;
}
