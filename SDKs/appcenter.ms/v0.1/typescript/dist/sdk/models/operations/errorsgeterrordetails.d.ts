import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsGetErrorDetailsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsGetErrorDetailsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the error group
     */
    errorGroupId: string;
    /**
     * The id of the error
     */
    errorId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsGetErrorDetailsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGetErrorDetailsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGetErrorDetailsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsGetErrorDetailsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGetErrorDetailsDefaultApplicationJSONError;
}
/**
 * programming language of the frame
 */
export declare enum ErrorsGetErrorDetails200ApplicationJSONReasonFramesLanguageEnum {
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
export declare class ErrorsGetErrorDetails200ApplicationJSONReasonFrames extends SpeakeasyBase {
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
    language?: ErrorsGetErrorDetails200ApplicationJSONReasonFramesLanguageEnum;
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
/**
 * Error details.
 */
export declare class ErrorsGetErrorDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * Timestamp when the app was launched, example: '2017-03-13T18:05:42Z'.
     *
     * @remarks
     *
     */
    appLaunchTimestamp?: Date;
    /**
     * Carrier name (for mobile devices).
     *
     * @remarks
     *
     */
    carrierName?: string;
    country?: string;
    deviceName?: string;
    errorId?: string;
    hasAttachments?: boolean;
    hasBreadcrumbs?: boolean;
    /**
     * Flag indicating if device is jailbroken
     *
     * @remarks
     *
     */
    jailbreak?: boolean;
    language?: string;
    name?: string;
    osType?: string;
    osVersion?: string;
    properties?: Record<string, string>;
    reasonFrames?: ErrorsGetErrorDetails200ApplicationJSONReasonFrames[];
    timestamp?: Date;
    userId?: string;
}
export declare class ErrorsGetErrorDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error details.
     */
    errorsGetErrorDetails200ApplicationJSONObject?: ErrorsGetErrorDetails200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsGetErrorDetailsDefaultApplicationJSONObject?: ErrorsGetErrorDetailsDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
