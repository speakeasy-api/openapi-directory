import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsCrashGroupTotalsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsCrashGroupTotalsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the crash group.
     */
    crashGroupId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    version: string;
}
/**
 * The status code return by the API. It can be 400 or 403 or 500.
 */
export declare enum AnalyticsCrashGroupTotalsDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsCrashGroupTotalsDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsCrashGroupTotalsDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsCrashGroupTotalsDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsCrashGroupTotalsDefaultApplicationJSONError;
}
/**
 * Overall crashes and affected users count.
 */
export declare class AnalyticsCrashGroupTotals200ApplicationJSON extends SpeakeasyBase {
    crashCount?: number;
    deviceCount?: number;
}
export declare class AnalyticsCrashGroupTotalsResponse extends SpeakeasyBase {
    /**
     * Overall crashes and affected users count.
     */
    analyticsCrashGroupTotals200ApplicationJSONObject?: AnalyticsCrashGroupTotals200ApplicationJSON;
    /**
     * Error code with reason.
     */
    analyticsCrashGroupTotalsDefaultApplicationJSONObject?: AnalyticsCrashGroupTotalsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
