import { SpeakeasyBase } from "../../../internal/utils";
import { EventSubscriptionsList } from "./eventsubscriptionslist";
/**
 * Represents the output of <a>DescribeEventSubscriptions</a>.
**/
export declare class EventSubscriptionsMessage extends SpeakeasyBase {
    eventSubscriptionsList?: EventSubscriptionsList[];
    marker?: string;
}
