import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsListDevicePropertyValuesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsListDevicePropertyValuesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Contains string
     */
    contains?: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Device property
     */
    propertyName: string;
}
export declare enum AnalyticsListDevicePropertyValuesDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsListDevicePropertyValuesDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsListDevicePropertyValuesDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsListDevicePropertyValuesDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsListDevicePropertyValuesDefaultApplicationJSONError;
}
/**
 * List of device property values.
 */
export declare class AnalyticsListDevicePropertyValues200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of device property values.
     */
    values: string[];
}
export declare class AnalyticsListDevicePropertyValuesResponse extends SpeakeasyBase {
    /**
     * List of supported device property values.
     */
    analyticsListDevicePropertyValues200ApplicationJSONObject?: AnalyticsListDevicePropertyValues200ApplicationJSON;
    /**
     * Error code with reason
     */
    analyticsListDevicePropertyValuesDefaultApplicationJSONObject?: AnalyticsListDevicePropertyValuesDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
