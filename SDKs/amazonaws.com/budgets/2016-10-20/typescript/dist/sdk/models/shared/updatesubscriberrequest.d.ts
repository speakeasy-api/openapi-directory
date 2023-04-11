import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";
/**
 *  Request of UpdateSubscriber
 */
export declare class UpdateSubscriberRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    newSubscriber: Subscriber;
    notification: Notification;
    oldSubscriber: Subscriber;
}
