import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesGetCrashTextAttachmentContentSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetCrashTextAttachmentContentRequest extends SpeakeasyBase {
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
export declare class CrashesGetCrashTextAttachmentContentDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesGetCrashTextAttachmentContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesGetCrashTextAttachmentContent200ApplicationJSONString?: string;
    /**
     * Error
     */
    crashesGetCrashTextAttachmentContentDefaultApplicationJSONObject?: CrashesGetCrashTextAttachmentContentDefaultApplicationJSON;
}
