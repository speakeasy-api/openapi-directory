import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashGroupsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashGroupsGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * id of a specific group
     */
    crashGroupId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CrashGroupsGetDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * programming language of the frame
 */
export declare enum CrashGroupsGet200ApplicationJSONReasonFrameLanguageEnum {
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
/**
 * frame belonging to the reason of the crash
 */
export declare class CrashGroupsGet200ApplicationJSONReasonFrame extends SpeakeasyBase {
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
    language?: CrashGroupsGet200ApplicationJSONReasonFrameLanguageEnum;
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
export declare enum CrashGroupsGet200ApplicationJSONStatusEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
/**
 * Success
 */
export declare class CrashGroupsGet200ApplicationJSON extends SpeakeasyBase {
    annotation: string;
    appVersion: string;
    build: string;
    count: number;
    crashGroupId: string;
    crashReason: string;
    displayId: string;
    exception?: string;
    /**
     * Crash or handled exception
     */
    fatal: boolean;
    firstOccurrence: Date;
    impactedUsers?: number;
    lastOccurrence: Date;
    newCrashGroupId: string;
    /**
     * frame belonging to the reason of the crash
     */
    reasonFrame?: CrashGroupsGet200ApplicationJSONReasonFrame;
    status: CrashGroupsGet200ApplicationJSONStatusEnum;
}
export declare class CrashGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashGroupsGet200ApplicationJSONObject?: CrashGroupsGet200ApplicationJSON;
    /**
     * Error
     */
    crashGroupsGetDefaultApplicationJSONObject?: CrashGroupsGetDefaultApplicationJSON;
}
