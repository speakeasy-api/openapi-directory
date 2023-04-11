import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsGroupDetailsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsGroupDetailsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the error group
     */
    errorGroupId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsGroupDetailsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGroupDetailsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGroupDetailsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsGroupDetailsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGroupDetailsDefaultApplicationJSONError;
}
/**
 * programming language of the frame
 */
export declare enum ErrorsGroupDetails200ApplicationJSONReasonFramesLanguageEnum {
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
export declare class ErrorsGroupDetails200ApplicationJSONReasonFrames extends SpeakeasyBase {
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
    language?: ErrorsGroupDetails200ApplicationJSONReasonFramesLanguageEnum;
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
export declare enum ErrorsGroupDetails200ApplicationJSONStateEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
/**
 * Error group details
 */
export declare class ErrorsGroupDetails200ApplicationJSON extends SpeakeasyBase {
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
    reasonFrames?: ErrorsGroupDetails200ApplicationJSONReasonFrames[];
    state: ErrorsGroupDetails200ApplicationJSONStateEnum;
}
export declare class ErrorsGroupDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error group details
     */
    errorsGroupDetails200ApplicationJSONObject?: ErrorsGroupDetails200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsGroupDetailsDefaultApplicationJSONObject?: ErrorsGroupDetailsDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
