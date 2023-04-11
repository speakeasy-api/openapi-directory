import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsListForGroupSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsListForGroupRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return. (0 will fetch all results till the max number.)
     */
    dollarTop?: number;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Last date time in data in ISO 8601 date time format
     */
    end?: Date;
    /**
     * The id of the error group
     */
    errorGroupId: string;
    model?: string;
    os?: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Start date time in data in ISO 8601 date time format
     */
    start: Date;
}
export declare enum ErrorsListForGroupDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsListForGroupDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsListForGroupDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsListForGroupDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsListForGroupDefaultApplicationJSONError;
}
export declare class ErrorsListForGroup200ApplicationJSONErrors extends SpeakeasyBase {
    country?: string;
    deviceName?: string;
    errorId?: string;
    hasAttachments?: boolean;
    hasBreadcrumbs?: boolean;
    language?: string;
    osType?: string;
    osVersion?: string;
    timestamp?: Date;
    userId?: string;
}
/**
 * Get all errors for group
 */
export declare class ErrorsListForGroup200ApplicationJSON extends SpeakeasyBase {
    /**
     * Errors list.
     */
    errors?: ErrorsListForGroup200ApplicationJSONErrors[];
    nextLink?: string;
}
export declare class ErrorsListForGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Get all errors for group
     */
    errorsListForGroup200ApplicationJSONObject?: ErrorsListForGroup200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsListForGroupDefaultApplicationJSONObject?: ErrorsListForGroupDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
