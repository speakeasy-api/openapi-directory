import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsErrorSearchSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * It controls the order of sorting
 */
export declare enum ErrorsErrorSearchOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
/**
 * It controls the sort based on specified field
 */
export declare enum ErrorsErrorSearchSortEnum {
    Timestamp = "timestamp",
    ErrorGroupId = "errorGroupId",
    ExceptionClassName = "exceptionClassName",
    ExceptionFile = "exceptionFile",
    ExceptionLine = "exceptionLine",
    ExceptionMessage = "exceptionMessage",
    ExceptionMethod = "exceptionMethod",
    DeviceName = "deviceName",
    OsVersion = "osVersion",
    UserId = "userId"
}
export declare class ErrorsErrorSearchRequest extends SpeakeasyBase {
    /**
     * The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination.
     */
    dollarSkip?: number;
    /**
     * The maximum number of results to return
     */
    dollarTop?: number;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * A filter as specified in OData notation
     */
    filter?: string;
    /**
     * It controls the order of sorting
     */
    order?: ErrorsErrorSearchOrderEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * A query string
     */
    q?: string;
    /**
     * It controls the sort based on specified field
     */
    sort?: ErrorsErrorSearchSortEnum;
}
export declare enum ErrorsErrorSearchDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsErrorSearchDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsErrorSearchDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsErrorSearchDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsErrorSearchDefaultApplicationJSONError;
}
export declare class ErrorsErrorSearch200ApplicationJSONErrors extends SpeakeasyBase {
    country?: string;
    deviceName?: string;
    errorId?: string;
    hasAttachments?: boolean;
    hasBreadcrumbs?: boolean;
    language?: string;
    osType?: string;
    osVersion?: string;
    timestamp?: Date;
    userId?: string;
}
/**
 * List of errors
 */
export declare class ErrorsErrorSearch200ApplicationJSON extends SpeakeasyBase {
    errors?: ErrorsErrorSearch200ApplicationJSONErrors[];
    hasMoreResults?: boolean;
}
export declare class ErrorsErrorSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of errors
     */
    errorsErrorSearch200ApplicationJSONObject?: ErrorsErrorSearch200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsErrorSearchDefaultApplicationJSONObject?: ErrorsErrorSearchDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
