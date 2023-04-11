import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashGroupsUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum CrashGroupsUpdateRequestBodyStatusEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
/**
 * Group change object. All fields are optional and only provided fields will get updated.
 */
export declare class CrashGroupsUpdateRequestBody extends SpeakeasyBase {
    annotation?: string;
    status?: CrashGroupsUpdateRequestBodyStatusEnum;
}
export declare class CrashGroupsUpdateRequest extends SpeakeasyBase {
    /**
     * Group change object. All fields are optional and only provided fields will get updated.
     */
    requestBody: CrashGroupsUpdateRequestBody;
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
export declare class CrashGroupsUpdateDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * programming language of the frame
 */
export declare enum CrashGroupsUpdate200ApplicationJSONReasonFrameLanguageEnum {
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
export declare class CrashGroupsUpdate200ApplicationJSONReasonFrame extends SpeakeasyBase {
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
    language?: CrashGroupsUpdate200ApplicationJSONReasonFrameLanguageEnum;
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
export declare enum CrashGroupsUpdate200ApplicationJSONStatusEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
/**
 * Success
 */
export declare class CrashGroupsUpdate200ApplicationJSON extends SpeakeasyBase {
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
    reasonFrame?: CrashGroupsUpdate200ApplicationJSONReasonFrame;
    status: CrashGroupsUpdate200ApplicationJSONStatusEnum;
}
export declare class CrashGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashGroupsUpdate200ApplicationJSONObject?: CrashGroupsUpdate200ApplicationJSON;
    /**
     * Error
     */
    crashGroupsUpdateDefaultApplicationJSONObject?: CrashGroupsUpdateDefaultApplicationJSON;
}
