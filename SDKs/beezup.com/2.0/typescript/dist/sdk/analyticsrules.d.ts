import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AnalyticsRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Rule creation
     */
    createRule(req: operations.CreateRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRuleResponse>;
    /**
     * Delete Rule
     */
    deleteRule(req: operations.DeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleResponse>;
    /**
     * Disable rule
     */
    disableRule(req: operations.DisableRuleRequest, config?: AxiosRequestConfig): Promise<operations.DisableRuleResponse>;
    /**
     * Enable rule
     */
    enableRule(req: operations.EnableRuleRequest, config?: AxiosRequestConfig): Promise<operations.EnableRuleResponse>;
    /**
     * Gets the rule
     */
    getRule(req: operations.GetRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetRuleResponse>;
    /**
     * Gets the list of rules for a given store
     */
    getRules(req: operations.GetRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetRulesResponse>;
    /**
     * Get the rules execution history
     */
    getRulesExecutions(req: operations.GetRulesExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRulesExecutionsResponse>;
    /**
     * Move the rule down
     */
    moveDownRule(req: operations.MoveDownRuleRequest, config?: AxiosRequestConfig): Promise<operations.MoveDownRuleResponse>;
    /**
     * Move the rule up
     */
    moveUpRule(req: operations.MoveUpRuleRequest, config?: AxiosRequestConfig): Promise<operations.MoveUpRuleResponse>;
    /**
     * Run rule
     */
    runRule(req: operations.RunRuleRequest, config?: AxiosRequestConfig): Promise<operations.RunRuleResponse>;
    /**
     * Run all rules for this store
     */
    runRules(req: operations.RunRulesRequest, config?: AxiosRequestConfig): Promise<operations.RunRulesResponse>;
    /**
     * Update Rule
     */
    updateRule(req: operations.UpdateRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRuleResponse>;
}
