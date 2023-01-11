import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AnalyticsRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createRule - Rule creation
    **/
    createRule(req: operations.CreateRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRuleResponse>;
    /**
     * deleteRule - Delete Rule
    **/
    deleteRule(req: operations.DeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleResponse>;
    /**
     * disableRule - Disable rule
    **/
    disableRule(req: operations.DisableRuleRequest, config?: AxiosRequestConfig): Promise<operations.DisableRuleResponse>;
    /**
     * enableRule - Enable rule
    **/
    enableRule(req: operations.EnableRuleRequest, config?: AxiosRequestConfig): Promise<operations.EnableRuleResponse>;
    /**
     * getRule - Gets the rule
    **/
    getRule(req: operations.GetRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetRuleResponse>;
    /**
     * getRules - Gets the list of rules for a given store
    **/
    getRules(req: operations.GetRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetRulesResponse>;
    /**
     * getRulesExecutions - Get the rules execution history
    **/
    getRulesExecutions(req: operations.GetRulesExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRulesExecutionsResponse>;
    /**
     * moveDownRule - Move the rule down
    **/
    moveDownRule(req: operations.MoveDownRuleRequest, config?: AxiosRequestConfig): Promise<operations.MoveDownRuleResponse>;
    /**
     * moveUpRule - Move the rule up
    **/
    moveUpRule(req: operations.MoveUpRuleRequest, config?: AxiosRequestConfig): Promise<operations.MoveUpRuleResponse>;
    /**
     * runRule - Run rule
    **/
    runRule(req: operations.RunRuleRequest, config?: AxiosRequestConfig): Promise<operations.RunRuleResponse>;
    /**
     * runRules - Run all rules for this store
    **/
    runRules(req: operations.RunRulesRequest, config?: AxiosRequestConfig): Promise<operations.RunRulesResponse>;
    /**
     * updateRule - Update Rule
    **/
    updateRule(req: operations.UpdateRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRuleResponse>;
}
