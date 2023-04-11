import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsErrorGroupsSearchSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * It controls the order of sorting
 */
export declare enum ErrorsErrorGroupsSearchOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
/**
 * It controls the sort based on specified field
 */
export declare enum ErrorsErrorGroupsSearchSortEnum {
    MatchingReportsCount = "matchingReportsCount",
    ExceptionClassName = "exceptionClassName",
    ExceptionMessage = "exceptionMessage",
    ExceptionMethod = "exceptionMethod",
    LastOccurrence = "lastOccurrence"
}
export declare class ErrorsErrorGroupsSearchRequest extends SpeakeasyBase {
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
    order?: ErrorsErrorGroupsSearchOrderEnum;
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
    sort?: ErrorsErrorGroupsSearchSortEnum;
}
export declare enum ErrorsErrorGroupsSearchDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsErrorGroupsSearchDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsErrorGroupsSearchDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsErrorGroupsSearchDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsErrorGroupsSearchDefaultApplicationJSONError;
}
/**
 * programming language of the frame
 */
export declare enum ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsReasonFramesLanguageEnum {
    JavaScript = "JavaScript",
    CSharp = "CSharp",
    ObjectiveC = "Objective-C",
    ObjectiveCpp = "Objective-Cpp",
    Cpp = "Cpp",
    C = "C",
    Swift = "Swift",
    Java = "Java",
    Unknown = "Unknown"
}
export declare class ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsReasonFrames extends SpeakeasyBase {
    /**
     * this line isn't from any framework
     */
    appCode?: boolean;
    /**
     * is a class method
     */
    classMethod?: boolean;
    /**
     * name of the class
     */
    className?: string;
    /**
     * Formatted frame string
     */
    codeFormatted?: string;
    /**
     * Unformatted Frame string
     */
    codeRaw?: string;
    /**
     * Exception type.
     */
    exceptionType?: string;
    /**
     * name of the file
     */
    file?: string;
    /**
     * Name of the framework
     */
    frameworkName?: string;
    /**
     * programming language of the frame
     */
    language?: ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsReasonFramesLanguageEnum;
    /**
     * line number
     */
    line?: number;
    /**
     * name of the method
     */
    method?: string;
    /**
     * parameters of the frames method
     */
    methodParams?: string;
    /**
     * OS exception type. (aka. SIGNAL)
     */
    osExceptionType?: string;
}
export declare enum ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsStateEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
export declare class ErrorsErrorGroupsSearch200ApplicationJSONErrorGroups extends SpeakeasyBase {
    annotation?: string;
    appBuild?: string;
    appVersion: string;
    codeRaw?: string;
    count: number;
    deviceCount: number;
    errorGroupId: string;
    exceptionAppCode?: boolean;
    exceptionClassMethod?: boolean;
    exceptionClassName?: string;
    exceptionFile?: string;
    exceptionLine?: string;
    exceptionMessage?: string;
    exceptionMethod?: string;
    exceptionType?: string;
    firstOccurrence: Date;
    hidden?: boolean;
    lastOccurrence: Date;
    reasonFrames?: ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsReasonFrames[];
    state: ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsStateEnum;
}
/**
 * List of error groups
 */
export declare class ErrorsErrorGroupsSearch200ApplicationJSON extends SpeakeasyBase {
    errorGroups?: ErrorsErrorGroupsSearch200ApplicationJSONErrorGroups[];
    hasMoreResults?: boolean;
}
export declare class ErrorsErrorGroupsSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of error groups
     */
    errorsErrorGroupsSearch200ApplicationJSONObject?: ErrorsErrorGroupsSearch200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsErrorGroupsSearchDefaultApplicationJSONObject?: ErrorsErrorGroupsSearchDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
