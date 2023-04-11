import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreNotificationsGetNotificationByAppIdSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoreNotificationsGetNotificationByAppIdRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum StoreNotificationsGetNotificationByAppIdDefaultApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error
 */
export declare class StoreNotificationsGetNotificationByAppIdDefaultApplicationJSON extends SpeakeasyBase {
    code: StoreNotificationsGetNotificationByAppIdDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * Success. Availability for store service status is stored in response schema.
 */
export declare class StoreNotificationsGetNotificationByAppId200ApplicationJSON extends SpeakeasyBase {
    service?: string;
    status?: string;
    validUntil?: number;
}
export declare class StoreNotificationsGetNotificationByAppIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success. Availability for store service status is stored in response schema.
     */
    storeNotificationsGetNotificationByAppId200ApplicationJSONObject?: StoreNotificationsGetNotificationByAppId200ApplicationJSON;
    /**
     * Error
     */
    storeNotificationsGetNotificationByAppIdDefaultApplicationJSONObject?: StoreNotificationsGetNotificationByAppIdDefaultApplicationJSON;
}
