import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesDeleteRequest extends SpeakeasyBase {
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
    /**
     * true in that case if the method should skip update counts
     */
    retentionDelete?: boolean;
}
/**
 * Error
 */
export declare class CrashesDeleteDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Success
 */
export declare class CrashesDelete200ApplicationJSON extends SpeakeasyBase {
    appId?: string;
    attachmentsDeleted?: number;
    blobsFailed?: number;
    blobsSucceeded?: number;
    crashGroupId?: string;
    crashId?: string;
    crashesDeleted?: number;
}
export declare class CrashesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesDelete200ApplicationJSONObject?: CrashesDelete200ApplicationJSON;
    /**
     * Error
     */
    crashesDeleteDefaultApplicationJSONObject?: CrashesDeleteDefaultApplicationJSON;
}
