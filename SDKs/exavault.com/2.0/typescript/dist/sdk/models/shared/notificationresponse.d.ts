import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * Response object for notifications.
**/
export declare class NotificationResponse extends SpeakeasyBase {
    data?: Notification;
    included?: any[];
    responseStatus?: number;
}
