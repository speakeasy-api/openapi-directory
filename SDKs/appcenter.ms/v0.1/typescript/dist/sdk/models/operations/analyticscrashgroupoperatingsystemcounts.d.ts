import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsCrashGroupOperatingSystemCountsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsCrashGroupOperatingSystemCountsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return. (0 will fetch all results)
     */
    dollarTop?: number;
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
export declare enum AnalyticsCrashGroupOperatingSystemCountsDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsCrashGroupOperatingSystemCountsDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsCrashGroupOperatingSystemCountsDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsCrashGroupOperatingSystemCountsDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsCrashGroupOperatingSystemCountsDefaultApplicationJSONError;
}
export declare class AnalyticsCrashGroupOperatingSystemCounts200ApplicationJSONOperatingSystems extends SpeakeasyBase {
    /**
     * Count of OS.
     */
    crashCount?: number;
    /**
     * OS name.
     */
    operatingSystemName?: string;
}
/**
 * Top OSes with percentage in descending order.
 */
export declare class AnalyticsCrashGroupOperatingSystemCounts200ApplicationJSON extends SpeakeasyBase {
    crashCount?: number;
    operatingSystems?: AnalyticsCrashGroupOperatingSystemCounts200ApplicationJSONOperatingSystems[];
}
export declare class AnalyticsCrashGroupOperatingSystemCountsResponse extends SpeakeasyBase {
    /**
     * Top OSes with percentage in descending order.
     */
    analyticsCrashGroupOperatingSystemCounts200ApplicationJSONObject?: AnalyticsCrashGroupOperatingSystemCounts200ApplicationJSON;
    /**
     * Error code with reason.
     */
    analyticsCrashGroupOperatingSystemCountsDefaultApplicationJSONObject?: AnalyticsCrashGroupOperatingSystemCountsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
