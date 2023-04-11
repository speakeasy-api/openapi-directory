import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ErrorsErrorStackTraceSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsErrorStackTraceRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the error group
     */
    errorGroupId: string;
    /**
     * The id of the error
     */
    errorId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsErrorStackTraceDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsErrorStackTraceDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsErrorStackTraceDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsErrorStackTraceDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsErrorStackTraceDefaultApplicationJSONError;
}
export declare class ErrorsErrorStackTraceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error stacktrace details.
     */
    diagnosticsStackTrace?: shared.DiagnosticsStackTrace;
    /**
     * Error code with reason
     */
    errorsErrorStackTraceDefaultApplicationJSONObject?: ErrorsErrorStackTraceDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
