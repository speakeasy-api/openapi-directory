import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsLatestErrorDetailsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsLatestErrorDetailsRequest extends SpeakeasyBase {
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
export declare enum ErrorsLatestErrorDetailsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsLatestErrorDetailsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsLatestErrorDetailsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsLatestErrorDetailsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsLatestErrorDetailsDefaultApplicationJSONError;
}
/**
 * programming language of the frame
 */
export declare enum ErrorsLatestErrorDetails200ApplicationJSONReasonFramesLanguageEnum {
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
export declare class ErrorsLatestErrorDetails200ApplicationJSONReasonFrames extends SpeakeasyBase {
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
    language?: ErrorsLatestErrorDetails200ApplicationJSONReasonFramesLanguageEnum;
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
 * Latest error details.
 */
export declare class ErrorsLatestErrorDetails200ApplicationJSON extends SpeakeasyBase {
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
    reasonFrames?: ErrorsLatestErrorDetails200ApplicationJSONReasonFrames[];
    timestamp?: Date;
    userId?: string;
}
export declare class ErrorsLatestErrorDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Latest error details.
     */
    errorsLatestErrorDetails200ApplicationJSONObject?: ErrorsLatestErrorDetails200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsLatestErrorDetailsDefaultApplicationJSONObject?: ErrorsLatestErrorDetailsDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
