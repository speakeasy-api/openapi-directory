import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsEventsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsEventsDeleteRequest extends SpeakeasyBase {
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
export declare enum AnalyticsEventsDeleteDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsEventsDeleteDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsEventsDeleteDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsEventsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsEventsDeleteDefaultApplicationJSONError;
}
export declare class AnalyticsEventsDeleteResponse extends SpeakeasyBase {
    /**
     * Error code with reason.
     */
    analyticsEventsDeleteDefaultApplicationJSONObject?: AnalyticsEventsDeleteDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
