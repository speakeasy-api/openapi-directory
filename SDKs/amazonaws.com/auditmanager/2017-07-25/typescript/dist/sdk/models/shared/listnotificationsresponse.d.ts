import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * Success
 */
export declare class ListNotificationsResponse extends SpeakeasyBase {
    nextToken?: string;
    notifications?: Notification[];
}
