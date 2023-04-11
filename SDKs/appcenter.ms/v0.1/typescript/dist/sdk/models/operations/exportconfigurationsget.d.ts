import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportConfigurationsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ExportConfigurationsGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the export configuration.
     */
    exportConfigurationId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ExportConfigurationsGetDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ExportConfigurationsGetDefaultApplicationJSONError extends SpeakeasyBase {
    code: ExportConfigurationsGetDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ExportConfigurationsGetDefaultApplicationJSON extends SpeakeasyBase {
    error: ExportConfigurationsGetDefaultApplicationJSONError;
}
export declare enum ExportConfigurationsGet200ApplicationJSONExportConfigurationExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Type of export configuration
 */
export declare enum ExportConfigurationsGet200ApplicationJSONExportConfigurationTypeEnum {
    BlobStorageConnectionString = "blob_storage_connection_string",
    ApplicationInsightsInstrumentationKey = "application_insights_instrumentation_key",
    BlobStorageLinkedSubscription = "blob_storage_linked_subscription",
    ApplicationInsightsLinkedSubscription = "application_insights_linked_subscription"
}
/**
 * Export configuration
 */
export declare class ExportConfigurationsGet200ApplicationJSONExportConfiguration extends SpeakeasyBase {
    /**
     * Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
     */
    backfill?: boolean;
    exportEntities?: ExportConfigurationsGet200ApplicationJSONExportConfigurationExportEntitiesEnum[];
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
    type: ExportConfigurationsGet200ApplicationJSONExportConfigurationTypeEnum;
}
export declare enum ExportConfigurationsGet200ApplicationJSONExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Target resource type of export configuration
 */
export declare enum ExportConfigurationsGet200ApplicationJSONExportTypeEnum {
    BlobStorage = "BlobStorage",
    AppInsights = "AppInsights"
}
/**
 * State of the export job
 */
export declare enum ExportConfigurationsGet200ApplicationJSONStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled",
    Pending = "Pending",
    Deleted = "Deleted",
    Invalid = "Invalid"
}
/**
 * Export configuration result
 */
export declare class ExportConfigurationsGet200ApplicationJSON extends SpeakeasyBase {
    /**
     * Creation time in ISO 8601 format
     */
    creationTime: string;
    /**
     * Export configuration
     */
    exportConfiguration?: ExportConfigurationsGet200ApplicationJSONExportConfiguration;
    exportEntities?: ExportConfigurationsGet200ApplicationJSONExportEntitiesEnum[];
    /**
     * Target resource type of export configuration
     */
    exportType: ExportConfigurationsGet200ApplicationJSONExportTypeEnum;
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
    state: ExportConfigurationsGet200ApplicationJSONStateEnum;
    /**
     * Additional information about export configuration state
     */
    stateInfo?: string;
}
export declare class ExportConfigurationsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Get export configuration.
     */
    exportConfigurationsGet200ApplicationJSONObject?: ExportConfigurationsGet200ApplicationJSON;
    /**
     * Error code with reason
     */
    exportConfigurationsGetDefaultApplicationJSONObject?: ExportConfigurationsGetDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
