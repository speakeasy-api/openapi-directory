import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsCountsPerDaySecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Type of error (handled vs unhandled), excluding All
 */
export declare enum ErrorsCountsPerDayErrorTypeEnum {
    UnhandledError = "unhandledError",
    HandledError = "handledError"
}
export declare class ErrorsCountsPerDayRequest extends SpeakeasyBase {
    /**
     * app build
     */
    appBuild?: string;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Last date time in data in ISO 8601 date time format
     */
    end?: Date;
    /**
     * Type of error (handled vs unhandled), excluding All
     */
    errorType?: ErrorsCountsPerDayErrorTypeEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Start date time in data in ISO 8601 date time format
     */
    start: Date;
    version?: string;
}
export declare enum ErrorsCountsPerDayDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsCountsPerDayDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsCountsPerDayDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsCountsPerDayDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsCountsPerDayDefaultApplicationJSONError;
}
export declare class ErrorsCountsPerDay200ApplicationJSONErrors extends SpeakeasyBase {
    /**
     * count of the object
     */
    count?: number;
    /**
     * the ISO 8601 datetime
     */
    datetime?: string;
}
/**
 * Count of crashes or errors by day in the time range, and total over the entire time range.
 */
export declare class ErrorsCountsPerDay200ApplicationJSON extends SpeakeasyBase {
    /**
     * total error count
     */
    count?: number;
    /**
     * the total error count for day
     */
    errors?: ErrorsCountsPerDay200ApplicationJSONErrors[];
}
export declare class ErrorsCountsPerDayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Count of crashes or errors by day in the time range, and total over the entire time range.
     */
    errorsCountsPerDay200ApplicationJSONObject?: ErrorsCountsPerDay200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsCountsPerDayDefaultApplicationJSONObject?: ErrorsCountsPerDayDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
