import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesGetNativeCrashDownloadSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetNativeCrashDownloadRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * id of a specific group
     */
    crashGroupId: string;
    /**
     * id of a specific crash
     */
    crashId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CrashesGetNativeCrashDownloadDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesGetNativeCrashDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesGetNativeCrashDownload200ApplicationJSONString?: string;
    /**
     * Error
     */
    crashesGetNativeCrashDownloadDefaultApplicationJSONObject?: CrashesGetNativeCrashDownloadDefaultApplicationJSON;
}
