import { SpeakeasyBase } from "../../../internal/utils";
import { EventUrl } from "./eventurl";
import { Key } from "./key";
import { NotificationUrl } from "./notificationurl";
export declare class Nexo extends SpeakeasyBase {
    displayUrls?: NotificationUrl;
    encryptionKey?: Key;
    eventUrls?: EventUrl;
    /**
     * One or more URLs to send event messages to when using Terminal API.
     */
    nexoEventUrls?: string[];
}
