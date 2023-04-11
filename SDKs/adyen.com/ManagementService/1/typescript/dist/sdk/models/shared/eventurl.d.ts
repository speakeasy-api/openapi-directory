import { SpeakeasyBase } from "../../../internal/utils";
import { Url } from "./url";
export declare class EventUrl extends SpeakeasyBase {
    /**
     * One or more local URLs to send event notifications to when using Terminal API.
     */
    eventLocalUrls?: Url[];
    /**
     * One or more public URLs to send event notifications to when using Terminal API.
     */
    eventPublicUrls?: Url[];
}
