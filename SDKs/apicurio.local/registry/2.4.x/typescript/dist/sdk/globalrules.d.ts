import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Global rules can be configured in the registry to govern how artifact content can
 *
 * @remarks
 * evolve over time (as artifact content is **updated**). Global rules are applied
 * whenever an artifact is added to the registry, and also whenever an artifact's
 * content is updated (only if that artifact does not have its own specific rules
 * configured). This section describes the operations used to manage the global rules.
 */
export declare class GlobalRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create global rule
     *
     * @remarks
     * Adds a rule to the list of globally configured rules.
     *
     * This operation can fail for the following reasons:
     *
     * * The rule type is unknown (HTTP error `400`)
     * * The rule already exists (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    createGlobalRule(req: shared.Rule, config?: AxiosRequestConfig): Promise<operations.CreateGlobalRuleResponse>;
    /**
     * Delete all global rules
     *
     * @remarks
     * Deletes all globally configured rules.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     */
    deleteAllGlobalRules(config?: AxiosRequestConfig): Promise<operations.DeleteAllGlobalRulesResponse>;
    /**
     * Delete global rule
     *
     * @remarks
     * Deletes a single global rule.  If this is the only rule configured, this is the same
     * as deleting **all** rules.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * Rule cannot be deleted (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    deleteGlobalRule(req: operations.DeleteGlobalRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGlobalRuleResponse>;
    /**
     * Get global rule configuration
     *
     * @remarks
     * Returns information about the named globally configured rule.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getGlobalRuleConfig(req: operations.GetGlobalRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetGlobalRuleConfigResponse>;
    /**
     * List global rules
     *
     * @remarks
     * Gets a list of all the currently configured global rules (if any).
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     */
    listGlobalRules(config?: AxiosRequestConfig): Promise<operations.ListGlobalRulesResponse>;
    /**
     * Update global rule configuration
     *
     * @remarks
     * Updates the configuration for a globally configured rule.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    updateGlobalRuleConfig(req: operations.UpdateGlobalRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalRuleConfigResponse>;
}
