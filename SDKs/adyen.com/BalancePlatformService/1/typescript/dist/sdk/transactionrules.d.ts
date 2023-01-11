import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TransactionRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTransactionRulesTransactionRuleId - Delete a transaction rule.
     *
     * Deletes a transaction rule.
    **/
    deleteTransactionRulesTransactionRuleId(req: operations.DeleteTransactionRulesTransactionRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionRulesTransactionRuleIdResponse>;
    /**
     * getTransactionRulesTransactionRuleId - Retrieve a transaction rule.
     *
     * Returns a specific transaction rule.
    **/
    getTransactionRulesTransactionRuleId(req: operations.GetTransactionRulesTransactionRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionRulesTransactionRuleIdResponse>;
    /**
     * patchTransactionRulesTransactionRuleId - Update a transaction rule.
     *
     * Updates a transaction rule.  When updating a transaction rule resource, note that:
     *
     * * When updating only the `status`, you can send only the `status` parameter. All other parameters not provided in the request are left unchanged.
     *
     * * When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, the parameter is removed from the resource.
    **/
    patchTransactionRulesTransactionRuleId(req: operations.PatchTransactionRulesTransactionRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTransactionRulesTransactionRuleIdResponse>;
    /**
     * postTransactionRules - Create a transaction rule.
     *
     * Creates a transaction rule. Transaction rules define conditions to automatically approve or deny transactions. You can apply transaction rules to a specific payment instrument, a group of payment instruments, or to all the payment instruments in your balance platform.
     *
     * For more information on how you can set conditions, refer to [Transaction rules](https://docs.adyen.com/issuing/transaction-rules).
    **/
    postTransactionRules(req: operations.PostTransactionRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionRulesResponse>;
}
