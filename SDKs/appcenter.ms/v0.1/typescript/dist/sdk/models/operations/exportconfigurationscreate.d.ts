import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportConfigurationsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum ExportConfigurationsCreateRequestBodyExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Type of export configuration
 */
export declare enum ExportConfigurationsCreateRequestBodyTypeEnum {
    BlobStorageConnectionString = "blob_storage_connection_string",
    ApplicationInsightsInstrumentationKey = "application_insights_instrumentation_key",
    BlobStorageLinkedSubscription = "blob_storage_linked_subscription",
    ApplicationInsightsLinkedSubscription = "application_insights_linked_subscription"
}
/**
 * Export configuration
 */
export declare class ExportConfigurationsCreateRequestBody extends SpeakeasyBase {
    /**
     * Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
     */
    backfill?: boolean;
    exportEntities?: ExportConfigurationsCreateRequestBodyExportEntitiesEnum[];
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
    type: ExportConfigurationsCreateRequestBodyTypeEnum;
}
export declare class ExportConfigurationsCreateRequest extends SpeakeasyBase {
    /**
     * Export configurations.
     */
    requestBody: ExportConfigurationsCreateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ExportConfigurationsCreateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ExportConfigurationsCreateDefaultApplicationJSONError extends SpeakeasyBase {
    code: ExportConfigurationsCreateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ExportConfigurationsCreateDefaultApplicationJSON extends SpeakeasyBase {
    error: ExportConfigurationsCreateDefaultApplicationJSONError;
}
export declare enum ExportConfigurationsCreate202ApplicationJSONExportConfigurationExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Type of export configuration
 */
export declare enum ExportConfigurationsCreate202ApplicationJSONExportConfigurationTypeEnum {
    BlobStorageConnectionString = "blob_storage_connection_string",
    ApplicationInsightsInstrumentationKey = "application_insights_instrumentation_key",
    BlobStorageLinkedSubscription = "blob_storage_linked_subscription",
    ApplicationInsightsLinkedSubscription = "application_insights_linked_subscription"
}
/**
 * Export configuration
 */
export declare class ExportConfigurationsCreate202ApplicationJSONExportConfiguration extends SpeakeasyBase {
    /**
     * Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
     */
    backfill?: boolean;
    exportEntities?: ExportConfigurationsCreate202ApplicationJSONExportConfigurationExportEntitiesEnum[];
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
    type: ExportConfigurationsCreate202ApplicationJSONExportConfigurationTypeEnum;
}
export declare enum ExportConfigurationsCreate202ApplicationJSONExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Target resource type of export configuration
 */
export declare enum ExportConfigurationsCreate202ApplicationJSONExportTypeEnum {
    BlobStorage = "BlobStorage",
    AppInsights = "AppInsights"
}
/**
 * State of the export job
 */
export declare enum ExportConfigurationsCreate202ApplicationJSONStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled",
    Pending = "Pending",
    Deleted = "Deleted",
    Invalid = "Invalid"
}
/**
 * Export configuration result
 */
export declare class ExportConfigurationsCreate202ApplicationJSON extends SpeakeasyBase {
    /**
     * Creation time in ISO 8601 format
     */
    creationTime: string;
    /**
     * Export configuration
     */
    exportConfiguration?: ExportConfigurationsCreate202ApplicationJSONExportConfiguration;
    exportEntities?: ExportConfigurationsCreate202ApplicationJSONExportEntitiesEnum[];
    /**
     * Target resource type of export configuration
     */
    exportType: ExportConfigurationsCreate202ApplicationJSONExportTypeEnum;
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
    state: ExportConfigurationsCreate202ApplicationJSONStateEnum;
    /**
     * Additional information about export configuration state
     */
    stateInfo?: string;
}
export declare class ExportConfigurationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Create export configuration request successfully received.
     */
    exportConfigurationsCreate202ApplicationJSONObject?: ExportConfigurationsCreate202ApplicationJSON;
    /**
     * Error code with reason
     */
    exportConfigurationsCreateDefaultApplicationJSONObject?: ExportConfigurationsCreateDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
