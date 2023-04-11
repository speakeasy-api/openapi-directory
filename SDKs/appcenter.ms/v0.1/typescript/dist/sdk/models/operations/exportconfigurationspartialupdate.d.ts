import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportConfigurationsPartialUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Type of export configuration
 */
export declare enum ExportConfigurationsPartialUpdateRequestBodyTypeEnum {
    BlobStorageConnectionString = "blob_storage_connection_string",
    ApplicationInsightsInstrumentationKey = "application_insights_instrumentation_key",
    BlobStorageLinkedSubscription = "blob_storage_linked_subscription",
    ApplicationInsightsLinkedSubscription = "application_insights_linked_subscription"
}
/**
 * Export configuration
 */
export declare class ExportConfigurationsPartialUpdateRequestBody extends SpeakeasyBase {
    /**
     * Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
     */
    backfill?: boolean;
    exportEntities?: ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum[];
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
    type: ExportConfigurationsPartialUpdateRequestBodyTypeEnum;
}
export declare class ExportConfigurationsPartialUpdateRequest extends SpeakeasyBase {
    /**
     * Export configurations.
     */
    requestBody: ExportConfigurationsPartialUpdateRequestBody;
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
export declare enum ExportConfigurationsPartialUpdateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ExportConfigurationsPartialUpdateDefaultApplicationJSONError extends SpeakeasyBase {
    code: ExportConfigurationsPartialUpdateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ExportConfigurationsPartialUpdateDefaultApplicationJSON extends SpeakeasyBase {
    error: ExportConfigurationsPartialUpdateDefaultApplicationJSONError;
}
export declare enum ExportConfigurationsPartialUpdate200ApplicationJSONExportConfigurationExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Type of export configuration
 */
export declare enum ExportConfigurationsPartialUpdate200ApplicationJSONExportConfigurationTypeEnum {
    BlobStorageConnectionString = "blob_storage_connection_string",
    ApplicationInsightsInstrumentationKey = "application_insights_instrumentation_key",
    BlobStorageLinkedSubscription = "blob_storage_linked_subscription",
    ApplicationInsightsLinkedSubscription = "application_insights_linked_subscription"
}
/**
 * Export configuration
 */
export declare class ExportConfigurationsPartialUpdate200ApplicationJSONExportConfiguration extends SpeakeasyBase {
    /**
     * Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation.
     */
    backfill?: boolean;
    exportEntities?: ExportConfigurationsPartialUpdate200ApplicationJSONExportConfigurationExportEntitiesEnum[];
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
    type: ExportConfigurationsPartialUpdate200ApplicationJSONExportConfigurationTypeEnum;
}
export declare enum ExportConfigurationsPartialUpdate200ApplicationJSONExportEntitiesEnum {
    Crashes = "crashes",
    Errors = "errors",
    Attachments = "attachments",
    NoLogs = "no_logs"
}
/**
 * Target resource type of export configuration
 */
export declare enum ExportConfigurationsPartialUpdate200ApplicationJSONExportTypeEnum {
    BlobStorage = "BlobStorage",
    AppInsights = "AppInsights"
}
/**
 * State of the export job
 */
export declare enum ExportConfigurationsPartialUpdate200ApplicationJSONStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled",
    Pending = "Pending",
    Deleted = "Deleted",
    Invalid = "Invalid"
}
/**
 * Export configuration result
 */
export declare class ExportConfigurationsPartialUpdate200ApplicationJSON extends SpeakeasyBase {
    /**
     * Creation time in ISO 8601 format
     */
    creationTime: string;
    /**
     * Export configuration
     */
    exportConfiguration?: ExportConfigurationsPartialUpdate200ApplicationJSONExportConfiguration;
    exportEntities?: ExportConfigurationsPartialUpdate200ApplicationJSONExportEntitiesEnum[];
    /**
     * Target resource type of export configuration
     */
    exportType: ExportConfigurationsPartialUpdate200ApplicationJSONExportTypeEnum;
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
    state: ExportConfigurationsPartialUpdate200ApplicationJSONStateEnum;
    /**
     * Additional information about export configuration state
     */
    stateInfo?: string;
}
export declare class ExportConfigurationsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Export configuration updated successfully.
     */
    exportConfigurationsPartialUpdate200ApplicationJSONObject?: ExportConfigurationsPartialUpdate200ApplicationJSON;
    /**
     * Error code with reason
     */
    exportConfigurationsPartialUpdateDefaultApplicationJSONObject?: ExportConfigurationsPartialUpdateDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
