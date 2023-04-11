import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ErrorsGroupErrorStackTraceSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsGroupErrorStackTraceRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the error group
     */
    errorGroupId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsGroupErrorStackTraceDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGroupErrorStackTraceDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGroupErrorStackTraceDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsGroupErrorStackTraceDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGroupErrorStackTraceDefaultApplicationJSONError;
}
export declare class ErrorsGroupErrorStackTraceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Gets the stack trace for the error group.
     */
    diagnosticsStackTrace?: shared.DiagnosticsStackTrace;
    /**
     * Error code with reason
     */
    errorsGroupErrorStackTraceDefaultApplicationJSONObject?: ErrorsGroupErrorStackTraceDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
