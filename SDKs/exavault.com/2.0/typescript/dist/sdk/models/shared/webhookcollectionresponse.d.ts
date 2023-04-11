import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
/**
 * Successful Operation
 */
export declare class WebhookCollectionResponse extends SpeakeasyBase {
    data?: Webhook[];
    included?: any[];
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
