import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsCreateOrUpdateAudienceSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    DateTime = "date_time"
}
/**
 * Audience definition.
 */
export declare class AnalyticsCreateOrUpdateAudienceRequestBody extends SpeakeasyBase {
    /**
     * Custom properties used in the definition.
     */
    customProperties?: Record<string, AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnum>;
    /**
     * Audience definition in OData format.
     */
    definition: string;
    /**
     * Audience description.
     */
    description?: string;
    enabled?: boolean;
}
export declare class AnalyticsCreateOrUpdateAudienceRequest extends SpeakeasyBase {
    /**
     * Audience definition
     */
    requestBody: AnalyticsCreateOrUpdateAudienceRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the audience
     */
    audienceName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AnalyticsCreateOrUpdateAudienceDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsCreateOrUpdateAudienceDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsCreateOrUpdateAudienceDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsCreateOrUpdateAudienceDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsCreateOrUpdateAudienceDefaultApplicationJSONError;
}
export declare enum AnalyticsCreateOrUpdateAudience200ApplicationJSONCustomPropertiesEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    DateTime = "date_time"
}
/**
 * Audience state.
 */
export declare enum AnalyticsCreateOrUpdateAudience200ApplicationJSONStateEnum {
    Calculating = "Calculating",
    Ready = "Ready",
    Disabled = "Disabled"
}
/**
 * Audience definition.
 */
export declare class AnalyticsCreateOrUpdateAudience200ApplicationJSON extends SpeakeasyBase {
    /**
     * Custom properties used in the definition.
     */
    customProperties?: Record<string, AnalyticsCreateOrUpdateAudience200ApplicationJSONCustomPropertiesEnum>;
    /**
     * Audience definition in OData format.
     */
    definition?: string;
    /**
     * Audience description.
     */
    description?: string;
    enabled?: boolean;
    /**
     * Estimated audience size.
     */
    estimatedCount?: number;
    /**
     * Estimated total audience size.
     */
    estimatedTotalCount?: number;
    /**
     * Audience name.
     */
    name?: string;
    /**
     * Audience state.
     */
    state?: AnalyticsCreateOrUpdateAudience200ApplicationJSONStateEnum;
    /**
     * Date the audience was last refreshed.
     */
    timestamp?: Date;
}
export declare class AnalyticsCreateOrUpdateAudienceResponse extends SpeakeasyBase {
    /**
     * Updated audiences definition.
     */
    analyticsCreateOrUpdateAudience200ApplicationJSONObject?: AnalyticsCreateOrUpdateAudience200ApplicationJSON;
    /**
     * Error code with reason
     */
    analyticsCreateOrUpdateAudienceDefaultApplicationJSONObject?: AnalyticsCreateOrUpdateAudienceDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
