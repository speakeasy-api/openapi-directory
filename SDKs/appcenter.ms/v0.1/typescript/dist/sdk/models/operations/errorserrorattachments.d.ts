import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsErrorAttachmentsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsErrorAttachmentsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the error
     */
    errorId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsErrorAttachmentsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsErrorAttachmentsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsErrorAttachmentsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsErrorAttachmentsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsErrorAttachmentsDefaultApplicationJSONError;
}
export declare class ErrorsErrorAttachments200ApplicationJSON extends SpeakeasyBase {
    appId?: string;
    attachmentId?: string;
    blobLocation?: string;
    contentType?: string;
    crashId?: string;
    createdTime?: Date;
    fileName?: string;
    size?: number;
}
export declare class ErrorsErrorAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of error attachments.
     */
    errorsErrorAttachments200ApplicationJSONObjects?: ErrorsErrorAttachments200ApplicationJSON[];
    /**
     * Error code with reason
     */
    errorsErrorAttachmentsDefaultApplicationJSONObject?: ErrorsErrorAttachmentsDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
