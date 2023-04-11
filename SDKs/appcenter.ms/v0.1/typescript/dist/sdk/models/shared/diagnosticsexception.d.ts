import { SpeakeasyBase } from "../../../internal/utils";
/**
 * programming language of the frame
 */
export declare enum DiagnosticsExceptionFramesLanguageEnum {
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
 * a single frame of a stack trace
 */
export declare class DiagnosticsExceptionFrames extends SpeakeasyBase {
    /**
     * address of the frame
     */
    address?: string;
    /**
     * this line isn't from any framework
     */
    appCode: boolean;
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
    codeFormatted: string;
    /**
     * Raw frame string
     */
    codeRaw: string;
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
    language?: DiagnosticsExceptionFramesLanguageEnum;
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
     * frame should be shown always
     */
    relevant?: boolean;
}
/**
 * SDK/Platform this thread is beeing generated from
 */
export declare enum DiagnosticsExceptionPlatformEnum {
    Ios = "ios",
    Android = "android",
    Xamarin = "xamarin",
    ReactNative = "react-native",
    Ndk = "ndk",
    Unity = "unity",
    Other = "other"
}
/**
 * a exception
 */
export declare class DiagnosticsException extends SpeakeasyBase {
    /**
     * frames of the excetpion
     */
    frames: DiagnosticsExceptionFrames[];
    innerExceptions?: DiagnosticsException[];
    /**
     * SDK/Platform this thread is beeing generated from
     */
    platform?: DiagnosticsExceptionPlatformEnum;
    /**
     * Reason of the exception
     */
    reason?: string;
    /**
     * relevant exception (crashed)
     */
    relevant?: boolean;
    /**
     * Type of the exception (NSSomethingException, NullPointerException)
     */
    type?: string;
}
