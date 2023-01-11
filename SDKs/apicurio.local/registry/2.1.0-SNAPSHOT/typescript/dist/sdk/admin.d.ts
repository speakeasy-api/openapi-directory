import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Admin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createGlobalRule - Create global rule
     *
     * Adds a rule to the list of globally configured rules.
     *
     * This operation can fail for the following reasons:
     *
     * * The rule type is unknown (HTTP error `400`)
     * * The rule already exists (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    createGlobalRule(req: operations.CreateGlobalRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateGlobalRuleResponse>;
    /**
     * createRoleMapping - Create a new role mapping
     *
     * Creates a new mapping between a user/principal and a role.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     *
    **/
    createRoleMapping(req: operations.CreateRoleMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoleMappingResponse>;
    /**
     * deleteAllGlobalRules - Delete all global rules
     *
     * Deletes all globally configured rules.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
    **/
    deleteAllGlobalRules(config?: AxiosRequestConfig): Promise<operations.DeleteAllGlobalRulesResponse>;
    /**
     * deleteGlobalRule - Delete global rule
     *
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
    **/
    deleteGlobalRule(req: operations.DeleteGlobalRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGlobalRuleResponse>;
    /**
     * deleteRoleMapping - Delete a role mapping
     *
     * Deletes a single role mapping, effectively denying access to a user/principal.
     *
     * This operation can fail for the following reasons:
     *
     * * No role mapping for the principalId exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    deleteRoleMapping(req: operations.DeleteRoleMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRoleMappingResponse>;
    /**
     * exportData - Export registry data
     *
     * Exports registry data as a ZIP archive.
    **/
    exportData(config?: AxiosRequestConfig): Promise<operations.ExportDataResponse>;
    /**
     * getGlobalRuleConfig - Get global rule configuration
     *
     * Returns information about the named globally configured rule.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    getGlobalRuleConfig(req: operations.GetGlobalRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetGlobalRuleConfigResponse>;
    /**
     * getLogConfiguration - Get a single logger configuration
     *
     * Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.
    **/
    getLogConfiguration(req: operations.GetLogConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetLogConfigurationResponse>;
    /**
     * getRoleMapping - Return a single role mapping
     *
     * Gets the details of a single role mapping (by principalId).
     *
     * This operation can fail for the following reasons:
     *
     * * No role mapping for the principalId exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    getRoleMapping(req: operations.GetRoleMappingRequest, config?: AxiosRequestConfig): Promise<operations.GetRoleMappingResponse>;
    /**
     * importData - Import registry data
     *
     * Imports registry data that was previously exported using the `/admin/export` operation.
    **/
    importData(req: operations.ImportDataRequest, config?: AxiosRequestConfig): Promise<operations.ImportDataResponse>;
    /**
     * listGlobalRules - List global rules
     *
     * Gets a list of all the currently configured global rules (if any).
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
    **/
    listGlobalRules(config?: AxiosRequestConfig): Promise<operations.ListGlobalRulesResponse>;
    /**
     * listLogConfigurations - List logging configurations
     *
     * List all of the configured logging levels.  These override the default
     * logging configuration.
    **/
    listLogConfigurations(config?: AxiosRequestConfig): Promise<operations.ListLogConfigurationsResponse>;
    /**
     * listRoleMappings - List all role mappings
     *
     * Gets a list of all role mappings configured in the registry (if any).
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
    **/
    listRoleMappings(config?: AxiosRequestConfig): Promise<operations.ListRoleMappingsResponse>;
    /**
     * removeLogConfiguration - Removes logger configuration
     *
     * Removes the configured logger configuration (if any) for the given logger.
    **/
    removeLogConfiguration(req: operations.RemoveLogConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLogConfigurationResponse>;
    /**
     * setLogConfiguration - Set a logger's configuration
     *
     * Configures the logger referenced by the provided logger name with the given configuration.
    **/
    setLogConfiguration(req: operations.SetLogConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.SetLogConfigurationResponse>;
    /**
     * updateGlobalRuleConfig - Update global rule configuration
     *
     * Updates the configuration for a globally configured rule.
     *
     * This operation can fail for the following reasons:
     *
     * * Invalid rule name/type (HTTP error `400`)
     * * No rule with name/type `rule` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    updateGlobalRuleConfig(req: operations.UpdateGlobalRuleConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalRuleConfigResponse>;
    /**
     * updateRoleMapping - Update a role mapping
     *
     * Updates a single role mapping for one user/principal.
     *
     * This operation can fail for the following reasons:
     *
     * * No role mapping for the principalId exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    updateRoleMapping(req: operations.UpdateRoleMappingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoleMappingResponse>;
}
