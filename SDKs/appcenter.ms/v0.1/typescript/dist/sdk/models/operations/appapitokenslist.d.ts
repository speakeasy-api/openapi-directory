import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppApiTokensListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class AppApiTokensListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppApiTokensList401ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppApiTokensList401ApplicationJSONError extends SpeakeasyBase {
    code: AppApiTokensList401ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Unauthorized
 */
export declare class AppApiTokensList401ApplicationJSON extends SpeakeasyBase {
    error: AppApiTokensList401ApplicationJSONError;
}
export declare enum AppApiTokensList400ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppApiTokensList400ApplicationJSONError extends SpeakeasyBase {
    code: AppApiTokensList400ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppApiTokensList400ApplicationJSON extends SpeakeasyBase {
    error: AppApiTokensList400ApplicationJSONError;
}
export declare enum AppApiTokensList200ApplicationJSONScopeEnum {
    All = "all",
    Viewer = "viewer"
}
export declare class AppApiTokensList200ApplicationJSON extends SpeakeasyBase {
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
    scope?: AppApiTokensList200ApplicationJSONScopeEnum[];
}
export declare class AppApiTokensListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appApiTokensList200ApplicationJSONObjects?: AppApiTokensList200ApplicationJSON[];
    /**
     * Error
     */
    appApiTokensList400ApplicationJSONObject?: AppApiTokensList400ApplicationJSON;
    /**
     * Unauthorized
     */
    appApiTokensList401ApplicationJSONObject?: AppApiTokensList401ApplicationJSON;
}
