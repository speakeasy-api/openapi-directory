import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NotificationsGetAppEmailSettingsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class NotificationsGetAppEmailSettingsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * The status code return by the API. It can be 400 or 404 or 409 or 500.
 */
export declare enum NotificationsGetAppEmailSettingsDefaultApplicationJSONCodeEnum {
    FourHundred = "400",
    FourHundredAndFour = "404",
    FourHundredAndNine = "409",
    FiveHundred = "500"
}
/**
 * Generic result for any alerting API operation
 */
export declare class NotificationsGetAppEmailSettingsDefaultApplicationJSON extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 404 or 409 or 500.
     */
    code: NotificationsGetAppEmailSettingsDefaultApplicationJSONCodeEnum;
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
export declare enum NotificationsGetAppEmailSettings200ApplicationJSONSettingsDefaultValueEnum {
    Disabled = "Disabled",
    Individual = "Individual",
    Daily = "Daily",
    DailyAndIndividual = "DailyAndIndividual"
}
/**
 * Event Name
 */
export declare enum NotificationsGetAppEmailSettings200ApplicationJSONSettingsEventTypeEnum {
    CrashNewCrashGroupCreated = "crash_newCrashGroupCreated"
}
/**
 * Frequency of event
 */
export declare enum NotificationsGetAppEmailSettings200ApplicationJSONSettingsValueEnum {
    Disabled = "Disabled",
    Individual = "Individual",
    Daily = "Daily",
    DailyAndIndividual = "DailyAndIndividual",
    Default = "Default"
}
/**
 * Event Setting
 */
export declare class NotificationsGetAppEmailSettings200ApplicationJSONSettings extends SpeakeasyBase {
    /**
     * Default frequency of event
     */
    defaultValue?: NotificationsGetAppEmailSettings200ApplicationJSONSettingsDefaultValueEnum;
    /**
     * Event Name
     */
    eventType: NotificationsGetAppEmailSettings200ApplicationJSONSettingsEventTypeEnum;
    /**
     * Frequency of event
     */
    value: NotificationsGetAppEmailSettings200ApplicationJSONSettingsValueEnum;
}
/**
 * Generic result for any alerting API operation
 */
export declare class NotificationsGetAppEmailSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Application ID
     */
    appId?: string;
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
    settings: NotificationsGetAppEmailSettings200ApplicationJSONSettings[];
    /**
     * The unique id (UUID) of the user
     */
    userId?: string;
    /**
     * A flag indicating if settings are enabled at user/global level
     */
    userEnabled: boolean;
}
export declare class NotificationsGetAppEmailSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    notificationsGetAppEmailSettings200ApplicationJSONObject?: NotificationsGetAppEmailSettings200ApplicationJSON;
    /**
     * Error code with reason
     */
    notificationsGetAppEmailSettingsDefaultApplicationJSONObject?: NotificationsGetAppEmailSettingsDefaultApplicationJSON;
}
