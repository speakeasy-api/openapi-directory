import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAppsAppIdRulesRuleId - Deletes a Reactor rule
    **/
    deleteAppsAppIdRulesRuleId(req: operations.DeleteAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdRulesRuleIdResponse>;
    /**
     * getAppsAppIdRules - Lists Reactor rules
     *
     * Lists the rules for the application specified by the application ID.
    **/
    getAppsAppIdRules(req: operations.GetAppsAppIdRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdRulesResponse>;
    /**
     * getAppsAppIdRulesRuleId - Gets a reactor rule by rule ID
     *
     * Returns the rule specified by the rule ID, for the application specified by application ID.
    **/
    getAppsAppIdRulesRuleId(req: operations.GetAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdRulesRuleIdResponse>;
    /**
     * patchAppsAppIdRulesRuleId - Updates a Reactor rule
    **/
    patchAppsAppIdRulesRuleId(req: operations.PatchAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdRulesRuleIdResponse>;
    /**
     * postAppsAppIdRules - Creates a Reactor rule
     *
     * Creates a rule for the application with the specified application ID.
    **/
    postAppsAppIdRules(req: operations.PostAppsAppIdRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdRulesResponse>;
}
