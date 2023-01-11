import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * Response object for notifications collection.
**/
export declare class NotificationCollectionResponse extends SpeakeasyBase {
    data?: Notification[];
    included?: any[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}
