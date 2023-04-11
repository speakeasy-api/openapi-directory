import { SpeakeasyBase } from "../../../internal/utils";
import { DiagnosticsException } from "./diagnosticsexception";
/**
 * programming language of the frame
 */
export declare enum DiagnosticsThreadFramesLanguageEnum {
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
export declare class DiagnosticsThreadFrames extends SpeakeasyBase {
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
    language?: DiagnosticsThreadFramesLanguageEnum;
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
export declare enum DiagnosticsThreadPlatformEnum {
    Ios = "ios",
    Android = "android",
    Xamarin = "xamarin",
    ReactNative = "react-native",
    Ndk = "ndk",
    Unity = "unity",
    Other = "other"
}
/**
 * a thread representation
 */
export declare class DiagnosticsThread extends SpeakeasyBase {
    /**
     * True if this thread crashed
     */
    crashed?: boolean;
    /**
     * a exception
     */
    exception?: DiagnosticsException;
    /**
     * frames of that thread
     */
    frames: DiagnosticsThreadFrames[];
    /**
     * SDK/Platform this thread is beeing generated from
     */
    platform?: DiagnosticsThreadPlatformEnum;
    /**
     * Shows if a thread is relevant or not. Is false if all frames are non relevant, otherwise true
     */
    relevant?: boolean;
    /**
     * name of the thread
     */
    title: string;
}
