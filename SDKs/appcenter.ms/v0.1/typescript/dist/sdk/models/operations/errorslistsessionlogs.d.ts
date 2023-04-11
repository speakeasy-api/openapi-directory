import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsListSessionLogsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsListSessionLogsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Date of data requested
     */
    date?: Date;
    /**
     * The id of the error
     */
    errorId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsListSessionLogsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsListSessionLogsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsListSessionLogsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsListSessionLogsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsListSessionLogsDefaultApplicationJSONError;
}
/**
 * Device characteristics.
 */
export declare class ErrorsListSessionLogs200ApplicationJSONLogsDevice extends SpeakeasyBase {
    /**
     * The app's build number, e.g. 42.
     *
     * @remarks
     *
     */
    appBuild: string;
    /**
     * The bundle identifier, package identifier, or namespace, depending on what the individual plattforms use,  .e.g com.microsoft.example.
     *
     * @remarks
     *
     */
    appNamespace?: string;
    /**
     * Application version name, e.g. 1.1.0
     *
     * @remarks
     *
     */
    appVersion: string;
    /**
     * Carrier country code (for mobile devices).
     *
     * @remarks
     *
     */
    carrierCode?: string;
    /**
     * Carrier country.
     *
     * @remarks
     *
     */
    carrierCountry?: string;
    /**
     * Carrier name (for mobile devices).
     *
     * @remarks
     *
     */
    carrierName?: string;
    /**
     * Identifier of environment that current application release belongs to, deployment key then maps to environment like Production, Staging.
     *
     * @remarks
     *
     */
    liveUpdateDeploymentKey?: string;
    /**
     * Hash of all files (ReactNative or Cordova) deployed to device via LiveUpdate beacon. Helps identify the Release version on device or need to download updates in future.
     *
     * @remarks
     *
     */
    liveUpdatePackageHash?: string;
    /**
     * Label that is used to identify application code 'version' released via Live Update beacon running on device
     *
     * @remarks
     *
     */
    liveUpdateReleaseLabel?: string;
    /**
     * Language code (example: en_US).
     *
     * @remarks
     *
     */
    locale: string;
    /**
     * Device model (example: iPad2,3).
     *
     * @remarks
     *
     */
    model?: string;
    /**
     * Device manufacturer (example: HTC).
     *
     * @remarks
     *
     */
    oemName?: string;
    /**
     * API level when applicable like in Android (example: 15).
     *
     * @remarks
     *
     */
    osApiLevel?: number;
    /**
     * OS build code (example: LMY47X).
     *
     * @remarks
     *
     */
    osBuild?: string;
    /**
     * OS name (example: iOS). The following OS names are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
     *
     * @remarks
     *
     */
    osName: string;
    /**
     * OS version (example: 9.3.0).
     *
     * @remarks
     *
     */
    osVersion: string;
    /**
     * Screen size of the device in pixels (example: 640x480).
     *
     * @remarks
     *
     */
    screenSize?: string;
    /**
     * Name of the SDK. Consists of the name of the SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
     *
     * @remarks
     *
     */
    sdkName: string;
    /**
     * Version of the SDK in semver format, e.g. "1.2.0" or "0.12.3-alpha.1".
     *
     * @remarks
     *
     */
    sdkVersion: string;
    /**
     * The offset in minutes from UTC for the device time zone, including daylight savings time.
     *
     * @remarks
     *
     */
    timeZoneOffset: number;
    /**
     * Version of the wrapper technology framework (Xamarin runtime version or ReactNative or Cordova etc...). See wrapper_sdk_name to see if this version refers to Xamarin or ReactNative or other.
     *
     * @remarks
     *
     */
    wrapperRuntimeVersion?: string;
    /**
     * Name of the wrapper SDK. Consists of the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin", "hockeysdk.cordova".
     *
     * @remarks
     *
     */
    wrapperSDKName?: string;
    /**
     * Version of the wrapper SDK in semver format. When the SDK is embedding another base SDK (for example Xamarin.Android wraps Android), the Xamarin specific version is populated into this field while sdkVersion refers to the original Android SDK.
     *
     * @remarks
     *
     */
    wrapperSDKVersion?: string;
}
/**
 * Log type.
 *
 * @remarks
 *
 */
export declare enum ErrorsListSessionLogs200ApplicationJSONLogsTypeEnum {
    Event = "event",
    Page = "page",
    StartSession = "start_session",
    Error = "error",
    PushInstallation = "push_installation",
    StartService = "start_service",
    CustomProperties = "custom_properties"
}
/**
 * Generic log.
 */
export declare class ErrorsListSessionLogs200ApplicationJSONLogs extends SpeakeasyBase {
    /**
     * Device characteristics.
     */
    device: ErrorsListSessionLogs200ApplicationJSONLogsDevice;
    /**
     * Event ID.
     *
     * @remarks
     *
     */
    eventId?: string;
    /**
     * Event name.
     *
     * @remarks
     *
     */
    eventName?: string;
    /**
     * Install ID.
     *
     * @remarks
     *
     */
    installId: string;
    /**
     * Message ID.
     *
     * @remarks
     *
     */
    messageId?: string;
    /**
     * event specific properties.
     *
     * @remarks
     *
     */
    properties?: Record<string, string>;
    /**
     * Session ID.
     *
     * @remarks
     *
     */
    sessionId?: string;
    /**
     * Log creation timestamp.
     *
     * @remarks
     *
     */
    timestamp: Date;
    /**
     * Log type.
     *
     * @remarks
     *
     */
    type: ErrorsListSessionLogs200ApplicationJSONLogsTypeEnum;
}
/**
 * Session logs of specific error
 */
export declare class ErrorsListSessionLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * indicates if the number of available logs are more than the max allowed return limit(100).
     */
    exceededMaxLimit?: boolean;
    /**
     * the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call.
     */
    lastReceivedLogTimestamp?: Date;
    /**
     * the list of logs
     */
    logs: ErrorsListSessionLogs200ApplicationJSONLogs[];
}
export declare class ErrorsListSessionLogsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Session logs of specific error
     */
    errorsListSessionLogs200ApplicationJSONObject?: ErrorsListSessionLogs200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsListSessionLogsDefaultApplicationJSONObject?: ErrorsListSessionLogsDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
