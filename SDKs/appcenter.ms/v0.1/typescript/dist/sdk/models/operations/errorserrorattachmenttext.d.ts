import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsErrorAttachmentTextSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsErrorAttachmentTextRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Error attachment id.
     */
    attachmentId: string;
    /**
     * The id of the error
     */
    errorId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsErrorAttachmentTextDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsErrorAttachmentTextDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsErrorAttachmentTextDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsErrorAttachmentTextDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsErrorAttachmentTextDefaultApplicationJSONError;
}
/**
 * Error attachment text.
 */
export declare class ErrorsErrorAttachmentText200ApplicationJSON extends SpeakeasyBase {
    content?: string;
}
export declare class ErrorsErrorAttachmentTextResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error attachment text.
     */
    errorsErrorAttachmentText200ApplicationJSONObject?: ErrorsErrorAttachmentText200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsErrorAttachmentTextDefaultApplicationJSONObject?: ErrorsErrorAttachmentTextDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
