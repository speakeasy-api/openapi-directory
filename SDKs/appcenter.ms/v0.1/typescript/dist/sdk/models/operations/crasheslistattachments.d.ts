import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesListAttachmentsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesListAttachmentsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
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
export declare class CrashesListAttachmentsDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesListAttachments200ApplicationJSON extends SpeakeasyBase {
    appId: string;
    attachmentId: string;
    blobLocation: string;
    contentType: string;
    crashId: string;
    createdTime: Date;
    fileName: string;
    size: number;
}
export declare class CrashesListAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesListAttachments200ApplicationJSONObjects?: CrashesListAttachments200ApplicationJSON[];
    /**
     * Error
     */
    crashesListAttachmentsDefaultApplicationJSONObject?: CrashesListAttachmentsDefaultApplicationJSON;
}
