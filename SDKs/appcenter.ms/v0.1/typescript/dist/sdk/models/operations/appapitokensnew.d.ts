import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppApiTokensNewSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare enum AppApiTokensNewRequestBodyScopeEnum {
    All = "all",
    Viewer = "viewer"
}
/**
 * Description of the token
 */
export declare class AppApiTokensNewRequestBody extends SpeakeasyBase {
    /**
     * The description of the token
     */
    description?: string;
    /**
     * The scope for this token.
     */
    scope?: AppApiTokensNewRequestBodyScopeEnum[];
}
export declare class AppApiTokensNewRequest extends SpeakeasyBase {
    /**
     * Description of the token
     */
    requestBody?: AppApiTokensNewRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppApiTokensNew401ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppApiTokensNew401ApplicationJSONError extends SpeakeasyBase {
    code: AppApiTokensNew401ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Unauthorized
 */
export declare class AppApiTokensNew401ApplicationJSON extends SpeakeasyBase {
    error: AppApiTokensNew401ApplicationJSONError;
}
export declare enum AppApiTokensNew400ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppApiTokensNew400ApplicationJSONError extends SpeakeasyBase {
    code: AppApiTokensNew400ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppApiTokensNew400ApplicationJSON extends SpeakeasyBase {
    error: AppApiTokensNew400ApplicationJSONError;
}
export declare enum AppApiTokensNew201ApplicationJSONScopeEnum {
    All = "all",
    Viewer = "viewer"
}
/**
 * Success
 */
export declare class AppApiTokensNew201ApplicationJSON extends SpeakeasyBase {
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
    scope?: AppApiTokensNew201ApplicationJSONScopeEnum[];
}
export declare class AppApiTokensNewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appApiTokensNew201ApplicationJSONObject?: AppApiTokensNew201ApplicationJSON;
    /**
     * Error
     */
    appApiTokensNew400ApplicationJSONObject?: AppApiTokensNew400ApplicationJSON;
    /**
     * Unauthorized
     */
    appApiTokensNew401ApplicationJSONObject?: AppApiTokensNew401ApplicationJSON;
}
