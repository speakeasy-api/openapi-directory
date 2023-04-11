import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsListAudiencesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsListAudiencesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Include disabled audience definitions
     */
    includeDisabled?: boolean;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AnalyticsListAudiencesDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsListAudiencesDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsListAudiencesDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsListAudiencesDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsListAudiencesDefaultApplicationJSONError;
}
/**
 * Audience state.
 */
export declare enum AnalyticsListAudiences200ApplicationJSONValuesStateEnum {
    Calculating = "Calculating",
    Ready = "Ready",
    Disabled = "Disabled"
}
/**
 * Audience definition.
 */
export declare class AnalyticsListAudiences200ApplicationJSONValues extends SpeakeasyBase {
    /**
     * Audience definition in OData format.
     */
    definition?: string;
    /**
     * Audience description.
     */
    description?: string;
    /**
     * Estimated audience size.
     */
    estimatedCount?: number;
    /**
     * Audience name.
     */
    name?: string;
    /**
     * Audience state.
     */
    state?: AnalyticsListAudiences200ApplicationJSONValuesStateEnum;
}
/**
 * List of audiences.
 */
export declare class AnalyticsListAudiences200ApplicationJSON extends SpeakeasyBase {
    nextLink?: string;
    /**
     * List of audiences.
     */
    values: AnalyticsListAudiences200ApplicationJSONValues[];
}
export declare class AnalyticsListAudiencesResponse extends SpeakeasyBase {
    /**
     * List of audiences.
     */
    analyticsListAudiences200ApplicationJSONObject?: AnalyticsListAudiences200ApplicationJSON;
    /**
     * Error code with reason
     */
    analyticsListAudiencesDefaultApplicationJSONObject?: AnalyticsListAudiencesDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
