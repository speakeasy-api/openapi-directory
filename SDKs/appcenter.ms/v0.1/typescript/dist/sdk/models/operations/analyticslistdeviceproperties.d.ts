import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsListDevicePropertiesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsListDevicePropertiesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AnalyticsListDevicePropertiesDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsListDevicePropertiesDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsListDevicePropertiesDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsListDevicePropertiesDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsListDevicePropertiesDefaultApplicationJSONError;
}
/**
 * Type of the property.
 */
export declare enum AnalyticsListDeviceProperties200ApplicationJSONValuesEnum {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    DateTime = "date_time"
}
/**
 * List of device properties.
 */
export declare class AnalyticsListDeviceProperties200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of device properties.
     */
    values: Record<string, AnalyticsListDeviceProperties200ApplicationJSONValuesEnum>;
}
export declare class AnalyticsListDevicePropertiesResponse extends SpeakeasyBase {
    /**
     * List of device properties.
     */
    analyticsListDeviceProperties200ApplicationJSONObject?: AnalyticsListDeviceProperties200ApplicationJSON;
    /**
     * Error code with reason
     */
    analyticsListDevicePropertiesDefaultApplicationJSONObject?: AnalyticsListDevicePropertiesDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
