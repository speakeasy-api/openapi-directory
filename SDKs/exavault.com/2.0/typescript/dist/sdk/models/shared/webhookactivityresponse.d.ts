import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookActivityEntry } from "./webhookactivityentry";
/**
 * Session activity list response
 */
export declare class WebhookActivityResponse extends SpeakeasyBase {
    data?: WebhookActivityEntry[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
    /**
     * Number of results returned.
     */
    returnedResults?: number;
    /**
     * Total results found.
     */
    totalResults?: number;
}
