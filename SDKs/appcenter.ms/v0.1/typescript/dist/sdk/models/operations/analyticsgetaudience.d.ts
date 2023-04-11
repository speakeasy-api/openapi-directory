import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsGetAudienceSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsGetAudienceRequest extends SpeakeasyBase {
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
export declare enum AnalyticsGetAudienceDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsGetAudienceDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsGetAudienceDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsGetAudienceDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsGetAudienceDefaultApplicationJSONError;
}
export declare enum AnalyticsGetAudience200ApplicationJSONCustomPropertiesEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    DateTime = "date_time"
}
/**
 * Audience state.
 */
export declare enum AnalyticsGetAudience200ApplicationJSONStateEnum {
    Calculating = "Calculating",
    Ready = "Ready",
    Disabled = "Disabled"
}
/**
 * Audience definition.
 */
export declare class AnalyticsGetAudience200ApplicationJSON extends SpeakeasyBase {
    /**
     * Custom properties used in the definition.
     */
    customProperties?: Record<string, AnalyticsGetAudience200ApplicationJSONCustomPropertiesEnum>;
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
    state?: AnalyticsGetAudience200ApplicationJSONStateEnum;
    /**
     * Date the audience was last refreshed.
     */
    timestamp?: Date;
}
export declare class AnalyticsGetAudienceResponse extends SpeakeasyBase {
    /**
     * Audiences definition.
     */
    analyticsGetAudience200ApplicationJSONObject?: AnalyticsGetAudience200ApplicationJSON;
    /**
     * Error code with reason
     */
    analyticsGetAudienceDefaultApplicationJSONObject?: AnalyticsGetAudienceDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
