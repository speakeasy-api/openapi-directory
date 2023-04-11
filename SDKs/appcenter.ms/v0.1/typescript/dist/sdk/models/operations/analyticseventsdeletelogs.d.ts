import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsEventsDeleteLogsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsEventsDeleteLogsRequest extends SpeakeasyBase {
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
export declare enum AnalyticsEventsDeleteLogsDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsEventsDeleteLogsDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsEventsDeleteLogsDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsEventsDeleteLogsDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsEventsDeleteLogsDefaultApplicationJSONError;
}
export declare class AnalyticsEventsDeleteLogsResponse extends SpeakeasyBase {
    /**
     * Error code with reason.
     */
    analyticsEventsDeleteLogsDefaultApplicationJSONObject?: AnalyticsEventsDeleteLogsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
