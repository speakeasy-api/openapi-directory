import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsDeleteErrorSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsDeleteErrorRequest extends SpeakeasyBase {
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
export declare enum ErrorsDeleteErrorDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsDeleteErrorDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsDeleteErrorDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsDeleteErrorDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsDeleteErrorDefaultApplicationJSONError;
}
/**
 * Success.
 */
export declare class ErrorsDeleteError200ApplicationJSON extends SpeakeasyBase {
    appId?: string;
    attachmentsDeleted?: number;
    blobsFailed?: number;
    blobsSucceeded?: number;
    errorGroupId?: string;
    errorId?: string;
    errorsDeleted?: number;
}
export declare class ErrorsDeleteErrorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success.
     */
    errorsDeleteError200ApplicationJSONObject?: ErrorsDeleteError200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsDeleteErrorDefaultApplicationJSONObject?: ErrorsDeleteErrorDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
