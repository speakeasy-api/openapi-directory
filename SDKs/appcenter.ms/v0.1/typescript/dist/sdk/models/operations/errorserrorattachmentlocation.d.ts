import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsErrorAttachmentLocationSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsErrorAttachmentLocationRequest extends SpeakeasyBase {
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
export declare enum ErrorsErrorAttachmentLocationDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsErrorAttachmentLocationDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsErrorAttachmentLocationDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsErrorAttachmentLocationDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsErrorAttachmentLocationDefaultApplicationJSONError;
}
/**
 * Error attachment location.
 */
export declare class ErrorsErrorAttachmentLocation200ApplicationJSON extends SpeakeasyBase {
    uri?: string;
}
export declare class ErrorsErrorAttachmentLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error attachment location.
     */
    errorsErrorAttachmentLocation200ApplicationJSONObject?: ErrorsErrorAttachmentLocation200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsErrorAttachmentLocationDefaultApplicationJSONObject?: ErrorsErrorAttachmentLocationDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
