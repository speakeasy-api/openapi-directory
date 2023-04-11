import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriberStatusEnum } from "./subscriberstatusenum";
import { SubscriberTypeEnum } from "./subscribertypeenum";
/**
 * The recipient of <code>AnomalySubscription</code> notifications.
 */
export declare class Subscriber extends SpeakeasyBase {
    address?: string;
    status?: SubscriberStatusEnum;
    type?: SubscriberTypeEnum;
}
