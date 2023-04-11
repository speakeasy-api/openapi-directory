import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsEventPropertiesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsEventPropertiesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the event.
     */
    eventName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * The status code return by the API. It can be 400 or 403 or 500.
 */
export declare enum AnalyticsEventPropertiesDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsEventPropertiesDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsEventPropertiesDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsEventPropertiesDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsEventPropertiesDefaultApplicationJSONError;
}
/**
 * Event properties during the time range.
 */
export declare class AnalyticsEventProperties200ApplicationJSON extends SpeakeasyBase {
    eventProperties?: string[];
}
export declare class AnalyticsEventPropertiesResponse extends SpeakeasyBase {
    /**
     * Event properties.
     */
    analyticsEventProperties200ApplicationJSONObject?: AnalyticsEventProperties200ApplicationJSON;
    /**
     * Error code with reason.
     */
    analyticsEventPropertiesDefaultApplicationJSONObject?: AnalyticsEventPropertiesDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
