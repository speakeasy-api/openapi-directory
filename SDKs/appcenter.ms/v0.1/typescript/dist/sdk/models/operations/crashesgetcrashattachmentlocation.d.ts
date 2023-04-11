import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesGetCrashAttachmentLocationSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetCrashAttachmentLocationRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * attachment id
     */
    attachmentId: string;
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
export declare class CrashesGetCrashAttachmentLocationDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Location for downloading crash attachment
 */
export declare class CrashesGetCrashAttachmentLocation200ApplicationJSON extends SpeakeasyBase {
    uri: string;
}
export declare class CrashesGetCrashAttachmentLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesGetCrashAttachmentLocation200ApplicationJSONObject?: CrashesGetCrashAttachmentLocation200ApplicationJSON;
    /**
     * Error
     */
    crashesGetCrashAttachmentLocationDefaultApplicationJSONObject?: CrashesGetCrashAttachmentLocationDefaultApplicationJSON;
}
