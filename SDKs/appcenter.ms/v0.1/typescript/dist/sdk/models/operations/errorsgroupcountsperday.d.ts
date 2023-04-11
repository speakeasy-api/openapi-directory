import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsGroupCountsPerDaySecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsGroupCountsPerDayRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Last date time in data in ISO 8601 date time format
     */
    end?: Date;
    /**
     * The id of the error group
     */
    errorGroupId: string;
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
export declare enum ErrorsGroupCountsPerDayDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGroupCountsPerDayDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGroupCountsPerDayDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsGroupCountsPerDayDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGroupCountsPerDayDefaultApplicationJSONError;
}
export declare class ErrorsGroupCountsPerDay200ApplicationJSONErrors extends SpeakeasyBase {
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
 * Count of errors by day in the time range and total errors over the time range.
 */
export declare class ErrorsGroupCountsPerDay200ApplicationJSON extends SpeakeasyBase {
    /**
     * total error count
     */
    count?: number;
    /**
     * the total error count for day
     */
    errors?: ErrorsGroupCountsPerDay200ApplicationJSONErrors[];
}
export declare class ErrorsGroupCountsPerDayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Count of errors by day in the time range and total errors over the time range.
     */
    errorsGroupCountsPerDay200ApplicationJSONObject?: ErrorsGroupCountsPerDay200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsGroupCountsPerDayDefaultApplicationJSONObject?: ErrorsGroupCountsPerDayDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
