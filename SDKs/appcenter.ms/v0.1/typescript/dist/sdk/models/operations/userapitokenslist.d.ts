import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UserApiTokensList401ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UserApiTokensList401ApplicationJSONError extends SpeakeasyBase {
    code: UserApiTokensList401ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Unauthorized
 */
export declare class UserApiTokensList401ApplicationJSON extends SpeakeasyBase {
    error: UserApiTokensList401ApplicationJSONError;
}
export declare enum UserApiTokensList400ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UserApiTokensList400ApplicationJSONError extends SpeakeasyBase {
    code: UserApiTokensList400ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UserApiTokensList400ApplicationJSON extends SpeakeasyBase {
    error: UserApiTokensList400ApplicationJSONError;
}
export declare enum UserApiTokensList200ApplicationJSONScopeEnum {
    All = "all",
    Viewer = "viewer"
}
export declare class UserApiTokensList200ApplicationJSON extends SpeakeasyBase {
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
    scope?: UserApiTokensList200ApplicationJSONScopeEnum[];
}
export declare class UserApiTokensListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    userApiTokensList200ApplicationJSONObjects?: UserApiTokensList200ApplicationJSON[];
    /**
     * Error
     */
    userApiTokensList400ApplicationJSONObject?: UserApiTokensList400ApplicationJSON;
    /**
     * Unauthorized
     */
    userApiTokensList401ApplicationJSONObject?: UserApiTokensList401ApplicationJSON;
}
