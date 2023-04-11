import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsCrashFreeDevicePercentagesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsCrashFreeDevicePercentagesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Last date time in data in ISO 8601 date time format.
     */
    end?: Date;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Start date time in data in ISO 8601 date time format.
     */
    start: Date;
    version: string;
}
/**
 * The status code return by the API. It can be 400 or 403 or 500.
 */
export declare enum AnalyticsCrashFreeDevicePercentagesDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsCrashFreeDevicePercentagesDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsCrashFreeDevicePercentagesDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsCrashFreeDevicePercentagesDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsCrashFreeDevicePercentagesDefaultApplicationJSONError;
}
export declare class AnalyticsCrashFreeDevicePercentages200ApplicationJSONDailyPercentages extends SpeakeasyBase {
    /**
     * The ISO 8601 datetime.
     */
    datetime?: string;
    /**
     * Percentage of the object.
     */
    percentage?: number;
}
/**
 * Percentage of crash-free devices by day in the time range and overall percentage of the time range.
 */
export declare class AnalyticsCrashFreeDevicePercentages200ApplicationJSON extends SpeakeasyBase {
    /**
     * Average percentage.
     */
    averagePercentage?: number;
    /**
     * The crash-free percentage per day.
     */
    dailyPercentages?: AnalyticsCrashFreeDevicePercentages200ApplicationJSONDailyPercentages[];
}
export declare class AnalyticsCrashFreeDevicePercentagesResponse extends SpeakeasyBase {
    /**
     * Percentage of crash-free devices by day in the time range and overall percentage of the time range.
     */
    analyticsCrashFreeDevicePercentages200ApplicationJSONObject?: AnalyticsCrashFreeDevicePercentages200ApplicationJSON;
    /**
     * Error code with reason.
     */
    analyticsCrashFreeDevicePercentagesDefaultApplicationJSONObject?: AnalyticsCrashFreeDevicePercentagesDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
