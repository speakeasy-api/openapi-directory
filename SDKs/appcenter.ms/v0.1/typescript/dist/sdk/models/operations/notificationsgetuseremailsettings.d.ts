import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The status code return by the API. It can be 400 or 404 or 409 or 500.
 */
export declare enum NotificationsGetUserEmailSettingsDefaultApplicationJSONCodeEnum {
    FourHundred = "400",
    FourHundredAndFour = "404",
    FourHundredAndNine = "409",
    FiveHundred = "500"
}
/**
 * Generic result for any alerting API operation
 */
export declare class NotificationsGetUserEmailSettingsDefaultApplicationJSON extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 404 or 409 or 500.
     */
    code: NotificationsGetUserEmailSettingsDefaultApplicationJSONCodeEnum;
    /**
     * The reason for the request failed
     */
    message?: string;
    /**
     * Unique request identifier for tracking
     */
    requestId: string;
}
/**
 * Default frequency of event
 */
export declare enum NotificationsGetUserEmailSettings200ApplicationJSONSettingsDefaultValueEnum {
    Disabled = "Disabled",
    Individual = "Individual",
    Daily = "Daily",
    DailyAndIndividual = "DailyAndIndividual"
}
/**
 * Event Name
 */
export declare enum NotificationsGetUserEmailSettings200ApplicationJSONSettingsEventTypeEnum {
    CrashNewCrashGroupCreated = "crash_newCrashGroupCreated"
}
/**
 * Frequency of event
 */
export declare enum NotificationsGetUserEmailSettings200ApplicationJSONSettingsValueEnum {
    Disabled = "Disabled",
    Individual = "Individual",
    Daily = "Daily",
    DailyAndIndividual = "DailyAndIndividual",
    Default = "Default"
}
/**
 * Event Setting
 */
export declare class NotificationsGetUserEmailSettings200ApplicationJSONSettings extends SpeakeasyBase {
    /**
     * Default frequency of event
     */
    defaultValue?: NotificationsGetUserEmailSettings200ApplicationJSONSettingsDefaultValueEnum;
    /**
     * Event Name
     */
    eventType: NotificationsGetUserEmailSettings200ApplicationJSONSettingsEventTypeEnum;
    /**
     * Frequency of event
     */
    value: NotificationsGetUserEmailSettings200ApplicationJSONSettingsValueEnum;
}
/**
 * Generic result for any alerting API operation
 */
export declare class NotificationsGetUserEmailSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * The ETag of the entity
     */
    eTag?: string;
    /**
     * Allows to forcefully disable emails on app or user level
     */
    enabled: boolean;
    /**
     * Unique request identifier for tracking
     */
    requestId: string;
    /**
     * The settings the user has for the app
     */
    settings: NotificationsGetUserEmailSettings200ApplicationJSONSettings[];
    /**
     * The unique id (UUID) of the user
     */
    userId?: string;
}
export declare class NotificationsGetUserEmailSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    notificationsGetUserEmailSettings200ApplicationJSONObject?: NotificationsGetUserEmailSettings200ApplicationJSON;
    /**
     * Error code with reason
     */
    notificationsGetUserEmailSettingsDefaultApplicationJSONObject?: NotificationsGetUserEmailSettingsDefaultApplicationJSON;
}
