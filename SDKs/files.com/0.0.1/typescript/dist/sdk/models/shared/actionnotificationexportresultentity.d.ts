import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Action Notification Export Results
 */
export declare class ActionNotificationExportResultEntity extends SpeakeasyBase {
    /**
     * When the notification was sent.
     */
    createdAt?: number;
    /**
     * The folder associated with the triggering action for this notification.
     */
    folder?: string;
    /**
     * Notification ID
     */
    id?: number;
    /**
     * A message indicating the overall status of the webhook notification.
     */
    message?: string;
    /**
     * The path to the actual file that triggered this notification.
     */
    path?: string;
    /**
     * A JSON-encoded string with headers that were sent with the webhook.
     */
    requestHeaders?: string;
    /**
     * The HTTP verb used to perform the webhook.
     */
    requestMethod?: string;
    /**
     * The webhook request URL.
     */
    requestUrl?: string;
    /**
     * HTTP status code returned in the webhook response.
     */
    status?: number;
    /**
     * `true` if the webhook succeeded by receiving a 200 or 204 response.
     */
    success?: boolean;
}
