import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsCrashGroupCountsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsCrashGroupCountsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the crash group.
     */
    crashGroupId: string;
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
export declare enum AnalyticsCrashGroupCountsDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsCrashGroupCountsDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsCrashGroupCountsDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsCrashGroupCountsDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsCrashGroupCountsDefaultApplicationJSONError;
}
export declare class AnalyticsCrashGroupCounts200ApplicationJSONCrashes extends SpeakeasyBase {
    /**
     * Count of the object.
     */
    count?: number;
    /**
     * The ISO 8601 datetime.
     */
    datetime?: string;
}
/**
 * Count of crashes by day in the time range and total crashes over the time range.
 */
export declare class AnalyticsCrashGroupCounts200ApplicationJSON extends SpeakeasyBase {
    /**
     * Total crash count.
     */
    count?: number;
    /**
     * The total crash count for day.
     */
    crashes?: AnalyticsCrashGroupCounts200ApplicationJSONCrashes[];
}
export declare class AnalyticsCrashGroupCountsResponse extends SpeakeasyBase {
    /**
     * Count of crashes by day in the time range and total crashes over the time range.
     */
    analyticsCrashGroupCounts200ApplicationJSONObject?: AnalyticsCrashGroupCounts200ApplicationJSON;
    /**
     * Error code with reason.
     */
    analyticsCrashGroupCountsDefaultApplicationJSONObject?: AnalyticsCrashGroupCountsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
