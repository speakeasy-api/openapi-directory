import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Application functionality that is only accessible to admin users.  Includes logging, global rules, and export/import of registry data.
 */
export declare class Admin {
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
     * Create a new role mapping
     *
     * @remarks
     * Creates a new mapping between a user/principal and a role.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     *
     */
    createRoleMapping(req: shared.RoleMapping, config?: AxiosRequestConfig): Promise<operations.CreateRoleMappingResponse>;
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
     * Delete a role mapping
     *
     * @remarks
     * Deletes a single role mapping, effectively denying access to a user/principal.
     *
     * This operation can fail for the following reasons:
     *
     * * No role mapping for the principalId exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    deleteRoleMapping(req: operations.DeleteRoleMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRoleMappingResponse>;
    /**
     * Export registry data
     *
     * @remarks
     * Exports registry data as a ZIP archive.
     */
    exportData(req: operations.ExportDataRequest, config?: AxiosRequestConfig): Promise<operations.ExportDataResponse>;
    /**
     * Get configuration property value
     *
     * @remarks
     * Returns the value of a single configuration property.
     *
     * This operation may fail for one of the following reasons:
     *
     * * Property not found or not configured (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getConfigProperty(req: operations.GetConfigPropertyRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigPropertyResponse>;
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
     * Get a single logger configuration
     *
     * @remarks
     * Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.
     */
    getLogConfiguration(req: operations.GetLogConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetLogConfigurationResponse>;
    /**
     * Return a single role mapping
     *
     * @remarks
     * Gets the details of a single role mapping (by `principalId`).
     *
     * This operation can fail for the following reasons:
     *
     * * No role mapping for the `principalId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    getRoleMapping(req: operations.GetRoleMappingRequest, config?: AxiosRequestConfig): Promise<operations.GetRoleMappingResponse>;
    /**
     * Import registry data
     *
     * @remarks
     * Imports registry data that was previously exported using the `/admin/export` operation.
     */
    importData(req: operations.ImportDataRequest, config?: AxiosRequestConfig): Promise<operations.ImportDataResponse>;
    /**
     * List artifact types
     *
     * @remarks
     * Gets a list of all the configured artifact types.
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     */
    listArtifactTypes(config?: AxiosRequestConfig): Promise<operations.ListArtifactTypesResponse>;
    /**
     * List all configuration properties
     *
     * @remarks
     * Returns a list of all configuration properties that have been set.  The list is not paged.
     *
     * This operation may fail for one of the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     */
    listConfigProperties(config?: AxiosRequestConfig): Promise<operations.ListConfigPropertiesResponse>;
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
     * List logging configurations
     *
     * @remarks
     * List all of the configured logging levels.  These override the default
     * logging configuration.
     */
    listLogConfigurations(config?: AxiosRequestConfig): Promise<operations.ListLogConfigurationsResponse>;
    /**
     * List all role mappings
     *
     * @remarks
     * Gets a list of all role mappings configured in the registry (if any).
     *
     * This operation can fail for the following reasons:
     *
     * * A server error occurred (HTTP error `500`)
     *
     */
    listRoleMappings(config?: AxiosRequestConfig): Promise<operations.ListRoleMappingsResponse>;
    /**
     * Removes logger configuration
     *
     * @remarks
     * Removes the configured logger configuration (if any) for the given logger.
     */
    removeLogConfiguration(req: operations.RemoveLogConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLogConfigurationResponse>;
    /**
     * Reset a configuration property
     *
     * @remarks
     * Resets the value of a single configuration property.  This will return the property to
     * its default value (see external documentation for supported properties and their default
     * values).
     *
     * This operation may fail for one of the following reasons:
     *
     * * Property not found or not configured (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    resetConfigProperty(req: operations.ResetConfigPropertyRequest, config?: AxiosRequestConfig): Promise<operations.ResetConfigPropertyResponse>;
    /**
     * Set a logger's configuration
     *
     * @remarks
     * Configures the logger referenced by the provided logger name with the given configuration.
     */
    setLogConfiguration(req: operations.SetLogConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.SetLogConfigurationResponse>;
    /**
     * Update a configuration property
     *
     * @remarks
     * Updates the value of a single configuration property.
     *
     * This operation may fail for one of the following reasons:
     *
     * * Property not found or not configured (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    updateConfigProperty(req: operations.UpdateConfigPropertyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigPropertyResponse>;
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
    /**
     * Update a role mapping
     *
     * @remarks
     * Updates a single role mapping for one user/principal.
     *
     * This operation can fail for the following reasons:
     *
     * * No role mapping for the principalId exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     */
    updateRoleMapping(req: operations.UpdateRoleMappingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoleMappingResponse>;
}
