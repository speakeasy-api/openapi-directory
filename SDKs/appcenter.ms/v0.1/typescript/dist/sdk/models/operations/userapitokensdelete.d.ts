import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserApiTokensDeleteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UserApiTokensDeleteRequest extends SpeakeasyBase {
    /**
     * The unique ID (UUID) of the api token
     */
    apiTokenId: string;
}
export declare enum UserApiTokensDelete404ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UserApiTokensDelete404ApplicationJSONError extends SpeakeasyBase {
    code: UserApiTokensDelete404ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * NotFound
 */
export declare class UserApiTokensDelete404ApplicationJSON extends SpeakeasyBase {
    error: UserApiTokensDelete404ApplicationJSONError;
}
export declare enum UserApiTokensDelete401ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UserApiTokensDelete401ApplicationJSONError extends SpeakeasyBase {
    code: UserApiTokensDelete401ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Unauthorized
 */
export declare class UserApiTokensDelete401ApplicationJSON extends SpeakeasyBase {
    error: UserApiTokensDelete401ApplicationJSONError;
}
export declare enum UserApiTokensDelete400ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UserApiTokensDelete400ApplicationJSONError extends SpeakeasyBase {
    code: UserApiTokensDelete400ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UserApiTokensDelete400ApplicationJSON extends SpeakeasyBase {
    error: UserApiTokensDelete400ApplicationJSONError;
}
export declare class UserApiTokensDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    userApiTokensDelete400ApplicationJSONObject?: UserApiTokensDelete400ApplicationJSON;
    /**
     * Unauthorized
     */
    userApiTokensDelete401ApplicationJSONObject?: UserApiTokensDelete401ApplicationJSON;
    /**
     * NotFound
     */
    userApiTokensDelete404ApplicationJSONObject?: UserApiTokensDelete404ApplicationJSON;
}
