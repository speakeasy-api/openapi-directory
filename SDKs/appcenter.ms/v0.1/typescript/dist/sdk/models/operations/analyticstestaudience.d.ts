import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsTestAudienceSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum AnalyticsTestAudienceRequestBodyCustomPropertiesEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    DateTime = "date_time"
}
/**
 * Audience definition.
 */
export declare class AnalyticsTestAudienceRequestBody extends SpeakeasyBase {
    /**
     * Custom properties used in the definition.
     */
    customProperties?: Record<string, AnalyticsTestAudienceRequestBodyCustomPropertiesEnum>;
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
export declare class AnalyticsTestAudienceRequest extends SpeakeasyBase {
    /**
     * Audience definition
     */
    requestBody: AnalyticsTestAudienceRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AnalyticsTestAudienceDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsTestAudienceDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsTestAudienceDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsTestAudienceDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsTestAudienceDefaultApplicationJSONError;
}
export declare enum AnalyticsTestAudience200ApplicationJSONCustomPropertiesEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    DateTime = "date_time"
}
/**
 * Audience test result.
 */
export declare class AnalyticsTestAudience200ApplicationJSON extends SpeakeasyBase {
    /**
     * Custom properties used in the definition.
     */
    customProperties?: Record<string, AnalyticsTestAudience200ApplicationJSONCustomPropertiesEnum>;
    /**
     * Audience definition in OData format.
     */
    definition?: string;
    /**
     * Estimated audience size.
     */
    estimatedCount?: number;
    /**
     * Estimated total audience size.
     */
    estimatedTotalCount?: number;
}
export declare class AnalyticsTestAudienceResponse extends SpeakeasyBase {
    /**
     * Tests audience definition.
     */
    analyticsTestAudience200ApplicationJSONObject?: AnalyticsTestAudience200ApplicationJSON;
    /**
     * Error code with reason
     */
    analyticsTestAudienceDefaultApplicationJSONObject?: AnalyticsTestAudienceDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
