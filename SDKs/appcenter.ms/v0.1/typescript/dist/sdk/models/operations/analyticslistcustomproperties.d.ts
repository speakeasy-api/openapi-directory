import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsListCustomPropertiesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsListCustomPropertiesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AnalyticsListCustomPropertiesDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsListCustomPropertiesDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsListCustomPropertiesDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsListCustomPropertiesDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsListCustomPropertiesDefaultApplicationJSONError;
}
/**
 * Type of the property.
 */
export declare enum AnalyticsListCustomProperties200ApplicationJSONValuesEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    DateTime = "date_time"
}
/**
 * List of device properties.
 */
export declare class AnalyticsListCustomProperties200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of device properties.
     */
    values: Record<string, AnalyticsListCustomProperties200ApplicationJSONValuesEnum>;
}
export declare class AnalyticsListCustomPropertiesResponse extends SpeakeasyBase {
    /**
     * List of device properties.
     */
    analyticsListCustomProperties200ApplicationJSONObject?: AnalyticsListCustomProperties200ApplicationJSON;
    /**
     * Error code with reason
     */
    analyticsListCustomPropertiesDefaultApplicationJSONObject?: AnalyticsListCustomPropertiesDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
