import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsUpdateStateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum ErrorsUpdateStateRequestBodyStateEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
/**
 * The state of the error group
 */
export declare class ErrorsUpdateStateRequestBody extends SpeakeasyBase {
    annotation?: string;
    state: ErrorsUpdateStateRequestBodyStateEnum;
}
export declare class ErrorsUpdateStateRequest extends SpeakeasyBase {
    /**
     * The state of the error group
     */
    requestBody: ErrorsUpdateStateRequestBody;
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
export declare enum ErrorsUpdateStateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsUpdateStateDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsUpdateStateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsUpdateStateDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsUpdateStateDefaultApplicationJSONError;
}
/**
 * programming language of the frame
 */
export declare enum ErrorsUpdateState200ApplicationJSONReasonFramesLanguageEnum {
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
export declare class ErrorsUpdateState200ApplicationJSONReasonFrames extends SpeakeasyBase {
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
    language?: ErrorsUpdateState200ApplicationJSONReasonFramesLanguageEnum;
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
export declare enum ErrorsUpdateState200ApplicationJSONStateEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
/**
 * Error group details
 */
export declare class ErrorsUpdateState200ApplicationJSON extends SpeakeasyBase {
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
    reasonFrames?: ErrorsUpdateState200ApplicationJSONReasonFrames[];
    state: ErrorsUpdateState200ApplicationJSONStateEnum;
}
export declare class ErrorsUpdateStateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error group details
     */
    errorsUpdateState200ApplicationJSONObject?: ErrorsUpdateState200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsUpdateStateDefaultApplicationJSONObject?: ErrorsUpdateStateDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
