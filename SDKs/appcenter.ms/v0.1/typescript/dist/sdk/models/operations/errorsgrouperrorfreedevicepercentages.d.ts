import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsGroupErrorFreeDevicePercentagesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsGroupErrorFreeDevicePercentagesRequest extends SpeakeasyBase {
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
}
export declare enum ErrorsGroupErrorFreeDevicePercentagesDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGroupErrorFreeDevicePercentagesDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGroupErrorFreeDevicePercentagesDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsGroupErrorFreeDevicePercentagesDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGroupErrorFreeDevicePercentagesDefaultApplicationJSONError;
}
export declare class ErrorsGroupErrorFreeDevicePercentages200ApplicationJSONDailyPercentages extends SpeakeasyBase {
    /**
     * the ISO 8601 datetime
     */
    datetime?: string;
    /**
     * percentage of the object
     */
    percentage?: number;
}
/**
 * Percentage of error-free devices by day in the time range and overall percentage of the time range.
 */
export declare class ErrorsGroupErrorFreeDevicePercentages200ApplicationJSON extends SpeakeasyBase {
    /**
     * Average percentage
     */
    averagePercentage?: number;
    /**
     * The error-free percentage per day.
     */
    dailyPercentages?: ErrorsGroupErrorFreeDevicePercentages200ApplicationJSONDailyPercentages[];
}
export declare class ErrorsGroupErrorFreeDevicePercentagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Percentage of error-free devices by day in the time range and overall percentage of the time range.
     */
    errorsGroupErrorFreeDevicePercentages200ApplicationJSONObject?: ErrorsGroupErrorFreeDevicePercentages200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsGroupErrorFreeDevicePercentagesDefaultApplicationJSONObject?: ErrorsGroupErrorFreeDevicePercentagesDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
