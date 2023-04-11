import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsGroupListSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Type of error (handled vs unhandled), including All
 */
export declare enum ErrorsGroupListErrorTypeEnum {
    All = "all",
    UnhandledError = "unhandledError",
    HandledError = "handledError"
}
export declare class ErrorsGroupListRequest extends SpeakeasyBase {
    /**
     * controls the sorting order and sorting based on which column
     */
    dollarOrderby?: string;
    /**
     * The maximum number of results to return. (0 will fetch all results till the max number.)
     */
    dollarTop?: number;
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
     * Type of error (handled vs unhandled), including All
     */
    errorType?: ErrorsGroupListErrorTypeEnum;
    groupState?: string;
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
export declare enum ErrorsGroupListDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGroupListDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGroupListDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsGroupListDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGroupListDefaultApplicationJSONError;
}
/**
 * programming language of the frame
 */
export declare enum ErrorsGroupList200ApplicationJSONErrorGroupsReasonFramesLanguageEnum {
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
export declare class ErrorsGroupList200ApplicationJSONErrorGroupsReasonFrames extends SpeakeasyBase {
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
    language?: ErrorsGroupList200ApplicationJSONErrorGroupsReasonFramesLanguageEnum;
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
export declare enum ErrorsGroupList200ApplicationJSONErrorGroupsStateEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
export declare class ErrorsGroupList200ApplicationJSONErrorGroups extends SpeakeasyBase {
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
    reasonFrames?: ErrorsGroupList200ApplicationJSONErrorGroupsReasonFrames[];
    state: ErrorsGroupList200ApplicationJSONErrorGroupsStateEnum;
}
/**
 * List of error groups
 */
export declare class ErrorsGroupList200ApplicationJSON extends SpeakeasyBase {
    errorGroups?: ErrorsGroupList200ApplicationJSONErrorGroups[];
    nextLink?: string;
}
export declare class ErrorsGroupListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of error groups
     */
    errorsGroupList200ApplicationJSONObject?: ErrorsGroupList200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsGroupListDefaultApplicationJSONObject?: ErrorsGroupListDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
