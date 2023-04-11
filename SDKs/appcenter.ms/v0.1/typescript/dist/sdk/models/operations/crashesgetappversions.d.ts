import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesGetAppVersionsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetAppVersionsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CrashesGetAppVersionsDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesGetAppVersions200ApplicationJSON extends SpeakeasyBase {
    appId: string;
    appVersion: string;
    appVersionId: string;
    buildNumber?: string;
    displayName: string;
}
export declare class CrashesGetAppVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesGetAppVersions200ApplicationJSONObjects?: CrashesGetAppVersions200ApplicationJSON[];
    /**
     * Error
     */
    crashesGetAppVersionsDefaultApplicationJSONObject?: CrashesGetAppVersionsDefaultApplicationJSON;
}
