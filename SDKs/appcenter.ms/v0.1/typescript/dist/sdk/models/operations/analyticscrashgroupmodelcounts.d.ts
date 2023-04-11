import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsCrashGroupModelCountsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsCrashGroupModelCountsRequest extends SpeakeasyBase {
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
export declare enum AnalyticsCrashGroupModelCountsDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsCrashGroupModelCountsDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsCrashGroupModelCountsDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsCrashGroupModelCountsDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsCrashGroupModelCountsDefaultApplicationJSONError;
}
export declare class AnalyticsCrashGroupModelCounts200ApplicationJSONModels extends SpeakeasyBase {
    /**
     * Count of model.
     */
    crashCount?: number;
    /**
     * Model's name.
     */
    modelName?: string;
}
/**
 * Top models with percentage in descending order.
 */
export declare class AnalyticsCrashGroupModelCounts200ApplicationJSON extends SpeakeasyBase {
    crashCount?: number;
    models?: AnalyticsCrashGroupModelCounts200ApplicationJSONModels[];
}
export declare class AnalyticsCrashGroupModelCountsResponse extends SpeakeasyBase {
    /**
     * Top models with percentage in descending order.
     */
    analyticsCrashGroupModelCounts200ApplicationJSONObject?: AnalyticsCrashGroupModelCounts200ApplicationJSON;
    /**
     * Error code with reason.
     */
    analyticsCrashGroupModelCountsDefaultApplicationJSONObject?: AnalyticsCrashGroupModelCountsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
