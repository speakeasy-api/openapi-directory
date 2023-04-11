import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsErrorDownloadSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * the format of the crash log
 */
export declare enum ErrorsErrorDownloadFormatEnum {
    Json = "json",
    Txt = "txt"
}
export declare class ErrorsErrorDownloadRequest extends SpeakeasyBase {
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
     * the format of the crash log
     */
    format?: ErrorsErrorDownloadFormatEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsErrorDownloadDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsErrorDownloadDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsErrorDownloadDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsErrorDownloadDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsErrorDownloadDefaultApplicationJSONError;
}
export declare class ErrorsErrorDownloadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error details.
     */
    errorsErrorDownload200ApplicationJSONFileObject?: Record<string, any>;
    /**
     * Error code with reason
     */
    errorsErrorDownloadDefaultApplicationJSONObject?: ErrorsErrorDownloadDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
