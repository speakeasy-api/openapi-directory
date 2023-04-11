import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * Response object for notifications.
 */
export declare class NotificationResponse extends SpeakeasyBase {
    /**
     * Object containing notification properties.
     */
    data?: Notification;
    included?: any[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
}
