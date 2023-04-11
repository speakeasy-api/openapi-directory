import { SpeakeasyBase } from "../../../internal/utils";
import { Url } from "./url";
export declare class NotificationUrl extends SpeakeasyBase {
    /**
     * One or more local URLs to send notifications to when using Terminal API.
     */
    localUrls?: Url[];
    /**
     * One or more public URLs to send notifications to when using Terminal API.
     */
    publicUrls?: Url[];
}
