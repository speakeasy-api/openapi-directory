import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationEventConfiguration } from "./notificationeventconfiguration";
/**
 * The data format of the notification to be sent.
 *
 * @remarks
 * >Permitted values: `JSON`, `SOAP`.
 */
export declare enum NotificationConfigurationDetailsMessageFormatEnum {
    Json = "JSON",
    Soap = "SOAP"
}
/**
 * The SSL protocol employed by the endpoint.
 *
 * @remarks
 * >Permitted values: `TLSv12`, `TLSv13`.
 */
export declare enum NotificationConfigurationDetailsSslProtocolEnum {
    TLSv12 = "TLSv12",
    TLSv13 = "TLSv13"
}
export declare class NotificationConfigurationDetails extends SpeakeasyBase {
    /**
     * Indicates whether the notification subscription is active.
     */
    active?: boolean;
    /**
     * The version of the notification to which you are subscribing. To make sure that your integration can properly process the notification, subscribe to the same version as the API that you're using.
     */
    apiVersion?: number;
    /**
     * A description of the notification subscription configuration.
     */
    description?: string;
    /**
     * Contains objects that define event types and their subscription settings.
     */
    eventConfigs?: NotificationEventConfiguration[];
    /**
     * The data format of the notification to be sent.
     *
     * @remarks
     * >Permitted values: `JSON`, `SOAP`.
     */
    messageFormat?: NotificationConfigurationDetailsMessageFormatEnum;
    /**
     * Adyen-generated ID for the entry, returned in the response when you create a notification configuration. Required when updating an existing configuration using [`/updateNotificationConfiguration`](https://docs.adyen.com/api-explorer/#/NotificationConfigurationService/latest/post/updateNotificationConfiguration).
     */
    notificationId?: number;
    /**
     * The password to use when accessing the notifyURL with the specified username.
     */
    notifyPassword?: string;
    /**
     * The URL to which the notifications are to be sent.
     */
    notifyURL?: string;
    /**
     * The username to use when accessing the notifyURL.
     */
    notifyUsername?: string;
    /**
     * Indicates whether an action header should be included.
     *
     * @remarks
     * >Only applies to SOAP messages (as specified in messageFormat).
     */
    sendActionHeader?: boolean;
    /**
     * The SSL protocol employed by the endpoint.
     *
     * @remarks
     * >Permitted values: `TLSv12`, `TLSv13`.
     */
    sslProtocol?: NotificationConfigurationDetailsSslProtocolEnum;
}
