import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsAvailableVersionsSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Controls whether or not to include a count of all the items across all pages.
 */
export declare enum ErrorsAvailableVersionsDollarInlinecountEnum {
    Allpages = "allpages",
    None = "none"
}
/**
 * Type of error (handled vs unhandled), including All
 */
export declare enum ErrorsAvailableVersionsErrorTypeEnum {
    All = "all",
    UnhandledError = "unhandledError",
    HandledError = "handledError"
}
export declare class ErrorsAvailableVersionsRequest extends SpeakeasyBase {
    /**
     * A filter as specified in https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering.
     */
    dollarFilter?: string;
    /**
     * Controls whether or not to include a count of all the items across all pages.
     */
    dollarInlinecount?: ErrorsAvailableVersionsDollarInlinecountEnum;
    /**
     * The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination.
     */
    dollarSkip?: number;
    /**
     * The maximum number of results to return. (0 will fetch all results till the max number.)
     */
    dollarTop?: number;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Last date time in data in ISO 8601 date time format
     */
    end?: Date;
    /**
     * Type of error (handled vs unhandled), including All
     */
    errorType?: ErrorsAvailableVersionsErrorTypeEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Start date time in data in ISO 8601 date time format
     */
    start: Date;
}
export declare enum ErrorsAvailableVersionsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsAvailableVersionsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsAvailableVersionsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason.
 */
export declare class ErrorsAvailableVersionsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsAvailableVersionsDefaultApplicationJSONError;
}
/**
 * A list of available versions in the time range.
 */
export declare class ErrorsAvailableVersions200ApplicationJSON extends SpeakeasyBase {
    /**
     * The full number of versions across all pages.
     */
    totalCount?: number;
    /**
     * List of available versions.
     */
    versions?: string[];
}
export declare class ErrorsAvailableVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of available versions in the time range.
     */
    errorsAvailableVersions200ApplicationJSONObject?: ErrorsAvailableVersions200ApplicationJSON;
    /**
     * Error code with reason.
     */
    errorsAvailableVersionsDefaultApplicationJSONObject?: ErrorsAvailableVersionsDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
