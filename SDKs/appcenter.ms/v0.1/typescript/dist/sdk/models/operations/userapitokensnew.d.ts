import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserApiTokensNewSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare enum UserApiTokensNewRequestBodyScopeEnum {
    All = "all",
    Viewer = "viewer"
}
/**
 * Description of the token
 */
export declare class UserApiTokensNewRequestBody extends SpeakeasyBase {
    /**
     * The description of the token
     */
    description?: string;
    /**
     * The scope for this token.
     */
    scope?: UserApiTokensNewRequestBodyScopeEnum[];
}
export declare enum UserApiTokensNew401ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UserApiTokensNew401ApplicationJSONError extends SpeakeasyBase {
    code: UserApiTokensNew401ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Unauthorized
 */
export declare class UserApiTokensNew401ApplicationJSON extends SpeakeasyBase {
    error: UserApiTokensNew401ApplicationJSONError;
}
export declare enum UserApiTokensNew400ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UserApiTokensNew400ApplicationJSONError extends SpeakeasyBase {
    code: UserApiTokensNew400ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UserApiTokensNew400ApplicationJSON extends SpeakeasyBase {
    error: UserApiTokensNew400ApplicationJSONError;
}
export declare enum UserApiTokensNew201ApplicationJSONScopeEnum {
    All = "all",
    Viewer = "viewer"
}
/**
 * Success
 */
export declare class UserApiTokensNew201ApplicationJSON extends SpeakeasyBase {
    /**
     * The api token generated will not be accessible again
     */
    apiToken: string;
    /**
     * The creation time
     */
    createdAt: string;
    /**
     * The description of the token
     */
    description?: string;
    /**
     * The unique id (UUID) of the api token
     */
    id: string;
    /**
     * The scope for this token.
     */
    scope?: UserApiTokensNew201ApplicationJSONScopeEnum[];
}
export declare class UserApiTokensNewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userApiTokensNew201ApplicationJSONObject?: UserApiTokensNew201ApplicationJSON;
    /**
     * Error
     */
    userApiTokensNew400ApplicationJSONObject?: UserApiTokensNew400ApplicationJSON;
    /**
     * Unauthorized
     */
    userApiTokensNew401ApplicationJSONObject?: UserApiTokensNew401ApplicationJSON;
}
