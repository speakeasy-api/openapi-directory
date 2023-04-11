import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesGetRawCrashLocationSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetRawCrashLocationRequest extends SpeakeasyBase {
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
export declare class CrashesGetRawCrashLocationDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Location for downloading crash raw
 */
export declare class CrashesGetRawCrashLocation200ApplicationJSON extends SpeakeasyBase {
    uri: string;
}
export declare class CrashesGetRawCrashLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesGetRawCrashLocation200ApplicationJSONObject?: CrashesGetRawCrashLocation200ApplicationJSON;
    /**
     * Error
     */
    crashesGetRawCrashLocationDefaultApplicationJSONObject?: CrashesGetRawCrashLocationDefaultApplicationJSON;
}
