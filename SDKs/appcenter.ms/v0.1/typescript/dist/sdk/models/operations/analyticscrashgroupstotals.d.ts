import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsCrashGroupsTotalsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsCrashGroupsTotalsRequestBodyCrashGroups extends SpeakeasyBase {
    appVersion?: string;
    crashGroupId?: string;
}
export declare class AnalyticsCrashGroupsTotalsRequestBody extends SpeakeasyBase {
    crashGroups: AnalyticsCrashGroupsTotalsRequestBodyCrashGroups[];
}
export declare class AnalyticsCrashGroupsTotalsRequest extends SpeakeasyBase {
    requestBody: AnalyticsCrashGroupsTotalsRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * The status code return by the API. It can be 400 or 403 or 500.
 */
export declare enum AnalyticsCrashGroupsTotalsDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class AnalyticsCrashGroupsTotalsDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: AnalyticsCrashGroupsTotalsDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed.
     */
    message?: string;
}
/**
 * Error
 */
export declare class AnalyticsCrashGroupsTotalsDefaultApplicationJSON extends SpeakeasyBase {
    error?: AnalyticsCrashGroupsTotalsDefaultApplicationJSONError;
}
export declare class AnalyticsCrashGroupsTotals200ApplicationJSONOverall extends SpeakeasyBase {
    crashCount?: number;
    deviceCount?: number;
}
export declare class AnalyticsCrashGroupsTotals200ApplicationJSON extends SpeakeasyBase {
    appVersion?: string;
    crashGroupId?: string;
    overall?: AnalyticsCrashGroupsTotals200ApplicationJSONOverall;
}
export declare class AnalyticsCrashGroupsTotalsResponse extends SpeakeasyBase {
    /**
     * Overall crashes and affected users count for all selected crash groups.
     */
    analyticsCrashGroupsTotals200ApplicationJSONObjects?: AnalyticsCrashGroupsTotals200ApplicationJSON[];
    /**
     * Error code with reason.
     */
    analyticsCrashGroupsTotalsDefaultApplicationJSONObject?: AnalyticsCrashGroupsTotalsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
