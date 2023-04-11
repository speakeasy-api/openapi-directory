import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesGetNativeCrashSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetNativeCrashRequest extends SpeakeasyBase {
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
export declare class CrashesGetNativeCrashDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesGetNativeCrashResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesGetNativeCrash200ApplicationJSONString?: string;
    /**
     * Error
     */
    crashesGetNativeCrashDefaultApplicationJSONObject?: CrashesGetNativeCrashDefaultApplicationJSON;
}
