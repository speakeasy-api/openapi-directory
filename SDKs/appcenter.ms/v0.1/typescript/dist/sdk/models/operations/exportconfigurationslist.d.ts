import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportConfigurationsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ExportConfigurationsListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ExportConfigurationsListDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ExportConfigurationsListDefaultApplicationJSONError extends SpeakeasyBase {
    code: ExportConfigurationsListDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ExportConfigurationsListDefaultApplicationJSON extends SpeakeasyBase {
    error: ExportConfigurationsListDefaultApplicationJSONError;
}
export declare enum ExportConfigurationsList200ApplicationJSONValuesExportConfigurationExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Type of export configuration
 */
export declare enum ExportConfigurationsList200ApplicationJSONValuesExportConfigurationTypeEnum {
    BlobStorageConnectionString = "blob_storage_connection_string",
    ApplicationInsightsInstrumentationKey = "application_insights_instrumentation_key",
    BlobStorageLinkedSubscription = "blob_storage_linked_subscription",
    ApplicationInsightsLinkedSubscription = "application_insights_linked_subscription"
}
/**
 * Export configuration
 */
export declare class ExportConfigurationsList200ApplicationJSONValuesExportConfiguration extends SpeakeasyBase {
    /**
     * Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
     */
    backfill?: boolean;
    exportEntities?: ExportConfigurationsList200ApplicationJSONValuesExportConfigurationExportEntitiesEnum[];
    /**
     * The resource group name on azure
     */
    resourceGroup?: string;
    /**
     * The resource name on azure
     */
    resourceName?: string;
    /**
     * Type of export configuration
     */
    type: ExportConfigurationsList200ApplicationJSONValuesExportConfigurationTypeEnum;
}
export declare enum ExportConfigurationsList200ApplicationJSONValuesExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Target resource type of export configuration
 */
export declare enum ExportConfigurationsList200ApplicationJSONValuesExportTypeEnum {
    BlobStorage = "BlobStorage",
    AppInsights = "AppInsights"
}
/**
 * State of the export job
 */
export declare enum ExportConfigurationsList200ApplicationJSONValuesStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled",
    Pending = "Pending",
    Deleted = "Deleted",
    Invalid = "Invalid"
}
/**
 * Export configuration result
 */
export declare class ExportConfigurationsList200ApplicationJSONValues extends SpeakeasyBase {
    /**
     * Creation time in ISO 8601 format
     */
    creationTime: string;
    /**
     * Export configuration
     */
    exportConfiguration?: ExportConfigurationsList200ApplicationJSONValuesExportConfiguration;
    exportEntities?: ExportConfigurationsList200ApplicationJSONValuesExportEntitiesEnum[];
    /**
     * Target resource type of export configuration
     */
    exportType: ExportConfigurationsList200ApplicationJSONValuesExportTypeEnum;
    /**
     * Export configuration id
     */
    id: string;
    /**
     * Latest time in ISO 8601 format when export completed successfully
     */
    lastRunTime?: string;
    /**
     * resource group for the storage account/App Insights resource
     */
    resourceGroup?: string;
    /**
     * Storage accout or Appinsights resource name
     */
    resourceName?: string;
    /**
     * State of the export job
     */
    state: ExportConfigurationsList200ApplicationJSONValuesStateEnum;
    /**
     * Additional information about export configuration state
     */
    stateInfo?: string;
}
/**
 * List of export configurations
 */
export declare class ExportConfigurationsList200ApplicationJSON extends SpeakeasyBase {
    nextLink?: string;
    /**
     * the total count of exports
     */
    total?: number;
    values: ExportConfigurationsList200ApplicationJSONValues[];
}
export declare class ExportConfigurationsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List export configurations.
     */
    exportConfigurationsList200ApplicationJSONObject?: ExportConfigurationsList200ApplicationJSON;
    /**
     * Error code with reason
     */
    exportConfigurationsListDefaultApplicationJSONObject?: ExportConfigurationsListDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
