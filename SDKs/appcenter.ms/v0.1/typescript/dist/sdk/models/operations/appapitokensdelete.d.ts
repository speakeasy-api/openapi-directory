import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppApiTokensDeleteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class AppApiTokensDeleteRequest extends SpeakeasyBase {
    /**
     * The unique ID (UUID) of the api token
     */
    apiTokenId: string;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppApiTokensDelete404ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppApiTokensDelete404ApplicationJSONError extends SpeakeasyBase {
    code: AppApiTokensDelete404ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * NotFound
 */
export declare class AppApiTokensDelete404ApplicationJSON extends SpeakeasyBase {
    error: AppApiTokensDelete404ApplicationJSONError;
}
export declare enum AppApiTokensDelete401ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppApiTokensDelete401ApplicationJSONError extends SpeakeasyBase {
    code: AppApiTokensDelete401ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Unauthorized
 */
export declare class AppApiTokensDelete401ApplicationJSON extends SpeakeasyBase {
    error: AppApiTokensDelete401ApplicationJSONError;
}
export declare enum AppApiTokensDelete400ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppApiTokensDelete400ApplicationJSONError extends SpeakeasyBase {
    code: AppApiTokensDelete400ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppApiTokensDelete400ApplicationJSON extends SpeakeasyBase {
    error: AppApiTokensDelete400ApplicationJSONError;
}
export declare class AppApiTokensDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appApiTokensDelete400ApplicationJSONObject?: AppApiTokensDelete400ApplicationJSON;
    /**
     * Unauthorized
     */
    appApiTokensDelete401ApplicationJSONObject?: AppApiTokensDelete401ApplicationJSON;
    /**
     * NotFound
     */
    appApiTokensDelete404ApplicationJSONObject?: AppApiTokensDelete404ApplicationJSON;
}
