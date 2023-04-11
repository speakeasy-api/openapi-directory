import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsAppBuildsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Type of error (handled vs unhandled), including All
 */
export declare enum ErrorsAppBuildsListErrorTypeEnum {
    All = "all",
    UnhandledError = "unhandledError",
    HandledError = "handledError"
}
export declare class ErrorsAppBuildsListRequest extends SpeakeasyBase {
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
    errorType?: ErrorsAppBuildsListErrorTypeEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Start date time in data in ISO 8601 date time format
     */
    start: Date;
    version: string;
}
export declare enum ErrorsAppBuildsListDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsAppBuildsListDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsAppBuildsListDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsAppBuildsListDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsAppBuildsListDefaultApplicationJSONError;
}
/**
 * List of App builds
 */
export declare class ErrorsAppBuildsList200ApplicationJSON extends SpeakeasyBase {
    appBuilds?: string[];
}
export declare class ErrorsAppBuildsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of App builds
     */
    errorsAppBuildsList200ApplicationJSONObject?: ErrorsAppBuildsList200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsAppBuildsListDefaultApplicationJSONObject?: ErrorsAppBuildsListDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
