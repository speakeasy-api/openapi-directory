import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * Response object for notifications collection.
 */
export declare class NotificationCollectionResponse extends SpeakeasyBase {
    data?: Notification[];
    included?: any[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
    /**
     * Number of returned results.
     */
    returnedResults?: number;
    /**
     * Total results found.
     */
    totalResults?: number;
}
